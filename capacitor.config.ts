import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hakon.mobilespeak',
  appName: 'Mobile Speak',
  webDir: 'out',
  server: {
    url: 'https://mobile-speak.asuscomm.com', 
  }
};

export default config;
