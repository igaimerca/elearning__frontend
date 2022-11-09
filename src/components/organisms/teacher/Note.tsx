import { useState } from 'react'
import Icon from '~/components/atoms/Icon'

interface IProps{
    hasShareButton?:boolean;
    className?:string;
    onShare?:()=>void;
}

export default function Note({ className = '', hasShareButton = false, onShare }:IProps) {
    const [value, setvalue] = useState(hasShareButton
        ? ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. \n
    Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit..\n
     Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit.\n
    Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.\n
    \n
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis eu hac.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mollis leo proin turpis euLorem ipsum dolor sit amet, consectetur adipiscing elit.`
        : '')
    const [title, settitle] = useState(hasShareButton ? 'Ap English Notes|' : '')

    const handleShare = () => {
        if (onShare) onShare()
    }

    return (
        <div className={`bg-white pt-4 ${className}`}>
            <div className="flex justify-between gap-10 items-center">
                <div className="gap-5 flex w-1/3">
                    <input value={title} onChange={e => settitle(e.target.value)} className='w-full bg-neutral-250 border border-transparent focus:border-primary-400 rounded text-lg outline-none px-6 h-12 placeholder:text-primary-300' placeholder='Untitled' type='text'/>
                    <Icon name='star' />
                </div>
                <div className='flex gap-3 items-center justify-end'>
                    <button className='bg-primary-600 text-white text-sm rounded px-2 py-1'>Aa</button>
                    <div className="h-7 border-l-2" />
                    <Icon name='left-align' size={20} />
                    <Icon name="center-align" size={20} />
                    <Icon name="right-align" size={20} />
                    <div className="h-7 border-l-2" />
                    <Icon name='bold' />
                    <Icon name="italic" />
                    <Icon name="underline" />
                    <div className="h-7 border-l-2" />
                    <Icon name="link" size={20}/>
                    <Icon name="upload-file" size={22} />
                </div>
                {hasShareButton && <button onClick={handleShare} className='py-3 px-7 text-white bg-primary-600 flex gap-1 items-center rounded-xl outline-none'>
                    <Icon name='lock' />
                    <span className='text-base font-semibold'>Share</span>
                </button>}

                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        className="h-8 w-8 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
                        alt="Profile pic"
                    />
                </div>
            </div>
            <div className='pt-6'>
                <textarea value={value} onChange={e => setvalue(e.target.value)} className={`w-full pt-2 outline-none px-6 text-base text-neutral-700 ${hasShareButton ? 'h-screen' : 'h-64'} textarea border-l-2 border-primary-300 resize-none `} placeholder='Type something.....' />
            </div>
            <p className='text-sm text-neutral-500 text-right'>{value.length}/200 Characters</p>
        </div>
    )
}
