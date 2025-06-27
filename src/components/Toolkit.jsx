import { useEffect, useState } from 'react';
import { MousePointer2, Hand, SquareDashed, Route } from 'lucide-react';

const tools = [
  { name: 'default', Icon: MousePointer2, cursor: 'default' },
  { name: 'hand', Icon: Hand, cursor: 'grab' },
  { name: 'route', Icon: Route, cursor: 'default' },
  { name: 'square', Icon: SquareDashed, cursor: 'default' }
];

const Toolkit = () => {
  const [activeTool, setActiveTool] = useState('default');
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
  const tool = tools.find((t) => t.name === activeTool);
  if (tool?.name === 'hand' && isMouseDown) {
    document.body.style.cursor = 'grabbing';
  } else {
    document.body.style.cursor = tool?.cursor || 'default';
  }
}, [activeTool, isMouseDown]);

useEffect(() => {
  const handleMouseDown = () => setIsMouseDown(true);
  const handleMouseUp = () => setIsMouseDown(false);

  window.addEventListener('mousedown', handleMouseDown);
  window.addEventListener('mouseup', handleMouseUp);

  return () => {
    window.removeEventListener('mousedown', handleMouseDown);
    window.removeEventListener('mouseup', handleMouseUp);
  };
}, []);


  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-white flex rounded-md gap-4 p-4 shadow-md shadow-black">
      {tools.map((tool) => (
        <tool.Icon
          key={tool.name}
          size={30}
          strokeWidth={1.5}
          onClick={() => setActiveTool(tool.name)}
          className={`cursor-pointer text-gray-600 hover:text-purple-800 ${
            activeTool === tool.name ? 'text-purple-800' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default Toolkit;
