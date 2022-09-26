/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/prefer-screen-queries */
import { render, waitFor } from "@testing-library/react";
import Headers from "./../components/Headers";

describe("Headers test", () => {
  const { getAllByTestId } = render(Headers());
  it("Headers", () => {
    //then
    waitFor(() => expect(getAllByTestId("header")).toBeInTheDocument());
    waitFor(() => expect(getAllByTestId("header")).toHaveStyle("height: 100%"));
    waitFor(() => expect(getAllByTestId("header")).toHaveTextContent(" "));
    waitFor(() => expect(getAllByTestId("header")).toHaveTextContent("Title"));
    waitFor(() =>
      expect(getAllByTestId("header")).toHaveTextContent("Firstname & Lastname")
    );
    waitFor(() => expect(getAllByTestId("header")).toHaveTextContent("Email"));
    waitFor(() => expect(getAllByTestId("header")).toHaveTextContent("City"));
  });
});
