import React from 'react'

const EventTags = ({ tags }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default EventTags
