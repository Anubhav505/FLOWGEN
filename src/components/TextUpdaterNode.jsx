import { Handle } from '@xyflow/react';

export default function TextUpdaterNode({ data }) {
  return (
    <div className='border border-[#1f1f1f] rounded-md bg-white p-2'>
      <div>{data.label}</div>
      <Handle type="source" position="top" />
      <Handle type="target" position="bottom" />
    </div>
  );
}
