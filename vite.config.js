import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages(https://leehyeonho.github.io/portfolio/)에 배포하므로 base를 저장소 이름으로 지정한다.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});
