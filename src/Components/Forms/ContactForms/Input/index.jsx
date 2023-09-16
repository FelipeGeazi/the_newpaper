/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({ error, ...rest }, ref) => {
  return (
    <div>
      <input {...rest} ref={ref} />
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
