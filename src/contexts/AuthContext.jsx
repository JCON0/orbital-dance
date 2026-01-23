import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Fetch users from json-server
      const response = await fetch('http://localhost:8001/users')
      const data = await response.json()
      const users = data.users || data

      // Find matching user
      const foundUser = users.find(
        (u) => u.email === email && u.password === password
      )

      if (foundUser) {
        // Remove password from user object before storing
        const { password, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword)
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))
        return { success: true, user: userWithoutPassword }
      } else {
        return { success: false, error: 'Invalid email or password' }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'Failed to connect to server' }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    logout,
    loading,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
