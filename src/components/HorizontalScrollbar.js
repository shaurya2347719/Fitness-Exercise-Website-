import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import ExerciseCard from "./ExerciseCard";
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);  // usecontext() is used to access {scrollPrev} from VisibilityContext.usecontext() hook is generally used in react to access value from a component higher in the dom-tree without traversing to all the child heireachelly.

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />  // alt is used to display alternate text if the image don't loads.
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart,isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }  // <BodyPart> is the body parts name in first scrollbar and exercise cards are the gifs in the 2nd scroll bar.
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
