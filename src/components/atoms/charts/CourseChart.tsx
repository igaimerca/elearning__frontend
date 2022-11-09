import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const CourseChart: React.FC = () => {
    const percentage = 66
    return (
        <CircularProgressbar value={percentage} text={`${percentage}%`} className='text-red-500'
            styles={
                buildStyles({ pathColor: '#667EEA', textColor: '#667EEA', trailColor: '#DBE1FA' })}/>
    )
}
export default CourseChart
