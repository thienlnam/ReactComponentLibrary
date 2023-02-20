import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component with a forwarded ref", () => {
    const buttonRef = React.createRef<HTMLButtonElement>();
    render(<Button ref={buttonRef} >This is button</Button>);
  });

  test("renders the Button component without a forwarded ref", () => {
    render(<Button>This is button</Button>);
  });
});
