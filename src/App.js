import React from "react";
import "./App.scss";
import { useGenerateSnippet } from "./useGenerateSnippet";
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
        {currentSnippet.map(({ character, status }) => (
          <Character character={character} status={status} />
        ))}
      </div>
    </div>
  );
}

export default App;
