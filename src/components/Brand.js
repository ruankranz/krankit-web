import { jsx, css } from "@emotion/core";

import logo from "../assets/metatron.png";

const Brand = () => {
  return <img css={logo_img} src={logo} alt="Company Logo" />;
};

export default Brand;

const logo_img = css`
  height: 85%;
  margin: auto 0;
`;
