import { useState } from "react";

/**
 * @param {String} character
 */
function Character(character) {
  this.character = character;
  this.status = "ACTIVE";
}

/**
 * @param {Array<String>} snippetList
 */

export const useGenerateSnippet = snippetList => {
  const [keyIndex, setSnippetIndex] = useState(0);
  const currentSnippet = snippetList[keyIndex]
    .split("")
    .map(character => new Character(character));

  return {
    currentSnippet,
    setSnippetIndex
  };
};
