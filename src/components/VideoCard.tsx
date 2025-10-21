import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Play, Pause } from 'lucide-react'

interface VideoCardProps {
  id: string
  title: string
  description?: string
  thumbnail: string
  videoUrl?: string
  channelName: string
  channelAvatar: string
  views: number
  likes: number
  duration: string
  uploadDate: string
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  description,
  thumbnail,
  videoUrl,
  channelName,
  channelAvatar,
  views,
  likes,
  duration,
  uploadDate
}) => {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [durationSeconds, setDurationSeconds] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Convert duration string to seconds
  useEffect(() => {
    if (duration) {
      const parts = duration.split(':')
      if (parts.length === 2) {
        setDurationSeconds(parseInt(parts[0]) * 60 + parseInt(parts[1]))
      } else if (parts.length === 3) {
        setDurationSeconds(parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]))
      }
    }
  }, [duration])

  // Handle hover events
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true)
      if (videoRef.current && videoUrl) {
        videoRef.current.currentTime = 0
        videoRef.current.play()
        setIsPlaying(true)
      }
    }, 500)
  }

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !durationSeconds) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = x / rect.width
    const newTime = percentage * durationSeconds
    
    videoRef.current.currentTime = newTime
    setCurrentTime(newTime)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const formatViews = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  const handleCardClick = () => {
    navigate(`/video/${id}`)
  }

  return (
    <div 
      className="video-card" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card" style={{cursor: 'pointer'}} onClick={handleCardClick}>
        {/* Video Player with Hover Playback */}
        <div className="card-image" style={{position: 'relative'}}>
          <figure className="image is-16by9">
            {isHovered && videoUrl ? (
              <video
                ref={videoRef}
                src={videoUrl}
                poster={thumbnail}
                muted
                loop
                onTimeUpdate={handleTimeUpdate}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            ) : (
              <img
                src={thumbnail}
                alt={title}
                style={{objectFit: 'cover'}}
              />
            )}
          </figure>
          
          {/* Play/Pause Overlay */}
          {isHovered && (
            <div className="has-text-centered" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2
            }}>
              {isPlaying ? (
                <Pause size={48} className="has-text-white" fill="currentColor" />
              ) : (
                <Play size={48} className="has-text-white" fill="currentColor" />
              )}
            </div>
          )}
          
          {/* Duration Tag */}
          <div className="has-text-right" style={{position: 'absolute', bottom: '8px', right: '8px', zIndex: 3}}>
            <span className="tag is-dark">{duration}</span>
          </div>
          
          {/* Progress Bar */}
          {isHovered && durationSeconds > 0 && (
            <div 
              className="progress-container"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '4px',
                backgroundColor: 'rgba(0,0,0,0.3)',
                cursor: 'pointer',
                zIndex: 3
              }}
              onClick={handleScrub}
            >
              <div 
                className="progress-bar"
                style={{
                  height: '100%',
                  backgroundColor: '#ff0000',
                  width: `${(currentTime / durationSeconds) * 100}%`,
                  transition: 'width 0.1s ease'
                }}
              />
            </div>
          )}
          
          {/* Time Display */}
          {isHovered && (
            <div className="has-text-white is-size-7" style={{
              position: 'absolute',
              bottom: '8px',
              left: '8px',
              backgroundColor: 'rgba(0,0,0,0.7)',
              padding: '2px 6px',
              borderRadius: '3px',
              zIndex: 3
            }}>
              {formatTime(currentTime)} / {duration}
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img
                  src={channelAvatar}
                  alt={channelName}
                  className="is-rounded"
                />
              </figure>
            </div>
            <div className="media-content">
              <Link to={`/video/${id}`} className="has-text-white">
                <p className="title is-6 has-text-white" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginBottom: '0.5rem'
                }}>
                  {title}
                </p>
              </Link>
              <p className="subtitle is-7 has-text-grey-light">
                <Link to={`/profile/${channelName}`} className="has-text-grey-light">
                  {channelName}
                </Link>
              </p>
            </div>
          </div>
          
          {/* Description */}
          {description && (
            <div className="content" style={{marginTop: '0.5rem'}}>
              <p className="is-size-7 has-text-grey-light" style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.4'
              }}>
                {description}
              </p>
            </div>
          )}
          
          <div className="content">
            <div className="is-flex is-justify-content-space-between is-align-items-center">
              <span className="is-size-7 has-text-grey-light">{formatViews(views)} views</span>
              <span className="is-size-7 has-text-grey-light">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard