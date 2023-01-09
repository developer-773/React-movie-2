import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import EnvironmentPlugin from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  	EnvironmentPlugin({
			NODE_ENV: "development",
			DEBUG: "false",
			SECURE_LOCAL_STORAGE_HASH_KEY: "e19c681a-cd82-423b-82be-91004b4d5a79",
			APP_VERSION: null,
		}),],
})
