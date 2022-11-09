import Image from 'next/image'

export type IconNames =
  | 'check'
  | 'close'
  | 'search'
  | 'stars'
  | 'close'
  | 'plus'
  | 'white-plus'
  | 'ellipsis-v'
  | 'ellipsis-h'
  | 'file'
  | 'file-alt'
  | 'clock'
  | 'trash'
  | 'slideshow'
  | 'notes'
  | 'filter'
  | 'sort'
  | 'star'
  | 'star-yellow'
  | 'arrow-top-right'
  | 'angle-right'
  | 'chevron-down'
  | 'checkvron-up'
  | 'exclamation'
  | 'refresh'
  | 'refresh'
  | 'calendar'
  | 'calender-blue'
  | 'right-arrow'
  | 'left-arrow'
  | 'right-arrow-white'
  | 'left-arrow-white'
  | 'more-horizontal'
  | 'green-menu'
  | 'red-menu'
  | 'yellow-menu'
  | 'green-menu-h'
  | 'yellow-menu-h'
  | 'pink-menu-h'
  | 'vertical-menu'
  | 'copy'
  | 'calendar-icon'
  | 'edit-icon'
  | 'edit-icon-black'
  | 'camera-icon'
  | 'menu'
  | 'menu-gray'
  | 'vertical-menu-black'
  | 'a'
  | 'a-plus'
  | 'b'
  | 'b-plus'
  | 'add-icon'
  | 'c'
  | 'download'
  | 'plus-primary'
  | 'trash-red'
  | 'horizontal-menu'
  | 'left-align'
  | 'right-align'
  | 'center-align'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'chevron-blue'
  | 'ellipse-yellow'
  | 'ellipse-green'
  | 'ellipse-red'
  | 'time-clock'
  | 'time-clock-red-stoked'
  | 'time-clock-green-strocked'
  | 'link'
  | 'lock'
  | 'upload-file'
  | 'export'
  | 'add-account'
  | 'link-horizontal'
  | 'clock-red'
  | 'clock-green'
  | 'clock-bg-red'
  | 'clock-bg-green'
  | 'attachment'
  | 'due'
  | 'account-management'
  | 'top-arrow'
  | 'bottom-arrow-primary'
  | 'eye'
  | 'comment'
  | 'info-primary'
  | 'eye-black'
  | 'setting-icon'
  | 'file-icon'
  | 'attach-file'
  | 'arrow-goto'
  | 'warning-neutral'
  | 'warning-white'
  | 'arrow-goto-blue'
  | 'heart'
  | 'right-top-arrow'
  | 'pen-underlined'
  | 'trash-red-o'
  | 'share'
  | 'alarm'
  | 'add-circle'
  | 'actions'
  | 'calendar-rounded'
  | 'book-open'

interface IconProps {
  name: IconNames;
  className?: string;
  height?: number;
  width?: number;
  size?: number;
  color?: string;
  alt?: string;
  onClick?: () => void;
}

export default function aIcon({
    name,
    className = '',
    size = 24,
    height = size,
    width = size,
    alt = name + ' icon',
    onClick = () => {
        // do nothing
    }
}: IconProps) {
    return (
        <Image
            src={`/assets/icons/${name}.svg`}
            priority
            alt={alt}
            width={width}
            height={height}
            className={className}
            onClick={onClick}
        />
    )
}
