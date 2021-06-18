/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module "*.png" {
  const value: any;
  export default value;
}

// declare module "\*.svg" {
//   import React = require("react");
//   export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
//   const src: string;
//   export default src;
// }


// declare module '*.svg' {
//   const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
//   export default content;
// }

// declare module "*.svg" {
//   const content: any;
//   export default content;
// }

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

// declare module '*.svg' {
//   const svgUrl: string;
//   const svgComponent: SvgrComponent;
//   export default svgUrl;
//   export { svgComponent as ReactComponent }
// }
