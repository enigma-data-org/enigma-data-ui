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
const {CompanyData, Modal} from "enigma-data-ui"
```

Use them in your application and pass the `company` prop like so:

```jsx
function App() {
  return (
    <div className="App">
      <UserData company="insert-name-here" />
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
