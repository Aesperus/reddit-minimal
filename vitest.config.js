import {configDefaults, defineConfig} from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: './setupTests.js',
        coverage: {
            reporter: ['text', 'html'],
            exclude: [
                ...configDefaults.exclude,
                "./src/main.jsx",
                "./src/__tests__/**/*",
                "./src/App.jsx"
            ]
        }
    },
});