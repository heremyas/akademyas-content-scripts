import React, { useState, useEffect } from "react";

const Notes = ({ initialPos = { x: 0, y: 0 }, children, ...props }) => {
  const [pos, setPos] = useState(initialPos);
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;
      setPos({
        x: e.pageX - rel.x,
        y: e.pageY - rel.y,
      });
      e.preventDefault();
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging, rel]);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    const pos = e.target.getBoundingClientRect();
    setDragging(true);
    setRel({
      x: e.pageX - pos.left,
      y: e.pageY - pos.top,
    });
    e.preventDefault();
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        cursor: "grab",
        backgroundColor: "yellow",
        padding: 20,
        width: "200px",
        height: "200px",
        borderRadius: "1em",
        display: "flex",
        ...props.style,
      }}
      {...props}
    >
      <button
        style={{
          padding: 2,
          paddingLeft: 10,
          paddingRight: 10,
          height: "fit-content",
          justifySelf: "flex-end",
        }}
      >
        X
      </button>
    </div>
  );
};

export default Notes;
