import { useState, MouseEvent } from "react";

const EscapeButton = () => {
  const [position, setPosition] = useState({ top: "100px", left: "100px" });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const buttonRect = target.getBoundingClientRect();
    const buttonCenter = {
      x: buttonRect.left + buttonRect.width / 2,
      y: buttonRect.top + buttonRect.height / 2,
    };

    const cursorDistance = Math.sqrt(
      Math.pow(e.clientX - buttonCenter.x, 2) +
        Math.pow(e.clientY - buttonCenter.y, 2),
    );

    if (cursorDistance < 200) {
      const newPositionTop = Math.floor(
        Math.random() * (window.innerHeight - buttonRect.height * 2),
      );
      const newPositionLeft = Math.floor(
        Math.random() * (window.innerWidth - buttonRect.width * 2),
      );

      setPosition({
        top: `${Math.max(0, Math.min(newPositionTop, window.innerHeight - buttonRect.height))}px`,
        left: `${Math.max(0, Math.min(newPositionLeft, window.innerWidth - buttonRect.width))}px`,
      });
    }
  };

  return (
    <button
      // disabled
      onMouseMove={handleMouseMove}
      className="absolute z-50 select-none text-nowrap p-5"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      Go Home
    </button>
  );
};

export default EscapeButton;
