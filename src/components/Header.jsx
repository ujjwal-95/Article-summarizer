import React from 'react'
import { FaGithub } from 'react-icons/fa'



function Header() {
return (
    <div className='flex flex-row justify-end p-8  gap-4'>
        <a href="https://github.com/ujjwal-95/Article-summarizer" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
        </a>
    </div>
)
}

export default Header