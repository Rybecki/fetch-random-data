import { ButtonName } from "./MainWindow.styled";

const ButtonNameChanger = (loading: any, error: boolean): JSX.Element => {
  return !loading ? (
    <ButtonName>Load data</ButtonName>
  ) : error ? (
    <ButtonName>Retry</ButtonName>
  ) : (
    <ButtonName>Load more data</ButtonName>
  );
};

export default ButtonNameChanger;
