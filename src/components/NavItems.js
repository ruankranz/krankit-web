/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavItems(props) {
  return (
    <div css={nav_items}>
      <Link css={nav_item} to="/">
        About
      </Link>
      <Link css={nav_item} to="/apps">
        Apps
      </Link>
      <Link css={nav_item} to="/games">
        Games
      </Link>
      <Link css={nav_item} to="/news">
        News
      </Link>
      <Link css={nav_item} to="/shop">
        <div css={nav_icon}>
          <FaShoppingCart />
        </div>
      </Link>
    </div>
  );
}

export default NavItems;

const nav_items = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30em;
  margin: 0 0 0 auto;
`;
const nav_icon = css`
  font-size: 1.2em;
  float: right;
`;

const nav_item = css`
  height: 1.35em;
  display: block;
  width: 4em;
  margin: 0 auto;
  font-size: 1.6em;

  &:hover {
    text-decoration: underline;
    color: red;
  }
`;
