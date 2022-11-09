import Icon from '~/components/atoms/Icon'
import DownPie from '~/components/molecules/charts/DownPie'
export default function AssigmentChart() {
    return (
        <div className='bg-white py-5 rounded-2xl min-w-[382px] max-w-[382px] px-6'>
            <div className='w-full flex justify-between'>
                <p className='font-medium text-neutral-950 text-xl'>Assignment</p>
                <Icon name='arrow-goto' width={12}/>
            </div>
            <div className='w-full '>
                <DownPie percentage={80} color={'#30BE2D'} className='mx-auto'/>
                <div className='flex justify-between max-w-[284px] mx-auto'>
                    <div className='flex flex-col gap-0'>
                        <div className='flex gap-1'>
                            <div className='h-[10px] w-[10px] rounded-full bg-green self-center'></div>
                            <p className='text-neutral-600 text-[14px]'>Completed</p>
                        </div>
                        <p className='text-neutral-800 font-medium text-center'>8</p>
                    </div>
                    <div className='flex flex-col gap-0'>
                        <div className='flex gap-1'>
                            <div className='h-[10px] w-[10px] rounded-full bg-red self-center'></div>
                            <p className='text-neutral-600 text-[14px] '>Incomplete</p>
                        </div>
                        <p className='text-neutral-800 font-medium text-center'>2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
