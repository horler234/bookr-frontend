import { FocusEventHandler, useState } from "react";
import styled from "styled-components";
import { HiddenLabel } from "./HiddenLabel";

const InputWrapper = styled.input`
  width: 100%;
  padding: 0 16px;
  border: 2px solid #a3a3a3;
  border-radius: 8px;
  width: 100%;
  padding: 29px 16px 26px;
  background: none;
  font-size: 16px;
  line-height: 18.75px;
  margin-top: 30px;
  font-family: inherit;
  &:focus {
      outline: none;
    }
  }
`;

/**
 * InputProps contains the props used in the input components
 * @param label label text
 * @param placeholder placeholder text in the input field
 * @param text input value
 * @param id id of the input and also the "for" attribute of the label
 * @param widthSmall width of input from tablet mini to the smallest screen size
 * @param widthLarge width of input from tablet mini to the largest screen size
 * @param onChange function fired when a user types in the input field
 */

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  onChange?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  value?: string;
  onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
}

export const Input = ({
  onChange,
  onFocus,
  onBlur,
  label,
  placeholder,
  id,
  value,
  maxLength,
}: InputProps) => {
  return (
    <>
      <HiddenLabel>{label}</HiddenLabel>
      <InputWrapper
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </>
  );
};
