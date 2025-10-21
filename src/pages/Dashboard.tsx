import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  User, 
  Heart, 
  ShoppingBag, 
  Star, 
  Eye, 
  ThumbsUp, 
  TrendingUp, 
  Calendar,
  Settings,
  LogOut,
  Crown,
  BarChart3,
  Users,
  Video,
  Play
} from 'lucide-react'

interface UserData {
  id: string
  username: string
  email: string
  profilePicture: string
  memberLevel: string
  joinDate: string
  totalViews: number
  totalLikes: number
  totalPurchases: number
}

interface VideoData {
  id: string
  title: string
  thumbnail: string
  channelName: string
  channelAvatar: string
  views: number
  likes: number
  duration: string
  uploadDate: string
  price?: number
  isPurchased?: boolean
}

interface CreatorData {
  id: string
  name: string
  avatar: string
  subscribers: number
  videos: number
  isSubscribed: boolean
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [purchasedVideos, setPurchasedVideos] = useState<VideoData[]>([])
  const [likedVideos, setLikedVideos] = useState<VideoData[]>([])
  const [favoriteCreators, setFavoriteCreators] = useState<CreatorData[]>([])
  const [analytics, setAnalytics] = useState({
    totalWatchTime: 0,
    videosWatched: 0,
    favoriteCategory: 'Technology',
    weeklyViews: [120, 200, 150, 300, 250, 180, 220],
    monthlySpending: 89.99
  })

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }

    // Mock data for demonstration
    setPurchasedVideos([
      {
        id: '1',
        title: 'Advanced React Patterns',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
        channelName: 'CodeMaster',
        channelAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
        views: 15000,
        likes: 450,
        duration: '45:30',
        uploadDate: '2024-01-10',
        price: 29.99,
        isPurchased: true
      },
      {
        id: '2',
        title: 'Photography Masterclass',
        thumbnail: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=300&h=200&fit=crop',
        channelName: 'PhotoPro',
        channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        views: 8500,
        likes: 320,
        duration: '38:15',
        uploadDate: '2024-01-08',
        price: 19.99,
        isPurchased: true
      }
    ])

    setLikedVideos([
      {
        id: '3',
        title: 'Amazing Tech Review - Latest Smartphone 2024',
        thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop',
        channelName: 'TechReviewer',
        channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        views: 1250000,
        likes: 45000,
        duration: '12:34',
        uploadDate: '2024-01-15'
      },
      {
        id: '4',
        title: 'Cooking Masterclass: Perfect Pasta Recipe',
        thumbnail: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&h=200&fit=crop',
        channelName: 'ChefMaster',
        channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        views: 890000,
        likes: 32000,
        duration: '8:45',
        uploadDate: '2024-01-14'
      }
    ])

    setFavoriteCreators([
      {
        id: '1',
        name: 'TechReviewer',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        subscribers: 1250000,
        videos: 245,
        isSubscribed: true
      },
      {
        id: '2',
        name: 'CodeMaster',
        avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
        subscribers: 850000,
        videos: 180,
        isSubscribed: true
      },
      {
        id: '3',
        name: 'PhotoPro',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        subscribers: 650000,
        videos: 120,
        isSubscribed: true
      }
    ])
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('isAuthenticated')
    window.location.href = '/'
  }

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'purchased', label: 'Purchased', icon: ShoppingBag },
    { id: 'liked', label: 'Liked', icon: Heart },
    { id: 'creators', label: 'Creators', icon: Users },
    { id: 'profile', label: 'Profile', icon: User }
  ]

  if (!user) {
    return (
      <div className="has-background-dark" style={{minHeight: '100vh'}}>
        <div className="has-text-centered" style={{paddingTop: '200px'}}>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="has-text-grey-light">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          {/* Header */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="is-flex is-justify-content-space-between is-align-items-center">
                <div className="is-flex is-align-items-center">
                  <figure className="image is-64x64 mr-4">
                    <img
                      src={user.profilePicture}
                      alt={user.username}
                      className="is-rounded"
                    />
                  </figure>
                  <div>
                    <h1 className="title is-3 has-text-white">Welcome back, {user.username}!</h1>
                    <div className="is-flex is-align-items-center">
                      <span className="tag is-primary mr-2">
                        <span className="icon">
                          <Crown size={14} />
                        </span>
                        <span>{user.memberLevel}</span>
                      </span>
                      <span className="has-text-grey-light">Member since {formatDate(user.joinDate)}</span>
                    </div>
                  </div>
                </div>
                <div className="is-flex">
                  <button className="button is-light mr-2">
                    <span className="icon">
                      <Settings size={16} />
                    </span>
                    <span>Settings</span>
                  </button>
                  <button className="button is-danger" onClick={handleLogout}>
                    <span className="icon">
                      <LogOut size={16} />
                    </span>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="tabs mb-5">
            <ul>
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <li key={tab.id} className={activeTab === tab.id ? 'is-active' : ''}>
                    <a onClick={() => setActiveTab(tab.id)}>
                      <span className="icon">
                        <Icon size={16} />
                      </span>
                      <span>{tab.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="columns">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Quick Stats</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Total Views</span>
                        <span className="has-text-white">{formatNumber(user.totalViews)}</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Videos Liked</span>
                        <span className="has-text-white">{user.totalLikes}</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Videos Purchased</span>
                        <span className="has-text-white">{user.totalPurchases}</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between">
                        <span className="has-text-grey-light">Monthly Spending</span>
                        <span className="has-text-white">${analytics.monthlySpending}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-two-thirds">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Weekly Activity</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between is-align-items-end" style={{height: '200px'}}>
                        {analytics.weeklyViews.map((views, index) => (
                          <div key={index} className="has-text-centered">
                            <div 
                              className="has-background-primary"
                              style={{
                                height: `${(views / 300) * 150}px`,
                                width: '30px',
                                marginBottom: '10px'
                              }}
                            ></div>
                            <span className="has-text-grey-light is-size-7">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Purchased Videos Tab */}
          {activeTab === 'purchased' && (
            <div className="card">
              <div className="card-content">
                <h3 className="title is-5 has-text-white mb-4">
                  <span className="icon">
                    <ShoppingBag size={20} />
                  </span>
                  Purchased Videos ({purchasedVideos.length})
                </h3>
                <div className="columns is-multiline">
                  {purchasedVideos.map((video) => (
                    <div key={video.id} className="column is-one-third">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-16by9">
                            <img src={video.thumbnail} alt={video.title} />
                          </figure>
                        </div>
                        <div className="card-content">
                          <h4 className="title is-6 has-text-white mb-2">{video.title}</h4>
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <span className="has-text-grey-light is-size-7">{video.channelName}</span>
                            <span className="tag is-success">Purchased</span>
                          </div>
                          <div className="is-flex is-justify-content-space-between mt-2">
                            <span className="has-text-grey-light is-size-7">${video.price}</span>
                            <Link to={`/video/${video.id}`} className="button is-small is-primary">
                              <span className="icon">
                                <Play size={12} />
                              </span>
                              <span>Watch</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Liked Videos Tab */}
          {activeTab === 'liked' && (
            <div className="card">
              <div className="card-content">
                <h3 className="title is-5 has-text-white mb-4">
                  <span className="icon">
                    <Heart size={20} />
                  </span>
                  Liked Videos ({likedVideos.length})
                </h3>
                <div className="columns is-multiline">
                  {likedVideos.map((video) => (
                    <div key={video.id} className="column is-one-third">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-16by9">
                            <img src={video.thumbnail} alt={video.title} />
                          </figure>
                        </div>
                        <div className="card-content">
                          <h4 className="title is-6 has-text-white mb-2">{video.title}</h4>
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <span className="has-text-grey-light is-size-7">{video.channelName}</span>
                            <span className="has-text-grey-light is-size-7">{formatNumber(video.views)} views</span>
                          </div>
                          <div className="is-flex is-justify-content-space-between mt-2">
                            <span className="has-text-grey-light is-size-7">{formatDate(video.uploadDate)}</span>
                            <Link to={`/video/${video.id}`} className="button is-small is-primary">
                              <span className="icon">
                                <Play size={12} />
                              </span>
                              <span>Watch</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Favorite Creators Tab */}
          {activeTab === 'creators' && (
            <div className="card">
              <div className="card-content">
                <h3 className="title is-5 has-text-white mb-4">
                  <span className="icon">
                    <Users size={20} />
                  </span>
                  Favorite Creators ({favoriteCreators.length})
                </h3>
                <div className="content">
                  {favoriteCreators.map((creator) => (
                    <div key={creator.id} className="media mb-4">
                      <div className="media-left">
                        <figure className="image is-64x64">
                          <img
                            src={creator.avatar}
                            alt={creator.name}
                            className="is-rounded"
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                          <div>
                            <h4 className="title is-6 has-text-white">{creator.name}</h4>
                            <p className="subtitle is-7 has-text-grey-light">
                              {formatNumber(creator.subscribers)} subscribers • {creator.videos} videos
                            </p>
                          </div>
                          <div className="is-flex">
                            <button className="button is-primary is-small mr-2">
                              <span className="icon">
                                <Play size={12} />
                              </span>
                              <span>Watch</span>
                            </button>
                            <button className="button is-light is-small">
                              <span className="icon">
                                <Settings size={12} />
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="columns">
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Profile Picture</h3>
                    <div className="has-text-centered">
                      <figure className="image is-128x128 mx-auto mb-4">
                        <img
                          src={user.profilePicture}
                          alt={user.username}
                          className="is-rounded"
                        />
                      </figure>
                      <button className="button is-primary">
                        <span className="icon">
                          <Settings size={14} />
                        </span>
                        <span>Change Picture</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-two-thirds">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Account Information</h3>
                    <div className="content">
                      <div className="field">
                        <label className="label has-text-white">Username</label>
                        <div className="control">
                          <input className="input" type="text" value={user.username} readOnly />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label has-text-white">Email</label>
                        <div className="control">
                          <input className="input" type="email" value={user.email} readOnly />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label has-text-white">Member Level</label>
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select value={user.memberLevel}>
                              <option value="Basic">Basic</option>
                              <option value="Premium">Premium</option>
                              <option value="Pro">Pro</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="is-flex is-justify-content-flex-end">
                        <button className="button is-primary">
                          <span className="icon">
                            <Settings size={14} />
                          </span>
                          <span>Update Profile</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Dashboard
