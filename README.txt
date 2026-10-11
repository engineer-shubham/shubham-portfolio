SHUBHAM JAIN PORTFOLIO

Five-page static portfolio: Home, About, Experience, Selected Work and Contact. Open index.html in a browser to view the site locally.

The assets/ folder contains four professional photos supplied by Shubham, six editorial project images, and downloadable copies of the supplied CV and cover letter. Project images represent the relevant work themes; they are not screenshots from client systems.

The public pages include Shubham's phone number and links to downloadable career documents, at his request.

DEPLOY TO VERCEL FROM VISUAL STUDIO CODE
1. In Visual Studio Code, choose File > Open Folder and select this shubham-jain-portfolio folder.
2. Choose Terminal > New Terminal.
3. Check that Node.js is available by running: node -v
4. If the terminal says the command is not found, install the current Node.js LTS release from https://nodejs.org, then close and reopen Visual Studio Code.
5. Run: npx vercel
6. Follow the prompts to sign in and create/link a Vercel project. Use the default settings for a static site: no framework, no build command, and . as the output directory.
7. Vercel will show a preview address. Open it and review the pages.
8. When ready to make that deployment the production site, run: npx vercel --prod

Keep all files and folders together. Vercel should deploy from this folder, the one containing index.html. A custom domain is optional.
