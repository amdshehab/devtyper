import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useGenerateKey } from "./useGenerateKey";

function App() {
  const KeyboardKeys = [
    "function foo() {}",
    "import * as bar from foo",
    "const foo = () => bar + 2",
    "foo.map(x => x + x)",
    "function foo() { return bar }"
  ];

  const { currentKey, setKeyIndex } = useGenerateKey(KeyboardKeys);

  return <div className="App"> {currentKey}</div>;
}

export default App;
