#!/bin/bash
git config user.email "bot@example.com"
git config user.name "AI Assistant"

# 1. Setup
git add .gitignore package.json vite.config.js index.html public/
git commit -m "chore: initial project setup with Vite" || echo "Commit 1 failed (maybe nothing to commit)"

# 2. Core Layout & Styles
git add src/main.jsx src/App.jsx src/index.css src/components/Navbar.jsx src/components/Footer.jsx
git commit -m "feat: add core layout and global styles" || echo "Commit 2 failed"

# 3. Sections
git add src/components/Hero.jsx src/components/About.jsx src/components/Experience.jsx src/components/Skills.jsx src/components/Projects.jsx src/components/Contact.jsx
git commit -m "feat: add portfolio sections" || echo "Commit 3 failed"

# 4. Hooks
git add src/hooks/
git commit -m "feat: implement custom hooks for UI effects" || echo "Commit 4 failed"

# 5. Remaining
git add .
git commit -m "chore: add remaining project files" || echo "Commit 5 failed"
