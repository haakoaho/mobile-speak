if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}

export const backendUrl: string = process.env.NEXT_PUBLIC_BACKEND_URL;
