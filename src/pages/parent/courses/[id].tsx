import MainLayout from '~/layouts/ParentLayout'
import CourseDetails from '~/components/molecules/courses/CourseDetails'
import CourseNotes from '~/components/molecules/courses/CourseNotes'
import AssigmentGradeChart from '~/components/molecules/courses/AssignmentChart'
import GradeChart from '~/components/molecules/courses/GradeChart'
import Announcement from '~/components/molecules/courses/Announcement'
import ButtonTabs from '~/components/molecules/tab/ButtonTabs'
import Icon from '~/components/atoms/Icon'

export default function CoursePage() {
    const courseTabItems = [
        {
            id: 1,
            title: 'Overview'
        },
        {
            id: 2,
            title: 'Assignments'
        },
        {
            id: 3,
            title: 'Notes'
        },
        {
            id: 4,
            title: 'Tests'
        },
        {
            id: 5,
            title: 'Grades'
        }
    ]

    return (
        <MainLayout>
            <div className='w-full'>
                <div className='bg-white w-full flex justify-between p-5 py-3 items-center mb-4'>
                    <div className='flex items-center gap-16'>
                        <h3 className='font-medium text-2xl uppercase text-neutral-850'>AP ENGLISH II</h3>
                        <ButtonTabs
                            tabs={courseTabItems}
                            handleChangeTab={(active) => { console.log(active) }}
                            containerAdditionalClassNames="p-[6px]"
                            buttonClassName='font-semibold text-lg text-neutral-600 py-[10px] px-7'/>
                    </div>
                    <div className='flex gap-10'>
                        <Icon name='warning-neutral' width={25}/>
                        <Icon name='vertical-menu-black'/>
                    </div>
                </div>
                <div className='flex flex-col xl:flex-row 2xl:flex-row w-full gap-4 px-6'>
                    <div className='flex flex-col gap-[30px] min-w-[970px] max-w-[970px]'>
                        <CourseDetails/>
                        <div className='flex gap-7'>
                            <AssigmentGradeChart/>
                            <GradeChart/>
                        </div>
                        <div className='col-span-5 bg-white px-6 py-5 rounded-2xl'>
                            <div className='flex justify-between mb-5'>
                                <p className='font-medium text-xl text-neutral-950'>Course Notes</p>
                                <div className='flex flex-row items-center justify-start'>
                                    <p className='text-primary-600 font-medium underline cursor-pointer text-[14px]'>View all</p>
                                    <Icon name='arrow-goto-blue' height={10} width={10}/>
                                </div>
                            </div>
                            <div className='flex gap-[23px]'>
                                <CourseNotes
                                    title='Impromptu Writing'
                                    about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in mi velit mattis aliqueta odio etiam. Scelerisque sem aliquet ipsum pretium. Fusce purus purus aliquam libero amet cursus ut orciscelerisque.'
                                    teacher='Diane Russell'
                                    datetime='06.06.2022'
                                />
                                <CourseNotes
                                    title='Impromptu Writing'
                                    about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in mi velit mattis aliqueta odio etiam. Scelerisque sem aliquet ipsum pretium. Fusce purus purus aliquam libero amet cursus ut orciscelerisque.'
                                    teacher='Diane Russell'
                                    datetime='06.06.2022'
                                />

                                <CourseNotes
                                    title='Impromptu Writing'
                                    about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit in mi velit mattis aliqueta odio etiam. Scelerisque sem aliquet ipsum pretium. Fusce purus purus aliquam libero amet cursus ut orciscelerisque.'
                                    teacher='Diane Russell'
                                    datetime='06.06.2022'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[582px] grow'>
                        <Announcement/>
                    </div>

                </div>
            </div>
        </MainLayout>
    )
}
