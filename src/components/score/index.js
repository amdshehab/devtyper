import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

/**
 *
 * @param {number} score
 */
export const Score = ({ score }) => (
  <div>
    <CircularProgressbar value={score} text={`${score}%`} />
  </div>
);
