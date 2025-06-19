import React from 'react'
import { ContributionGraph } from '../ContributionGraph'
import GlassNavbar from '../GlassNavbar'
import ShinyText from '../ShinyText'
import LetterGlitch from '../animations/LetterGlitch'
import DotGrid from '../animations/DotGrid'

const About = () => {
  return (
    <section className="min-h-screen w-full mt-9 py-16 px-4">
      <GlassNavbar className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10" />

      {/* Main content split in 2 columns on large screens */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left column: Title and paragraph */}
        <div className="w-full lg:w-1/2 text-left">
          <ShinyText
            text="About Me"
            disabled={false}
            speed={3}
            className="text-5xl font-bold mb-6"
          />

          <ShinyText
            text="I am a passionate developer focused on building beautiful, performant, and accessible web experiences. My work blends creativity with technical expertise, always striving for a premium minimalist aesthetic. I love open source, learning new technologies, and contributing to the developer community."
            disabled={false}
            speed={3}
            className="text-2xl font-thin mb-6"
          />
           {/* Follow me on GitHub button */}
            <a
              href="https://github.com/AezanPathan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 mt-2 rounded-lg bg-[#202020] text-white font-semibold hover:bg-gray-900 transition-colors shadow-lg"
              aria-label="Follow me on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="mr-2"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 0-.288-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Follow me on GitHub
            </a>
          
        </div>

        {/* Right column: Placeholder for now */}
        <div className="w-full lg:w-1/2">

          <div style={{ width: '100%', height: '400px', position: 'relative' }}>
            <DotGrid
              dotSize={10}
              gap={15}
              baseColor="#dbdade"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </div>
      </div>

      {/* Contribution Graph section below */}
      <div className="w-full mt-20">
        <ContributionGraph />
      </div>
    </section>
  )
}

export default About
