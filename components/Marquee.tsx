export default function Marquee(){
  return (
    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden z-0 py-0 text-neutral-900">
      {/* Line 1 - Left to Right */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l1-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      {/* Line 2 - Right to Left */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-right-to-left inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l2-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      {/* Line 3 - Left to Right */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l3-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      {/* Line 4 - Right to Left */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-right-to-left inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l4-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Additional lines for smaller screens */}
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l5-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-right-to-left inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l6-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee-left-to-right inline-block">
          {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
            <span key={`l7-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}