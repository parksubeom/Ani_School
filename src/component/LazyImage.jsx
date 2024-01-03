import React from "react";

const LazyImage = ({ width, height, alt, src }) => {
  return (
    <img loading="lazy" width={width} height={height} alt={alt} src={src} />
  );
};

export default LazyImage;
