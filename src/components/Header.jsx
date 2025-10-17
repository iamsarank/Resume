import React from 'react'
import profile from '../assets/images/profile.jpg';
import resume from '../assets/SaravanakumarResume.pdf';

const Header = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-5'>
                <div className='rounded-full w-24 h-24 overflow-hidden bg-cover bg-center bg-no-repeat'>
                    <img src={profile} alt="profile" className='' />
                </div>
                <div>
                    <p className='text-lg'>Saravanakumar Kathiravan</p>
                    <p className='text-gray-600'>Frontend Developer</p>
                    <p className='text-gray-600 text-sm'>Rajapalayam - 626117</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='flex items-center gap-3 mt-2'>
                    <a href="tel:+91 9047396553" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900'>
                        <img src="https://cdn-icons-png.flaticon.com/512/5585/5585856.png" alt="mail" className='w-5 h-5' />
                    </a>

                    <a href="mailto:iamsarank@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600'>
                        <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="mail" className='w-5 h-5' />
                    </a>

                    <a href="https://github.com/iamsarank" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600'>
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25657.png" alt="mail" className='w-5 h-5' />
                    </a>
                    <a href="https://www.linkedin.com/in/iamsarank" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                        className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900'>
                        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="mail" className='w-5 h-5' />
                    </a>
                    <a href={resume} download
                        aria-label="Download resume" target="_blank" rel="noopener noreferrer"
                        className='w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1091/1091007.png" alt="mail" className='w-5 h-5' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header