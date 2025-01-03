/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  readonly VITE_AUTH_DOMAIN: string
  readonly VITE_PROJECTID: string
  readonly VITE_STRAGE_B: string
  readonly VITE_MSI: string
  readonly VITE_APPID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 