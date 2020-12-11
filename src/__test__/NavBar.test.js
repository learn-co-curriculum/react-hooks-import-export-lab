import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import NavBar from "../components/NavBar";

test("it is exported as a default export", () => {
  try {
    expect(() => render(<NavBar />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});
