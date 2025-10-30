import type{ ButtonProps } from "../types/ButtonProps";

export function Button(props: ButtonProps) {
  if (props.variant === "text") {
    return (
      <button
        style={{
          background: "lightblue",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
        }}
        onClick={props.onclick}
      >
        {props.label}
      </button>
    );
  }

  return (
    <button
      style={{
        background: "lightgray",
        border: "none",
        padding: "8px",
        borderRadius: "50%",
      }}
      onClick={props.onClick}
    >
      {props.icon}
    </button>
  );
}
