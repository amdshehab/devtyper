import React from "react";
import cx from "classnames";
import "./index.scss";

export const Metrics = ({ children, className }) => (
  <div className={cx("Metrics", className)}>{children}</div>
);
