import React from 'react'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

export default function StudentStatics() {
    const data = {
        series: [{
            name: 'Average Class Grade',
            data: [44, 55, 57]
        }, {
            name: 'Average Class Attendance',
            data: [76, 85, 101, 98]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Class 1', 'Class 2', 'Class 3']
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val: string) {
                    return '$ ' + val + ' thousands'
                }
            }
        }
    }

    return (
        <section className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/blue-menu.svg" alt="student-statics" className="absolute top-0 right-0 z-10" />
            <div className='w-full mt-8 h-full'>
                {/* TODO(@veritem): I SHOULD REMOVE THIS APEX LIBRARY THING IT'S NOT SERVING WELL AND IT'S EVEN NOT WELL ENGINEERED */}
                {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                <ReactApexChart options={data as any}
                    series={data.series} type="bar" height={400} />
            </div>
        </section>
    )
}
