# Organizing Code with Import/Export Lab

## Learning Goals

- Use the default and named import/export syntax to access variables across
  multiple files

## Instructions

In this lab, we'll work on organizing our code into separate files with the
import/export syntax. We'll continue working on the portfolio example from the
previous lab, this time working on separating out our code into different
modules using the `import`/`export` syntax.

Begin with `npm install`. Then, run `npm start` to run your code in the browser.
Follow the error messages to fix the broken imports!

Your goal is to fix the errors, and get our app to match this example:

![demo](https://curriculum-content.s3.amazonaws.com/phase-2/phase-2-hooks-import-export-lab/demo.png)

When you're done, run `npm test` to check if all tests pass.

## Deliverables

### Components

There are four components in this application, all located in the `components`
folder. Use the **default export** syntax to export the `<About>`, `<Home>`, and
`<NavBar>` components, and import them all in the `<App>` component.

### Data

In the `src/data/user.js` file, there are three variables that have information
about the owner of the portfolio site. Export all three variables using the
**named export** syntax.

After you've exported them, import them in the following files:

- Import the `username` and `city` variables in the `src/components/Home.js`
  file
- Import the `image` variable in the `src/components/About.js` file

When importing, make sure to use the _relative path_ from the file you're
currently in, to the file you're trying to import from. For example, if you are
in the `src/components/About.js` file and want to import from the
`src/data/user.js` file, the relative path is `../data/user` (go up one
directory, into the `data` folder, and into the `user` file).

## Resources

- [MDN Import Documentation][import]
- [MDN Export Documentation][export]

[import]:
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import
[export]:
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
