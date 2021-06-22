import * as React from 'react'
import { StyledTextField } from './TextField.style'

export interface TextFieldProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  limit: number
}

const TextField: React.FC<TextFieldProps> = ({ value, onChange, label, limit }) => {
  return (
    <StyledTextField
      label={label}
      inputProps={{
        maxLength: limit,
      }}
      helperText={`${value.length}/${limit}`}
      value={value}
      onChange={onChange}
      multiline
      margin='normal'
      variant='outlined'
    />
  )
}

export default TextField
