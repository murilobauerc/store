import React from "react";
import ImageNotFound from "../../assets/images/NotFound404.jpg";

const PageNotFound = () => {
  return (
    <>
      <a href="">
        <img src={ImageNotFound} />
      </a>
    </>
  );
};

export default PageNotFound;
