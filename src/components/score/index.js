import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/**
 *
 * @param {number} score
 */
export const Score = ({ score, className }) => (
  <div className={className}>
    <CircularProgressbar
      value={score}
      text={`${score}%`}
      strokeWidth={3}
      styles={buildStyles({
        trailColor: "#D8D6E6",
        textColor: "#263288",
        pathColor: `#263288`
      })}
    />
  </div>
);
