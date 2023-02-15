import React from 'react'

type Props = {}

const CalltoAction = (props: Props) => {
    return (
        <div className='h-[40vh] '>
            <img src="/../assets/cta-bg.jpg" className='w-full h-[100%]  fixed top-[0%] left-0 z-[-10]' alt="" />
            <div className='w-full h-[100%] bg-black/[0.6] flex justify-center items-center'>
                <div className='flex items-center justify-center text-white flex-col space-y-[15px]'>
                    <h1 className='text-[24px] font-bold'>Call To Action</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus illum reiciendis minima error maxime.</p>
                    <button className=' border-white border-[1.5px] py-[10px] px-[20px] rounded-[4px]'>Call To Action</button>
                </div>
            </div>
        </div>
    )
}

export default CalltoAction