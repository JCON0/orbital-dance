import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center px-4 -mt-16 pt-16">
      <div className="max-w-md text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-lg text-secondary mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl hover:from-cyan-600 hover:to-blue-600"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-primary bg-card px-8 py-3 font-semibold text-primary transition hover:bg-secondary"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
