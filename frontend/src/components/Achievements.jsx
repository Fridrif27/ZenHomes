import React, { useEffect, useState } from 'react'
import { LiaCertificateSolid } from "react-icons/lia";
import CountUp from "react-countup"

const Achievements = () => {

    const statistics = [
        { label: "Happy clients", value: 12 },
        { label: "Different cities", value: 3 },
        { label: "Projects completed", value: 45 },
    ]

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const top = aboutSection.getBoundingClientRect().top;
                const isVisible = top < window.innerHeight - 100;
                setIsVisible(isVisible);
            }
        };
        window.addEventListener("scroll", handleScroll);
        // cleanup function to remove the event listener
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        <section id='about' className='mx-auto max-w-[1440px]'>
            {/* container */}
            <div className='flex flex-col xl:flex-row'>
                {/* left side */}
                <div className='flex-[6] flex justify-center flex-col bg-[#008274] text-white px-6 lg:px-12 py-16'>
                    <h2 className='h2'>Our Achievements</h2>
                    <p className='py-5 text-white max-w-[47rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio cupiditate magni quasi earum unde, corrupti quidem illum ea laborum vel tempora dignissimos aspernatur iusto doloribus, totam blanditiis commodi!</p>
                    {/* statistics container */}
                    <div className='flex flex-wrap gap-4'>
                        {statistics.map((statistic, index) => (
                            <div key={index} className='p-4 rounded-lg'>
                                <div className='flex items-center gap-1'>
                                    <CountUp start={isVisible ? 0 : null} end={statistic.value} duration={10} delay={1}>
                                        {({ countUpRef }) => (
                                            <h3 ref={countUpRef} className='text-5xl font-sans'></h3>
                                        )}
                                    </CountUp>
                                    <h4 className='regular-32'>k+</h4>
                                </div>
                                <p className='text-white capitalize pt-2'>{statistic.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Right side */}
                <div className='flex-[2] relative bg-primary px-6 lg:px-12 py-16 flexCenter'>
                    <div className='p-4 rounded-lg flexCenter flex-col xl:-rotate-90'>
                        <span className='relative bottom-8 p-3 flex items-center rounded-full'><LiaCertificateSolid className='text-5xl text-black'/></span>
                        <span className='relative bottom-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem aliquid perspiciatis voluptate.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements