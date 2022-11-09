
const DistrictsList = () => {
    // const { data: districts } = useGetDistrictsQuery(client)

    return (
        <div className='w-full bg-white shadow-sm border rounded-md p-6 py-1'>
            <div className='flex items-center justify-between'>
                <p className='font-bold'>Districts</p>
                <p className='underline text-primary cursor-pointer'>View All</p>
            </div>
            <div className='w-full space-y-1 my-2'>
                {/* {districts?.districts.data.map((district, index) => {
                    return (
                        <div className='flex gap-1 border-b pb-0 border-gray-300' key={index}>
                            <div className='relative w-14 h-14 flex justify-center'> */}
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                {/* <img src={'/images/school/profiles/' + district.image} className='w-9 h-9 rounded-md' alt='profile' /> */}
                {/* </div>
                            <p>{district.name}</p>
                        </div>
                    )
                }
                )} */}
            </div>
        </div>
    )
}

export default DistrictsList
