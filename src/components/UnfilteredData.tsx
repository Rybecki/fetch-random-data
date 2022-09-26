import { COLORS } from "../assets/colors/Colors";
import {
  PersonDataDiv,
  PersonDataDivBoxes,
  PersonDataAvatarContainer,
} from "./MainWindow.styled";

const UnfilteredData = ({ users }: any): JSX.Element => {
  return (
    <>
      {(users.data || []).map((item: any, i: number) => {
        const avatar = item.picture.thumbnail;

        const chooseBackground = () => {
          return item.gender === "female" ? COLORS.femaleColor : COLORS.white;
        };
        return (
          <PersonDataDiv
            key={i}
            data-testid="person-data-div"
            style={{ backgroundColor: chooseBackground() }}
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

export default UnfilteredData;
