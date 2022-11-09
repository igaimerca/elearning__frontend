import React from 'react'
import StudentStatics from './StudentStatics'
import AttendanceOverview from '~/components/molecules/admin/AttendanceOverview'

export default function SchoolPerformance() {
    return (
        <div className="h-[30.75rem] w-full bg-white mt-4 mr-4 mb-4 rounded-[16px] p-4">
            <h3 className="text-md font-medium">Student Performance</h3>
            <div className="grid grid-cols-2">
                <AttendanceOverview/>
                <StudentStatics/>
            </div>
        </div>
    )
}
