import React, { useRef } from 'react'
import { Input, InputContainer } from './NumberInput.styled'

interface NumberInputProps {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: number
  label: string
}

const NumberInput: React.FC<NumberInputProps> = ({
  changeHandler,
  value,
  label
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <InputContainer>
      {/* <label htmlFor='valueInput'>{label}</label> */}
      <span>{label}</span>
      <Input
        ref={inputRef}
        id='valueInput'
        type='number'
        value={value}
        onChange={changeHandler}
        onMouseEnter={() => {
          inputRef.current?.focus()
        }}
      />
    </InputContainer>
  )
}
export default NumberInput
