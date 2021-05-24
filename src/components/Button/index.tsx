import React from "react";
import styled from "styled-components";

interface Props {
  color?: string; //button text color
  icon?: React.ReactNode; // prefix icon
  onClick?: any; // onClick callback
  disabled?: boolean; // button disable
  loading?: boolean; // show button loading
  variant?: string; // button variant Primary & Secondary
  text?: string; // button text/label
  type?: any; // button type button, submit, reset
  className?: string; // classes
  style?: object; // styles
}

const IconDiv = styled.div`
  margin-right: 5px;
  display: flex;
`;

export function Icon({ icon }: { icon: React.ReactNode }) {
  return <IconDiv>{icon}</IconDiv>;
}

const Button: React.FC<Props> = ({
  disabled,
  type,
  className,
  variant,
  loading,
  color,
  icon,
  onClick,
  style,
  text,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick && onClick}
      className={`${
        variant === "secondary" ? "secondary-button" : "primary-button"
      } ${className}`} // primary is default
      style={{
        color: color || "",
        ...style,
      }}
      type={type || "button"}
    >
      {loading ? (
        "Loading..."
      ) : (
        <React.Fragment>
          {icon && <Icon icon={icon} />}
          {text}
        </React.Fragment>
      )}
    </button>
  );
};

export default Button;
