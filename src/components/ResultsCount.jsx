import React from 'react'

const ResultsCount = ({ count }) => {
  return (
    <div className="mb-6 text-sm text-slate-600 dark:text-slate-400">
      Showing {count} {count === 1 ? 'event' : 'events'}
    </div>
  )
}

export default ResultsCount
