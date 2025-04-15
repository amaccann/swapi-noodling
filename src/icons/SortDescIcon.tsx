import { CommonIconProps } from '../types';

export default function SortDescIcon({color, size}: CommonIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 11H3L3 0H5L5 11H8V12L4 16L0 12V11Z" fill={color}/>
      <path d="M16 0H10V2H16V0Z" fill={color}/>
      <path d="M10 4H14V6H10V4Z" fill={color}/>
      <path d="M12 8H10V10H12V8Z" fill={color}/>
    </svg>  );
}
