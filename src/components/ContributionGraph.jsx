import React, { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

const years = [2025, 2024, 2023, 2022]

export function ContributionGraph() {
  const [year, setYear] = useState(new Date().getFullYear())

  return (
    <section
      id="contributions"
      className="w-full bg-[#181818] py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-white text-3xl font-bold mb-8 text-center lg:text-left">
          Contribution Graph
        </h2>

        {/* Responsive container */}
        <div className="bg-[#121212] rounded-xl p-4 md:p-6 lg:p-8 flex flex-col lg:flex-row gap-6">
          {/* Graph and legend */}
          <div className="flex-1 overflow-x-auto">
            <div className="min-w-[350px]">
              <GitHubCalendar
                username={import.meta.env.VITE_GITHUB_USERNAME}
                year={year}
                blockSize={13}
                blockMargin={5}
                fontSize={14}
                colorScheme="dark"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <div className="text-sm text-gray-400 mt-4 flex items-center gap-1">
              <span>Less</span>
              <span className="inline-block w-4 h-4 bg-gray-700 rounded-sm" />
              <span className="inline-block w-4 h-4 bg-green-600 rounded-sm" />
              <span className="inline-block w-4 h-4 bg-green-500 rounded-sm" />
              <span className="inline-block w-4 h-4 bg-green-400 rounded-sm" />
              <span>More</span>
            </div>
          </div>

          {/* Year selector */}
          <div className="w-full lg:w-auto">
            <div className="flex lg:flex-col gap-2 overflow-x-auto">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setYear(y)}
                  className={`
                    flex-shrink-0 px-4 py-2 rounded-md text-sm font-semibold transition-all
                    ${y === year
                      ? 'bg-green-500 text-black'
                      : 'bg-[#1e1e1e] text-gray-300 hover:bg-green-600 hover:text-black'}
                  `}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
