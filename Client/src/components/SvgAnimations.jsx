import React from "react";

const importAll = (r) => r.keys().map(r);
const svgs = importAll(require.context("../assets/svgs", false, /\.svg$/));

const SvgAnimations = () => {
  return (
    <div className="header__animation">
      {svgs.map((Svg, index) => (
        <img
          src={Svg}
          alt={`Animation ${index + 1}`}
          className="svg-animation"
          key={index}
        />
      ))}
    </div>
  );
};

export default SvgAnimations;
