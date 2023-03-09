import React from 'react'
const Contact = () => {
  return (
    <div className='container py-20' id='contact'>
        <div className="heading text-center font-bold  py-8">
            <h1 className='text-6xl'>Have Question In Your Mind?</h1>
            <h1 className='py-7 text-6xl'>Let Us Help You</h1>
            <input className='text-slate-700 border-none inline-none' type="text" placeholder='Enter Your Emails' />
            <button className='rounded-full text-lg text-white bg-orange-600'>Submit Now</button>
        </div>
    </div>
  )
}

export default Contact
