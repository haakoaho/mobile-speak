# Stage 1: Build dependencies (slim Node.js image)
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN apk add --no-cache libc6-compat

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Stage 2: Build application and copy to final image (smaller image) 
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY . .

# Disable Telemetry (optional)
# ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Set production environment
ENV NODE_ENV production

# Expose port and set default port
EXPOSE 3000
ENV PORT 3000

# Run the Next.js application
CMD ["npm", "run", "start"]