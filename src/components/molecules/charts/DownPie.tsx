import React from 'react'

type PieProps = {
    percentage: number;
    color: string;
    className?: string;
}
const cleanPercentage = (percentage: number) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0
    const tooHigh = percentage > 100
    return tooLow ? 0 : tooHigh ? 100 : +percentage
}

const Circle = ({ color, percentage }:PieProps) => {
    const r = 70
    const circ = Math.PI * r
    const strokePct = ((100 - percentage) * circ) / 100
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? color : '#BDC8F6'} // remove colour as 0% sets full circumference
            strokeWidth={'12px'}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    )
}

const Circle2 = () => {
    const r = 70
    const circ = Math.PI * r
    // const strokePct = ((100 - percentage) * circ) / 100
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={'#FCE7EA'} // remove colour as 0% sets full circumference
            strokeWidth={'12px'}
            strokeDasharray={circ}
            strokeDashoffset={0}
            strokeLinecap="round"
        ></circle>
    )
}

const Text = ({ percentage, color }: PieProps) => {
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
            {percentage.toFixed(0)}%
        </text>
    )
}

const Pie = ({ percentage, color, className }:PieProps) => {
    const pct = cleanPercentage(percentage)
    return (
        <svg width={200} height={200} className={className}>
            <g transform={`rotate(-160 ${'100 100'})`}>
                <Circle2 />
                <Circle color={color} percentage={pct} />
            </g>
            <Text color={color} percentage={pct} />
        </svg>
    )
}

export default Pie
