import React, { useState, useEffect, useCallback } from "react";
import "./App.scss";
import { Character } from "./components/character";
import { Score } from "./components/score";
import { Metrics } from "./components/metrics";

const KeyboardKeys = [
  "function foo() {}",
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

  const [initialTime, setInitialTime] = useState(null);

  // how many times he has clicked in the minute
  // clicks => counter goes up
  // clicks / seconds * 60

  const getCorrectKeys = useCallback(
    () => snippet.filter(({ status }) => status === "CORRECT").length,
    [snippet]
  );

  const calculateClicksPerMin = (timeElapsed, correctKeys) =>
    correctKeys / timeElapsed / 60000;

  const useGenerateKpm = () => {
    console.log("what", initialTime);

    return calculateClicksPerMin(
      performance.now() - initialTime,
      getCorrectKeys()
    );
  };

  useEffect(() => {
    setSnippet(convertSnippetToChars(KeyboardKeys[snippetIndex]));
  }, [snippetIndex]);

  useEffect(() => {
    const handleKeyPress = ({ key }) => {
      if (!initialTime) setInitialTime(performance.now());
      // console.log("whats the deal ->", initialTime, performance.now());

      if (key === snippet[currentChar].character) {
        snippet[currentChar].status = "CORRECT";
        setSnippet([...snippet]);
        setCurrentChar(char => char + 1);
      } else {
        snippet[currentChar].status = "INCORRECT";
        setCurrentChar(char => char + 1);
        setSnippet([...snippet]);
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
  }, [snippet, currentChar, setSnippetIndex, initialTime]);

  const generateScore = useCallback(
    () => Math.ceil((getCorrectKeys() / snippet.length) * 100),
    [snippet, getCorrectKeys]
  );

  return (
    <div className="App">
      <div className="Container Container--flex-container">
        <div className="Container__snippet-container">
          {snippet.map(({ character, status }, i) => (
            <Character
              character={character}
              status={status}
              key={character + i * 2}
            />
          ))}
        </div>
        <Metrics className="Container__metrics-container">
          <Score score={generateScore()} className="Container__score" />
          <div>{useGenerateKpm()}</div>
        </Metrics>
      </div>
    </div>
  );
}

export default App;
