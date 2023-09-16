/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name,
export const TextArea = forwardRef(({ error, ...rest }, ref) => {
  return (
    <>
      <textarea ref={ref} {...rest} />;{error ? <p>{error.message}</p> : null}
    </>
  );
});
