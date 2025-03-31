# Initialize repository
git init

# Add all files
git add .

# Initial commit
git commit -m "Initial commit"

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to main branch
git push -u origin main

# For subsequent pushes
git add .
git commit -m "Update changes"
git push
