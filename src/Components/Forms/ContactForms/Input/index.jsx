/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import styles from "./style.module.scss";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.fieldBox}>
      <input {...rest} ref={ref} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
