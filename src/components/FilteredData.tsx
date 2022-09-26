import {
  PersonDataDiv,
  PersonDataDivBoxes,
  PersonDataAvatarContainer,
} from "./MainWindow.styled";
import { COLORS } from "./../assets/colors/Colors";

const FilteredData = (filteredResults: Array<{}>) => {
  return (
    <>
      {(filteredResults || []).map((item: any, i: number) => {
        const avatar = item.picture.thumbnail;
        const chooseBackgroundColor = () => {
          return item.gender === "female" ? COLORS.femaleColor : COLORS.white;
        };
        return (
          <PersonDataDiv
            key={i}
            style={{ backgroundColor: chooseBackgroundColor() }}
          >
            <PersonDataDivBoxes
              style={{
                display: "flex",
                justifyContent: "center",
                width: "3rem",
              }}
            >
              <PersonDataAvatarContainer src={avatar} alt="" />
            </PersonDataDivBoxes>
            <PersonDataDivBoxes style={{ width: "5%" }}>
              {item.gender === "female" ? "Ms" : "Mr"}
            </PersonDataDivBoxes>
            <PersonDataDivBoxes>
              {item.name.first} {item.name.last}
            </PersonDataDivBoxes>
            <PersonDataDivBoxes>{item.email}</PersonDataDivBoxes>
            <PersonDataDivBoxes>{item.location.city}</PersonDataDivBoxes>
          </PersonDataDiv>
        );
      })}
    </>
  );
};

export default FilteredData;
