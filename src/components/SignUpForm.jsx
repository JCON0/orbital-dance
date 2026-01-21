import React from 'react'

const SignUpForm = ({ role, name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, companyName, setCompanyName, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mb-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1.5">
          Full name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          required
        />
      </div>

      {role === 'promoter' && (
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-primary mb-1.5">
            Company/Venue name
          </label>
          <input
            type="text"
            id="company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Your company name"
            className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
            required
          />
        </div>
      )}

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

      <div>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-primary mb-1.5">
          Confirm password
        </label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full rounded-lg border border-primary bg-card px-4 py-2.5 text-primary placeholder-slate-500 transition focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          className="rounded border-primary bg-card"
          required
        />
        <label htmlFor="terms" className="text-sm text-secondary">
          I agree to the{' '}
          <a href="#" className="text-cyan-500 hover:text-cyan-600 transition">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-cyan-500 hover:text-cyan-600 transition">
            Privacy Policy
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-2.5 font-semibold text-white transition hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
      >
        Create account
      </button>
    </form>
  )
}

export default SignUpForm
