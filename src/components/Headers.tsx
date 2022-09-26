import { HeaderDiv } from "./MainWindow.styled";

const Headers = (): JSX.Element => {
  const HeadersList: string[] = [
    "",
    "Title",
    "Firstname & Lastname",
    "Email",
    "City",
  ];
  return (
    <>
      {HeadersList.map((header: string, i: number) => {
        const HeadersWidth = (): string => {
          return header === "" || header === "Title" ? "5%" : "20%";
        };
        return (
          <HeaderDiv
            data-testid="header"
            key={i}
            style={{ width: HeadersWidth() }}
          >
            {header}
          </HeaderDiv>
        );
      })}
    </>
  );
};

export default Headers;
