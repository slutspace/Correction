import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, Menu, X, LogOut, BarChart3 } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated')
    const userData = localStorage.getItem('user')
    
    if (authStatus === 'true' && userData) {
      setIsAuthenticated(true)
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
    setUser(null)
    window.location.href = '/'
  }

  return (
    <nav className="navbar has-background-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="is-flex is-align-items-center">
            <span className="has-text-weight-bold" style={{
              fontSize: '24px',
              marginRight: '8px'
            }}>🏠</span>
            <span className="has-text-weight-bold is-size-5">Correction</span>
          </div>
        </Link>

        <a
          role="button"
          className={`navbar-burger ${isMenuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="button is-primary">
                    <span className="icon">
                      <BarChart3 size={16} />
                    </span>
                    <span>Dashboard</span>
                  </Link>
                  <div className="dropdown is-right is-hoverable">
                    <div className="dropdown-trigger">
                      <button className="button is-light" aria-haspopup="true" aria-controls="user-menu">
                        <span className="icon">
                          <User size={16} />
                        </span>
                        <span>{user?.username}</span>
                        <span className="icon is-small">
                          <svg className="svg-inline--fa fa-angle-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M201.4 374.6c12.5 12.5 32.8 37.5 32.8 37.5s20.3-25 32.8-37.5L401.4 270.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 333.3 92.1 201.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L201.4 374.6z"></path></svg>
                        </span>
                      </button>
                    </div>
                    <div className="dropdown-menu" id="user-menu" role="menu">
                      <div className="dropdown-content">
                        <div className="dropdown-item">
                          <div className="media">
                            <div className="media-left">
                              <figure className="image is-32x32">
                                <img src={user?.profilePicture} alt={user?.username} className="is-rounded" />
                              </figure>
                            </div>
                            <div className="media-content">
                              <p className="title is-6">{user?.username}</p>
                              <p className="subtitle is-7 has-text-grey-light">{user?.email}</p>
                            </div>
                          </div>
                        </div>
                        <hr className="dropdown-divider" />
                        <Link to="/dashboard" className="dropdown-item">
                          <span className="icon">
                            <BarChart3 size={16} />
                          </span>
                          Dashboard
                        </Link>
                        <a className="dropdown-item" onClick={handleLogout}>
                          <span className="icon">
                            <LogOut size={16} />
                          </span>
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link to="/login" className="button is-light">
                  <span className="icon">
                    <User size={16} />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header

