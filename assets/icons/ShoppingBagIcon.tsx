import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

export function ShoppingBagIcon(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        opacity={0.737212}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.9312 1.52979L1.62845 4.63715V15.5129C1.62845 16.371 2.31577 17.0666 3.16362 17.0666H13.9098C14.7576 17.0666 15.445 16.371 15.445 15.5129V4.63715L13.1422 1.52979H3.9312Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.737212}
        d="M1.62845 5.414H15.445"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity={0.737212}
        d="M11.9908 8.43506C11.9908 9.86519 10.6377 11.0245 8.96847 11.0245C7.29927 11.0245 5.94611 9.86519 5.94611 8.43506"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
