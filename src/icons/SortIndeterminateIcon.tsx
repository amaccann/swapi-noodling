import { CommonIconProps } from '../types';

export default function SortIndeterminateIcon({color, size}: CommonIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0L2 6V7H14V6L8 0Z" fill={color}/>
      <path d="M8 16L2 10V9H14V10L8 16Z" fill={color}/>
    </svg>
  );
}
