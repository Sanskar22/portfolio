import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../../constants/index";
import { sectionwraper } from "../hoc";

const Tech = () => {
  return (
    <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => {
        return (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default sectionwraper(Tech);
