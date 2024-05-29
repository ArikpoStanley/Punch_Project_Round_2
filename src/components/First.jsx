import React from 'react'
import face from '../assets/face.svg'
import search from '../assets/search.svg'

var stacks = [
  "Python Developer", "Data Scientist", "Shopify Developer", "Shopify Developer",
  "Front End Developer", "Python Developer", "MERN Stack Developer", "Shopify Developer",
  "Full Stack Developer", "Full Stack Developer", "Python Developer"
]
const First = () => {
 const str = "IT & Development"
  var [active, setActive] = React.useState(str)
  var depts = [str, "Design & Creative"]
  return (
    <div>
        <div className='flex flex-col items-center gap-6 py-10 lg:py-24' >
            <div className="inline-block text-center text-[36px] lg:text-[54px] font-[700] w-[80%] leading-tight" data-aos="fade-down-left">

                <p className=" inline-block">Finding the right fit
                <img src={face} alt="face" className="inline-block" />
                has never been easier</p>
            </div>

            <div className='w-[80%] lg:w-[38%] text-center text-[16px] lg:text-[22px] ' data-aos="fade-right">

              <p>With our rigorous pre-vetting process, you'll never have to worry
                about finding the ideal candidate ever again.</p>

            </div>
            <div className='flex justify-between items-center w-[90%] lg:w-[38%] h-fit border-[1.5px] border-[#F0F0F0] rounded-[15px] pl-6 'data-aos="fade-down">
              <p className='text-[14px] lg:text-[16px]'>Looking for <span className='text-[#959595]'>design |</span></p>
              <img src={search} alt="search" className=' w-[50px] lg:w-[74px]'/>
            </div>

            <div className='lg:w-[67%] w-[90%] bg-[#F8F8F8] flex flex-col items-center justify-center gap-6 p-4 rounded-[15px]' data-aos="fade-left" >
                <div className='w-fit flex justify-center bg-[#D2D2D2] rounded-[15px]'>
                    {
                      depts.map((dept) => (
                        <div className={`h-[44px] flex lg:text-[16px] items-center px-6 rounded-[15px] text-[14px] ${active === dept ? "bg-[#C7F4C2] font-[600]" : "bg-none font-[500]"} cursor-pointer`} key={dept} onClick={() => setActive(dept)}>{dept}</div>
                      ))
                    }
                </div>

                <div className='grid lg:grid-cols-3 gap-x-4 lg:gap-x-40 gap-y-2 px-2 grid-cols-2 md:grid-cols-3 lg:px-0 '>
                  {
                    stacks.map((stack) => (
                      <div key={stack} className='text-[#959595]  hover:text-blue-900 text-[16px] cursor-pointer' >
                          {stack}
                      </div>
                    ))
                  }

                  <p className='cursor-pointer lg:text-[16px] font-semibold '>Explore More </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default First