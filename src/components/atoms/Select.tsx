import React, { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon'

 interface SelectData {
    value: string | number;
    label: string;
    subLabel?: string;
}

interface SelectProps {
    handleChange: (value: string, name: string) => void,
    name: string,
    placeholder: string,
    options: SelectData[],
    className:string,
    disabled:boolean,
    required:boolean,
    loading:boolean,
    value:string,
    hasError:boolean,
    width: string,
    hasIcon?: boolean,
    addOtherValue?: boolean,
}

const randomString = () => Math.random().toString(36).substr(2, 9)

export default function Select({
    handleChange,
    name,
    placeholder,
    options,
    className = '',
    disabled = false,
    required = true,
    loading = false,
    value = '',
    hasError = false,
    width = '80',
    hasIcon = true,
    addOtherValue = true
}: SelectProps) {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const [internalValue, setInternalValue] = useState(value)

    const [searchQuery, setsearchQuery] = useState('')
    const [filtered, setfiltered] = useState<SelectData[]>([])

    const [_placeholder, setPlaceholder] = useState(
        placeholder || `Select ${name.replaceAll('_', ' ').toLocaleLowerCase()}`
    )

    const input = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const opts = options.filter((opt) => opt.value.toString().length > 0)
        setfiltered([...opts] || [])
    }, [options])

    // if value prop changes, update internalValue
    useEffect(() => {
        if (value !== internalValue) setInternalValue(value)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    // when internal value changes, call handleChange
    useEffect(() => {
        handleChange(internalValue, name)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [internalValue])

    useEffect(() => {
        if (internalValue.length > 0) {
            setPlaceholder(
                options.find((op) => op.value === internalValue)?.label || placeholder || ''
            )
        }
    }, [internalValue, options, placeholder])

    const handleSelect = (value: string) => {
        setInternalValue(value)
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearchQuery(e.target.value)
        setfiltered(
            options.filter((op) =>
                op.label.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            )
        )
    }

    const handleAddOntherValue = (value: string) => {
        options.push({
            value: value.toLocaleLowerCase(),
            label: value
        })
    }

    // const handleArrowClick = () => {
    //   if (document.activeElement === input.current) {
    //     input.current?.blur();
    //   } else {
    //     input.current?.focus();
    //   }
    // };

    const selectId = useMemo(() => randomString(), [])
    return (
        <div className={`w-${width || 'full'} ${className}`}>
            <div>
                <div className="relative hover:border-primary-400">
                    {/* hidden input */}
                    <input
                        type="text"
                        name={name}
                        value={internalValue}
                        required={required}
                        onFocus={() => input.current?.focus()}
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onChange={() => {}}
                        className="border-none focus:outline-none absolute w-full top-0 text-white h-0 placeholder-black"
                        style={{ zIndex: -10 }}
                    />
                    {/* input with placeholder */}
                    <input
                        disabled={disabled}
                        ref={input}
                        value={searchQuery}
                        onFocus={() => setisMenuOpen(true)}
                        placeholder={_placeholder}
                        onChange={handleSearch}
                        id={selectId}
                        onBlur={() => setisMenuOpen(false)}
                        className={`block w-full hover:border-primary-400 placeholder-${
                            internalValue ? 'black' : 'txt-secondary'
                        } h-12 text-sm border-2 border-${
                            hasError ? 'error-500' : 'tertiary'
                        }  rounded-md px-4 focus:border-primary-500 focus:outline-none font-normal cursor-pointer ${className}`}
                    />
                    {hasIcon && (
                        <label
                            htmlFor={selectId}
                            className="inline absolute top-3 right-1 cursor-pointer">
                            <Icon name={'chevron-down'} className="h-[0.551rem] w-[0.875rem]" />
                        </label>)
                    }
                </div>
                {/* Dropdown menu */}
                <div
                    className={`${
                        isMenuOpen ? 'relative' : 'hidden'
                    } w-full p-0 m-0 pt-2 bg-white z-10`}>
                    <div
                        className="py-1 origin-top max-h-60 overflow-y-auto overflow-x-hidden absolute w-full rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none p-0 m-0"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button">
                        <div className="static">
                            {filtered.map((op) => (
                                // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                                <div
                                    key={op.value}
                                    onMouseDown={() => handleSelect(op.value.toString())}
                                    className={`py-2 cursor-pointer ${
                                        internalValue === op.value
                                            ? 'bg-primary-500 text-gray-500'
                                            : 'bg-main text-black hover:bg-blue-100'
                                    } rounded-none text-left px-4 text-base capitalize`}>
                                    {op.label}
                                </div>
                            ))}

                            {filtered.length === 0 && (
                                <>
                                    <p className="py-2 text-left px-4 text-base text-gray-500">
                                        {loading ? 'loading...' : 'No options available'}
                                    </p>
                                </>
                            )}

                            {/* display add button when value not found in filtered array */}
                            {addOtherValue && filtered.length <= 0 && searchQuery.length > 0
                                ? (
                                    <div className='py-2 px-4 flex flex-row gap-[6px] items-center hover:bg-blue-100 cursor-pointer'
                                        onClick={() => handleAddOntherValue(searchQuery)}>
                                        <div className='w-[16px] h-[16px] border-[0.7px] rounded-full flex justify-center items-center'>
                                            <Icon name='plus' size={9}/>
                                        </div>
                                        <p>Add <span className='inline-block capitalize'>{searchQuery}</span></p>
                                    </div>
                                )
                                : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
