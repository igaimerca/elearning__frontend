import React from 'react'
import Button from '~/components/atoms/Button'
import './styles.module.css'
// eslint-disable-next-line import/order
import bg from '/public/assets/images/notification-alert-bg.svg'

interface INotificationAlertProps {
    status?: string,
    date?: string,
    message?: string
}
const NotificationAlert: React.FC<INotificationAlertProps> = ({ status, date, message }) => {
    const closeAlert = () => {
        return 0
    }
    return (
        <div className='bg-white bg-image rounded-xl py-5 flex justify-between items-center'
            style={{
                backgroundImage: `url(${bg.src})`,
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className='px-[2em] flex gap-5 items-center w-[65%]'>
                <div className='px-4 h-[30px] rounded-[10px] bg-[#667eea18] flex items-center'>
                    <label className=' text-[11px] text-[#667EEA]'>{status}</label>
                </div>
                <div className='text-13px'>
                    <h1 className='text-[13px] font-bolder'>{message} <span className='text-[#667EEA] underline'>Set reminder</span></h1>
                    <label className='text-[11px] text-[#B2B2B2]'>{date}</label>
                </div>
            </div>
            <div className='pr-[3em]'>
                <Button type='submit' onClick={closeAlert} className='bg-[#667EEA] p-2 cursor-pointer px-3 rounded-xl' disabled={false}>
                    <label className='text-white text-[10px] cursor-pointer'>Close</label>
                </Button>
            </div>
        </div>
    )
}

export default NotificationAlert
