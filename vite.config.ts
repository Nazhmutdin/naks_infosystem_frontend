import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '')

    if (mode === "development"){
        process.env.DOMAIN = env.DOMAIN
        process.env.API_DOMAIN = env.API_DOMAIN
    }

    return {
        plugins: [vue(), mkcert()],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        define: {
            'process.env': process.env
        }
    }
})
