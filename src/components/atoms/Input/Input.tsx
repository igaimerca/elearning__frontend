import { useEffect, useState } from 'react'
import { InputProps } from '~/types/props'

export default function Input({
    placeholder = '',
    type = 'text',
    readonly = false,
    required = true,
    value = '',
    name,
    min = 0,
    max,
    full,
    id,
    handleChange,
    className = '',
    ...attrs
}: InputProps) {
    const [_value, setValue] = useState<string>('')

    useEffect(() => setValue(value?.toString()), [value])
    // function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    //     setValue(e.target.value)
    //     if (handleChange && _value !== e.target.value)
    //         handleChange({ name, value: e.target.value })
    // }
    // useEffect(() => {
    // if (handleChange && _value !== value) handleChange({ name, value })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [name, value])

    return (
        <input
            {...attrs}
            placeholder={placeholder}
            name={name}
            type={type}
            defaultValue={_value}
            spellCheck="true"
            readOnly={readonly}
            required={required}
            min={min}
            max={max}
            id={id}
            autoComplete="off"
            onChange={handleChange}
            className={`${readonly ? 'bg-gray-100' : 'bg-transparent'} focus:shadow-outline border-[1px] border-neutral-600 outline-none rounded-[6px]
            focus:border-primary  focus:outline-none px-[16px] py-[18px]
            ${full ? 'w-full' : 'md:w-20'}
            ${className}`}

        />
    )
}
