import AdvancedPie from '../charts/AdvancedPie'
import Icon from '~/components/atoms/Icon'
export default function GradeChart() {
    return (
        <div className='bg-white py-3 rounded-2xl min-w-[558px] max-w-[558px] px-6'>
            <div className='w-full flex justify-between'>
                <p className='font-medium text-neutral-950 text-xl'>Grade</p>
                <Icon name='arrow-goto' width={12}/>
            </div>
            <div className='w-full flex gap-[63px] items-center'>
                <AdvancedPie pieData={[{
                    percentage: 30,
                    color: '#000'
                }, {
                    percentage: 70,
                    color: '#F0A500'
                }]}/>
                <div className='flex flex-col justify-between gap-[30px] max-h-[190px]'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4'>
                            <div className='h-7 w-7 rounded-md bg-purple-500 self-center'></div>
                            <p className='text-black font-normal text-xl'>Assigments</p>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex gap-4'>
                            <div className='h-7 w-7 rounded-md bg-cyan-500 self-center'></div>
                            <p className='text-black font-normal text-xl'>Class Projects</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-0'>
                        <div className='flex gap-4'>
                            <div className='h-7 w-7 rounded-md bg-pink-500 self-center'></div>
                            <p className='text-black font-normal text-xl'>Exam Score</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
