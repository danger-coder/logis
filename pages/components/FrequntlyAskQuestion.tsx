import React from 'react'
import { Collapse } from 'antd';
const { Panel } = Collapse;
type Props = {}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const FrequntlyAskQuestion = (props: Props) => {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <div className='bg-white pb-[80px]'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center mx-auto flex-col'>
                    <h1 className=' text-[32px] font-bold text-[#0E1D34]'>FREQUENTLY ASKED QUESTIONS</h1>
                    <div className='h-[4px] w-[40px] mt-[8px] bg-[#0E1D34]'></div>
                </div>
                <div className='mt-[40px] px-[400px]'>


                    <Collapse defaultActiveKey={['1']} onChange={onChange} className="">
                        <Panel header="Feugiat pretium nibh ipsum consequat. Tempus iaculis ?" key="1">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Feugiat pretium nibh ipsum consequat. Tempus iaculis ?" key="2">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Feugiat pretium nibh ipsum consequat. Tempus iaculis ?" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Feugiat pretium nibh ipsum consequat. Tempus iaculis ?" key="3">
                            <p>{text}</p>
                        </Panel>
                        <Panel header="Feugiat pretium nibh ipsum consequat. Tempus iaculis ?" key="3">
                            <p>{text}</p>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default FrequntlyAskQuestion