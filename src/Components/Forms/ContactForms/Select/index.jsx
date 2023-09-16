/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import styles from "./style.module.scss";

// eslint-disable-next-line react/display-name
export const Select = forwardRef(({ children, error, ...rest }, ref) => {
  return (
    <div className={styles.fieldBox}>
      <select {...rest} ref={ref}>
        {children}
      </select>
      {error ? <p className="paragraph
      ">{error.message}</p> : null}
    </div>
  );
});
