import { ValueType } from '~/types'

type Props = {
    placeholder?: string;
    value: string;
    onChange: (e: ValueType) => void;
}

export default function Search({ onChange }: Props) {
    return (
        <div className="p-4">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-primary-100 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <input onChange={(e) => onChange({ value: e.target.value, name: e.target.value })} type="text" id="table-search" className="focus:outline-none border-neutral-100 active:border-neutral-100 focus:border-neutral-100  text-sm rounded-lg  block w-full pl-10 p-2.5 bg-primary-100 text-neutral-600" placeholder="Search for items" />
            </div>
        </div>
    )
}
