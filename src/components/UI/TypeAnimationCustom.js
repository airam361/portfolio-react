import { useRef } from "react";
import TypeAnimation from "react-type-animation";

import useOnScreen from "../../customHooks/useOnScreen";

const TypeAnimationCustom = (props) => {
  const ref = useRef(null);

  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref}>
      {isVisible && (
        <TypeAnimation
          cursor={props.cursor}
          repeat={props.repeat}
          sequence={props.sequence}
          wrapper="div"
          className={props.className}
        />
      )}
    </div>
  );
};

export default TypeAnimationCustom;
