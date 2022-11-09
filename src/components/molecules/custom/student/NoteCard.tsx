import router from 'next/router'
import Icon from '~/components/atoms/Icon'

type Props = {
    triangleHexColor: string,
    id: string|number
}

export default function NoteCard({ triangleHexColor, id }:Props) {
    const colors = ['#FFAA00', '#BB0FB4', '#8059D1', '#0D9F9F', '#EF5DA8', '#DD0E31', '#38E035', '#576BC7']
    const getRandomColor = (): string => colors[Math.floor(Math.random() * colors.length)]

    return (
        <div className={'cursor-pointer bg-white shadow-assignmentCard border-[1px] border-stone-200 px-3 py-3 w-[468px] rounded-[10px] relative flex flex-col'}>
            <div className={'absolute top-0 right-0'}>
                <RenderTriangleSVG triangleHexColor={triangleHexColor || getRandomColor()}/>
            </div>
            <div onClick={() => router.push(`/student/drive/notes/${id}`)} className='p-6'>
                <h1 className='font-medium text-lg text-neutral-700'>Ap English Notes</h1>
                <p className='text-neutral-600 font-normal text-lg mt-2 mb-5'>24th April 2022 12:40</p>
                <p className='text-sm text-neutral-700 font-normal line-clamp-4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu...
                </p>
            </div>
        </div>
    )
}

// eslint-disable-next-line no-undef
function RenderTriangleSVG({ triangleHexColor }: { children?: JSX.Element, triangleHexColor: string }) {
    return (
        <div className='relative'>
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62 51.8579V10C62 4.47715 57.5228 0 52 0H10.1421C1.23309 0 -3.22858 10.7714 3.07107 17.0711L44.9289 58.9289C51.2286 65.2286 62 60.7669 62 51.8579Z" fill={triangleHexColor}/>
            </svg>
            <div className='absolute z-20 top-[40%] right-[30%] translate-x-[50%] translate-y-[-50%]'>
                <Icon name='more-horizontal'/>
            </div>
        </div>

    )
}
