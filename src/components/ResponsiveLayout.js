import { useWindowDimensions } from "services/WindowDimensionsProvider";

const ResponsiveLayout = ({ breakPoint = 414, renderMobile, renderDesktop }) => {
  const { width } = useWindowDimensions();
  return width > breakPoint ? renderDesktop() : renderMobile();
};

export default ResponsiveLayout;
