import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='bg-[#0E1D34] '>
            <div className='container mx-auto pt-[50px] pb-[70px]'>
                <div className='flex gap-[30px]'>
                    <div className='basis-[30%] text-white'>
                        <h1 className='text-[30px] font-bold mb-[10px]'>Logo</h1>
                        <p className='text-[14px]  leading-[21px] font-normal mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum saepe magni cum eius, rerum quas!</p>
                        <div className='flex items-center gap-[15px]'>
                            <div className='h-[30px] w-[30px] border rounded-full cursor-pointer'></div>
                            <div className='h-[30px] w-[30px] border rounded-full cursor-pointer'></div>
                            <div className='h-[30px] w-[30px] border rounded-full cursor-pointer'></div>
                        </div>
                    </div>
                    <div className='basis-[70%] grid grid-cols-3 gap-[30px] text-white'>
                        <div className='space-y-[15px]'>
                            <h1 className='text-[16px] leading-[19px] font-bold'>Useful Links</h1>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Home</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>About us</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Services</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Term of service</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Privacy policy</p>
                        </div>
                        <div className='space-y-[15px]'>
                            <h1 className='text-[16px] leading-[19px] font-bold'>Our Services</h1>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Web Design</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Web Development</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Product Management</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Marketing</p>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>Graphic Design</p>
                        </div>
                        <div className='space-y-[15px]'>
                            <h2 className='text-[16px] leading-[19px] font-bold'>Contact Us</h2>
                            <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'>A108 Adam Street
                                New York, NY 535022
                                United States</p>
                            <div className='space-y-[6px]'>
                                <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'><span className='font-bold'>Phone:</span>+1 5589 55488 55</p>
                                <p className='text-[16px] leading-[19px] font-normal opacity-[0.8]'><span className='font-bold'>Email:</span> info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto flex items-center justify-center py-[15px] text-white'>
                <p className='text-[16px] leading-[19px] font-normal '>© Copyright . All Rights Reserved
                    Designed by anywhere</p>
            </div>
        </div>
    )
}

export default Footer