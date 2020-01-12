import React from "react";
import "./App.scss";
import { useGenerateSnippet } from "./useGenerateKey";
import { Character } from "./components/character";

function App() {
  const KeyboardKeys = [
    "function foo() {}",
    "import * as bar from foo",
    "const foo = () => bar + 2",
    "foo.map(x => x + x)",
    "function foo() { return bar }"
  ];

  const { currentSnippet, setSnippetIndex } = useGenerateSnippet(KeyboardKeys);

  return (
    <div className="App">
      <div className="Snippet">
        {currentSnippet.split("").map(character => (
          <Character character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
