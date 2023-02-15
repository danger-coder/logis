import React from 'react'
import { FaStaylinked, FaArrowRight } from "react-icons/fa"

type Props = {}

const Category = (props: Props) => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto grid grid-cols-3 gap-[40px]  py-[40px]'>
                <div className='flex gap-[15px] '>
                    <FaStaylinked fontSize={70} />
                    <div>
                        <h1 className='text-[24px] pt-[10px] font-semibold text-[#0E1D34]'>Lorem Ipsum</h1>
                        <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat, blanditiis molestias ipsam ipsa inventore facilis maxime magnam veritatis velit.</p>
                        <div className='flex items-center gap-[7px] cursor-pointer mt-[10px] text-[14px] font-semibold'>
                            <p className='text-gray-700'>Learn more</p> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[15px] '>
                    <FaStaylinked fontSize={70} />
                    <div>
                        <h1 className='text-[24px] pt-[10px] font-semibold text-[#0E1D34]'>Lorem Ipsum</h1>
                        <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat, blanditiis molestias ipsam ipsa inventore facilis maxime magnam veritatis velit.</p>
                        <div className='flex items-center gap-[7px] cursor-pointer mt-[10px] text-[14px] font-semibold'>
                            <p className='text-gray-700'>Learn more</p> <FaArrowRight />
                        </div>
                    </div>
                </div>
                <div className='flex gap-[15px]'> <FaStaylinked fontSize={70} />
                    <div>
                        <h1 className='text-[24px] pt-[10px] font-semibold text-[#0E1D34]'>Lorem Ipsum</h1>
                        <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quaerat, blanditiis molestias ipsam ipsa inventore facilis maxime magnam veritatis velit.</p>
                        <div className='flex items-center gap-[7px] cursor-pointer mt-[10px] text-[14px] font-semibold'>
                            <p className='text-gray-700'>Learn more</p> <FaArrowRight />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category