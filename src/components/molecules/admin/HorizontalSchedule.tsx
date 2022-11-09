import SlideCalendar from '~/components/molecules/calendar/SlideCalendar'
import Icon from '~/components/atoms/Icon'

const HorizontalSchedule = () => {
    return (
        <div className='w-full p-6 pt-4 pb-0'>
            <div className='flex items-center justify-between'>
                <p className='text-xl font-medium text-textColor'>Schedule</p>
                <div className='flex items-center justify-center h-10 w-10 bg-neutral-200 rounded-full'>
                    <Icon name="calendar" size={18} />
                </div>
            </div>
            <div className='w-full space-y-1 mt-10'>
                <SlideCalendar />
            </div>
        </div>
    )
}

export default HorizontalSchedule
