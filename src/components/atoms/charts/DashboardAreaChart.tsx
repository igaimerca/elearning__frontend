import dynamic from 'next/dynamic'
import React from 'react'
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

type Props = {
    height?: number;
    xCategories: string[];
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

const DashboardAreaChart = ({ series, height = 300, xCategories }: Props) => {
    return (
        <ReactApexChart options={{
            chart: {
                toolbar: {
                    show: false
                }
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'butt',
                colors: ['#9FAEF2'],
                width: 2,
                dashArray: 0
            },
            xaxis: {
                categories: xCategories
            },
            dataLabels: {
                enabled: false
            },
            fill: {
                colors: ['#BDC8F6']
            }
        }}
        series={series} type="area" height={height} />
    )
}

export default DashboardAreaChart
