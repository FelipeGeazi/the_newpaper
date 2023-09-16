/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { forwardRef } from "react";
import styles from "./style.modules.scss?inline";

// eslint-disable-next-line react/display-name,
export const TextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div className={styles.fieldBox}>
      <textarea ref={ref} {...rest} />;{error ? <p>{error.message}</p> : null}
    </div>
  );
});
