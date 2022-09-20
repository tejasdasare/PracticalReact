import React, { forwardRef } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import IconsPractice from "./IconsPractice";

const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First LINE</div>
      <div>SECOND LINE</div>
    </div>
  );
});
const TooltipPractice = () => {
  return (
    <div>
      TooltipPractice
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          arrow={false}
          delay={1000}
          placement="right"
          content="Basic Tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>
      {/*  */}
      <div style={{ paddingBottom: "80px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>
      {/*  */}
      <div style={{ paddingBottom: "80px" }}>
        <Tippy content={<IconsPractice />}>
          <button>Hover</button>
        </Tippy>
      </div>
      {/*  */}
      <div style={{ paddingBottom: "80px" }}>
        <Tippy content={<IconsPractice />}>
          <CustomChild />
        </Tippy>
      </div>
    </div>
  );
};

export default TooltipPractice;
