import React from "react";
import IconWithText from "./Layer/IconWithText";
import Container from "./Layer/Container";
import Icon_1 from "/icon_1.png";
import Icon_2 from "/icon_2.png";
import Icon_3 from "/icon_3.png";
const IconSection = () => {
  return (
    <section className="py-4 md:py-7">
      <Container className="flex justify-between items-center">
        <IconWithText className="w-2" src={Icon_1} text="Two years warranty" />
        <IconWithText className="w-4" src={Icon_2} text="Free shipping" />
        <IconWithText className="w-3" src={Icon_3} text="Return policy in 30 days" />
      </Container>
    </section>
  );
};
export default IconSection;
