import React from 'react'

const EventTags = ({ tags }) => {
  return (
    <div className="mb-12">
      <h2 className="mb-4 text-xl font-bold text-white">Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default EventTags
