import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
        <div className='mycontainer flex justify-between items-center px-4 h-14 py-5'>

        <div className='logo font-bold text-white tesxt-2xl'>
            
            <span className='text-green-700'>&lt;</span>
            Pass
            <span className='text-green-700'>OP/&gt; </span>
          
        </div>
        <ul>
            <li className='flex gap-4'>
                <a href="" className='hover:font-bold'>Home</a>
                <a href="" className='hover:font-bold'>About</a>
                <a href="" className='hover:font-bold'>Contact us</a>
            </li>
        </ul>
        <button className='text-white bg-slate-800 h-14' onClick={()=>{window.open("https://github.com/Vidit0018")}}>
          <img src="\icons\github.png" alt="github" className=' p-5   w-16'  />
        </button>
        </div>
      
    </nav>
  )
}

export default Navbar
