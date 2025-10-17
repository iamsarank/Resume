import React from 'react'

const Skills = () => {
    return (
        <div>
            <div className='p-10'>
                <h1 className='text-md font-normal mb-4 text-gray-700'>Skills</h1>
                <div className='flex mb-4'>
                    <div className='mb-1 w-[200px]'>
                        <p className='flex flex-col text-sm text-gray-700 leading-7 pr-8'>Front-End Development  </p>
                    </div>
                    <div className='mb-1'>
                        <p className='flex flex-col pl-5 text-sm text-gray-500 leading-7 pr-8'>HTML5, CSS3, JavaScript (ES6+), ReactJS, Bootstrap, Tailwind CSS, Material UI</p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='mb-1 w-[200px]'>
                        <p className='flex flex-col text-sm text-gray-700 leading-7 pr-8'>Tools & Technologies  </p>
                    </div>
                    <div className='mb-1'>
                        <p className='flex flex-col pl-5 text-sm text-gray-500 leading-7 pr-8'> Wordpress, Shopify, Git, npm, Webpack, RESTful APIs, Responsive Web Design

                        </p>
                    </div>
                </div>
                <div className='flex mb-4'>
                    <div className='mb-1 w-[200px]'>
                        <p className='flex flex-col text-sm text-gray-700 leading-7 pr-8'>Others  </p>
                    </div>
                    <div className='mb-1'>
                        <p className='flex flex-col pl-5 text-sm text-gray-500 leading-7 pr-8'>UX/UI Design, Wireframing, Prototyping, Agile Methodologies</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills