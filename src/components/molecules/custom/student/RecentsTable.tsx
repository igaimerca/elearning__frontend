import Image from 'next/image'
export default function RecentTable() {
    return (
        <table className="w-full px-3">
            <thead className="text-neutral-500 w-full">
                <tr className="w-full flex border-b border-neutral-400 pb-4">
                    <td className="w-3/12">Name</td>
                    <td className="w-2/12">Folder</td>
                    <td className="w-2/12">FileType</td>
                    <td className="w-3/12">Last Modified</td>
                    <td className="w-1/12">Size</td>
                    <td className="w-1/12"></td>
                </tr>
            </thead>
            <tbody>
                <tr className="w-full flex border-b border-neutral-400 py-2 font-normal">
                    <td className="w-3/12 border-l-4 border-green rounded py-2 px-2">Math notes</td>
                    <td className="w-2/12 py-2">Quick notes</td>
                    <td className="w-2/12 py-2">docx</td>
                    <td className="w-3/12 py-2">22/05/2022 04:56 pm</td>
                    <td className="w-1/12 py-2">3.56 mb</td>
                    <td className="w-1/12 py-2">
                        <div className="w-full flex justify-end pr-2 h-full">
                            <Image className='rounded object-fill' src='/assets/icons/quick-access/more.svg' alt='star' width={25} height={25}/>
                        </div>
                    </td>
                </tr>
                <tr className="w-full flex border-b border-neutral-400 py-2 font-normal">
                    <td className="w-3/12 border-l-4 border-green rounded py-2 px-2">Math notes</td>
                    <td className="w-2/12 py-2">Quick notes</td>
                    <td className="w-2/12 py-2">docx</td>
                    <td className="w-3/12 py-2">22/05/2022 04:56 pm</td>
                    <td className="w-1/12 py-2">3.56 mb</td>
                    <td className="w-1/12 py-2">
                        <div className="w-full flex justify-end pr-2 h-full">
                            <Image className='rounded object-fill' src='/assets/icons/quick-access/more.svg' alt='star' width={25} height={25}/>
                        </div>
                    </td>
                </tr>
                <tr className="w-full flex border-b border-neutral-400 py-2 font-normal">
                    <td className="w-3/12 border-l-4 border-green rounded py-2 px-2">Math notes</td>
                    <td className="w-2/12 py-2">Quick notes</td>
                    <td className="w-2/12 py-2">pdf</td>
                    <td className="w-3/12 py-2">22/05/2022 04:56 pm</td>
                    <td className="w-1/12 py-2">3.56 mb</td>
                    <td className="w-1/12 py-2">
                        <div className="w-full flex justify-end pr-2 h-full">
                            <Image className='rounded object-fill' src='/assets/icons/quick-access/more.svg' alt='star' width={25} height={25}/>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
