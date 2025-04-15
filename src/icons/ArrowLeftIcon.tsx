import { BaseSyntheticEvent } from 'react';

export default function ArrowLeftIcon({
  className,
  color,
  onClick = () => {},
  size,
}: {
  className?: string,
  color?: string,
  onClick?: (e: BaseSyntheticEvent) => void,
  size: number
}) {
  return (
    <svg 
      className={className}
      fill={color}
      onClick={onClick}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 2">
        <g data-name="arrow-ios-back">
          <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
        </g>
      </g>
    </svg>
  );
}

