"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 30,
        text: "Technical skills"
    },
    {
        num: 7,
        text: "Online Certifications"
    },
    {
        num: 6,
        text: "Programming Languages"
    },
    {
        num: 'YES',
        text: "Flexible with time zone communications"
    },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div 
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}
                        >
                            {/* Check if num is a number */}
                            {typeof item.num === 'number' ? (
                                <CountUp 
                                    end={item.num}
                                    duration={5}
                                    delay={2}
                                    className="text-4xl xl:text-6xl font-bold"
                                />
                            ) : (
                                <span className="text-4xl xl:text-6xl font-bold">{item.num}</span>
                            )}
                            
                            <p className={`${ item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" }
                            leading-snug text-white/80
                            `}> 
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
}

export default Stats;
