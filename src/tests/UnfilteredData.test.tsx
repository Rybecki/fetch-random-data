/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-utils */
import { render, screen, waitFor } from "@testing-library/react";
import UnfilteredData from "./../components/UnfilteredData";
import { users } from "./mockedData/users";

describe("Unfiltered data test", () => {
  it("Person div with person data should render 20 times", () => {
    //given

    //when
    render(<UnfilteredData users={users} />);
    const personDiv = screen.getAllByTestId("person-data-div");
    //then

    waitFor(() => expect(personDiv).toBeInTheDocument());
    waitFor(() => expect(personDiv).toHaveBeenCalledTimes(20));
    waitFor(() => expect(personDiv).toHaveBeenCalledTimes(20));
  });

  it.skip("Person div with Ms data", () => {
    //given
    const utils = render(<UnfilteredData users={users} />);
    //when
    const personDiv = screen.getAllByTestId("person-data-div");
    const femaleData = utils.queryAllByText("female");
    //then
    waitFor(() => expect(personDiv).toHaveStyle("background-color: #a7d0ff"));
    waitFor(() => expect(personDiv).toBeInTheDocument());
    waitFor(() => expect(femaleData).toBeInTheDocument());
  });
});
