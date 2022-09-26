/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./../App";
import { filteredUser } from "./mockedData/users";

describe("App tests", () => {
  //given
  const { getByTestId } = render(<App />);
  it("main container", () => {
    //then
    expect(getByTestId("main-container")).toBeInTheDocument();
    expect(getByTestId("main-container")).toHaveStyle("width: 100%");
    expect(getByTestId("main-container")).toHaveStyle("height: 100%");
  });
  it("main window", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("main-window")).toBeInTheDocument();
    expect(getByTestId("main-window")).toHaveStyle("width: 60%");
    expect(getByTestId("main-window")).toHaveStyle("height: 90%");
  });

  it("check info and button bar", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("info-button-bar")).toBeInTheDocument();
    expect(getByTestId("info-button-bar")).toHaveStyle("width: 100%");
    expect(getByTestId("info-button-bar")).toHaveStyle("min-height: 10%");
  });

  it("check button", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("loading-button")).toBeInTheDocument();
    expect(getByTestId("loading-button")).toHaveStyle("width: 15%");
    expect(getByTestId("loading-button")).toHaveStyle("height: 50%");
  });

  it("check filter input", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("filter-input")).toBeInTheDocument();
    expect(getByTestId("filter-input")).toHaveStyle("width: 35%");
    expect(getByTestId("filter-input")).toHaveStyle("height: 45%");
  });

  it("check header bar", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("header-bar")).toBeInTheDocument();
    expect(getByTestId("header-bar")).toHaveStyle("width: 90%");
    expect(getByTestId("header-bar")).toHaveStyle("min-height: 5%");
  });

  it("person data container", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("person-data-container")).toBeInTheDocument();
    expect(getByTestId("person-data-container")).toHaveStyle("width: 95%");
    expect(getByTestId("person-data-container")).toHaveStyle("height: 80%");
  });

  it("headers", () => {
    //given
    const { getByTestId } = render(<App />);
    //then
    expect(getByTestId("person-data-container")).toBeInTheDocument();
    expect(getByTestId("person-data-container")).toHaveStyle("width: 95%");
    expect(getByTestId("person-data-container")).toHaveStyle("height: 80%");
  });

  it("should check input value", () => {
    render(<App />);
    const filterInput = screen.getByTestId("filter-input");
    fireEvent.change(filterInput, { target: { value: "abc" } });
    waitFor(() => expect(filterInput).toBeInTheDocument());
  });

  it("should check if input value match filtered person data", () => {
    //given
    render(<App />);
    //when
    const filterInput = screen.getByTestId("filter-input");
    fireEvent.change(filterInput, { target: { value: "Pat" } });
    const filteredUserData = filteredUser;
    //then
    waitFor(() => expect(filteredUserData).toBeInTheDocument());
  });

  it.skip("should check if button click fetched data", () => {
    //given
    const { rerender } = render(<App />);
    const button = screen.getByTestId("loading-button");
    //when
    fireEvent.click(button);
    rerender(<App />);
    const personDiv = screen.getAllByTestId("person-data-div");
    //then
    waitFor(() => expect(personDiv).toBeInTheDocument());
  });
});
