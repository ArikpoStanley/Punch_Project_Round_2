import React from 'react'
import previous from "../assets/previous.svg"
import fig from "../assets/figma.svg"
import pshop from "../assets/pshop.svg"
import AI from "../assets/AI.svg"
import shopify from "../assets/shopify.svg"
import magento from "../assets/magento.svg"
import dataScience from "../assets/datascience.svg"
import doubleu from "../assets/doubleu.svg"
import dotnet from "../assets/dotnet.svg"
import next from "../assets/blackmore.svg"
import icon1 from '../assets/skill.svg'
import box from '../assets/sub.svg'
import profile from '../assets/profile.svg'
import blackmore from '../assets/blackmore.svg'
import u from "../assets/u.svg"
import cinema from "../assets/cinema.svg"
import line from "../assets/lines.png"

const Second = () => { 
    var Array1 = [{image: fig, text: "UX carder"}, {image: pshop, text: "Graphics carder"},
        {image: AI, text: "Illustration Artist"}, {image: u, text: "u Engine"}, {image: cinema, text: "Cinema 4D"}]

    var Array2 = [{image: shopify, text: "Shopify Developer"}, {image: magento, text: "Magento Developer"},
        {image: dataScience, text: "dataScience Scientist"}, {image: doubleu, text: "doubleu Developer"},
        {image: dotnet, text: "Dotnet Developer"}]
    var array3 = [
        {id:1, image: icon1, text: "989 Skills"}, {id:2, image: box,text: "45 Sub-Categories"},{id:3, image: profile, text: "1011 Profiles"}]
    
  return (
    <div className='  mt-20 '>
        <img className='lg:mb-10' src={line} alt="line" data-aos="fade-up"/>
    <div className=' bg-[#EDEFFF] transform rotate-[-1deg] scale-110 w-screen h-fit '>
        <div className=' lg:w-screen h-fit flex flex-col pt-10 lg:pt-40 pb-20 items-center gap-20 rotate-[1deg]'>
            <div className=' w-[88%] lg:w-[67%]'>
                <p className='text-[28px] lg:text-[54px] font-[600] lg:font-[700] text-center leading-tight lg:leading-[64px]' data-aos="fade-up-left" data-aos-duration="500">Your one-stop marketplace for finding the talent your business needs.</p>
            </div>  
            <div className=' grid lg:grid-cols-2 w-[85%] justify-center  items-center  lg:pr-20 gap-y-10 '>
                <div className='flex flex-col gap-4 w-[100%] lg:w-[380px]' data-aos="fade-up-left" data-aos-duration="500">
                    <p className='text-[18px] lg:text-[24px]  leading-tight font-[500]'>Find Dev and IT professionals to scale your business.</p>
                    <div className='grid grid-cols-2 text-[16px] font-[400] text-[#202229] gap-y-3'>
                        {
                            array3.map((array) => (
                                <div key={array.id} className='flex gap-2' data-aos="fade-down" data-aos-duration="500">
                                    <img src={array.image} alt="array" />
                                    <p className='text-[14px] lg:text-[16px]'>{array.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col  gap-4 bg-[#FFFFFF] p-4 rounded-[7px] w-[100%] lg:w-fit ' data-aos="fade-down-left">
                    <p className='text-[16px] font-[500] ' >IT & Development</p>
                    <div className='grid grid-cols-2  lg:grid-cols-6 gap-6 '>
                        {
                            Array2.map((arr) => (
                                <div key={arr.text} className='flex flex-col items-center '>
                                    <div className='h-[60px] w-[60px] rounded-full bg-[#F6F6F6] flex items-center justify-center '>
                                        <img src={arr.image} alt="it" />
                                    </div>
                                    <p className='text-[14px] font-[600] w-[81px] text-center'>{arr.text}</p>
                                </div>
                            ))
                        }
                        <div className='flex flex-col items-center '>
                            <div className='h-[60px] w-[60px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center '>
                                <img src={next} alt="it" />
                            </div>  
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-[100%] lg:w-[380px]' data-aos="fade-down" >
                    <p className='text-[18px] lg:text-[24px]  leading-tight font-[500]'>Explore Creative individuals with a keen eye for detAIl.  </p>
                    <div className='grid grid-cols-2 text-[16px] font-[400] text-[#202229] gap-y-3'>
                        {
                            array3.map((array) => (
                                <div key={array.id} className='flex gap-2'>
                                    <img src={array.image} alt="array" />
                                    <p className='text-[14px] lg:text-[16px]'>{array.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='flex flex-col gap-4 bg-[#FFFFFF] p-4 rounded-[7px] w-[100%] lg:w-fit' data-aos="fade-up">
                    <p className='text-[16px] font-[500] '>IT & Development</p>
                    <div className='grid grid-cols-2  lg:grid-cols-6 gap-6 '>
                        <div className='flex flex-col items-center '>
                            <div className='h-[60px] w-[60px] rounded-[30px] bg-[#F6F6F6] flex items-center justify-center '>
                                <img src={previous} alt="it" />
                            </div>
                                   
                        </div>
                        {
                            Array1.map((card) => (
                                <div key={card.text} className='flex flex-col items-center '>
                                    <div className='h-[60px] w-[60px] rounded-full bg-[#F6F6F6] flex items-center justify-center '>
                                        <img src={card.image} alt="it" />
                                    </div>
                                    <p className='text-[14px] font-[600] w-[81px] text-center'>{card.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex  gap-4 items-center'>
                    <img src={blackmore} alt="blackmore" className='w-[54px] lg:w-[74px]' /> 
                    <p className='lg:text-[22px] font-[500]'>Explore blackmore</p>
                </div>
                <div>
                    <p className='lg:text-[22px] text-[#202229]'><span className='font-bold'>30 blackmore</span> to explore</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Second