import React from 'react'

const Education = () => {
    return (
        <div>
            <div className='p-10'>
                <h1 className='text-md font-normal mb-4 text-gray-700'>Education</h1>
                <div className='flex justify-between flex-row gap-4'>
                    <div>
                        <p className='text-sm text-gray-500 leading-7 pr-8'>PSG College Of Technology</p>
                        <p className='flex flex-col text-sm text-gray-700 leading-7 pr-8'>Master Of Computer Applications | 2017 - 2020  </p>
                    </div>
                    <div>
                        <p className='text-sm text-gray-500 leading-7 pr-8'>Ayya Nadar Janaki Ammal College</p>
                        <p className='flex flex-col text-sm text-gray-700 leading-7 pr-8'>B.Sc Computer Science | 2014 - 2017 </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education