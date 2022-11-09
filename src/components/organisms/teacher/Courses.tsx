import React from 'react'

export default function Courses() {
    const courses = [
        'Ap English',
        'Chemistry',
        'Biology',
        'Geography',
        'Physics',
        'Philosophy'
    ]

    return (
        <section className="w-[344px] h-[352px] overflow-y-auto rounded-2xl bg-white">
            <h3 className="text-textColor text-[20px] py-4 px-4">Courses</h3>
            <section className="flex flex-col gap-4">
                {courses.map((item, index) => (
                    <div key={index}>
                        <div className="mx-4 flex items-center justify-between">
                            <div className="flex justify-center items-center gap-2">
                                {/*  eslint-disable-next-line @next/next/no-img-element */}
                                <img src="https://via.placeholder.com/100" alt="" className="w-[28px] h-[28px] rounded-md" />
                                <p className="text-textColor text-[14px] font-normal">{item}</p>
                            </div>
                            <button className="text-primary-700">view</button>
                        </div>
                        <div className="border-b border-neutral-300 w-[318px] mr-[16px] ml-[10px] pt-4"/>
                    </div>
                ))}
            </section>
        </section>
    )
}
