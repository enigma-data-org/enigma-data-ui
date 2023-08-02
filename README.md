# Enigma Data UI

An npm package for Engima Data.

## Installation

Install package and dependencies with your preferred package manager:

`npm i enigma-data-ui`
or
`yarn add enigma-data-ui`

## Usage

Import the components into your file

```jsx
import {CompanyData, Modal} from "enigma-data-ui"
```

Use them in your application and pass the `company` prop like so:

```jsx
function App() {
  return (
    <div className="App">
      <CompanyData company="insert-name-here" />
    </div>
  );
}
```

or

```jsx
function App() {
  return (
    <div className="App">
      <Modal company="insert-name-here" />
    </div>
  );
}
```

### Wordpress Usage

1. **Include React and ReactDOM:** You need to enqueue React and ReactDOM in your WordPress theme or plugin. This can be done using the `wp_enqueue_script` function in your functions.php file.

2. **Create a build process:** You'll need a build process (like webpack or Parcel) to bundle your React components into a single JavaScript file that can be included in WordPress.

3. **Transpile JSX:** React uses a special syntax called JSX which is not natively understood by browsers. You need a transpiler (like Babel) to convert JSX into plain JavaScript.

4. **Package the Component:** Use the build process to package the React components from the NPM package into a single file.

5. **Enqueue the Bundle:** Use `wp_enqueue_script` to add the bundled file to your WordPress theme or plugin.

6. **Create a mounting point:** In your WordPress PHP template, you need to include a `div` with a specific id where you'll mount your React app.

7. **Mount the React Component:** Finally, in your React code, you can use the `ReactDOM.render` function to mount your React components onto the div you included in your WordPress template.
