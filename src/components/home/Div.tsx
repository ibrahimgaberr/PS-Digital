import React from "react";

export default function Div(props: any) {
  return <div {...props}>{props.children}</div>;
}
