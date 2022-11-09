
import React, { ButtonHTMLAttributes, DOMAttributes, ReactNode } from 'react'

interface PropTypes<T> extends ButtonHTMLAttributes<DOMAttributes<T>> {
  children: ReactNode;
  disabled?: boolean;
  full?: boolean;
  icon?: boolean;
  className?: string;
  isLoading?: boolean;
  unrounded?: boolean;
  onClick?: () => void;
}

export default function Button<T>({
    children,
    disabled,
    full,
    icon,
    className = '',
    onClick,
    isLoading,
    unrounded,
    ...attrs
}: PropTypes<T>) {
    // determine padding based on the style type of button
    const padding = icon ? '' : full ? 'py-3' : 'py-3 px-4'

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <button
            {...attrs}
            disabled={disabled || isLoading}
            onClick={onClick}
            className={`border-[1px] border-solid ${unrounded ? '' : 'rounded-[12px]'} text-sm outline-none transition ease-in-out 
      ${full && 'w-full'}
      ${padding} ${className}
      disabled:opacity-50`}>
            <span className="flex w-full space-x-2 transition justify-center ease-in-out">
                {isLoading && (
                    <span className="animate-spin ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                className="fill-current"
                                d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"
                            />
                        </svg>
                    </span>
                )}
                <span className="flex items-center text-center justify-center">{children}</span>
            </span>
        </button>
    )
}
