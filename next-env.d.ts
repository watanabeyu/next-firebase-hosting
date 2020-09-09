/// <reference types="next" />
/// <reference types="next/types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly APP_ENV: 'production' | 'development';
    readonly GA: string;
    readonly FIREBASE: string;
  }
}
