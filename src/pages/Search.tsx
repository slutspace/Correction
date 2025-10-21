import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import VideoCard from '../components/VideoCard'
import { Search as SearchIcon, Filter, SortAsc } from 'lucide-react'

interface Video {
  id: string
  title: string
  thumbnail: string
  channelName: string
  channelAvatar: string
  views: number
  likes: number
  duration: string
  uploadDate: string
}

const Search: React.FC = () => {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('relevance')
  const [filterBy, setFilterBy] = useState('all')

  // Mock search results
  const mockResults: Video[] = [
    {
      id: '1',
      title: 'Amazing Tech Review - Latest Smartphone 2024',
      thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=225&fit=crop',
      channelName: 'TechReviewer',
      channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      views: 1250000,
      likes: 45000,
      duration: '12:34',
      uploadDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Tech News Today - Breaking Updates',
      thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=225&fit=crop',
      channelName: 'TechNews',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      views: 890000,
      likes: 32000,
      duration: '8:45',
      uploadDate: '2024-01-14'
    },
    {
      id: '3',
      title: 'Tech Tutorial: Learn Programming',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=225&fit=crop',
      channelName: 'CodeMaster',
      channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      views: 2100000,
      likes: 78000,
      duration: '15:22',
      uploadDate: '2024-01-13'
    },
    {
      id: '4',
      title: 'Tech Gadgets Unboxing',
      thumbnail: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=225&fit=crop',
      channelName: 'GadgetGuru',
      channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      views: 650000,
      likes: 28000,
      duration: '18:56',
      uploadDate: '2024-01-12'
    },
    {
      id: '5',
      title: 'Tech Industry Analysis',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop',
      channelName: 'TechAnalyst',
      channelAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
      views: 420000,
      likes: 19000,
      duration: '22:15',
      uploadDate: '2024-01-11'
    },
    {
      id: '6',
      title: 'Tech Startup Stories',
      thumbnail: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=225&fit=crop',
      channelName: 'StartupStories',
      channelAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      views: 980000,
      likes: 41000,
      duration: '30:00',
      uploadDate: '2024-01-10'
    }
  ]

  useEffect(() => {
    // Simulate API call
    setLoading(true)
    setTimeout(() => {
      setVideos(mockResults)
      setLoading(false)
    }, 1000)
  }, [query, sortBy, filterBy])

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'date', label: 'Upload Date' },
    { value: 'views', label: 'View Count' },
    { value: 'rating', label: 'Rating' }
  ]

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'videos', label: 'Videos' },
    { value: 'channels', label: 'Channels' },
    { value: 'playlists', label: 'Playlists' }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Searching...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <SearchIcon className="w-6 h-6 text-gray-400" />
            <h1 className="text-2xl font-bold text-white">
              Search results for "{query}"
            </h1>
          </div>
          <p className="text-gray-400">
            {videos.length} results found
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-400" />
              <select
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500"
              >
                {filterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <SortAsc size={16} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white text-sm focus:outline-none focus:border-red-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-white mb-2">No results found</h2>
            <p className="text-gray-400">
              Try different keywords or check your spelling
            </p>
          </div>
        )}

        {/* Load More */}
        {videos.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn btn-secondary">
              Load More Results
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search

