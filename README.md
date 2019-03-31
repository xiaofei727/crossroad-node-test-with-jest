# CrossRoads 💼

### Coding Standards:
You can't push directly to master. Here is how to get a new feature merged:

-   First, make sure there is an issue for what you're working on.
-   Then make a branch for it (idealy one branch per issue but you can do several small issues in a branch).
-   Do your coding, make commits, and make sure ESLint is linting your files (see below).
-   When you're finished with your feature, make a pull request, describing your changes by referencing the exact issue number(s).
-   Github won't let you merge to master unless you have at least one person review and approve your changes.

### How to ESLint:
We are using eslint to maintain coding style standards. Here is how to get it working.

-   Install the **eslint** extention in vscode
-   Install the **Prettier** extention in vscode
-   Reload vscode
-   In the control panel, go to Code -> Preferences -> Settings. Search _Prettier: Eslint Integration_ and check that box to true.
-   Try adding an unnessary space somewhere in your code. A red squigly underline should appear from ESLint telling you to remove it.

### How to Build:
-   Please make sure you have the most recent versions of npm and node installed.
-   run `npm install` in the terminal in the project directory to install all dependencies
-   run `npm start` in the terminal in the project directory.
-   run `npm run dev` in the terminal in the project directory to start react and the server at the same time.

### How to Test Code:
## TDD
-   run `npm test`
## BDD
-   If Chrome is not installed, install Chrome
-   export chromedriver to PATH with `export PATH=$PATH:(path to)/node_modules/chromedriver/lib/chromedriver/`
-   run `npm start`
-   run `npx cucumber-js`
## Coverage Report
-   run `npm test -- --coverage`

Happy Coding ✌️ 😋
