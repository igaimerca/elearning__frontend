import dynamic from 'next/dynamic'
import React from 'react'
// import ApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AreaChartDistrict = () => {
    const options : ApexOptions = {
        chart: {
            type: 'line',
            toolbar: {
                show: false
            }
        },
        series: [{
            name: 'attendance',
            data: [30, 40, 35, 50, 49, 60, 20, 50, 60, 80, 90]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            colors: ['#9FAEF2'],
            width: 2,
            dashArray: 0
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: [3]
        },
        fill: {
            colors: ['#BDC8F6']
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
        <div className=''>
            <div className="mixed-chart">
                {(typeof window !== 'undefined') &&
                        <ApexChart
                            options={options}
                            series={options.series}
                            type="area"
                        />
                }

            </div>
        </div>
    )
}
export default AreaChartDistrict
