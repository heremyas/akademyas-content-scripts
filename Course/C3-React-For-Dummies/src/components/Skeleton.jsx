import React from "react";

const Skeleton = ({ isLoaded, children }) => {
  return (
    <div
      style={{
        backgroundColor: isLoaded ? "transparent" : "gray",
        lineHeight: 0.1,
        paddingRight: "1em",
        paddingLeft: "1em",
        borderRadius: "1em",
      }}
    >
      {children}
    </div>
  );
};

export default Skeleton;
