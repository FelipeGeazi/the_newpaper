/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Select = forwardRef(({ children, error, ...rest }, ref) => {
  return (
    <div>
      <select {...rest} ref={ref}>
        {children}
      </select>
      {error ? <p>{error.message}</p> : null}
    </div>
  );
});
