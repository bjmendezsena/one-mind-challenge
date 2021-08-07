import { render, screen } from "@testing-library/react";
import { MainPage } from "../../../application/views/MainPage";

describe("MainApp tests", () => {
  it("Should render the component", async () => {
    render(<MainPage />);
    const node = await screen.findByText(/Animal blog/i);
    expect(node).toBeInTheDocument();
  });
});
