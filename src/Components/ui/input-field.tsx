import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import { InputProps } from '../types/input-field.type'

export const InputField = (props: InputProps) => {

  return (
    <InputGroup className={props.className}>
      {props.iconPrefix && <InputGroup.Text id={props.id}>{props.iconPrefix}</InputGroup.Text>}
      <Form.Control
        disabled={props.disabled}
        type={ props.type }
        placeholder={props.placeholder ?? 'pass in your placeholder'}
        aria-label={props.ariaLabel}
        aria-describedby={props.id}
        className={props.className}
        autoComplete='off'
        autoFocus={false}
        autoCorrect= 'off'
        maxLength={props.maxLength}
        height={props.height}
        onChange={props.onChange}
        id={props.id}
      />
      {props.iconsuffix && 
      <InputGroup.Text id={props.id}>
        {props.iconsuffix}
      </InputGroup.Text>
      }
    </InputGroup>
  )
}
