import Image from 'next/image'
import dynamic from 'next/dynamic'
import React from 'react'
// import ApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import Button from '~/components/atoms/Button'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const StudentPerformanceChart: React.FC = () => {
    const options : ApexOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            }
        },
        series: [{
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 20]
        }],
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Frid', 'Sat', 'Sun']
        },
        stroke: {
            curve: 'smooth',
            width: 1
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: [3]
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            }
        }
    }

    return (
        <div className='shadow p-2 mt-2 rounded-xl'>
            <div className='flex justify-between items-center'>
                <label className='text-[0.8em]'>Attendency</label>
                <Button className='h-[2.8em] w-[10em] flex  items-center gap-4 rounded-[1em] shadow border-[1px]'>
                    <h1 className='font-light text-[0.8em] mr-2'>Ap English</h1>
                    <Image src={'/assets/icons/drop-down-icon.svg'} width={15} height={15} alt="select"/>
                </Button>
            </div>
            <div>
                <div className="mixed-chart">
                    {(typeof window !== 'undefined') &&
                        <ApexChart
                            options={options}
                            series={options.series}
                            type="area"
                            // width={500}
                        />
                    }

                </div>
            </div>
        </div>
    )
}
export default StudentPerformanceChart
