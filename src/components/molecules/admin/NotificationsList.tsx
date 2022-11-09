import { useGetCalendarEventsQuery } from '~/generated/graphql'
import client from '~/lib/client'

const NotificationsList = () => {
    const { data: events } = useGetCalendarEventsQuery(client)

    // const notifications = [
    //     { image: 'https://s3-alpha-sig.figma.com/img/a28d/6d8d/d4b341c5cb1337434f5a215086e62430?Expires=1654473600&Signature=arIbXbgbAXmLCKue8ipFKAHamlo1wzZRIIM4Nn6dXigO31RQAb5czWSQmto~~K6wJ5YCfTFuntlnnCjuiU8pwqJe5h9hf1nrCymKeq8yNuJGBLB3bgmlSiGcCjpxYY2cKoCMFBzc-QeQi32d4SPbxRkKZOfgJQtu2mYHISYG9OH5vl~9~yPhBzCpszR-tKNoygiij5CzJ1MpLVmOQdBk6OTcwlLrpamHN4NFmUy4-ycd5kMeYBL9SySI591Nxw0X3MFdOMgcsB1sS1dwaweKPzO32K8KCzB-dcWVr~adLQg6y1GNaG7WUK64f3CZwmfSEBoXXFQs3W-gqzZaI9rSog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heu...', time: '2h ago', isRead: false, school: 'Oxford High' },
    //     { image: 'https://s3-alpha-sig.figma.com/img/a28d/6d8d/d4b341c5cb1337434f5a215086e62430?Expires=1654473600&Signature=arIbXbgbAXmLCKue8ipFKAHamlo1wzZRIIM4Nn6dXigO31RQAb5czWSQmto~~K6wJ5YCfTFuntlnnCjuiU8pwqJe5h9hf1nrCymKeq8yNuJGBLB3bgmlSiGcCjpxYY2cKoCMFBzc-QeQi32d4SPbxRkKZOfgJQtu2mYHISYG9OH5vl~9~yPhBzCpszR-tKNoygiij5CzJ1MpLVmOQdBk6OTcwlLrpamHN4NFmUy4-ycd5kMeYBL9SySI591Nxw0X3MFdOMgcsB1sS1dwaweKPzO32K8KCzB-dcWVr~adLQg6y1GNaG7WUK64f3CZwmfSEBoXXFQs3W-gqzZaI9rSog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heu...', time: '2h ago', isRead: false, school: 'Oxford High' },
    //     { image: 'https://s3-alpha-sig.figma.com/img/a28d/6d8d/d4b341c5cb1337434f5a215086e62430?Expires=1654473600&Signature=arIbXbgbAXmLCKue8ipFKAHamlo1wzZRIIM4Nn6dXigO31RQAb5czWSQmto~~K6wJ5YCfTFuntlnnCjuiU8pwqJe5h9hf1nrCymKeq8yNuJGBLB3bgmlSiGcCjpxYY2cKoCMFBzc-QeQi32d4SPbxRkKZOfgJQtu2mYHISYG9OH5vl~9~yPhBzCpszR-tKNoygiij5CzJ1MpLVmOQdBk6OTcwlLrpamHN4NFmUy4-ycd5kMeYBL9SySI591Nxw0X3MFdOMgcsB1sS1dwaweKPzO32K8KCzB-dcWVr~adLQg6y1GNaG7WUK64f3CZwmfSEBoXXFQs3W-gqzZaI9rSog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heu...', time: '2h ago', isRead: false, school: 'Oxford High' },
    //     { image: 'https://s3-alpha-sig.figma.com/img/a28d/6d8d/d4b341c5cb1337434f5a215086e62430?Expires=1654473600&Signature=arIbXbgbAXmLCKue8ipFKAHamlo1wzZRIIM4Nn6dXigO31RQAb5czWSQmto~~K6wJ5YCfTFuntlnnCjuiU8pwqJe5h9hf1nrCymKeq8yNuJGBLB3bgmlSiGcCjpxYY2cKoCMFBzc-QeQi32d4SPbxRkKZOfgJQtu2mYHISYG9OH5vl~9~yPhBzCpszR-tKNoygiij5CzJ1MpLVmOQdBk6OTcwlLrpamHN4NFmUy4-ycd5kMeYBL9SySI591Nxw0X3MFdOMgcsB1sS1dwaweKPzO32K8KCzB-dcWVr~adLQg6y1GNaG7WUK64f3CZwmfSEBoXXFQs3W-gqzZaI9rSog__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', message: 'Lorem ipsum dolor sit amet, consectetur adipiscin mollis leo proin turpis eu heu...', time: '2h ago', isRead: false, school: 'Oxford High' }
    // ]
    return (
        <div className='w-full bg-white shadow-sm border rounded-md p-6 py-1'>
            <div className='flex items-center justify-between'>
                <p className='font-bold'>Notifications</p>
                <p className='underline text-primary cursor-pointer text-sm'>Mark all as read</p>
            </div>
            <div className='w-full space-y-1 my-3'>
                {events?.calendarevents.data.map((notification, index) => {
                    return (
                        <div className='border-b py-2' key={index}>
                            <div className='flex items-center gap-2 w-full'>
                                <div className='relative w-10 h-10 rounded-full flex items-center justify-center'>
                                    {/* <Image src={notification.image} layout="fill" objectFit="fill" alt="Profile" className='rounded-full' /> */}
                                    <div className='absolute bottom-0 -right-1 w-3 h-3 rounded-full bg-primary-500 bg-green-500 text-sm font-bold'></div>
                                </div>
                                <div className="flex-1">
                                    <p className='ml-2 text-xs'>{notification.title}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 ml-14 mt-1 mb-2 text-xs">
                                <p className='text-gray-500'>{notification.startDate}</p>
                                <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                {/* <p className='text-gray-500'>{notification.school}</p> */}
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <div className='w-full flex justify-center border-t-2 border-gray-300 py-4'>
                <button className='text-primary font-semibold text-sm'>View all notifications</button>
            </div>
        </div>
    )
}

export default NotificationsList
