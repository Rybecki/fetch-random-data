/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/await-async-utils */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./../App";
import ButtonNameChanger from "./../components/ButtonNameChanger";
import { ButtonName } from "../components/MainWindow.styled";

const renderComponent = (loading: any, error: boolean) => {
  return render(
    <ButtonNameChanger loading={loading} error={error}>
      <ButtonName>Load data</ButtonName>
    </ButtonNameChanger>
  );
};

describe("Button test", () => {
  it("Button default name visible", () => {
    //given
    //when
    renderComponent(true, false);
    //then
    waitFor(() => expect(screen.queryByText("Load data")).toBeInTheDocument());
  });

  it("Button shows Load more data when clicked", () => {
    //given
    render(<App />);
    const button = screen.getByTestId("loading-button");
    //when
    fireEvent.click(button);
    //then
    waitFor(() =>
      expect(screen.queryByText("Load more data")).toBeInTheDocument()
    );
  });

  it("Button shows Retry when error occurs", () => {
    //given
    render(<App />);
    renderComponent(false, true);
    const button = screen.getByTestId("loading-button");
    //when
    fireEvent.click(button);
    //then
    waitFor(() => expect(screen.queryByText("Retry")).toBeInTheDocument());
  });
});
