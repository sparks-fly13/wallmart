import React from 'react'
import touchImg from './touch.jpg';

function ContactUs() {
  return (
    <div className='relative w-full h-full text-white m-auto mb-[-8px]' >
        <img className='w-full md:h-[450px] h-screen object-cover '  src={touchImg} alt="" />
        <div className='absolute top-0 left-0 bg-black/80 w-full h-full' />
        <div className='w-full h-full  absolute top-0 left-0 z-20 py-14  md:py-20' >
            <h1 className='text-3xl font-bold pb-4 text-center' >Get In Touch</h1>
            <div className='w-[80%] mx-auto  grid md:grid-cols-2 md:space-y-0 space-y-8 '   >
                <div className=' flex flex-col space-y-6 md:w-[90%]' >
                    
                    <div className='flex flex-col' >
                    <label className='text-xs font-bold text-[#145566]' htmlFor="Name">Name</label>
                    <input className='bg-transparent  '  type="text" name="" id="Name" value="lorem ipsum"/>
                    <div className=' border-[1px] border-white rounded-lg' />
                    </div>
                    <div className='flex flex-col' >
                    <label className='text-xs font-bold text-[#145566]' htmlFor="Subject">Subject</label>
                    <input className='bg-transparent'  type="text" name="" id="Subject" value="lorem ipsum doler sit amet"/>
                    <div className=' border-[1px] border-white rounded-lg' />
                    </div>
                    <div className='flex flex-col' >
                    <label className='text-xs font-bold text-[#145566]' htmlFor="Email">Email</label>
                    <input className='bg-transparent'  type="text" name="" id="Email" value="lorem ipsum"/>
                    <div className=' border-[1px] border-white rounded-lg' />
                    </div>
  


                </div>
                <div>
                    <p className='text-sm font-bold text-[#145566]' >message</p>
                    <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur praesentium pariatur natus reiciendis facilis nesciunt tempora dolorem doloribus consectetur soluta!</p>
                    <div className='' />
                </div>
               
                
            </div>
            <div className='text-center mt-6 md:mt-14' >
            <button className='  bg-[#145566]  py-2 w-[200px] md:w-[35%] rounded-md text-white border-lg font-bold' >Submit</button>
            </div>
        </div>
        
    </div>
  )
}

export default ContactUs;