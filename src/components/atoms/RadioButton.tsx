import React, { useEffect, useState } from 'react'

type Props = {
    value?: string;
    options: Array<{
        subLabel?: string;
        value: string;
        label: string;
    }>;
    name: string;
    handleChange: ({ name, value, event }: {
        name: string;
        value: string;
        event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>;
    }) => void;
    type?: 'inline' | 'block';
}

export default function Radio({
    value = '',
    options,
    type = 'inline',
    name,
    handleChange,
    ...attrs
}: Props) {
    const [active, setActive] = useState('')

    useEffect(() => setActive(value.toString()), [value])

    function handleClick(value: string, event: React.MouseEvent<HTMLDivElement>) {
        setActive(value)
        handleChange({ value, name, event })
    }

    function handleKeyPress(value: string, event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) {
        setActive(value)
        handleChange({ value, name, event })
    }

    return (
        <div
            className={`flex ${type === 'block' && 'flex-col'}`}
            role="radiogroup"
            {...attrs}>
            {options?.map(({ label, value, subLabel }) => (
                <div
                    role="radio"
                    tabIndex={0}
                    key={value}
                    aria-checked={active === value}
                    aria-labelledby={label}
                    className={`flex cursor-pointer items-center ${
                        type === 'block' ? 'w-48 rounded-lg py-2 px-2 my-1' : 'mr-4'
                    }`}
                    onClick={(e) => handleClick(value, e)}
                    onKeyPress={(e) => handleKeyPress(value, e)}>
                    <span
                        className={`mx-2 w-5 h-5 rounded-full border-solid 
            ${active === value
                    ? 'border-6 border-blue-700'
                    : 'border-4 border-blue-700'}`}></span>
                    {!subLabel
                        ? (
                            <span>{label}</span>
                        )
                        : (
                            <span className="block">
                                <span className="font-semibold inline-block text-sm"> {label} </span>
                                <span className=" text-blue-600 text-sm inline-block">{subLabel}</span>
                            </span>
                        )}
                </div>
            ))}
        </div>
    )
}
