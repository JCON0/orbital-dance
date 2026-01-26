import React, { useState } from 'react'
import SignUpHeader from '../../components/SignUpHeader'
import RoleSelection from '../../components/RoleSelection'
import SignUpForm from '../../components/SignUpForm'
import SocialSignUp from '../../components/SocialSignUp'
import SignUpFooter from '../../components/SignUpFooter'

const SignUpPage = () => {
  const [role, setRole] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [companyName, setCompanyName] = useState('')

  const handleSignUp = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    // TODO: Implement sign-up logic
    console.log('Sign up with email:', {
      role,
      name,
      email,
      password,
      companyName: role === 'promoter' ? companyName : undefined,
    })
  }

  const handleGoogleSignUp = () => {
    // TODO: Implement Google sign-up
    console.log('Sign up with Google')
  }

  const handleFacebookSignUp = () => {
    // TODO: Implement Facebook sign-up
    console.log('Sign up with Facebook')
  }

  const handleChangeRole = () => {
    setRole(null)
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
  }

  return (
    <div className="min-h-screen bg-primary flex flex-col -mt-16 pt-16">
      <div className="flex-1 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <SignUpHeader />

          {/* Role Selection */}
          {!role ? (
            <RoleSelection onSelectRole={setRole} />
          ) : (
            <>
              {/* Sign Up Form */}
              <SignUpForm
                role={role}
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                companyName={companyName}
                setCompanyName={setCompanyName}
                onSubmit={handleSignUp}
              />

              {/* Social Sign Up */}
              <SocialSignUp
                onGoogleSignUp={handleGoogleSignUp}
                onFacebookSignUp={handleFacebookSignUp}
              />

              {/* Footer */}
              <SignUpFooter onChangeRole={handleChangeRole} />
            </>
          )}

          {/* Back to Home (when on role selection) */}
          {!role && (
            <div className="mt-8 text-center">
              <SignUpFooter />
            </div>
          )}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  )
}

export default SignUpPage
