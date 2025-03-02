// // 

// "use client"

// import { useRef, useState, useEffect } from "react"
// import Image from "next/image"
// import { ArrowDown } from "lucide-react"

// // Marquee component for the background text effect
// const Marquee = () => {
//   return (
//     <div className="absolute inset-0 flex flex-col justify-between overflow-hidden z-0 py-0 text-neutral-900">
//       {/* Line 1 - Left to Right */}
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-left-to-right inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l1-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       {/* Line 2 - Right to Left */}
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-right-to-left inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l2-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       {/* Line 3 - Left to Right */}
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-left-to-right inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l3-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       {/* Line 4 - Right to Left */}
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-right-to-left inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l4-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Additional lines for smaller screens */}
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-left-to-right inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l5-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-right-to-left inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l6-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       <div className="whitespace-nowrap overflow-hidden flex items-center">
//         <div className="animate-marquee-left-to-right inline-block">
//           {Array(15).fill("JOEL MATHEW JOB ").map((text, index) => (
//             <span key={`l7-${index}`} className="text-8xl md:text-[200px] font-bold opacity-80">
//               {text}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// // Sample section components
// const AboutSection = () => (
//   <div className="bg-white/90 p-8 rounded-lg max-w-3xl">
//     <h2 className="text-3xl font-bold mb-4">About Me</h2>
//     <p className="text-lg">
//       I'm Joel Mathew Job, a creative developer with a passion for building beautiful, 
//       functional websites and applications. With expertise in modern web technologies, 
//       I create seamless user experiences that stand out.
//     </p>
//   </div>
// )

// const ProjectsSection = () => (
//   <div className="bg-white/90 p-8 rounded-lg max-w-3xl">
//     <h2 className="text-3xl font-bold mb-4">My Projects</h2>
//     <div className="space-y-4">
//       <div className="p-4 bg-gray-100 rounded">
//         <h3 className="text-xl font-semibold">E-Commerce Platform</h3>
//         <p>A full-stack e-commerce solution with Next.js and Node.js.</p>
//       </div>
//       <div className="p-4 bg-gray-100 rounded">
//         <h3 className="text-xl font-semibold">Portfolio Website</h3>
//         <p>This creative, interactive portfolio built with modern web technologies.</p>
//       </div>
//     </div>
//   </div>
// )

// const SkillsSection = () => (
//   <div className="bg-white/90 p-8 rounded-lg max-w-3xl">
//     <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
//     <div className="grid grid-cols-2 gap-4">
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Frontend</h3>
//         <ul className="list-disc pl-5">
//           <li>React & Next.js</li>
//           <li>TypeScript</li>
//           <li>Tailwind CSS</li>
//           <li>UI/UX Design</li>
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-2">Backend</h3>
//         <ul className="list-disc pl-5">
//           <li>Node.js</li>
//           <li>Express</li>
//           <li>MongoDB</li>
//           <li>API Development</li>
//         </ul>
//       </div>
//     </div>
//   </div>
// )

// const ContactSection = () => (
//   <div className="bg-white/90 p-8 rounded-lg max-w-3xl">
//     <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
//     <p className="mb-4">Let's work together on your next project!</p>
//     <div className="space-y-2">
//       <p><strong>Email:</strong> joel@example.com</p>
//       <p><strong>LinkedIn:</strong> /in/joelmathewjob</p>
//       <p><strong>GitHub:</strong> @joelmathewjob</p>
//     </div>
//   </div>
// )

// export default function Home() {
//   const [scrollPosition, setScrollPosition] = useState(0)
//   const [storyProgress, setStoryProgress] = useState(0)
//   const maxScroll = 400 // Maximum scroll value

//   // Calculate opacity for profile picture based on scroll progress
//   const profileOpacity = Math.max(0, 1 - storyProgress * 2.5) // Fade out faster than progress

//   // Calculate scale for zoom effect
//   const zoomScale = 1 + storyProgress * 0.15

//   // Calculate section visibility based on story progress
//   const aboutVisible = storyProgress > 0.1
//   const projectsVisible = storyProgress > 0.4
//   const skillsVisible = storyProgress > 0.6
//   const contactVisible = storyProgress > 0.8

//   // Handle wheel event to implement custom scrolling
//   useEffect(() => {
//     const handleWheel = (e) => {
//       e.preventDefault()
      
//       // Update scroll position based on wheel delta
//       const newPosition = Math.min(
//         maxScroll,
//         Math.max(0, scrollPosition + e.deltaY / 3)
//       )
//       setScrollPosition(newPosition)
      
//       // Calculate progress as a value between 0 and 1
//       setStoryProgress(newPosition / maxScroll)
//     }
    
//     // Add event listener
//     window.addEventListener('wheel', handleWheel, { passive: false })
    
//     // Clean up
//     return () => {
//       window.removeEventListener('wheel', handleWheel)
//     }
//   }, [scrollPosition, maxScroll])

//   return (
//     <main className="relative h-screen w-full overflow-hidden bg-background text-foreground">
//       {/* Hero Section with Profile Picture */}
//       <section
//         className="fixed inset-0 flex items-center justify-center"
//         style={{
//           opacity: profileOpacity,
//           transform: `scale(${zoomScale})`,
//           transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
//         }}
//       >
//         {/* Marquee Background */}
//         <Marquee />

//         {/* Profile Picture with Blob Effect */}
//         <div
//           className="absolute inset-0 flex items-center justify-center z-10"
//           style={{
//             opacity: profileOpacity,
//             transform: `scale(${Math.max(0.8, 1 - storyProgress * 0.3)})`,
//             transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
//           }}
//         >
//           <div className="relative md:h-120 md:w-120 h-80 w-80 rounded-full overflow-hidden border-4 border-primary bg-black animate-blob">
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 blur-2xl opacity-50 animate-blob-motion"></div>
//             <img
//               src="/api/placeholder/800/800"
//               alt="Joel Mathew Job"
//               className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
//             />
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-primary">
//           <ArrowDown size={32} />
//           <p className="mt-2 text-sm font-medium">Scroll to explore my story</p>
//         </div>
//       </section>

//       {/* Story Sections - These appear as user scrolls */}
//       <div className="relative w-full h-screen">
//         {/* About Section */}
//         <div
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             opacity: aboutVisible ? Math.min(1, (storyProgress - 0.1) * 3) : 0,
//             transform: `translateY(${aboutVisible ? 0 : 100}px) scale(${aboutVisible ? 1 : 0.9})`,
//             transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
//             zIndex: aboutVisible ? 10 : 0,
//           }}
//         >
//           <AboutSection />
//         </div>

//         {/* Projects Section */}
//         <div
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             opacity: projectsVisible ? Math.min(1, (storyProgress - 0.4) * 5) : 0,
//             transform: `translateY(${projectsVisible ? 0 : 100}px) scale(${projectsVisible ? 1 : 0.9})`,
//             transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
//             zIndex: projectsVisible ? 20 : 0,
//           }}
//         >
//           <ProjectsSection />
//         </div>

//         {/* Skills Section */}
//         <div
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             opacity: skillsVisible ? Math.min(1, (storyProgress - 0.6) * 5) : 0,
//             transform: `translateY(${skillsVisible ? 0 : 100}px) scale(${skillsVisible ? 1 : 0.9})`,
//             transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
//             zIndex: skillsVisible ? 30 : 0,
//           }}
//         >
//           <SkillsSection />
//         </div>

//         {/* Contact Section */}
//         <div
//           className="absolute inset-0 flex items-center justify-center"
//           style={{
//             opacity: contactVisible ? Math.min(1, (storyProgress - 0.8) * 5) : 0,
//             transform: `translateY(${contactVisible ? 0 : 100}px) scale(${contactVisible ? 1 : 0.9})`,
//             transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
//             zIndex: contactVisible ? 40 : 0,
//           }}
//         >
//           <ContactSection />
//         </div>
//       </div>
//     </main>
//   )
// }


"use client"

import { useRef, useState, useEffect } from "react"
import { ArrowDown } from "lucide-react"

// Marquee component for the background text effect - remains consistent throughout
const Marquee = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-between overflow-hidden z-0 py-0 text-neutral-900/20">
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

      {/* Additional lines for better screen coverage */}
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

// Component for profile section - refined profile image
const ProfileSection = ({ scale, opacity }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center z-10"
    style={{
      opacity: opacity,
      transform: `scale(${scale})`,
      transition: "opacity 1s ease-out, transform 1s ease-out",
    }}
  >
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative h-96 w-96 md:h-120 md:w-120 rounded-full overflow-hidden shadow-2xl border-8 border-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-30 animate-subtle-pulse"></div>
        <img
          src="/api/placeholder/800/800"
          alt="Joel Mathew Job"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center bg-black/50 px-8 py-3 rounded-lg backdrop-blur-sm">
        Joel Mathew Job
      </h1>
      <p className="text-xl md:text-2xl text-white text-center bg-black/30 px-6 py-2 rounded-lg backdrop-blur-sm max-w-lg">
        Creative Developer & Digital Artisan
      </p>
    </div>
  </div>
)

// Component for about section with circular elements - enhanced design
const AboutSection = ({ scale, opacity }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center z-20"
    style={{
      opacity: opacity,
      transform: `scale(${scale})`,
      transition: "opacity 1s ease-out, transform 1s ease-out",
    }}
  >
    <div className="relative w-full h-full flex items-center justify-center px-6">
      {/* Central content */}
      <div className="bg-white/90 p-8 md:p-12 rounded-2xl max-w-3xl z-10 text-center shadow-2xl backdrop-blur-md border border-white/50">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">About Me</h2>
        <p className="text-xl md:text-2xl mb-6 leading-relaxed">
          I'm a creative developer with a passion for building beautiful, 
          functional websites and applications that create meaningful user experiences.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          With over 5 years of experience in web development, I combine technical expertise
          with a keen eye for design to deliver solutions that not only work flawlessly
          but also captivate users from the first interaction.
        </p>
      </div>
      
      {/* Circular elements - made larger and more vibrant */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-400/30 backdrop-blur-md animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-1/3 h-48 w-48 md:h-80 md:w-80 rounded-full bg-purple-400/30 backdrop-blur-md animate-float-medium"></div>
      <div className="absolute top-1/3 right-1/4 h-40 w-40 md:h-72 md:w-72 rounded-full bg-green-400/30 backdrop-blur-md animate-float-fast"></div>
    </div>
  </div>
)

// Component for projects section with project cards in geometric layout - enhanced design
const ProjectsSection = ({ scale, opacity }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center z-30"
    style={{
      opacity: opacity,
      transform: `scale(${scale})`,
      transition: "opacity 1s ease-out, transform 1s ease-out",
    }}
  >
    <div className="relative w-full h-full flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl z-10">
        <div className="col-span-1 md:col-span-2 text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white bg-black/70 inline-block px-8 py-4 rounded-xl backdrop-blur-md">Featured Projects</h2>
        </div>
        
        <div className="bg-white/90 p-6 md:p-8 rounded-xl transform rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/50 group">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">E-Commerce Platform</h3>
          <div className="h-40 md:h-56 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg my-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white">
            <span className="text-2xl font-light">Project Preview</span>
          </div>
          <p className="text-lg md:text-xl">Comprehensive full-stack solution built with Next.js and Node.js, featuring seamless payment integration and real-time inventory management.</p>
        </div>
        
        <div className="bg-white/90 p-6 md:p-8 rounded-xl transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/50 group">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">Portfolio Website</h3>
          <div className="h-40 md:h-56 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg my-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white">
            <span className="text-2xl font-light">Project Preview</span>
          </div>
          <p className="text-lg md:text-xl">Interactive portfolio featuring smooth animations, dynamic content rendering, and a responsive design that adapts to any device or screen size.</p>
        </div>
        
        <div className="bg-white/90 p-6 md:p-8 rounded-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/50 group">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-green-600 transition-colors">Mobile Application</h3>
          <div className="h-40 md:h-56 bg-gradient-to-br from-green-400 to-green-600 rounded-lg my-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white">
            <span className="text-2xl font-light">Project Preview</span>
          </div>
          <p className="text-lg md:text-xl">Cross-platform React Native app with custom UI components, offline-first functionality, and seamless third-party API integrations.</p>
        </div>
        
        <div className="bg-white/90 p-6 md:p-8 rounded-xl transform rotate-1 hover:rotate-0 transition-transform duration-500 shadow-xl hover:shadow-2xl backdrop-blur-md border border-white/50 group">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 group-hover:text-amber-600 transition-colors">Analytics Dashboard</h3>
          <div className="h-40 md:h-56 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg my-4 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-white">
            <span className="text-2xl font-light">Project Preview</span>
          </div>
          <p className="text-lg md:text-xl">Comprehensive analytics platform with real-time data visualization, customizable reporting features, and an intuitive drag-and-drop interface.</p>
        </div>
      </div>
      
      {/* Background shapes */}
      <div className="absolute inset-0 -z-0 opacity-30">
        <div className="absolute top-1/4 left-1/5 h-96 w-96 bg-blue-500/40 rounded-xl rotate-12 backdrop-blur-sm animate-float-medium"></div>
        <div className="absolute bottom-1/3 right-1/4 h-96 w-96 bg-purple-500/40 rounded-xl -rotate-15 backdrop-blur-sm animate-float-slow"></div>
      </div>
    </div>
  </div>
)

// Component for skills section with skill bubbles - enhanced design
const SkillsSection = ({ scale, opacity }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center z-40"
    style={{
      opacity: opacity,
      transform: `scale(${scale})`,
      transition: "opacity 1s ease-out, transform 1s ease-out",
    }}
  >
    <div className="relative w-full h-full flex items-center justify-center px-6">
      <div className="text-center z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white bg-black/70 inline-block px-8 py-4 rounded-xl backdrop-blur-md">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
          <div className="bg-blue-500 text-white p-6 md:p-8 rounded-full h-40 w-40 md:h-48 md:w-48 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">React</div>
          <div className="bg-purple-500 text-white p-6 md:p-8 rounded-full h-32 w-32 md:h-40 md:w-40 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">Next.js</div>
          <div className="bg-green-500 text-white p-6 md:p-8 rounded-full h-36 w-36 md:h-44 md:w-44 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">TypeScript</div>
          <div className="bg-yellow-500 text-white p-6 md:p-8 rounded-full h-28 w-28 md:h-36 md:w-36 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">Node.js</div>
          <div className="bg-red-500 text-white p-6 md:p-8 rounded-full h-44 w-44 md:h-52 md:w-52 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">UI/UX</div>
          <div className="bg-indigo-500 text-white p-6 md:p-8 rounded-full h-32 w-32 md:h-40 md:w-40 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">CSS</div>
          <div className="bg-pink-500 text-white p-6 md:p-8 rounded-full h-38 w-38 md:h-46 md:w-46 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">MongoDB</div>
          <div className="bg-orange-500 text-white p-6 md:p-8 rounded-full h-30 w-30 md:h-38 md:w-38 flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20">RESTful APIs</div>
        </div>
      </div>
    </div>
  </div>
)

// Component for contact section - enhanced design
const ContactSection = ({ scale, opacity }) => (
  <div 
    className="absolute inset-0 flex items-center justify-center z-50"
    style={{
      opacity: opacity,
      transform: `scale(${scale})`,
      transition: "opacity 1s ease-out, transform 1s ease-out",
    }}
  >
    <div className="bg-white/90 p-10 md:p-12 rounded-2xl max-w-2xl text-center shadow-2xl backdrop-blur-lg border border-white/50">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Let's Connect</h2>
      <p className="text-xl md:text-2xl mb-8">Ready to bring your vision to life? Let's collaborate on your next digital project!</p>
      <div className="space-y-4 text-lg md:text-xl">
        <p className="flex items-center justify-center gap-3">
          <span className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">@</span>
          <span><strong>Email:</strong> joel@example.com</span>
        </p>
        <p className="flex items-center justify-center gap-3">
          <span className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white">in</span>
          <span><strong>LinkedIn:</strong> /in/joelmathewjob</span>
        </p>
        <p className="flex items-center justify-center gap-3">
          <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">gh</span>
          <span><strong>GitHub:</strong> @joelmathewjob</span>
        </p>
      </div>
      <button className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-xl text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all hover:scale-105 hover:shadow-lg">
        Get In Touch
      </button>
    </div>
  </div>
)

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const maxScroll = 1000 // Increased maximum scroll value for slower transitions
  
  // Calculate progress as a value between 0 and 1
  const progress = scrollPosition / maxScroll
  
  // Section visibility and scaling calculations - adjusted for more scroll and slower transitions
  const sections = [
    // [visibility threshold, min scale, max scale]
    [0, 0.2, 1, 0.85], // Profile section - improved visibility range
    [0.15, 0.35, 0.2, 1], // About section
    [0.3, 0.5, 0.2, 1],  // Projects section
    [0.45, 0.65, 0.2, 1],  // Skills section
    [0.6, 0.8, 0.2, 1]   // Contact section
  ]
  
  // Calculate opacity and scale for each section
  const sectionProps = sections.map(([startFade, endFade, minScale, maxScale]) => {
    // Opacity calculation with smoother transition
    let opacity = 0
    if (progress < startFade) opacity = 0
    else if (progress > endFade) opacity = 0
    else {
      // Sine curve for smoother transition
      const normalized = (progress - startFade) / (endFade - startFade)
      opacity = Math.sin(normalized * Math.PI)
    }
    
    // Scale calculation with smoother transition
    let scale
    if (progress < startFade) scale = maxScale
    else if (progress > endFade) scale = minScale
    else {
      const scaleProgress = (progress - startFade) / (endFade - startFade)
      // Ease in-out function for smoother transition
      const easeInOut = scaleProgress < 0.5
        ? 2 * scaleProgress * scaleProgress
        : 1 - Math.pow(-2 * scaleProgress + 2, 2) / 2
      scale = maxScale - easeInOut * (maxScale - minScale)
    }
    
    return { opacity, scale }
  })

  // Handle wheel event to implement custom scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      
      // Update scroll position based on wheel delta with reduced sensitivity for slower scrolling
      const sensitivity = 2.5 // Lower value makes scrolling slower
      const newPosition = Math.min(
        maxScroll,
        Math.max(0, scrollPosition + e.deltaY / sensitivity)
      )
      setScrollPosition(newPosition)
    }
    
    // Add event listener
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    // Clean up
    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [scrollPosition, maxScroll])

  // Add keydown event for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const step = 50 // Keypress scroll step size
      
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setScrollPosition(prev => Math.min(maxScroll, prev + step))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setScrollPosition(prev => Math.max(0, prev - step))
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [maxScroll])

  return (
    <main className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black text-foreground">
      {/* Background overlay for better contrast */}
      <div className="fixed inset-0 bg-blue-900/10 z-0"></div>
      
      {/* Consistent background marquee */}
      <Marquee />
      
      {/* Sections that zoom out as you scroll */}
      <ProfileSection scale={sectionProps[0].scale} opacity={sectionProps[0].opacity} />
      <AboutSection scale={sectionProps[1].scale} opacity={sectionProps[1].opacity} />
      <ProjectsSection scale={sectionProps[2].scale} opacity={sectionProps[2].opacity} />
      <SkillsSection scale={sectionProps[3].scale} opacity={sectionProps[3].opacity} />
      <ContactSection scale={sectionProps[4].scale} opacity={sectionProps[4].opacity} />
      
      {/* Scroll indicator - only visible at the beginning */}
      {progress < 0.1 && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white z-50">
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm font-medium bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">Scroll to explore</p>
            <ArrowDown size={32} className="text-white drop-shadow-lg" />
          </div>
        </div>
      )}
      
      {/* Improved scroll progress indicator */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="h-24 w-3 bg-black/30 backdrop-blur-sm rounded-full overflow-hidden">
          <div 
            className="bg-gradient-to-t from-blue-500 to-purple-500 w-full rounded-full"
            style={{ 
              height: `${progress * 100}%`,
              transition: 'height 0.3s ease-out'
            }}
          ></div>
        </div>
        <div className="mt-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
          {Math.round(progress * 100)}%
        </div>
      </div>
    </main>
  )
}