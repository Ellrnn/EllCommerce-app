import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export function PipeIcon(props: SvgProps) {
  return (
    <Svg width={2} height={27} viewBox="0 0 2 27" fill="none" {...props}>
      <Path d="M1 0.298584V26.4058" stroke="#000" strokeWidth={0.5} />
    </Svg>
  );
}
