import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})
```

3. Save and close

### 4E. Create .gitignore

1. Type: `notepad .gitignore` (Windows) or `nano .gitignore` (Mac)
2. Paste this:
```
node_modules
dist
.env
.env.local
.DS_Store