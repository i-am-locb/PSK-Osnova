import { render, screen } from "@testing-library/react";
import { Entry } from "./Entry";

test("renders learn react link", () => {
  render(<Entry />);
  //   const linkElement = screen.getByText(/learn react/i);
  //   expect(linkElement).toBeInTheDocument();

  expect(screen.getByText(/напиши нам/i)).toBeInTheDocument();
});
