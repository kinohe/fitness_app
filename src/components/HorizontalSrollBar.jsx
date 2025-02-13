import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import BodyPart from "./BodyPart";
import { VisibilityContext, ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import LeftArrowIcon from "../assets/images/left-arrow.png";
import RightArrowIcon from "../assets/images/right-arrow.png";
function HorizontalSrollBar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={BodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
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
export default HorizontalSrollBar;
