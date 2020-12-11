# Organizing Code with Import/Export Lab

## Objectives

- Practice using the default and named import/export syntax

## Instructions

In this lab, we'll work on organizing our code into separate files with the
import/export syntax.

Begin with `npm install`. Then, run `npm start` to run your code in the browser. Follow the error messages to fix the broken imports!

When you're done, run `learn test` or `npm test` to check if all tests pass.

## Deliverables

### Components

There are four components in this application, all located in the `components`
folder. Use the default export syntax to export the `<NavBar>`, `<NavBar>`, and
`<NavBar>` components, and import them all in the `<App>` component.

### Data

In the `data/data.js` file, there are three variables that have information
about the owner of the portfolio site. Export all three variables using the
named export syntax.

After you've exported them, import them in the following files:

- Import the `name` and `city` variables in the `components/Home.js` file
- Import the `image` variable in the `components/About.js` file

## Resources

[MDN Import Documentation][import]  
[MDN Export Documentation][export]

[import]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/import
[export]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
