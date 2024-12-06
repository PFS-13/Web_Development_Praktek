import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
server: {
	host: '0.0.0.0', // memungkinkan akses dari luar container
	port: 5173, // port Vite
    strictPort: true,
},
plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
            
        }),
        react(),
    ],
});
