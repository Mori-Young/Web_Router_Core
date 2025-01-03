/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_HASH: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
