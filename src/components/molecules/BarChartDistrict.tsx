import dynamic from 'next/dynamic'
import React from 'react'
// import ApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const BarChartDistrict = () => {
    const options : ApexOptions = {
        chart: {
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        fill: {
            colors: ['#BDC8F6']
        },
        series: [{
            name: 'Assignments',
            data: [30, 40, 25, 50, 49, 21, 70, 51]
        }]
    }

    return (
        <div className=''>
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
    )
}
export default BarChartDistrict
