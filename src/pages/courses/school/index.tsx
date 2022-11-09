import Head from 'next/head'
import React, { Fragment, useState } from 'react'
import NewCourses from '~/components/molecules/courses/NewCourses'
import MainLayout from '~/layouts/MainLayout'

export default function School() {
    const [createClassOpen, setCreateClassOpen] = useState(true)

    return (
        <Fragment>
            <Head>
                <title>courses</title>
            </Head>
            <MainLayout>
                <section>
                    <section className="py-[8px] px-[8px]">
                        <div className="flex justify-between items-center bg-white h-[114px] pr-[19px] pl-[17px] rounded-[8px]">
                            <form className="w-[488px] relative">
                                <input type="text" placeholder="Input class code" className="pl-[24px] pt-[16px] pb-[15px] rounded-sm border border-neutral-400 focus:outline-none" />
                                <input type="submit" className=" bg-neutral-400 w-[100px] py-4 rounded-md -ml-3 text-neutral-600 font-semibold" value="Join class" />
                            </form>
                            <button className="border-[3px]  border-primary-700 py-[12px] px-[28px] rounded-[12px] bg-primary-100 text-primary-700 font-semibold" onClick={() => setCreateClassOpen(true)}>
                                create class
                            </button>
                        </div>

                    </section>
                </section>
            </MainLayout>

            <NewCourses isopen={createClassOpen} onClose={() => setCreateClassOpen(!createClassOpen)} />
        </Fragment>
    )
}
