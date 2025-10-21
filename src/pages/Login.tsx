import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { User, Lock, Mail, Eye, EyeOff } from 'lucide-react'

const Login: React.FC = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Accept any email/password combination
    if (formData.email && formData.password) {
      // Store user data in localStorage
      const userData = {
        id: Date.now().toString(),
        username: formData.username || formData.email.split('@')[0],
        email: formData.email,
        profilePicture: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.username || formData.email.split('@')[0])}&background=ff0000&color=ffffff&size=200`,
        memberLevel: 'Premium',
        joinDate: new Date().toISOString(),
        totalViews: Math.floor(Math.random() * 10000) + 1000,
        totalLikes: Math.floor(Math.random() * 500) + 50,
        totalPurchases: Math.floor(Math.random() * 20) + 5
      }
      
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('isAuthenticated', 'true')
      
      // Navigate to dashboard
      navigate('/dashboard')
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="card">
                <div className="card-content">
                  <div className="has-text-centered mb-6">
                    <h1 className="title is-2 has-text-white">
                      {isLogin ? 'Welcome Back' : 'Join Flith Farm'}
                    </h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      {isLogin ? 'Sign in to your account' : 'Create your account'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label className="label has-text-white">Email</label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                        />
                        <span className="icon is-small is-left">
                          <Mail size={16} />
                        </span>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label has-text-white">Username (Optional)</label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="text"
                          name="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          placeholder="Choose a username"
                        />
                        <span className="icon is-small is-left">
                          <User size={16} />
                        </span>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label has-text-white">Password</label>
                      <div className="control has-icons-left has-icons-right">
                        <input
                          className="input"
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          required
                        />
                        <span className="icon is-small is-left">
                          <Lock size={16} />
                        </span>
                        <span 
                          className="icon is-small is-right is-clickable"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </span>
                      </div>
                    </div>

                    {!isLogin && (
                      <div className="field">
                        <label className="label has-text-white">Confirm Password</label>
                        <div className="control has-icons-left">
                          <input
                            className="input"
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm your password"
                            required={!isLogin}
                          />
                          <span className="icon is-small is-left">
                            <Lock size={16} />
                          </span>
                        </div>
                      </div>
                    )}

                    {isLogin && (
                      <div className="field">
                        <div className="control">
                          <label className="checkbox has-text-white">
                            <input type="checkbox" />
                            Remember me
                          </label>
                        </div>
                      </div>
                    )}

                    <div className="field">
                      <div className="control">
                        <button 
                          type="submit" 
                          className="button is-primary is-fullwidth is-large"
                        >
                          {isLogin ? 'Sign In' : 'Create Account'}
                        </button>
                      </div>
                    </div>

                    <div className="has-text-centered">
                      <p className="has-text-grey-light">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <a 
                          className="has-text-primary"
                          onClick={() => setIsLogin(!isLogin)}
                          style={{cursor: 'pointer'}}
                        >
                          {isLogin ? 'Sign up' : 'Sign in'}
                        </a>
                      </p>
                    </div>

                    {isLogin && (
                      <div className="has-text-centered mt-4">
                        <a className="has-text-grey-light" href="#forgot">
                          Forgot your password?
                        </a>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
