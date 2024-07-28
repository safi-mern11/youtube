import React from 'react';

interface CustomSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMouseUp: (e: React.MouseEvent<HTMLInputElement>) => void;
  className?: string;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  min,
  max,
  value,
  onChange,
  onMouseUp,
  className,
}) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      onMouseUp={onMouseUp}
      className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
      style={{
        background: `linear-gradient(to right, #4f46e5 0%, #4f46e5 ${(value - min) / (max - min) * 100}%, #e5e7eb ${(value - min) / (max - min) * 100}%, #e5e7eb 100%)`,
      }}
    />
  );
};

export default CustomSlider;
