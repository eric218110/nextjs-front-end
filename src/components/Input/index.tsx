import React, { useRef, useState, useEffect, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container, Error, IconError } from './styles';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  Icon?: React.ComponentType<IconBaseProps>;
  backgroundColor?: string;
}

const Input: React.FC<IProps> = ({ name, Icon, backgroundColor, ...props }) => {
  const { fieldName, defaultValue, registerField, error } = useField(name);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFoocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setisFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      backgroundColor={backgroundColor}
    >
      {Icon && <Icon />}
      <input
        onFocus={handleInputFoocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
        size={20}
      />
      {error && (
        <Error title={error}>
          <IconError />
        </Error>
      )}
    </Container>
  );
};

export default Input;
