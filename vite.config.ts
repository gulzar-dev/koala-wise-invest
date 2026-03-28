import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["inculpatory-craziest-thomasine.ngrok-free.dev"],
    proxy: {
      '/api/debug-log': {
        target: 'http://localhost:8080',
        bypass: (req, res) => {
          if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
              console.log('--- FORM DATA DEBUG LOG ---');
              console.log(body);
              console.log('---------------------------');
              res.end('Logged');
            });
            return false;
          }
        }
      },
      '/api/zoho-flow': {
        target: 'https://flow.zoho.com.au',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/zoho-flow/, ''),
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            console.log('--- ZOHO FLOW PROXY RESPONSE ---');
            console.log('Status:', proxyRes.statusCode);
            console.log('Path:', req.url);
            console.log('---------------------------------');
          });
          proxy.on('error', (err, req, res) => {
            console.log('--- ZOHO FLOW PROXY ERROR ---');
            console.log(err);
            console.log('-----------------------------');
          });
        }
      }
    }
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
