import React from 'react'

const ProblemSolution = () => {
  return (
    <div className="bg-secondary py-16 sm:py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2">
          {/* The Struggle */}
          <div className="rounded-2xl border border-primary bg-primary p-8">
            <div className="mb-4 text-4xl">😫</div>
            <h3 className="mb-4 text-2xl font-bold text-primary">The Struggle</h3>
            <ul className="space-y-3 text-secondary">
              <li className="flex gap-3">
                <span>•</span>
                <span>Events scattered across unreliable sources</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>No connection between promoters and attendees</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Hard to discover new venues and artists</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Community fragmented across platforms</span>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <span>Missing out on local electronic music scene</span>
              </li>
            </ul>
          </div>

          {/* Our Solution */}
          <div className="rounded-2xl border border-primary bg-primary p-8">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-4 text-2xl font-bold text-primary">Our Solution</h3>
            <ul className="space-y-3 text-secondary">
              <li className="flex gap-3">
                <span>✓</span>
                <span>One platform for all electronic music events</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Direct connection with event organizers</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Discover emerging venues and talented artists</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Build your network with the global EDM community</span>
              </li>
              <li className="flex gap-3">
                <span>✓</span>
                <span>Never miss an event in your city again</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemSolution
