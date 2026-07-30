# Personal Website — Ravi Puvvula

A dark, modern, minimalist personal site for an **AI Engineer**, built with plain HTML, CSS and
JavaScript. Zero build step — ready to host on **GitHub Pages**.

## Files
- `index.html` — page structure and content
- `styles.css` — theme, layout and responsive design
- `main.js` — navbar, typewriter, scroll reveals, animated neural-network background
- `resume.pdf` — add your resume PDF here (the Resume buttons link to it)

## Before you publish — fill in these placeholders
Search the project for `TODO` and update:
- **Email** in `index.html` → `mailto:your.email@example.com`
- **LinkedIn** in `index.html` → `https://www.linkedin.com/in/your-handle`
- Add your **`resume.pdf`** file to this folder (or rename the links to match your file).

## Preview locally
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a repo named `<your-username>.github.io` (for a user site) or any repo (for a project site).
2. Push these files to the default branch.
3. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**,
   choose your branch and `/ (root)`.
4. Your site goes live at `https://<your-username>.github.io/`.

`.nojekyll` is included so GitHub Pages serves the static files as-is.
