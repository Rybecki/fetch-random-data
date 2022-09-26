import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MainContainer,
  MainWindow,
  InfoAndButtonBar,
  FilterInput,
  LoadButton,
  HeaderBar,
  PersonDataContainer,
  LoadingInfo,
  ErrorMessage,
} from "./components/MainWindow.styled";
import Headers from "./components/Headers";
import ButtonNameChanger from "./components/ButtonNameChanger";
import FilteredData from "./components/FilteredData";
import UnfilteredData from "./components/UnfilteredData";

const App = (): JSX.Element => {
  const [users, setUsers] = useState<any>({
    data: [],
    isLoading: true,
  });
  const [fetchError, setFetchError] = useState(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState("");
  const [, setFilteredResults] = useState([]);

  const GetData = async (): Promise<void> => {
    const data = await axios.get("https://randomuser.me/api/?results=20");
    setUsers({
      data: data.data.results,
      isLoading: false,
    });
    setIsLoading(false);
    // this interval is just for visual purposes to make "Loading..." visible
    setInterval(() => {
      setIsLoading(true);
    }, 1300);
  };

  useEffect(() => {
    !users.isLoading && users.data === undefined
      ? setFetchError(true)
      : setFetchError(false);
  }, [users.data, users.isLoading]);

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = (users.data || []).filter((item: string) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(users);
    }
  };

  const filteredData = (users.data || []).filter((item: string) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  return (
    <MainContainer data-testid="main-container">
      <MainWindow data-testid="main-window">
        <InfoAndButtonBar data-testid="info-button-bar">
          <LoadButton data-testid="loading-button" onClick={() => GetData()}>
            {ButtonNameChanger(loading, fetchError)}
          </LoadButton>
          <FilterInput
            data-testid="filter-input"
            type="text"
            placeholder="Find by name..."
            onChange={(e) => searchItems(e.target.value)}
          />
        </InfoAndButtonBar>
        <HeaderBar data-testid="header-bar">{Headers()}</HeaderBar>
        <PersonDataContainer data-testid="person-data-container">
          {users.isLoading ? (
            ""
          ) : !loading ? (
            <LoadingInfo>Loading...</LoadingInfo>
          ) : fetchError ? (
            <ErrorMessage>Something went wrong. Please retry.</ErrorMessage>
          ) : searchInput.length > 1 ? (
            searchInput.length >= 1 && filteredData.length !== 0 ? (
              FilteredData(filteredData)
            ) : (
              <p>No results</p>
            )
          ) : (
            UnfilteredData({ users })
          )}
        </PersonDataContainer>
      </MainWindow>
    </MainContainer>
  );
};

export default App;
