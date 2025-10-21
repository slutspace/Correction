import React, { useState } from 'react'
import { 
  Mail, 
  Users, 
  Heart, 
  Star, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Globe,
  MessageCircle,
  Lightbulb,
  Target,
  Zap,
  Shield,
  BookOpen,
  Camera,
  Video,
  Mic,
  Edit,
  Share2,
  ThumbsUp,
  Eye,
  Clock,
  Calendar,
  Bell,
  Send,
  Download,
  FileText,
  Image,
  Play,
  Pause,
  Volume2,
  Settings,
  User,
  Lock,
  Key,
  Database,
  Server,
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Headphones,
  Speaker,
  Wifi,
  Signal,
  Battery,
  WifiOff,
  SignalOff,
  BatteryLow,
  AlertTriangle,
  Info,
  HelpCircle,
  Search,
  Filter,
  Sort,
  Grid,
  List,
  Layout,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  ExternalLink,
  Link,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Save,
  Trash2,
  Archive,
  Folder,
  File,
  FolderOpen,
  FolderPlus,
  FolderMinus,
  FolderX,
  FolderCheck,
  FolderDownload,
  FolderUpload,
  FolderSync,
  FolderLock,
  FolderUnlock,
  FolderHeart,
  FolderStar,
  FolderBookmark,
  FolderPin,
  FolderSearch,
  FolderFilter,
  FolderSort,
  FolderGrid,
  FolderList,
  FolderLayout,
  FolderMaximize,
  FolderMinimize,
  FolderX as FolderXIcon,
  FolderPlus as FolderPlusIcon,
  FolderMinus as FolderMinusIcon,
  FolderCheck as FolderCheckIcon,
  FolderDownload as FolderDownloadIcon,
  FolderUpload as FolderUploadIcon,
  FolderSync as FolderSyncIcon,
  FolderLock as FolderLockIcon,
  FolderUnlock as FolderUnlockIcon,
  FolderHeart as FolderHeartIcon,
  FolderStar as FolderStarIcon,
  FolderBookmark as FolderBookmarkIcon,
  FolderPin as FolderPinIcon,
  FolderSearch as FolderSearchIcon,
  FolderFilter as FolderFilterIcon,
  FolderSort as FolderSortIcon,
  FolderGrid as FolderGridIcon,
  FolderList as FolderListIcon,
  FolderLayout as FolderLayoutIcon,
  FolderMaximize as FolderMaximizeIcon,
  FolderMinimize as FolderMinimizeIcon
} from 'lucide-react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

  const interests = [
    { id: 'content-creation', label: 'Content Creation Tips', icon: Camera },
    { id: 'monetization', label: 'Monetization Strategies', icon: DollarSign },
    { id: 'community', label: 'Community Building', icon: Users },
    { id: 'technology', label: 'Technology Updates', icon: Monitor },
    { id: 'legal', label: 'Legal & Protection', icon: Shield },
    { id: 'analytics', label: 'Analytics & Insights', icon: BarChart3 }
  ]

  const newsletterFeatures = [
    {
      title: 'Creator Spotlights',
      description: 'Discover amazing creators and their success stories',
      icon: Star,
      color: 'has-text-warning'
    },
    {
      title: 'Industry Insights',
      description: 'Latest trends and developments in content creation',
      icon: TrendingUp,
      color: 'has-text-primary'
    },
    {
      title: 'Community Highlights',
      description: 'Celebrate community achievements and milestones',
      icon: Heart,
      color: 'has-text-danger'
    },
    {
      title: 'Educational Content',
      description: 'Learn from experts and improve your skills',
      icon: BookOpen,
      color: 'has-text-success'
    }
  ]

  const recentNewsletters = [
    {
      title: 'Creator Spotlight: TechGuru\'s Journey to 1M Subscribers',
      date: 'January 15, 2024',
      description: 'How one creator built a thriving tech community and monetized their passion...',
      readTime: '5 min read',
      category: 'Creator Spotlight'
    },
    {
      title: 'New Monetization Features: What Creators Need to Know',
      date: 'January 12, 2024',
      description: 'Explore the latest revenue streams and earning opportunities for creators...',
      readTime: '7 min read',
      category: 'Platform Updates'
    },
    {
      title: 'Community Guidelines: Building a Safe and Inclusive Platform',
      date: 'January 10, 2024',
      description: 'Understanding our commitment to creator safety and platform integrity...',
      readTime: '4 min read',
      category: 'Safety & Guidelines'
    }
  ]

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId) 
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    )
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      // Simulate subscription
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
        setSelectedInterests([])
      }, 3000)
    }
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          {/* Header */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="has-text-centered">
                <div className="is-flex is-justify-content-center is-align-items-center mb-4">
                  <span className="icon is-large has-text-primary mr-3">
                    <Mail size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">Flith Farm Newsletter</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Stay connected with our creator community
                    </p>
                  </div>
                </div>
                <p className="has-text-grey-light is-size-5 mb-4">
                  Get to know our amazing creators, discover high-quality content, 
                  and become part of our thriving community. Stay updated with the latest 
                  trends, success stories, and exclusive insights from the Flith Farm ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Features */}
          <div className="columns mb-6">
            {newsletterFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="column is-one-quarter">
                  <div className="card">
                    <div className="card-content has-text-centered">
                      <span className={`icon is-large ${feature.color} mb-3`}>
                        <Icon size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">{feature.title}</h3>
                      <p className="has-text-grey-light">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Subscription Form */}
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-4 has-text-white mb-4">Subscribe to Our Newsletter</h3>
                  
                  {!isSubscribed ? (
                    <form onSubmit={handleSubscribe}>
                      <div className="field">
                        <label className="label has-text-white">Email Address</label>
                        <div className="control">
                          <input
                            className="input is-large"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="field">
                        <label className="label has-text-white">Interests (Optional)</label>
                        <div className="content">
                          <div className="columns is-multiline">
                            {interests.map((interest) => {
                              const Icon = interest.icon
                              return (
                                <div key={interest.id} className="column is-one-third">
                                  <label className="checkbox">
                                    <input
                                      type="checkbox"
                                      checked={selectedInterests.includes(interest.id)}
                                      onChange={() => handleInterestToggle(interest.id)}
                                    />
                                    <span className="ml-2 has-text-white">
                                      <span className="icon">
                                        <Icon size={16} />
                                      </span>
                                      <span>{interest.label}</span>
                                    </span>
                                  </label>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <button 
                            type="submit" 
                            className="button is-primary is-large is-fullwidth"
                            disabled={!email}
                          >
                            <span className="icon">
                              <Send size={16} />
                            </span>
                            <span>Subscribe to Newsletter</span>
                          </button>
                        </div>
                      </div>

                      <div className="content">
                        <p className="has-text-grey-light is-size-7">
                          By subscribing, you agree to receive our newsletter and understand that you can 
                          unsubscribe at any time. We respect your privacy and will never share your email 
                          with third parties.
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="has-text-centered">
                      <div className="icon is-large has-text-success mb-4">
                        <CheckCircle size={64} />
                      </div>
                      <h3 className="title is-4 has-text-white mb-3">Welcome to the Community!</h3>
                      <p className="has-text-grey-light mb-4">
                        Thank you for subscribing to the Flith Farm Newsletter. You'll receive our 
                        latest updates, creator spotlights, and community highlights in your inbox.
                      </p>
                      <div className="is-flex is-justify-content-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="column is-one-third">
              <div className="card mb-4">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-4">Why Subscribe?</h3>
                  <div className="content">
                    <div className="is-flex is-align-items-center mb-3">
                      <span className="icon has-text-primary mr-2">
                        <Users size={16} />
                      </span>
                      <span className="has-text-grey-light">Connect with 125K+ creators</span>
                    </div>
                    <div className="is-flex is-align-items-center mb-3">
                      <span className="icon has-text-primary mr-2">
                        <Star size={16} />
                      </span>
                      <span className="has-text-grey-light">Exclusive creator spotlights</span>
                    </div>
                    <div className="is-flex is-align-items-center mb-3">
                      <span className="icon has-text-primary mr-2">
                        <TrendingUp size={16} />
                      </span>
                      <span className="has-text-grey-light">Latest industry insights</span>
                    </div>
                    <div className="is-flex is-align-items-center mb-3">
                      <span className="icon has-text-primary mr-2">
                        <Heart size={16} />
                      </span>
                      <span className="has-text-grey-light">Community highlights</span>
                    </div>
                    <div className="is-flex is-align-items-center">
                      <span className="icon has-text-primary mr-2">
                        <BookOpen size={16} />
                      </span>
                      <span className="has-text-grey-light">Educational content</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-4">Newsletter Stats</h3>
                  <div className="content">
                    <div className="is-flex is-justify-content-space-between mb-3">
                      <span className="has-text-grey-light">Subscribers</span>
                      <span className="has-text-white">45.2K</span>
                    </div>
                    <div className="is-flex is-justify-content-space-between mb-3">
                      <span className="has-text-grey-light">Open Rate</span>
                      <span className="has-text-white">68.5%</span>
                    </div>
                    <div className="is-flex is-justify-content-space-between mb-3">
                      <span className="has-text-grey-light">Click Rate</span>
                      <span className="has-text-white">23.1%</span>
                    </div>
                    <div className="is-flex is-justify-content-space-between">
                      <span className="has-text-grey-light">Frequency</span>
                      <span className="has-text-white">Weekly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Newsletters */}
          <div className="card mt-6">
            <div className="card-content">
              <h3 className="title is-4 has-text-white mb-4">Recent Newsletter Issues</h3>
              <div className="columns is-multiline">
                {recentNewsletters.map((newsletter, index) => (
                  <div key={index} className="column is-one-third">
                    <div className="card">
                      <div className="card-content">
                        <div className="is-flex is-justify-content-space-between is-align-items-start mb-2">
                          <span className="tag is-primary is-small">{newsletter.category}</span>
                          <span className="has-text-grey-light is-size-7">{newsletter.readTime}</span>
                        </div>
                        <h4 className="title is-6 has-text-white mb-2">{newsletter.title}</h4>
                        <p className="has-text-grey-light is-size-7 mb-3">{newsletter.description}</p>
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                          <span className="has-text-grey-light is-size-7">{newsletter.date}</span>
                          <button className="button is-small is-primary">
                            <span className="icon">
                              <ArrowRight size={12} />
                            </span>
                            <span>Read</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Newsletter
