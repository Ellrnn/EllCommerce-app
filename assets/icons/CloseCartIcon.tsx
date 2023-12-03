import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

export function CloseCartIcon(props: SvgProps) {
  return (
    <Svg width={46} height={47} viewBox="0 0 46 47" fill="none" {...props}>
      <Circle
        cx={22.9609}
        cy={23.4307}
        r={22.4609}
        fill="black"
        stroke="white"
      />
      <Path
        d="M11.836 35L21.604 22.328L21.56 23.868L12.276 11.9H15.796L23.408 21.8L22.088 21.756L29.7 11.9H33.132L23.76 24L23.804 22.328L33.66 35H30.096L22.044 24.44L23.276 24.616L15.356 35H11.836Z"
        fill="white"
      />
    </Svg>
  );
}
