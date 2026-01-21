import React from 'react'

const SignInForm = ({ email, setEmail, password, setPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mb-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1.5">
          Email address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-primary mb-1.5">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          required
        />
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="rounded border-primary bg-card"
          />
          <span className="text-sm text-secondary">Remember me</span>
        </label>
        <a href="#" className="text-sm text-cyan-500 hover:text-cyan-600 transition">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2.5 font-semibold text-white transition hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      >
        Sign in
      </button>
    </form>
  )
}

export default SignInForm
