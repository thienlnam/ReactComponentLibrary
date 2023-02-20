import React from "react";
import "./Button.module.css"

export interface Props {
    children?: React.ReactNode;
}

export type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <button 
        ref={ref}
    >
        {props.children}
    </button>
    );
});

export default React.memo(Button);
