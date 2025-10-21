import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { User, Video, ThumbsUp, Eye, Calendar, Settings } from 'lucide-react'

interface ProfileData {
  username: string
  displayName: string
  avatar: string
  banner: string
  subscribers: number
  videos: number
  totalViews: number
  joinDate: string
  description: string
  isSubscribed: boolean
}

interface VideoData {
  id: string
  title: string
  thumbnail: string
  views: number
  likes: number
  duration: string
  uploadDate: string
}

const Profile: React.FC = () => {
  const { username } = useParams<{ username: string }>()
  const [profile, setProfile] = useState<ProfileData | null>(null)
  const [videos, setVideos] = useState<VideoData[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('videos')

  // Mock profile data
  const mockProfile: ProfileData = {
    username: username || 'techreviewer',
    displayName: 'Tech Reviewer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=300&fit=crop',
    subscribers: 1250000,
    videos: 342,
    totalViews: 12500000,
    joinDate: '2020-03-15',
    description: 'Passionate about technology and gadgets. I review the latest tech products and share my honest opinions. Subscribe for weekly tech reviews and tutorials!',
    isSubscribed: false
  }

  // Mock videos data
  const mockVideos: VideoData[] = [
    {
      id: '1',
      title: 'iPhone 15 Pro Max Review - Worth the Upgrade?',
      thumbnail: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=225&fit=crop',
      views: 1250000,
      likes: 45000,
      duration: '15:30',
      uploadDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Samsung Galaxy S24 Ultra - Camera Test',
      thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=225&fit=crop',
      views: 890000,
      likes: 32000,
      duration: '12:45',
      uploadDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'MacBook Pro M3 Review - Performance Test',
      thumbnail: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=225&fit=crop',
      views: 2100000,
      likes: 78000,
      duration: '18:20',
      uploadDate: '2024-01-05'
    },
    {
      id: '4',
      title: 'AirPods Pro 2 vs Sony WH-1000XM5',
      thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=225&fit=crop',
      views: 650000,
      likes: 28000,
      duration: '14:15',
      uploadDate: '2023-12-28'
    }
  ]

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProfile(mockProfile)
      setVideos(mockVideos)
      setLoading(false)
    }, 1000)
  }, [username])

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
      month: 'long'
    })
  }

  const handleSubscribe = () => {
    if (profile) {
      setProfile({
        ...profile,
        isSubscribed: !profile.isSubscribed,
        subscribers: profile.isSubscribed 
          ? profile.subscribers - 1 
          : profile.subscribers + 1
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading profile...</p>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Profile not found</h1>
          <p className="text-gray-400">The user you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Banner */}
      <div className="relative h-64 bg-gray-900">
        <img
          src={profile.banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Profile Header */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={profile.avatar}
              alt={profile.displayName}
              className="w-32 h-32 rounded-full border-4 border-black"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{profile.displayName}</h1>
              <p className="text-gray-400 mb-4">@{profile.username}</p>
              <p className="text-white mb-4 max-w-2xl">{profile.description}</p>
              
              <div className="flex flex-wrap items-center space-x-6 mb-4">
                <div className="flex items-center space-x-2">
                  <User size={16} className="text-gray-400" />
                  <span className="text-white font-medium">{formatNumber(profile.subscribers)}</span>
                  <span className="text-gray-400">subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video size={16} className="text-gray-400" />
                  <span className="text-white font-medium">{profile.videos}</span>
                  <span className="text-gray-400">videos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye size={16} className="text-gray-400" />
                  <span className="text-white font-medium">{formatNumber(profile.totalViews)}</span>
                  <span className="text-gray-400">total views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-400">Joined {formatDate(profile.joinDate)}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={handleSubscribe}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    profile.isSubscribed
                      ? 'bg-gray-600 text-white'
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {profile.isSubscribed ? 'Subscribed' : 'Subscribe'}
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors">
                  <Settings size={16} />
                  <span>Settings</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-900 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'videos'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Videos
            </button>
            <button
              onClick={() => setActiveTab('playlists')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'playlists'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              Playlists
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'about'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              About
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="relative aspect-video bg-gray-800">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-medium text-sm line-clamp-2 mb-2">
                    {video.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Eye size={12} />
                      <span>{formatNumber(video.views)} views</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp size={12} />
                      <span>{formatNumber(video.likes)}</span>
                    </div>
                    <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'playlists' && (
          <div className="text-center py-12">
            <p className="text-gray-400">No playlists created yet</p>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">About {profile.displayName}</h2>
            <p className="text-white leading-relaxed">{profile.description}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile

