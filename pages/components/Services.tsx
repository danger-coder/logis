import React from 'react'

type Props = {}

const Services = (props: Props) => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto pt-[80px] pb-[80px]'>
                <div className='flex items-center justify-center mx-auto flex-col'>
                    <h1 className=' text-[32px] font-bold text-[#0E1D34]'>Our Services</h1>
                    <div className='h-[4px] w-[40px] mt-[8px] bg-[#0E1D34]'></div>
                </div>
                <div className='grid grid-cols-3 gap-[30px] mt-[50px]'>
                    <div className='border shadow-lg p-[5px]'>
                        <img src="/../assets/cargo-service.jpg" alt='' className='h-[350px] w-full object-cover' />
                        <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Storage</h2>
                        <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere nesciunt necessitatibus consequatur magni autem!
                        </p>
                    </div>
                    <div className='border shadow-lg p-[5px]'>
                        <img src="/../assets/logistics-service.jpg" alt='' className='h-[350px] w-full object-cover' />
                        <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Storage</h2>
                        <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere nesciunt necessitatibus consequatur magni autem!
                        </p>
                    </div>
                    <div className='border shadow-lg p-[5px]'>
                        <img src="/../assets/packaging-service.jpg" alt='' className='h-[350px] w-full object-cover' />
                        <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Storage</h2>
                        <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere nesciunt necessitatibus consequatur magni autem!
                        </p>
                    </div>
                    <div className='border shadow-lg p-[5px]'>
                        <img src="/../assets/storage-service.jpg" alt='' className='h-[350px] w-full object-cover' />
                        <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Storage</h2>
                        <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere nesciunt necessitatibus consequatur magni autem!
                        </p>
                    </div>
                    <div className='border shadow-lg p-[5px]'>
                        <img src="/../assets/trucking-service.jpg" alt='' className='h-[350px] w-full object-cover' />
                        <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Storage</h2>
                        <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere nesciunt necessitatibus consequatur magni autem!
                        </p>
                    </div>
                    <div className='border shadow-lg p-[5px]'>
                        <img src="/../assets/warehousing-service.jpg" alt='' className='h-[350px] w-full object-cover' />
                        <h2 className='text-[24px] font-semibold pl-[15px] pt-[15px]'>Storage</h2>
                        <p className='text-[15px] text-gray-600 pl-[15px] pb-[10px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla facere nesciunt necessitatibus consequatur magni autem!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services