import { Wrapper } from "@googlemaps/react-wrapper";

import GoogleMap from "./GoogleMap";

const WrapperGoogleMap = () => {
  return (
    <Wrapper apiKey={"AIzaSyB4JXVAJ8KbPmAbYQ3qBk71kChMmpGcuNg"}>
      <GoogleMap />
    </Wrapper>
  );
};

export default WrapperGoogleMap;
