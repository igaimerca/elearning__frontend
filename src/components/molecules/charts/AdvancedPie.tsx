import React from 'react'

type PieProps = {
    percentages: Array<number>;
    colors: Array<string>;
}

interface PieDataProps{
    percentage: number;
    color: string;
}

interface PiePropsArray{
    pieData: Array<PieDataProps>;
}

const cleanPercentage = (percentage: number) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0
    const tooHigh = percentage > 100
    return tooLow ? 0 : tooHigh ? 100 : +percentage
}

const Circle = ({ rotationDeg, color, percentage }: {rotationDeg: number, percentage:number; color: string}) => {
    const r = 70
    const circ = 2 * Math.PI * r
    const strokePct = (percentage * circ) / 100
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? color : '#BDC8F6'} // remove colour as 0% sets full circumference
            strokeWidth={'40px'}
            strokeDasharray={circ}
            style={{ rotate: `${rotationDeg}deg` }}
            strokeDashoffset={percentage ? strokePct : 0}
        ></circle>
    )
}

const Circle2 = () => {
    const r = 70
    const circ = 2 * Math.PI * r
    // const strokePct = ((100 - percentage) * circ) / 100
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={'#F0F2FD'} // remove colour as 0% sets full circumference
            strokeWidth={'50px'}
            strokeDasharray={circ}
            strokeDashoffset={0}
            strokeLinecap="round"
        ></circle>
    )
}

const Text = ({ percentage, color }: {percentage:string; color: string}) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontWeight={700}
            fontSize={'2em'}
            fill={color}
        >
            {percentage}%
        </text>
    )
}

const AdvancedPie = ({ pieData }:PiePropsArray) => {
    // const pct = cleanPercentage(percentage)
    return (
        <svg width={200} height={200}>
            <g>
                <Circle2 />
                {pieData.map((data: PieDataProps, index: number) => (
                    <Circle rotationDeg={index * (360 / pieData.length)}
                        key={index} color={data.color} percentage={cleanPercentage(data.percentage)} />
                ))}
            </g>
        </svg>
    )
}

export default AdvancedPie
