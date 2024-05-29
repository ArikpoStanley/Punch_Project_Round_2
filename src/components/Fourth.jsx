import React from 'react'
import one from '../assets/one.svg'
import two from '../assets/two.svg'
import three from '../assets/three.svg'
import next from "../assets/blackmore.svg"
import image1 from '../assets/leelar.svg'
import image2 from '../assets/allison.svg'
import image3 from '../assets/ten.svg'
import form3 from '../assets/form3.jpg'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'
import card4 from '../assets/card4.svg'
import line1 from '../assets/formline1.svg'
import line2 from '../assets/formline2.svg'
import form1 from '../assets/form1.jpg'
import form2 from '../assets/form2.jpg'

const Fourth = () => {
    const obj = { line1, line2 }
    const lines = [obj, obj, obj,]
  return (
    <div className='flex flex-col '>
        <div className="lg:px-10 px-4 py-36">
              <div className='text-center pb-20'>
                  <p className='font-[700] text-[36px] lg:text-[54px] '>Start your journey today.</p>
              </div>
          <div >
                  <div className=' bg-[#EDEFFF] h-fit py-20 px-10 rotate-[-3deg] overflow-y-hidden skew-x-[-3deg]' >
                    <div className='rotate-[3deg] skew-x-[3deg] flex gap-6 relative'>

                          <div>
                            <img src={one} alt="one" />
                          </div>
                          <div className='w-[407px] flex flex-col gap-10' data-aos="fade-left">
                              <p className='text-[34px] leading-[44px] font-[600]'>Find your next star performer.</p>
                              <p className='text-[16px] text-[#202229] opacity-[80%]'>Explore the vast Zwilt marketplace to find the candidate that meets your needs.</p>

                              <div className='flex items-center gap-4'>
                                  <img src={next} alt="next"  className='w-[49px] h-[49px]'/>
                                  <p className='text-[14px]'>Join Now</p>
                              </div>
                          </div>

            <div className="  absolute top-[-100px] right-[300px] hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#C8EFC4] rounded-bl-3xl'>
                    <img src={card1} alt="card1" />
                </div>
                <div className='flex flex-col gap-4 px-4 py-4'>
                    <p className='text-[18px] '>Ruby Developer</p>
                    <p className='text-[12px]'>Redwood City, California 7 years experience</p>
                </div>
            </div>        
        </div>  

        <div className=" absolute top-[-120px] right-4 hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#C8EFC4] rounded-bl-3xl'>
                    <img src={card2} alt="card1" />
                </div>
                <div className='flex flex-col gap-4 px-4 py-4'>
                    <p className='text-[18px] '>System ops Engineer</p>
                    <p className='text-[12px]'>Abu Dhabi, UAE 5 years experience</p>
                </div>
            </div>        
        </div> 
        <div className="absolute bottom-[-90px] right-[300px] hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#D8D2FF] rounded-t-3xl'>
                    <img src={card3} alt="card1" />
                </div>
              
            </div>        
        </div>  
        <div className=" absolute bottom-[-100px] right-4 hidden lg:block">
            <div className='w-[220px] bg-white shadow-lg h-fit rounded-[21px]'>
                <div className='bg-[#FDDD8B] rounded-t-3xl'>
                    <img src={card4} alt="card1" />
                </div>
                
            </div>        
        </div>  
      </div>
                  </div>
 
                  <div className=' bg-[#FFF7E1] h-fit py-20 px-10 rotate-[-3deg] overflow-y-hidden skew-x-[-3deg] mt-8' >
                    <div className='rotate-[3deg] skew-x-[3deg] flex gap-6 relative'>

                          <div>
                            <img src={two} alt="one" />
                          </div>
                          <div className='w-[407px] flex flex-col gap-10' data-aos="fade-left">
                            <p className='text-[34px] leading-[44px] font-[600]'>Evaluate to your heart’s content.</p>
                            <p className='text-[16px] text-[#202229] opacity-[80%]'>Assess the candidate through work history, transparent tests and video interviews.</p>

                            <div className='flex items-center gap-4'>
                                <img src={next} alt="next"  className='w-[49px] h-[49px]'/>
                                <p className='text-[14px]'>Browse More</p>
                            </div>
                          </div>

          <div className='hidden lg:flex absolute top-[-40px] right-[300px]  flex-col gap-6 bg-white h-[295px] shadow-lg p-6 w-fit rounded-2xl'>
            <div className='flex gap-4 items-center'>
                <img src={form1} alt="form" />
                <div className='flex flex-col gap-2'>
                    <div className='h-[10px] w-[66px] bg-[#D8D2FF] rounded-md'></div>
                    <div className='h-[10px] w-[85px] bg-[#D8D2FF] rounded-md'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 '>
                {
                    lines.map((line, index) => (

                        <div key={index} className='flex flex-col gap-2'>
                            <img src={line.line1} alt="line" className='w-[152px] h-[10px]'/>
                            <img src={line.line2} alt="line" className='w-[171px] h-[10px]'/>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className=' absolute top-[-130px] right-4 hidden lg:flex flex-col gap-6 bg-white shadow-lg p-6 w-fit rounded-2xl'>
            <div className='flex gap-4 items-center'>
                <img src={form2} alt="form" />
                <div className='flex flex-col gap-2'>
                    <div className='h-[10px] w-[66px] bg-[#C8EFC4] rounded-md'></div>
                    <div className='h-[10px] w-[85px] bg-[#C8EFC4] rounded-md'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 '>
                {
                    lines.map((line, index) => (

                        <div key={index} className='flex flex-col gap-2'>
                            <img src={line.line1} alt="line" className='w-[152px] h-[10px]'/>
                            <img src={line.line2} alt="line" className='w-[171px] h-[10px]'/>
                        </div>
                    ))
                }
            </div>

        </div>
        <div className=' absolute bottom-[-255px] right-4 hidden lg:flex flex-col gap-6 bg-white shadow-lg p-6 w-fit rounded-2xl'>
            <div className='flex gap-4 items-center'>
                <img src={form3} alt="form" />
                <div className='flex flex-col gap-2'>
                    <div className='h-[10px] w-[66px] bg-[#FDDD8B] rounded-md'></div>
                    <div className='h-[10px] w-[85px] bg-[#FDDD8B] rounded-md'></div>
                </div>
            </div>
            <div className='flex flex-col gap-6 '>
                {
                    lines.map((line, index) => (

                        <div key={index} className='flex flex-col gap-2'>
                            <img src={line.line1} alt="line" className='w-[152px] h-[10px]'/>
                            <img src={line.line2} alt="line" className='w-[171px] h-[10px]'/>
                        </div>
                    ))
                }
            </div>

        </div>

                    </div>
                  </div>
            
                  <div className=' bg-[#F3F3F3] h-fit py-20 px-10 rotate-[-3deg] overflow-y-hidden skew-x-[-3deg] mt-8' >
                    <div className='rotate-[3deg] skew-x-[3deg] flex gap-6 relative'>

                          <div>
                            <img src={three} alt="one" />
                          </div>
                          <div className='w-[407px] flex flex-col gap-10' data-aos="fade-left">
                              <p className='text-[34px] leading-[44px] font-[600]'>Start building your team.</p>
                              <p className='text-[16px] text-[#202229] opacity-[80%]'>Onboard your candidate right away and start creating the next big thing.</p>

                              <div className='flex items-center gap-4'>
                                  <img src={next} alt="next"  className='w-[49px] h-[49px]'/>
                                  <p className='text-[14px]'>Join Now</p>
                              </div>
                          </div>

                        <img src={image1} alt="leelar" className='absolute right-4 top-[-110px] hidden lg:block' />
                        <img src={image2} alt="allison" className='absolute right-[160px] top-[-110px] hidden lg:block' />
                        <img src={image3} alt="10x" className='absolute right-[-20px] bottom-[-100px] hidden lg:block' />

                          
                    </div>
                  </div>


          </div>

        </div >
    </div>
  )
}

export default Fourth
