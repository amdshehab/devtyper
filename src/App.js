import React, { useState, useEffect } from "react";
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

  const [statefullSnippet, setStatefullSnippet] = useState(currentSnippet);

  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      console.log("currentChar", currentChar, key);

      if (key === statefullSnippet[currentChar].character) {
        statefullSnippet[currentChar].status = "CORRECT";
        setStatefullSnippet([...statefullSnippet]);
        setCurrentChar(char => char + 1);
      } else {
        statefullSnippet[currentChar].status = "INCORRECT";
        setStatefullSnippet([...statefullSnippet]);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [statefullSnippet, currentChar]);

  return (
    <div className="App">
      <div className="Snippet">
        {statefullSnippet.map(({ character, status }, i) => (
          <Character
            character={character}
            status={status}
            key={character + i}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
