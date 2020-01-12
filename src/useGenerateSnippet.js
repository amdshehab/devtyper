import { useState } from "react";

/**
 * @param {Array<String>} snippetList - user keyboard
 */

export const useGenerateSnippet = snippetList => {
  const [keyIndex, setSnippetIndex] = useState(0);
  const currentSnippet = snippetList[keyIndex].split("").map(character => ({
    character,
    status: "ACTIVE"
  }));

  return {
    currentSnippet,
    setSnippetIndex
  };
};
