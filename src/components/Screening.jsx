import React from 'react'
import image1 from '../assets/screenimg1.svg'
import image2 from '../assets/screenimg2.svg'

const Screening = () => {
    const process = ["Resume Screening", "Video Interview", "Technical Evaluation", "Application Review", "Lets get to work"]
    const [active, setActive] = React.useState("")
  return (
    <div className='  h-full bg-white  lg:w-screen mt-[-20px]' data-aos="fade-up">
        <div className=' py-36 lg:px-10 px-4 flex flex-col gap-8 '>
            <div className='lg:w-[646px] flex flex-col gap-4 lg:gap-8 text-center lg:text-start'>
                <p className='text-[36px] lg:text-[54px] leading-tight lg:leading-[64px] font-[700]'>How we ensure you’re in good hands.</p>
                <p className=' lg:text-[22px] font-[400] '>
                    With our comprehensive screening process, 
                    we hand-pick highly skilled candidates so you can onboard them in a matter of days.
                </p>
            </div>
            <div className='flex flex-col gap-4 ' data-aos="fade-up">
                {
                    process.map((element, index) => (
                    <div  >
                        <div onClick={() => setActive(element)}  className={` ${active === element ?  "hidden" : "flex"} p-4 rounded-[7px] shadow-md gap-6 items-center lg:w-[635px] border border-[#F0F0F0] cursor-pointer`}>
                            <img src={image1} alt="screen1" />
                            <p className='text-[16px]'> <span className='font-bold'>Step {index + 1}:</span> {element}</p>
                        </div>
                        <div onClick={() => setActive("")}  className={` ${active === element ? "flex" : "hidden"} border border-[#F0F0F0] flex-col gap-6 lg:w-[635px] p-4 rounded-[7px] shadow-md cursor-pointer`}>
                            <div className='flex gap-6  items-center'>
                                <img src={image2} alt="screen1" />
                                <p className='text-[16px]'> <span className='font-bold'>Step {index + 1}:</span> {element}</p>
                            </div>
                            <p className='lg:w-[532px] text-[16px]'>Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.
                            </p>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Screening