import React from 'react'
import OtherAssignmentCard from './OtherAssignmentCard'

const OtherAssignments = () => {
    return (
        <div className='space-y-[16px]'>
            <h1 className='text-center text-textColor text-xl font-medium '>Other Assignments</h1>
            <OtherAssignmentCard isYellow={true} name="Philosophy" students={20} progress={40} dueDate="April 30th, 2022" />
            <OtherAssignmentCard isGreen={true} name="English II" students={12} progress={78} dueDate="April 30th, 2022" />
            <OtherAssignmentCard isPink={true} name="Chemistry" students={8} progress={50} dueDate="April 30th, 2022" />
        </div>
    )
}

export default OtherAssignments
