import React from 'react'
import { FaAward, FaCaretRight } from "react-icons/fa"

type Props = {}

const About = (props: Props) => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto grid grid-cols-2 gap-[40px] pt-[40px]'>
                <div>
                    <h1 className='text-[32px] font-bold text-[#0E1D34]'>About</h1>
                    <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi asperiores quos minus consequatur temporibus alias, possimu
                        s repudiandae vitae officia reiciendis dolorum excepturi aliquid ea ab fuga saepe dignissimos libero odio.</p>

                    <div className='space-y-[15px] pt-[20px] pl-[10px]  '>
                        <div className='flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] pb-[10px]'>
                            <FaAward fontSize={38} /><div>
                                <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim quisquam repellendus.</p>
                            </div>
                        </div>
                        <div className='flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] pb-[10px]'>
                            <FaAward fontSize={38} /><div>
                                <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim quisquam repellendus.</p>
                            </div>
                        </div>
                        <div className='flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] pb-[10px]'>
                            <FaAward fontSize={38} /><div>
                                <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim quisquam repellendus.</p>
                            </div>
                        </div>
                        <div className='flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] pb-[10px]'>
                            <FaAward fontSize={38} /><div>
                                <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim quisquam repellendus.</p>
                            </div>
                        </div>
                        <div className='flex gap-[15px] border-[#0E1D34]/[0.2] border-b-[1px] pb-[10px]'>
                            <FaAward fontSize={38} /><div>
                                <h2 className='text-[22px] font-semibold tracking-[0.3px] text-[#0E1D43]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
                                <p className='text-[15px] font-normal leading-[23px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro enim quisquam repellendus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/../assets/about.jpg" alt="" />
                    <div className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] cursor-pointer bg-[#0D42FF] h-[60px] w-[60px] rounded-full flex justify-center items-center'>
                        <FaCaretRight color='#fff' fontSize={30} />

                        <div className='absolute h-[45px] w-[45px] rounded-full bg-[#0D42FF] animate-ping'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About