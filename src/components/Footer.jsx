import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagram
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-8 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full lg:text-2xl font-bold text-[#00df9a]'>HAIDER DEPLOYMENT CO.</h1>
            <p className='py-4'>Family owned and operated.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:cols-span-2 flex justify-between'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-xs'>Analytics</li>
                    <li className='py-2 text-xs'>Marketing</li>
                    <li className='py-2 text-xs'>Commerce</li>
                    <li className='py-2 text-xs'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-xs'>Pricing</li>
                    <li className='py-2 text-xs'>Documentation</li>
                    <li className='py-2 text-xs'>Guides</li>
                    <li className='py-2 text-xs'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-xs'>About</li>
                    <li className='py-2 text-xs'>Blog</li>
                    <li className='py-2 text-xs'>Jobs</li>
                    <li className='py-2 text-xs'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-xs'>Claim</li>
                    <li className='py-2 text-xs'>Policy</li>
                    <li className='py-2 text-xs'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer