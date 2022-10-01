# Light-icons Contribution Guide
  
  Thank you for CONTRIBUTING!

## Raising an Issue

- Make sure the issue hasn't been raised yet
- The issue list of this repo is **exclusively** for Bug Reports and Feature Requests.
- Bug reproductions should be as **concise** as possible.
- **Search** for your issue, it _may_ have been answered.
- Include **screenshots** or animated GIFs in your issue whenever needed (if visual issue)

## Pull Requests

- Always work on a new branch. Making changes on your fork's `dev` or `master` branch can cause problems. (See [The beginner's guide to contributing to a GitHub project](https://akrabat.com/the-beginners-guide-to-contributing-to-a-github-project/))
- The `master` branch is a snapshot of the latest release. **Submit your PR in the `dev` branch**
- It's OK to have multiple small commits as you work on the PR - we will let GitHub automatically squash it before merging
- Include **screenshots** or animated GIFs in your pull request whenever needed (if visual changes)
- Bug fixes should be submitted to the `master` branch.
- New features and breaking changes should be submitted to the `dev` branch.
- Use a descriptive title no more than 64 characters long. This will be used as the commit message when your PR is merged.
- For changes and feature requests, please include an example of what you are trying to solve and an example of the markup. It is preferred that you create an issue first however, as that will allow the team to review your proposal before you start.
- Please reference the issue # that the PR resolves, something like `Fixes #1234` or `Resolves #6458` (See [closing issues using keywords](https://help.github.com/articles/closing-issues-using-keywords/))
- If adding new feature:
  - Provide convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it


## LightVue Sass Guidelines

- Always on a separated file
- Use .scss extension
- Use **BEM** naming conventions
- Use only **rem** or **em** for `padding`, `margin` and `font-size`

## How to add icons

- Navigate to svg-light folder in root
- Add svg file to svg-light folder 
- Then build project  ```npm run font```

## Development Setup

[![versionnode](https://img.shields.io/badge/nodejs->=6%20and%20<=_14-006cb8.svg?logo=node.js&color=3e863d)](http://nodejs.org/)

```bash
# Clone this repository
[git clone https://github.com/lightvue/light-icons.git

# From the project's root folder, install the dependencies
npm install
```

**Light-icons Docs:**

```bash
# Navigate to `docs/` (from the root)
cd ./docs

# Install dependencies
npm install

# Serve docs with hot reload
npm run dev
```

Visit <http://localhost:3000>