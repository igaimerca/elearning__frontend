import dynamic from 'next/dynamic'
import React from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = {
    height?: number,
    xCategories: string[],
   series: {
  name?: string
  type?: string
  color?: string
  data:
    | (number | null)[]
    | {
        x: unknown;
        y: unknown;
        fillColor?: string;
        strokeColor?: string;
        meta?: unknown;
        goals?: unknown;
      }[]
    | [number, number | null][]
    | [number, (number | null)[]][];
}[]
}

const DashboardColumnChart = ({ height = 300, series, xCategories = [] }: Props) => {
    const data = {
        options: {
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
                categories: xCategories
            },
            fill: {
                colors: ['#BDC8F6']
            }
        },
        series
    }
    return (
        <ReactApexChart options={data.options} series={data.series} type="bar" height={height} />

    )
}

export default DashboardColumnChart
