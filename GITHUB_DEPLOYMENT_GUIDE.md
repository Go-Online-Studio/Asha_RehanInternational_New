# How to Deploy a Vite React Project to GitHub Pages

Unlike standard HTML/CSS websites, a modern React application built with Vite needs to be "built" (compiled into standard HTML, CSS, and JavaScript) before it can be hosted on GitHub Pages. 

This guide explains how to fully automate that process using GitHub Actions.

---

## 1. Update `vite.config.ts`
Vite needs to know the exact name of your GitHub repository so it can link your assets (images, CSS, JS) correctly. 

Add the `base` property to your configuration. It must exactly match your repository name, wrapped in forward slashes.

```typescript
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    // THIS IS THE CRITICAL ADDITION FOR GITHUB PAGES:
    base: '/Asha_RehanInternational_New/', 
    
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
```

---

## 2. Create the GitHub Actions Workflow
We use a GitHub Actions script to automatically build the project every time you push new code to the `main` branch. 

Create a file in your project at this exact path:
`.github/workflows/deploy.yml`

Paste the following code into `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### What does this script do?
1. It watches for any new code pushed to the `main` branch.
2. It sets up a temporary server and installs Node.js.
3. It runs `npm ci` and `npm run build` to compile your React code into a `dist` folder.
4. It takes that compiled `dist` folder and forces it into a hidden branch on your repository called `gh-pages`.

---

## 3. GitHub Pages Settings Configuration
Once you have pushed the `vite.config.ts` and `deploy.yml` changes to your GitHub repository, wait a minute or two for the GitHub Action to finish running for the first time.

Then, configure GitHub Pages to serve your website from the hidden branch:

1. Go to your repository on GitHub.com and click **Settings**.
2. Click on **Pages** in the left-hand sidebar.
3. Under the **Build and deployment** section, ensure the **Source** dropdown is set to **Deploy from a branch**.
4. In the **Branch** dropdown, select the **`gh-pages`** branch.
5. Leave the folder setting as `/ (root)`.
6. Click **Save**.

Your live website link will be:
`https://<your-github-username>.github.io/<your-repo-name>/`
*(e.g., https://Go-Online-Studio.github.io/Asha_RehanInternational_New/)*

---

### Future Updates
Because this workflow is fully automated, you **never have to repeat this setup**. 
Whenever you make changes to your code, simply run:
```bash
git add .
git commit -m "Your update message"
git push origin main
```
GitHub will detect the push, rebuild your project, and update the live website within 1-2 minutes automatically!
