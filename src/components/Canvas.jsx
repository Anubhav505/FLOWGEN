import React, { useRef, useState, useEffect } from "react";

const Canvas = () => {
  const canvasRef = useRef();
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      if (event.deltaY < 0) {
        setZoom((prevZoom) => Math.min(prevZoom + 0.1, 5));
      } else {
        setZoom((prevZoom) => Math.max(prevZoom - 0.1, 0.2));
      }
    };

    const canvas = canvasRef.current;
    canvas.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      canvas.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className="w-full h-screen bg-gray-100 flex items-center justify-center overflow-hidden"
    >
      <div
        className="w-64 h-64 bg-white shadow-lg flex items-center justify-center text-xl font-bold transition-transform duration-200"
        style={{ transform: `scale(${zoom})` }}
      >
        Zoom Me
      </div>
    </div>
  );
};

export default Canvas;
