import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import styles from './Input.module.css';

type InputType = string | number;

/**
 * 
 * @param debounceBy Throttle how often the onChange triggered by user typing is invoked
 * @param onChange Callback when the input is changed
 * @param value given for the Input
 * @returns 
 */
export default function InputField({
  debounceBy,
  onChange,
  placeholder = '',
  value: currentValue
}: {
  debounceBy?: number,
  onChange: (value: InputType) => void,
  placeholder: string,
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
    <input className={styles.input} onChange={onInputChange} placeholder={placeholder} value={value} />
  );
}