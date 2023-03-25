/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REALM: string;
  readonly VITE_CLIENT_ID: string;
  readonly VITE_REDIRECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
