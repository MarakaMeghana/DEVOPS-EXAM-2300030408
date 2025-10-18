import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Important: set base path for Tomcat context folder
export default defineConfig({
  plugins: [react()],
  base: "/2300030408_frontend/",
});
