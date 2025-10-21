import React, { useState } from 'react'
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Flag, 
  Shield, 
  CheckCircle, 
  AlertTriangle,
  Star,
  TrendingUp,
  Award,
  BookOpen,
  Lightbulb,
  Handshake,
  Globe,
  Lock,
  Eye,
  Zap,
  Brain,
  Database,
  Key,
  Smartphone,
  Monitor,
  Server,
  FileText,
  UserCheck,
  MessageSquare,
  ThumbsUp,
  Flag as FlagIcon,
  Bell,
  Settings,
  Search,
  Filter,
  Plus,
  Send
} from 'lucide-react'

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [newPost, setNewPost] = useState('')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Users },
    { id: 'discussions', label: 'Discussions', icon: MessageCircle },
    { id: 'guidelines', label: 'Guidelines', icon: Shield },
    { id: 'safety', label: 'Safety & Security', icon: Lock },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ]

  const communityStats = {
    totalMembers: 125000,
    activeToday: 15420,
    discussions: 8947,
    resources: 234
  }

  const recentPosts = [
    {
      id: 1,
      author: 'TechCreator',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      title: 'Best practices for video SEO in 2024',
      content: 'Sharing some insights on how to optimize your videos for better discoverability...',
      likes: 45,
      comments: 12,
      time: '2 hours ago',
      category: 'Tips & Tricks'
    },
    {
      id: 2,
      author: 'ContentMaster',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      title: 'New monetization features coming soon!',
      content: 'Excited to announce some new ways creators can earn from their content...',
      likes: 89,
      comments: 23,
      time: '4 hours ago',
      category: 'Announcements'
    },
    {
      id: 3,
      author: 'VideoPro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      title: 'How to handle copyright claims effectively',
      content: 'A comprehensive guide on dealing with copyright issues and protecting your content...',
      likes: 67,
      comments: 18,
      time: '6 hours ago',
      category: 'Legal & Protection'
    }
  ]

  const topContributors = [
    {
      name: 'TechGuru',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      points: 15420,
      badges: ['Expert', 'Helper', 'Moderator']
    },
    {
      name: 'ContentKing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      points: 12890,
      badges: ['Creator', 'Mentor']
    },
    {
      name: 'VideoMaster',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      points: 11200,
      badges: ['Expert', 'Helper']
    }
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          {/* Header */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="is-flex is-justify-content-space-between is-align-items-center">
                <div>
                  <h1 className="title is-2 has-text-white">Community</h1>
                  <p className="subtitle is-5 has-text-grey-light">
                    Connect, learn, and grow with creators worldwide
                  </p>
                </div>
                <div className="is-flex">
                  <button className="button is-primary mr-3">
                    <span className="icon">
                      <Plus size={16} />
                    </span>
                    <span>Start Discussion</span>
                  </button>
                  <button className="button is-light">
                    <span className="icon">
                      <Settings size={16} />
                    </span>
                    <span>Settings</span>
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
              <div className="column is-two-thirds">
                {/* Community Stats */}
                <div className="card mb-5">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Community Statistics</h3>
                    <div className="columns">
                      <div className="column is-one-quarter">
                        <div className="has-text-centered">
                          <div className="title is-3 has-text-white">{formatNumber(communityStats.totalMembers)}</div>
                          <div className="subtitle is-6 has-text-grey-light">Total Members</div>
                        </div>
                      </div>
                      <div className="column is-one-quarter">
                        <div className="has-text-centered">
                          <div className="title is-3 has-text-white">{formatNumber(communityStats.activeToday)}</div>
                          <div className="subtitle is-6 has-text-grey-light">Active Today</div>
                        </div>
                      </div>
                      <div className="column is-one-quarter">
                        <div className="has-text-centered">
                          <div className="title is-3 has-text-white">{formatNumber(communityStats.discussions)}</div>
                          <div className="subtitle is-6 has-text-grey-light">Discussions</div>
                        </div>
                      </div>
                      <div className="column is-one-quarter">
                        <div className="has-text-centered">
                          <div className="title is-3 has-text-white">{formatNumber(communityStats.resources)}</div>
                          <div className="subtitle is-6 has-text-grey-light">Resources</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Discussions */}
                <div className="card">
                  <div className="card-content">
                    <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
                      <h3 className="title is-5 has-text-white">Recent Discussions</h3>
                      <div className="is-flex">
                        <div className="field mr-3">
                          <div className="control">
                            <input className="input is-small" type="text" placeholder="Search discussions..." />
                          </div>
                        </div>
                        <div className="select is-small">
                          <select>
                            <option>All Categories</option>
                            <option>Tips & Tricks</option>
                            <option>Announcements</option>
                            <option>Legal & Protection</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="content">
                      {recentPosts.map((post) => (
                        <div key={post.id} className="media mb-4">
                          <div className="media-left">
                            <figure className="image is-48x48">
                              <img src={post.avatar} alt={post.author} className="is-rounded" />
                            </figure>
                          </div>
                          <div className="media-content">
                            <div className="is-flex is-justify-content-space-between is-align-items-start">
                              <div>
                                <h4 className="title is-6 has-text-white mb-1">{post.title}</h4>
                                <p className="subtitle is-7 has-text-grey-light mb-2">
                                  by {post.author} • {post.time} • <span className="tag is-light is-small">{post.category}</span>
                                </p>
                                <p className="has-text-grey-light">{post.content}</p>
                              </div>
                            </div>
                            <div className="is-flex is-align-items-center mt-3">
                              <button className="button is-small is-ghost mr-3">
                                <span className="icon">
                                  <ThumbsUp size={12} />
                                </span>
                                <span>{post.likes}</span>
                              </button>
                              <button className="button is-small is-ghost mr-3">
                                <span className="icon">
                                  <MessageCircle size={12} />
                                </span>
                                <span>{post.comments}</span>
                              </button>
                              <button className="button is-small is-ghost mr-3">
                                <span className="icon">
                                  <Share2 size={12} />
                                </span>
                                <span>Share</span>
                              </button>
                              <button className="button is-small is-ghost">
                                <span className="icon">
                                  <FlagIcon size={12} />
                                </span>
                                <span>Report</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="column is-one-third">
                {/* Top Contributors */}
                <div className="card mb-4">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Top Contributors</h3>
                    <div className="content">
                      {topContributors.map((contributor, index) => (
                        <div key={index} className="media mb-3">
                          <div className="media-left">
                            <figure className="image is-32x32">
                              <img src={contributor.avatar} alt={contributor.name} className="is-rounded" />
                            </figure>
                          </div>
                          <div className="media-content">
                            <div className="is-flex is-justify-content-space-between is-align-items-center">
                              <div>
                                <p className="title is-6 has-text-white">{contributor.name}</p>
                                <div className="is-flex">
                                  {contributor.badges.map((badge, i) => (
                                    <span key={i} className="tag is-primary is-small mr-1">{badge}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="has-text-right">
                                <p className="has-text-white">{formatNumber(contributor.points)} pts</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Community Guidelines */}
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Community Guidelines</h3>
                    <div className="content">
                      <div className="is-flex is-align-items-center mb-2">
                        <span className="icon has-text-success mr-2">
                          <CheckCircle size={16} />
                        </span>
                        <span className="has-text-grey-light">Be respectful and constructive</span>
                      </div>
                      <div className="is-flex is-align-items-center mb-2">
                        <span className="icon has-text-success mr-2">
                          <CheckCircle size={16} />
                        </span>
                        <span className="has-text-grey-light">Share valuable content and insights</span>
                      </div>
                      <div className="is-flex is-align-items-center mb-2">
                        <span className="icon has-text-success mr-2">
                          <CheckCircle size={16} />
                        </span>
                        <span className="has-text-grey-light">Help fellow creators grow</span>
                      </div>
                      <div className="is-flex is-align-items-center mb-2">
                        <span className="icon has-text-success mr-2">
                          <CheckCircle size={16} />
                        </span>
                        <span className="has-text-grey-light">Report inappropriate content</span>
                      </div>
                      <div className="is-flex is-align-items-center">
                        <span className="icon has-text-success mr-2">
                          <CheckCircle size={16} />
                        </span>
                        <span className="has-text-grey-light">Follow platform policies</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Discussions Tab */}
          {activeTab === 'discussions' && (
            <div className="columns">
              <div className="column is-two-thirds">
                <div className="card">
                  <div className="card-content">
                    <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
                      <h3 className="title is-5 has-text-white">Start a Discussion</h3>
                    </div>
                    
                    <div className="field">
                      <label className="label has-text-white">Title</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="What's your question or topic?" />
                      </div>
                    </div>
                    
                    <div className="field">
                      <label className="label has-text-white">Category</label>
                      <div className="control">
                        <div className="select is-fullwidth">
                          <select>
                            <option>Select a category</option>
                            <option>Tips & Tricks</option>
                            <option>Technical Support</option>
                            <option>Monetization</option>
                            <option>Legal & Protection</option>
                            <option>General Discussion</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="field">
                      <label className="label has-text-white">Content</label>
                      <div className="control">
                        <textarea 
                          className="textarea" 
                          rows={6} 
                          placeholder="Share your thoughts, ask questions, or provide insights..."
                          value={newPost}
                          onChange={(e) => setNewPost(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="is-flex is-justify-content-space-between is-align-items-center">
                      <div className="is-flex">
                        <button className="button is-light mr-2">
                          <span className="icon">
                            <FileText size={14} />
                          </span>
                          <span>Attach File</span>
                        </button>
                        <button className="button is-light">
                          <span className="icon">
                            <Plus size={14} />
                          </span>
                          <span>Add Poll</span>
                        </button>
                      </div>
                      <button className="button is-primary">
                        <span className="icon">
                          <Send size={14} />
                        </span>
                        <span>Post Discussion</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Discussion Categories</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Tips & Tricks</span>
                        <span className="tag is-primary">2.1K</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Technical Support</span>
                        <span className="tag is-primary">1.8K</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Monetization</span>
                        <span className="tag is-primary">1.5K</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Legal & Protection</span>
                        <span className="tag is-primary">892</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center">
                        <span className="has-text-grey-light">General Discussion</span>
                        <span className="tag is-primary">3.2K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Guidelines Tab */}
          {activeTab === 'guidelines' && (
            <div className="card">
              <div className="card-content">
                <h3 className="title is-4 has-text-white mb-5">Community Guidelines</h3>
                
                <div className="content">
                  <h4 className="title is-5 has-text-white mb-4">Our Commitment to Safety</h4>
                  <p className="has-text-grey-light mb-4">
                    At Flith Farm, we are committed to creating a safe, inclusive, and supportive environment 
                    for all creators and users. Our community guidelines are designed to protect everyone 
                    while encouraging creativity, learning, and positive interactions.
                  </p>
                  
                  <div className="columns">
                    <div className="column is-half">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-6 has-text-white mb-3">Do's</h5>
                          <ul className="has-text-grey-light">
                            <li>• Be respectful and constructive in all interactions</li>
                            <li>• Share valuable content and insights</li>
                            <li>• Help fellow creators grow and succeed</li>
                            <li>• Report inappropriate content or behavior</li>
                            <li>• Follow platform policies and terms of service</li>
                            <li>• Give credit where credit is due</li>
                            <li>• Engage in meaningful discussions</li>
                            <li>• Support diversity and inclusion</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="column is-half">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-6 has-text-white mb-3">Don'ts</h5>
                          <ul className="has-text-grey-light">
                            <li>• Harass, bully, or intimidate others</li>
                            <li>• Share harmful or dangerous content</li>
                            <li>• Violate copyright or intellectual property</li>
                            <li>• Spam or promote irrelevant content</li>
                            <li>• Share personal information without consent</li>
                            <li>• Engage in hate speech or discrimination</li>
                            <li>• Impersonate others or create fake accounts</li>
                            <li>• Manipulate metrics or engagement</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Safety & Security Tab */}
          {activeTab === 'safety' && (
            <div className="card">
              <div className="card-content">
                <h3 className="title is-4 has-text-white mb-5">Safety & Security</h3>
                
                <div className="content">
                  <h4 className="title is-5 has-text-white mb-4">Platform Security Features</h4>
                  <p className="has-text-grey-light mb-4">
                    We employ advanced security measures and AI-powered systems to protect creators 
                    and maintain a safe platform environment. Our multi-layered approach ensures 
                    comprehensive protection for all users.
                  </p>
                  
                  <div className="columns">
                    <div className="column is-one-third">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-6 has-text-white mb-3">Content Protection</h5>
                          <ul className="has-text-grey-light">
                            <li>• Advanced watermarking</li>
                            <li>• Content fingerprinting</li>
                            <li>• Automated copyright detection</li>
                            <li>• Plagiarism prevention</li>
                            <li>• DMCA protection</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="column is-one-third">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-6 has-text-white mb-3">User Safety</h5>
                          <ul className="has-text-grey-light">
                            <li>• Identity verification</li>
                            <li>• Account security monitoring</li>
                            <li>• Privacy controls</li>
                            <li>• Harassment prevention</li>
                            <li>• Content moderation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="column is-one-third">
                      <div className="card">
                        <div className="card-content">
                          <h5 className="title is-6 has-text-white mb-3">AI Security</h5>
                          <ul className="has-text-grey-light">
                            <li>• Machine learning threat detection</li>
                            <li>• Real-time content analysis</li>
                            <li>• Behavioral pattern recognition</li>
                            <li>• Automated security responses</li>
                            <li>• Predictive threat modeling</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Resources Tab */}
          {activeTab === 'resources' && (
            <div className="columns">
              <div className="column is-two-thirds">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Creator Resources</h3>
                    <div className="columns is-multiline">
                      <div className="column is-one-third">
                        <div className="card">
                          <div className="card-content">
                            <h5 className="title is-6 has-text-white mb-3">Getting Started</h5>
                            <ul className="has-text-grey-light">
                              <li>• Platform overview</li>
                              <li>• Account setup guide</li>
                              <li>• First video upload</li>
                              <li>• Basic settings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="column is-one-third">
                        <div className="card">
                          <div className="card-content">
                            <h5 className="title is-6 has-text-white mb-3">Content Creation</h5>
                            <ul className="has-text-grey-light">
                              <li>• Video production tips</li>
                              <li>• Editing best practices</li>
                              <li>• SEO optimization</li>
                              <li>• Thumbnail design</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="column is-one-third">
                        <div className="card">
                          <div className="card-content">
                            <h5 className="title is-6 has-text-white mb-3">Monetization</h5>
                            <ul className="has-text-grey-light">
                              <li>• Revenue streams</li>
                              <li>• Ad optimization</li>
                              <li>• Subscription models</li>
                              <li>• Merchandise integration</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="column is-one-third">
                        <div className="card">
                          <div className="card-content">
                            <h5 className="title is-6 has-text-white mb-3">Legal & Protection</h5>
                            <ul className="has-text-grey-light">
                              <li>• Copyright guidelines</li>
                              <li>• Fair use policies</li>
                              <li>• DMCA procedures</li>
                              <li>• Legal resources</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="column is-one-third">
                        <div className="card">
                          <div className="card-content">
                            <h5 className="title is-6 has-text-white mb-3">Analytics</h5>
                            <ul className="has-text-grey-light">
                              <li>• Understanding metrics</li>
                              <li>• Audience insights</li>
                              <li>• Performance tracking</li>
                              <li>• Growth strategies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="column is-one-third">
                        <div className="card">
                          <div className="card-content">
                            <h5 className="title is-6 has-text-white mb-3">Community</h5>
                            <ul className="has-text-grey-light">
                              <li>• Networking tips</li>
                              <li>• Collaboration guides</li>
                              <li>• Event participation</li>
                              <li>• Mentorship programs</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-one-third">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Quick Links</h3>
                    <div className="content">
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-2">
                          <BookOpen size={16} />
                        </span>
                        <a href="#" className="has-text-grey-light">Creator Academy</a>
                      </div>
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-2">
                          <Users size={16} />
                        </span>
                        <a href="#" className="has-text-grey-light">Mentorship Program</a>
                      </div>
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-2">
                          <Award size={16} />
                        </span>
                        <a href="#" className="has-text-grey-light">Creator Awards</a>
                      </div>
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-2">
                          <TrendingUp size={16} />
                        </span>
                        <a href="#" className="has-text-grey-light">Growth Tools</a>
                      </div>
                      <div className="is-flex is-align-items-center">
                        <span className="icon has-text-primary mr-2">
                          <Shield size={16} />
                        </span>
                        <a href="#" className="has-text-grey-light">Safety Center</a>
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

export default Community
