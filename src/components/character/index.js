import React, { memo } from "react";
import cx from "classnames";
import "./index.scss";
/**
 * @param {Object} input - input
 * @param {String} input.character - character
 * @param {("ACTIVE" | "CORRECT" | "INCORRECT")} input.status - status
 */

export const Character = memo(({ character, status }) => {
  return (
    <span
      className={cx("Character", {
        "Character--active": status === "ACTIVE",
        "Character--correct": status === "CORRECT",
        "Character--incorrect": status === "INCORRECT"
      })}
    >
      {character}
    </span>
  );
});
