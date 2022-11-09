import Image from 'next/image'
import React from 'react'

const UpcomingEvents = () => {
    const eventsData = [
        { id: 1, title: 'Monthly PTA Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/cec0/adf2/e6f08af0169b9b4e64cac1ccee9ea8ce?Expires=1655078400&Signature=fnRwfQUjFqTUNmV8LAep9nRfLxcPVK0O0~U5U-ifN2317j5jQkX3D~q6upMhCWwVfh3jCHEkqV03EGOIB96iiutZN7XBR488H~Ci9gyINpP2lxCpXfZLbHE-kQRjlpZL2x33uVAgWqtXhFWQuKBzev-hjnWLBrfeEdg~2f4omUmsICv1sjyoRwCANyYBZIR9Hc1U~-0wQ2d1QYXpOvL3HgYges1Uhvbhtmu3YhH6WqWVT3V-xmOhd3E-lgc~2wNU5FE8uWERERQCKCo2CV6K~46LCbJgI7GWQwwaR~c5u022LVXTPH5SPmEeHvOjLfgM0p9SNaPeTlHFyORYfWhRQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 2, title: 'Basketball Competition', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/85bf/c839/85c0c31f46394b7799fa51667c2adb5e?Expires=1655078400&Signature=SX1NUg7HGcAvgR-BskyQlPXc84jDlN9q3SSFdBy6MT-kwO3hvCinh9ay1SDNhwdD3kAchHR7YFbZJOXUrkCJGdeyVKjcbY-avq4Iossp24hkNmbNpBLBAyGxpP1YIBSqJg0Zgf8~ZTRTMI6tcqXLMgNKz9vVdmvPtUCBdNjVxHfEBLhgk30wCF1egkl~pJJvuN80C6e19VKpYhpbZCLdik5VxIa7~h5zDtBoWIva55ddr13syKSjX1FAqiPuQp9RvAo8xyT9U5GGeRbXLmeaGnHedIXJWhOgmNSfK-LOonU3k6ZB654ipGS85pHtUyCyhWmzlFQgBNXIXphnXgKIQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 3, title: 'Teachers Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/18ae/41ba/ba183bf0cf274de9ea51a4acebaa30ca?Expires=1655078400&Signature=OAuAeR0lcjHE--2aiUWo4pGxXAJTS0IV6HyWRwldCWzZgB35nTYoXmhZ7vCZoXsmmmzSx2xAYEJoB5zL1YeN9RiaFgbY-kVV9DiPOAP3kg5STpZMSmqPnljlgGREq67qI3HQ9V9ls5ar-KA2lH7wo48d1iJUWlg5s7gegl3zNkyRcssWs1Oey5LKaFkx2~7qxm~FnB6CEmVTLKNlDDwq6ucjUBdsmz~yAz-tm~kMtfhenidtTASI5WTOH79nM-HXesL0g1nUU7XvhGcv9m3t87q1NJQkwJq7vXC7y1NXNHIO5Y17YCd2B~3BYoqovtlcIIZZclXk5f0ALTscewDxlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 4, title: 'Teachers Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/18ae/41ba/ba183bf0cf274de9ea51a4acebaa30ca?Expires=1655078400&Signature=OAuAeR0lcjHE--2aiUWo4pGxXAJTS0IV6HyWRwldCWzZgB35nTYoXmhZ7vCZoXsmmmzSx2xAYEJoB5zL1YeN9RiaFgbY-kVV9DiPOAP3kg5STpZMSmqPnljlgGREq67qI3HQ9V9ls5ar-KA2lH7wo48d1iJUWlg5s7gegl3zNkyRcssWs1Oey5LKaFkx2~7qxm~FnB6CEmVTLKNlDDwq6ucjUBdsmz~yAz-tm~kMtfhenidtTASI5WTOH79nM-HXesL0g1nUU7XvhGcv9m3t87q1NJQkwJq7vXC7y1NXNHIO5Y17YCd2B~3BYoqovtlcIIZZclXk5f0ALTscewDxlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 5, title: 'Teachers Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/18ae/41ba/ba183bf0cf274de9ea51a4acebaa30ca?Expires=1655078400&Signature=OAuAeR0lcjHE--2aiUWo4pGxXAJTS0IV6HyWRwldCWzZgB35nTYoXmhZ7vCZoXsmmmzSx2xAYEJoB5zL1YeN9RiaFgbY-kVV9DiPOAP3kg5STpZMSmqPnljlgGREq67qI3HQ9V9ls5ar-KA2lH7wo48d1iJUWlg5s7gegl3zNkyRcssWs1Oey5LKaFkx2~7qxm~FnB6CEmVTLKNlDDwq6ucjUBdsmz~yAz-tm~kMtfhenidtTASI5WTOH79nM-HXesL0g1nUU7XvhGcv9m3t87q1NJQkwJq7vXC7y1NXNHIO5Y17YCd2B~3BYoqovtlcIIZZclXk5f0ALTscewDxlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 6, title: 'Teachers Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/18ae/41ba/ba183bf0cf274de9ea51a4acebaa30ca?Expires=1655078400&Signature=OAuAeR0lcjHE--2aiUWo4pGxXAJTS0IV6HyWRwldCWzZgB35nTYoXmhZ7vCZoXsmmmzSx2xAYEJoB5zL1YeN9RiaFgbY-kVV9DiPOAP3kg5STpZMSmqPnljlgGREq67qI3HQ9V9ls5ar-KA2lH7wo48d1iJUWlg5s7gegl3zNkyRcssWs1Oey5LKaFkx2~7qxm~FnB6CEmVTLKNlDDwq6ucjUBdsmz~yAz-tm~kMtfhenidtTASI5WTOH79nM-HXesL0g1nUU7XvhGcv9m3t87q1NJQkwJq7vXC7y1NXNHIO5Y17YCd2B~3BYoqovtlcIIZZclXk5f0ALTscewDxlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 7, title: 'Teachers Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/18ae/41ba/ba183bf0cf274de9ea51a4acebaa30ca?Expires=1655078400&Signature=OAuAeR0lcjHE--2aiUWo4pGxXAJTS0IV6HyWRwldCWzZgB35nTYoXmhZ7vCZoXsmmmzSx2xAYEJoB5zL1YeN9RiaFgbY-kVV9DiPOAP3kg5STpZMSmqPnljlgGREq67qI3HQ9V9ls5ar-KA2lH7wo48d1iJUWlg5s7gegl3zNkyRcssWs1Oey5LKaFkx2~7qxm~FnB6CEmVTLKNlDDwq6ucjUBdsmz~yAz-tm~kMtfhenidtTASI5WTOH79nM-HXesL0g1nUU7XvhGcv9m3t87q1NJQkwJq7vXC7y1NXNHIO5Y17YCd2B~3BYoqovtlcIIZZclXk5f0ALTscewDxlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
        { id: 8, title: 'Teachers Meeting', time: 'May 6, 3:30pm', image: 'https://s3-alpha-sig.figma.com/img/18ae/41ba/ba183bf0cf274de9ea51a4acebaa30ca?Expires=1655078400&Signature=OAuAeR0lcjHE--2aiUWo4pGxXAJTS0IV6HyWRwldCWzZgB35nTYoXmhZ7vCZoXsmmmzSx2xAYEJoB5zL1YeN9RiaFgbY-kVV9DiPOAP3kg5STpZMSmqPnljlgGREq67qI3HQ9V9ls5ar-KA2lH7wo48d1iJUWlg5s7gegl3zNkyRcssWs1Oey5LKaFkx2~7qxm~FnB6CEmVTLKNlDDwq6ucjUBdsmz~yAz-tm~kMtfhenidtTASI5WTOH79nM-HXesL0g1nUU7XvhGcv9m3t87q1NJQkwJq7vXC7y1NXNHIO5Y17YCd2B~3BYoqovtlcIIZZclXk5f0ALTscewDxlQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
    ]
    return (
        <div className='w-full p-6 py-1 border-t pt-4'>
            <div className='flex items-center justify-between'>
                <p className='text-xl font-medium text-textColor'>Upcoming Events</p>
                <p className='underline text-primary cursor-pointer text-sm'>View all</p>
            </div>

            <div className='my-3 space-y-2'>
                {eventsData.map(event => (
                    <div className='flex items-center gap-4 mt-4 shadow-md w-full p-4' key={event.id}>
                        <div className='w-14 h-14 relative rounded-md'>
                            <Image src={event.image} alt={event.title} className="rounded-md" layout='fill' objectFit='cover' />
                        </div>
                        <div className='space-y-0'>
                            <h1 className='text-neutral-850 font-medium'>{event.title}</h1>
                            <p className='text-neutral-600 font-medium'>{event.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UpcomingEvents
