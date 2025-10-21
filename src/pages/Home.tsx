import React, { useState, useEffect } from 'react'
import VideoCard from '../components/VideoCard'
import { TrendingUp, Clock, Star, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl: string
  channelName: string
  channelAvatar: string
  views: number
  likes: number
  duration: string
  uploadDate: string
}

const Home: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([])
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('trending')
  const [sortBy, setSortBy] = useState('views')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  
  const VIDEOS_PER_PAGE = 16

  // Mock data for demonstration
  const mockVideos: Video[] = [
    {
      id: '1',
      title: 'Amazing Tech Review - Latest Smartphone 2024',
      description: 'In this comprehensive review, we dive deep into the latest smartphone technology, testing all the key features and performance metrics. From camera quality to battery life, we cover everything you need to know before making your purchase decision.',
      thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      channelName: 'TechReviewer',
      channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      views: 1250000,
      likes: 45000,
      duration: '12:34',
      uploadDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Cooking Masterclass: Perfect Pasta Recipe',
      description: 'Learn how to make authentic Italian pasta from scratch with this step-by-step tutorial. We cover everything from making fresh pasta dough to creating the perfect sauce.',
      thumbnail: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      channelName: 'ChefMaster',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      views: 890000,
      likes: 32000,
      duration: '8:45',
      uploadDate: '2024-01-14'
    },
    {
      id: '3',
      title: 'Gaming Highlights - Epic Moments Compilation',
      description: 'The best gaming highlights and epic moments from various games. Watch incredible plays, funny moments, and jaw-dropping achievements from the gaming community.',
      thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      channelName: 'GamePro',
      channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      views: 2100000,
      likes: 78000,
      duration: '15:22',
      uploadDate: '2024-01-13'
    },
    {
      id: '4',
      title: 'Travel Vlog: Exploring Hidden Gems in Japan',
      description: 'Discover the most beautiful and lesser-known places in Japan that tourists often miss. From hidden temples to local food markets, explore the real Japan.',
      thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      channelName: 'Wanderlust',
      channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      views: 650000,
      likes: 28000,
      duration: '18:56',
      uploadDate: '2024-01-12'
    },
    {
      id: '5',
      title: 'Music Production Tutorial: Creating Beats',
      description: 'Learn the fundamentals of music production and beat making. From basic rhythm patterns to advanced mixing techniques, this tutorial covers everything you need to know.',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      channelName: 'BeatMaker',
      channelAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
      views: 420000,
      likes: 19000,
      duration: '22:15',
      uploadDate: '2024-01-11'
    },
    {
      id: '6',
      title: 'Fitness Routine: 30-Minute Full Body Workout',
      description: 'Get in shape with this intense 30-minute full body workout. No equipment needed - just your body weight and determination. Perfect for beginners and advanced fitness enthusiasts.',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      channelName: 'FitLife',
      channelAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      views: 980000,
      likes: 41000,
      duration: '30:00',
      uploadDate: '2024-01-10'
    },
    {
      id: '7',
      title: 'Art Tutorial: Digital Painting Techniques',
      description: 'Learn professional digital painting techniques used by industry artists. From basic brush work to advanced color theory and composition.',
      thumbnail: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      channelName: 'ArtMaster',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      views: 750000,
      likes: 35000,
      duration: '25:30',
      uploadDate: '2024-01-09'
    },
    {
      id: '8',
      title: 'Science Experiment: Amazing Chemistry Reactions',
      description: 'Watch incredible chemistry experiments that will blow your mind! Safe demonstrations of chemical reactions with detailed explanations.',
      thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      channelName: 'ScienceLab',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      views: 1200000,
      likes: 55000,
      duration: '18:45',
      uploadDate: '2024-01-08'
    },
    {
      id: '9',
      title: 'DIY Home Improvement: Kitchen Renovation',
      description: 'Complete kitchen renovation from start to finish. Learn professional techniques for tiling, painting, and installing fixtures.',
      thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      channelName: 'HomeDIY',
      channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      views: 890000,
      likes: 42000,
      duration: '35:20',
      uploadDate: '2024-01-07'
    },
    {
      id: '10',
      title: 'Photography Tips: Mastering Natural Light',
      description: 'Professional photography techniques for capturing stunning images using natural light. Perfect for beginners and advanced photographers.',
      thumbnail: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      channelName: 'PhotoPro',
      channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      views: 650000,
      likes: 28000,
      duration: '22:15',
      uploadDate: '2024-01-06'
    },
    {
      id: '11',
      title: 'Business Strategy: Building Your Brand',
      description: 'Learn how to build a successful personal brand and grow your business. Expert tips from successful entrepreneurs and marketers.',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      channelName: 'BusinessGuru',
      channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      views: 1100000,
      likes: 48000,
      duration: '28:40',
      uploadDate: '2024-01-05'
    },
    {
      id: '12',
      title: 'Wildlife Documentary: Arctic Adventures',
      description: 'Stunning wildlife footage from the Arctic. Follow polar bears, arctic foxes, and other amazing animals in their natural habitat.',
      thumbnail: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      channelName: 'WildlifeTV',
      channelAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      views: 1500000,
      likes: 72000,
      duration: '42:15',
      uploadDate: '2024-01-04'
    },
    {
      id: '13',
      title: 'Programming Tutorial: React Hooks Explained',
      description: 'Master React hooks with this comprehensive tutorial. Learn useState, useEffect, and custom hooks with practical examples.',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      channelName: 'CodeMaster',
      channelAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
      views: 950000,
      likes: 38000,
      duration: '31:25',
      uploadDate: '2024-01-03'
    },
    {
      id: '14',
      title: 'Fashion Styling: Building Your Wardrobe',
      description: 'Professional styling tips for building a versatile wardrobe. Learn how to mix and match pieces for any occasion.',
      thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      channelName: 'StyleGuide',
      channelAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      views: 720000,
      likes: 32000,
      duration: '19:50',
      uploadDate: '2024-01-02'
    },
    {
      id: '15',
      title: 'History Documentary: Ancient Civilizations',
      description: 'Explore the mysteries of ancient civilizations. From the pyramids of Egypt to the temples of Angkor Wat.',
      thumbnail: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      channelName: 'HistoryChannel',
      channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      views: 1800000,
      likes: 85000,
      duration: '45:30',
      uploadDate: '2024-01-01'
    },
    {
      id: '16',
      title: 'Comedy Skit: Office Life Parody',
      description: 'Hilarious comedy skit about the absurdities of office life. Perfect for a good laugh after a long day at work.',
      thumbnail: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
      channelName: 'ComedyCentral',
      channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      views: 2200000,
      likes: 95000,
      duration: '12:20',
      uploadDate: '2023-12-31'
    },
    {
      id: '17',
      title: 'Music Performance: Acoustic Cover Songs',
      description: 'Beautiful acoustic covers of popular songs. Intimate performances with stunning vocals and guitar work.',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
      channelName: 'AcousticSessions',
      channelAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      views: 1300000,
      likes: 65000,
      duration: '26:45',
      uploadDate: '2023-12-30'
    },
    {
      id: '18',
      title: 'Educational: Learning a New Language',
      description: 'Effective techniques for learning a new language quickly. Tips and tricks from polyglots and language experts.',
      thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=225&fit=crop',
      videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
      channelName: 'LanguageLab',
      channelAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face',
      views: 850000,
      likes: 41000,
      duration: '33:15',
      uploadDate: '2023-12-29'
    }
  ]

  // Sort videos
  useEffect(() => {
    let filtered = [...videos]
    
    // Sort videos
    filtered.sort((a, b) => {
      let aValue, bValue
      
      switch (sortBy) {
        case 'views':
          aValue = a.views
          bValue = b.views
          break
        case 'likes':
          aValue = a.likes
          bValue = b.likes
          break
        case 'date':
          aValue = new Date(a.uploadDate).getTime()
          bValue = new Date(b.uploadDate).getTime()
          break
        case 'title':
          aValue = a.title.toLowerCase()
          bValue = b.title.toLowerCase()
          break
        default:
          aValue = a.views
          bValue = b.views
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
    
    setFilteredVideos(filtered)
    setCurrentPage(1) // Reset to first page when sort changes
  }, [videos, sortBy, sortOrder])

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setVideos(mockVideos)
      setLoading(false)
    }, 1000)
  }, [])

  const tabs = [
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'recent', label: 'Top Rated', icon: Star },
    { id: 'featured', label: 'Featured', icon: Star }
  ]

  // Calculate pagination
  const totalPages = Math.ceil(filteredVideos.length / VIDEOS_PER_PAGE)
  const startIndex = (currentPage - 1) * VIDEOS_PER_PAGE
  const endIndex = startIndex + VIDEOS_PER_PAGE
  const currentVideos = filteredVideos.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading videos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container">
          {/* Tab Navigation - Moved to Left */}
          <div className="tabs mb-6">
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

          {/* Simplified Sort Controls */}
          <div className="has-text-right mb-6">
            <div className="field">
              <div className="control">
                <div className="select is-small">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="has-background-dark has-text-white"
                  >
                    <option value="views">Most Views</option>
                    <option value="likes">Most Liked</option>
                    <option value="date">Newest</option>
                    <option value="title">Title A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid - 4x4 Layout */}
          <div className="columns is-multiline">
            {currentVideos.map((video) => (
              <div key={video.id} className="column is-one-quarter">
                <VideoCard {...video} />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVideos.length === 0 && !loading && (
            <div className="has-text-centered py-6">
              <p className="title is-4 has-text-grey-light">No videos available</p>
              <p className="subtitle is-6 has-text-grey">Check back later for new content</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="has-text-centered mt-6">
              <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                {currentPage > 1 && (
                  <button
                    className="pagination-previous"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                )}
                <button
                  className="pagination-next"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
                
                <ul className="pagination-list">
                  {/* Show first page */}
                  {currentPage > 3 && (
                    <>
                      <li>
                        <button
                          className="pagination-link"
                          onClick={() => handlePageChange(1)}
                        >
                          1
                        </button>
                      </li>
                      {currentPage > 4 && <li><span className="pagination-ellipsis">&hellip;</span></li>}
                    </>
                  )}
                  
                  {/* Show pages around current page */}
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum
                    if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }
                    
                    if (pageNum < 1 || pageNum > totalPages) return null
                    
                    return (
                      <li key={pageNum}>
                        <button
                          className={`pagination-link ${currentPage === pageNum ? 'is-current' : ''}`}
                          onClick={() => handlePageChange(pageNum)}
                        >
                          {pageNum}
                        </button>
                      </li>
                    )
                  })}
                  
                  {/* Show last page */}
                  {currentPage < totalPages - 2 && (
                    <>
                      {currentPage < totalPages - 3 && <li><span className="pagination-ellipsis">&hellip;</span></li>}
                      <li>
                        <button
                          className="pagination-link"
                          onClick={() => handlePageChange(totalPages)}
                        >
                          {totalPages}
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </nav>
              
              {/* Page info */}
              <p className="has-text-grey-light is-size-7 mt-3">
                Showing {startIndex + 1}-{Math.min(endIndex, filteredVideos.length)} of {filteredVideos.length} videos
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Home

