import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import {InputField, Label} from './styled';

type InputType = string | number;

/**
 * 
 * @param debounceBy Throttle how often the onChange triggered by user typing is invoked
 * @param onChange Callback when the input is changed
 * @param value given for the Input
 * @returns 
 */
export default function Input({
  debounceBy,
  label,
  name,
  onChange,
  placeholder = '',
  style,
  value: currentValue
}: {
  debounceBy?: number,
  label: string,
  name: string,
  onChange: (value: InputType) => void,
  placeholder: string,
  style?: Record<string, number|string>,
  value: InputType
}) {
  const [value, setValue] = useState<InputType>(currentValue);
  const ref = useRef<number>(-1);

  function onInputChange(e: BaseSyntheticEvent) {
    const newValue = e.target.value;
    setValue(newValue);
    if (ref.current) {
      clearTimeout(ref.current);
    }

    ref.current = window.setTimeout(() => {
      onChange(newValue);
    }, debounceBy);
  }

  useEffect(() => {
    return () => {
      if (ref.current) {
        window.clearTimeout(ref.current);
      }
    };
  }, []);

  return (
    <div style={style}>
      <Label htmlFor={name}>{label}</Label>
      <InputField
        id={name}
        name={name}
        onChange={onInputChange}
        placeholder={placeholder}
        value={value} />
    </div>
  );
}