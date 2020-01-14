import React, { useState, useEffect } from "react";
import "./App.scss";
import { Character } from "./components/character";

const KeyboardKeys = [
  "function foo() {\n}",
  "import * as bar from foo",
  "const foo = () => bar + 2",
  "foo.map(x => x + x)",
  "function foo() { return bar }"
];

/**
 * @param {String} snippet
 */
const convertSnippetToChars = snippet =>
  snippet.split("").map(character => ({
    character,
    status: "ACTIVE"
  }));

function App() {
  const [snippetIndex, setSnippetIndex] = useState(0);

  const [snippet, setSnippet] = useState(
    convertSnippetToChars(KeyboardKeys[snippetIndex])
  );

  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    setSnippet(convertSnippetToChars(KeyboardKeys[snippetIndex]));
  }, [snippetIndex]);

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      if (snippet[currentChar].character === "\n") {
        if (key === "Enter") {
          snippet[currentChar].status = "CORRECT";
          setCurrentChar(char => char + 1);
        }
      }

      if (key === snippet[currentChar].character) {
        snippet[currentChar].status = "CORRECT";
        setCurrentChar(char => char + 1);
      } else {
        snippet[currentChar].status = "INCORRECT";
      }

      if (currentChar === snippet.length - 1) {
        setSnippetIndex(i => i + 1);
        setCurrentChar(0);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [snippet, currentChar, setSnippetIndex]);

  return (
    <div className="App">
      <div className="Snippet">
        {snippet.map(({ character, status }, i) => (
          <Character
            character={character}
            status={status}
            key={character + i * 2}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
