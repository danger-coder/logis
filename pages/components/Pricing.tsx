import React from 'react'
import { FaCheck, FaTimes } from "react-icons/fa"

type Props = {}

const Pricing = (props: Props) => {
    return (
        <div className='bg-white pt-[80px] pb-[80px]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center mx-auto flex-col'>
                    <h1 className=' text-[32px] font-bold text-[#0E1D34]'>Pricing</h1>
                    <div className='h-[4px] w-[40px] mt-[8px] bg-[#0E1D34]'></div>
                </div>
                <div className='grid grid-cols-3 mt-[40px] gap-[30px] px-[10%]'>
                    <div className='border shadow-lg pt-[50px] pl-[35px] rounded-md'>
                        <p className='text-[#0e1d34] text-[20px] leading-[24px] font-semibold'>Free Plan</p>
                        <h2 className='text-[rgba(108, 117, 125, 0.8)] text-[18px] leading-[22px] font-normal mt-[20px] pb-[40px]'><span className='text-[#0d42ff] text-[48px] leading-[58px] font-normal'>$0 </span>/ month</h2>
                        <ul className='space-y-[25px]'>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' /> Quam adipiscing vitae proin</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' > <FaCheck color='#059652' />Nec feugiat nisl pretium</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' > <FaCheck color='#059652' />Nulla at volutpat diam uteera</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through' >  <FaTimes color='#B5BABE' />Pharetra massa massa ultricies</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px] line-through' > <FaTimes color='#B5BABE' />Massa ultricies mi quis hendrerit</li>
                        </ul>
                        <button className='border rounded-md py-[10px] px-[25px] my-[45px] border-[#0d42ff]'>Buy Now</button>
                    </div>
                    <div className='border shadow-lg  pt-[50px] pl-[35px] rounded-md border-t-[3px] border-t-[#0d42ff]'>
                        <p className='text-[#0e1d34] text-[20px] leading-[24px] font-semibold'>Business Plan</p>
                        <h2 className='text-[rgba(108, 117, 125, 0.8)] text-[18px] leading-[22px] font-normal mt-[20px] pb-[40px]'><span className='text-[#0d42ff] text-[48px] leading-[58px] font-normal'>$29</span>/ month</h2>
                        <ul className='space-y-[25px]'>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' > <FaCheck color='#059652' />Quam adipiscing vitae proin</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' />Nec feugiat nisl pretium</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' > <FaCheck color='#059652' />Nulla at volutpat diam uteera</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' /> Pharetra massa massa ultricies</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' />Massa ultricies mi quis hendrerit</li>
                        </ul>
                        <button className='border rounded-md py-[10px] px-[25px] my-[45px] text-white bg-[#0d42ff]'>Buy Now</button>
                    </div>
                    <div className='border shadow-lg pt-[50px] pl-[35px] rounded-md'>
                        <p className='text-[#0e1d34] text-[20px] leading-[24px] font-semibold'>Business Plan</p>
                        <h2 className='text-[rgba(108, 117, 125, 0.8)] text-[18px] leading-[22px] font-normal mt-[20px] pb-[40px]'><span className='text-[#0d42ff] text-[48px] leading-[58px] font-normal'>$29</span>/ month</h2>
                        <ul className='space-y-[25px]'>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' />Quam adipiscing vitae proin</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' />Nec feugiat nisl pretium</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' />Nulla at volutpat diam uteera</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' > <FaCheck color='#059652' />Pharetra massa massa ultricies</li>
                            <li className='text-[#6c757d] text-[16px] leading-[20px] font-normal flex items-center gap-[10px]' ><FaCheck color='#059652' />Massa ultricies mi quis hendrerit</li>
                        </ul>
                        <button className='border rounded-md py-[10px] px-[25px] my-[45px] border-[#0d42ff]'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing