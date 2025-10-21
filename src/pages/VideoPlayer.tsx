import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Play, Pause, Volume2, Maximize } from 'lucide-react'

interface VideoData {
  id: string
  title: string
  description: string
  videoUrl: string
  thumbnail: string
  channelName: string
  channelAvatar: string
  subscribers: number
  views: number
  likes: number
  dislikes: number
  uploadDate: string
  duration: string
}


const VideoPlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [video, setVideo] = useState<VideoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  // Mock video data
  const mockVideo: VideoData = {
    id: id || '1',
    title: 'Amazing Tech Review - Latest Smartphone 2024',
    description: 'In this comprehensive review, we dive deep into the latest smartphone technology, testing all the key features and performance metrics. From camera quality to battery life, we cover everything you need to know before making your purchase decision.',
    videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1280&h=720&fit=crop',
    channelName: 'TechReviewer',
    channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    subscribers: 1250000,
    views: 1250000,
    likes: 45000,
    dislikes: 1200,
    uploadDate: '2024-01-15',
    duration: '12:34'
  }


  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setVideo(mockVideo)
      setLoading(false)
    }, 1000)
  }, [id])

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
      month: 'long',
      day: 'numeric'
    })
  }

  const handleLike = () => {
    if (isDisliked) {
      setIsDisliked(false)
    }
    setIsLiked(!isLiked)
  }

  const handleDislike = () => {
    if (isLiked) {
      setIsLiked(false)
    }
    setIsDisliked(!isDisliked)
  }

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }


  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading video...</p>
        </div>
      </div>
    )
  }

  if (!video) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Video not found</h1>
          <p className="text-gray-400">The video you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          <div className="columns">
            {/* Main Video Player */}
            <div className="column is-two-thirds">
              {/* Video Player */}
              <div className="card mb-5">
                <div className="card-image">
                  <figure className="image is-16by9">
                    <video
                      className="has-background-black"
                      poster={video.thumbnail}
                      controls
                      style={{width: '100%', height: '100%', objectFit: 'cover'}}
                    >
                      <source src={video.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </figure>
                </div>
              </div>

              {/* Video Info */}
              <div className="card">
                <div className="card-content">
                  <h1 className="title is-4 has-text-white mb-4">{video.title}</h1>
                  
                  {/* Video Stats and Actions */}
                  <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
                    <div className="is-flex is-align-items-center">
                      <span className="has-text-grey-light mr-4">{formatNumber(video.views)} views</span>
                      <span className="has-text-grey-light">{formatDate(video.uploadDate)}</span>
                    </div>
                    
                    <div className="is-flex is-align-items-center">
                      <button
                        onClick={handleLike}
                        className={`button is-small mr-2 ${isLiked ? 'is-primary' : 'is-light'}`}
                      >
                        <span className="icon">
                          <ThumbsUp size={14} />
                        </span>
                        <span>{formatNumber(video.likes + (isLiked ? 1 : 0))}</span>
                      </button>
                      <button
                        onClick={handleDislike}
                        className={`button is-small mr-2 ${isDisliked ? 'is-primary' : 'is-light'}`}
                      >
                        <span className="icon">
                          <ThumbsDown size={14} />
                        </span>
                        <span>{formatNumber(video.dislikes + (isDisliked ? 1 : 0))}</span>
                      </button>
                      <button className="button is-small is-light mr-2">
                        <span className="icon">
                          <Share size={14} />
                        </span>
                        <span>Share</span>
                      </button>
                      <button className="button is-small is-light">
                        <span className="icon">
                          <Download size={14} />
                        </span>
                        <span>Download</span>
                      </button>
                    </div>
                  </div>

                  {/* Channel Info */}
                  <div className="media mb-4">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img
                          src={video.channelAvatar}
                          alt={video.channelName}
                          className="is-rounded"
                        />
                      </figure>
                    </div>
                    <div className="media-content">
                      <div className="is-flex is-justify-content-space-between is-align-items-center">
                        <div>
                          <p className="title is-6 has-text-white">{video.channelName}</p>
                          <p className="subtitle is-7 has-text-grey-light">{formatNumber(video.subscribers)} subscribers</p>
                        </div>
                        <button
                          onClick={handleSubscribe}
                          className={`button ${isSubscribed ? 'is-light' : 'is-primary'}`}
                        >
                          {isSubscribed ? 'Subscribed' : 'Subscribe'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="content">
                    <p className="has-text-white">{video.description}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-4">Related Videos</h3>
                  <div className="content">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Link key={i} to={`/video/${i}`} className="media mb-4">
                        <div className="media-left">
                          <figure className="image is-120x68">
                            <img
                              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&h=68&fit=crop"
                              alt={`Related Video ${i}`}
                              className="has-background-grey-dark"
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-6 has-text-white mb-1">
                            Related Video Title {i}
                          </p>
                          <p className="subtitle is-7 has-text-grey-light">Channel Name</p>
                          <p className="subtitle is-7 has-text-grey-light">1.2M views • 2 days ago</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VideoPlayer

