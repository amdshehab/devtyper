import { useState } from "react";

/**
 * @param {Array<String>} keyBoard - user keyboard
 */
export const useGenerateKey = keyBoard => {
  const [keyIndex, setKeyIndex] = useState(0);
  const currentKey = keyBoard[keyIndex];

  return {
    currentKey,
    setKeyIndex
  };
};
