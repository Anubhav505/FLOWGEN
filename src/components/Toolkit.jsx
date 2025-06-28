// components/Toolkit.jsx
import { MousePointer2, Hand, SquareDashed, Route } from "lucide-react";

const tools = [
  { name: "default", Icon: MousePointer2 },
  { name: "hand", Icon: Hand },
  { name: "route", Icon: Route },
  { name: "square", Icon: SquareDashed },
];

const Toolkit = ({ activeTool, setActiveTool }) => {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white flex rounded-md gap-4 p-4 shadow-md shadow-black">
      {tools.map((tool) => (
        <tool.Icon
          key={tool.name}
          size={30}
          strokeWidth={1.5}
          onClick={() => setActiveTool(tool.name)}
          className={`cursor-pointer text-gray-600 hover:text-purple-800 ${
            activeTool === tool.name ? "text-purple-800" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default Toolkit;
