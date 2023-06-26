import React, { LabelHTMLAttributes } from "react";

interface FieldErrorProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const FieldError: React.FC<FieldErrorProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <label className={className} {...props}>
      {children}
    </label>
  );
};
