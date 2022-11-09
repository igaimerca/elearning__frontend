import CourseCard from '~/components/molecules/courses/CourseCard'
import MainLayout from '~/layouts/MainLayout'
import { Course } from '~/types/course'

export default function Courses() {
    const courses:Course[] = [
        {
            id: 1,
            title: 'English',
            code: 'ENGL 50',
            color: 'primary'
        },
        {
            id: 2,
            title: 'Biology',
            code: 'BIO 54',
            color: 'orange'
        },
        {
            id: 3,
            title: 'Chemistry',
            code: 'CHE 12',
            color: 'green'
        },
        {
            id: 4,
            title: 'Geometry',
            code: 'GEO 01',
            color: 'red'
        },
        {
            id: 5,
            title: 'Civics',
            code: 'CIV 98',
            color: 'primary'
        },
        {
            id: 6,
            title: 'Coding',
            code: 'SFE 401',
            color: 'red'
        },
        {
            id: 7,
            title: 'Critical Thinking',
            code: 'CTG 098',
            color: 'orange'
        }
    ]

    const mappedCourses = courses.map((course, index) => (
        <CourseCard key={index} course={course} />
    ), [])
    return (
        <MainLayout>
            <div className="flex flex-col gap-3 px-10 py-4">
                <div className="flex ">
                    <p className="text-lg font-semibold">Select class</p>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    {mappedCourses}
                </div>
            </div>
        </MainLayout>
    )
}
