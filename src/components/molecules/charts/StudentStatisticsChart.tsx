import dynamic from 'next/dynamic'
import React from 'react'
// import ApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const StudentStatisticsChart: React.FC = () => {
    const options : ApexOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            }
        },
        series: [
            {
                name: 'sales',
                data: [30, 40, 35, 50, 49, 60, 20],
                color: '#563C8C'
            },
            {
                name: 'sales',
                data: [20, 12, 46, 48, 23, 65, 15],
                color: '#D81E4B'
            }
        ],
        xaxis: {
            categories: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7']
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
            show: false
        },
        legend: {
            show: false
        },
        plotOptions: {
            bar: {
                borderRadius: 10,
                colors: {
                    backgroundBarColors: ['#eee']
                }
            }
        }
    }

    return (
        <div className='shadow p-2 mt-2 rounded-xl'>
            <div className='flex justify-between items-center'>
                <label className='text-[0.8em]'>Student Statistics</label>
                <div className='flex justify-between items-center'>
                </div>
            </div>
            <div className='flex gap-5 mt-2 text-[0.7em]'>
                <div className='flex gap-2 items-center'>
                    <div className='w-[0.7em] h-[0.7em] rounded-full bg-purple-900'></div>
                    <label>Average Class Grade</label>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='w-[0.7em] h-[0.7em] rounded-full bg-red'></div>
                    <label>Average Class Attendency</label>
                </div>
            </div>
            <div>
                <div className="mixed-chart">
                    {(typeof window !== 'undefined') &&
                        <ApexChart
                            options={options}
                            series={options.series}
                            type="bar"
                            // width={500}
                        />
                    }

                </div>
            </div>
        </div>
    )
}
export default StudentStatisticsChart
