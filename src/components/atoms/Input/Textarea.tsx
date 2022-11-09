import React, { ChangeEvent, useEffect, useState } from 'react'

import { ValueType } from '~/types'

export interface IProps {
  placeholder?: string;
  type?: string;
  readonly?: boolean;
  handleChange: (_e: ValueType) => void;
  value: string | undefined;
  name: string;
  full?: boolean;
  fcolor?: string;
  bcolor?: string;
  pcolor?: string;
  width?: string | number;
}

export default function Textarea({
    placeholder = '',
    readonly = false,
    value,
    name,
    full,
    fcolor = 'primary',
    bcolor = 'tertiary',
    pcolor = 'txt-secondary',
    width = '80',
    handleChange,
    ...attrs
}: IProps) {
    const [_value, setValue] = useState('')

    useEffect(() => {
        setValue(value || '')
    }, [value])

    function handleOnChange(e: ChangeEvent<HTMLTextAreaElement>) {
        setValue(e.target.value)
        handleChange({ name, value: e.target.value })
    }
    return (
        <textarea
            {...attrs}
            placeholder={placeholder}
            name={name}
            value={_value}
            readOnly={readonly}
            className={`bg-transparent h-16 px-3 pt-4 placeholder-${pcolor} rounded-md ${
                full ? 'w-full' : `w-${width}`
            } focus:outline-none border-${bcolor} focus:border-${fcolor} border-2`}
            onChange={handleOnChange}
        />
    )
}
