import classNames from 'classnames'
import React, { useEffect } from 'react'

export const DROPDOWN_POSITION = {
    TOP_RIGHT: 'top-right',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_LEFT: 'bottom-left',
    TOP_LEFT: 'top-left'
}

type Props = {
  className?: string;
  hideBorder? :boolean;
  isShown: boolean;
  position: string;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  requestClose: Function;
  style?: React.CSSProperties;
};

const Dropdown = (props: Props) => {
    const { className, isShown, position, children } = props
    const classProps: string = classNames(
        className,
        'dropdown z-50 p-4 absolute bg-white border border-[#f0f0f0] rounded-lg shadow-xl',
        { 'top-2 -right-40': position === DROPDOWN_POSITION.TOP_RIGHT },
        { 'top-2 -left-40': position === DROPDOWN_POSITION.TOP_LEFT },
        { 'bottom-2 -right-40': position === DROPDOWN_POSITION.BOTTOM_RIGHT },
        { 'bottom-2 -left-40': position === DROPDOWN_POSITION.BOTTOM_LEFT }
    )

    useEffect(() => {
        if (isShown)
            document.addEventListener('click', handleClickOutside, false)
        else
            document.removeEventListener('click', handleClickOutside, false)
    }, [isShown])

    const handleClickOutside = () => {
        // if (isShown && !event.target.classList.contains('dropdown'))
        //     isShown && requestClose()
    }

    if (!isShown) return <></>
    return <div className={classProps + (props.hideBorder ? '' : ' border-orange-800 border-[1px] ') + className} style={props.style || {}}>{children}</div>
}

Dropdown.defaultProps = {
    className: '',
    isShown: false,
    position: '',
    requestClose: () => {
        // do nothing
    }
}

export default Dropdown
