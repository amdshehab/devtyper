import { useState } from "react";

/**
 * @param {Array<String>} snippetList - user keyboard
 */
export const useGenerateSnippet = snippetList => {
  const [keyIndex, setSnippetIndex] = useState(0);
  const currentSnippet = snippetList[keyIndex];

  return {
    currentSnippet,
    setSnippetIndex
  };
};
