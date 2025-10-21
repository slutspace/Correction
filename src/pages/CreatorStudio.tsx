import React, { useState } from 'react'
import { 
  Video, 
  Upload, 
  BarChart3, 
  DollarSign, 
  Users, 
  Settings, 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle,
  AlertTriangle,
  FileText,
  Zap,
  Brain,
  Database,
  Key,
  Globe,
  Smartphone,
  Monitor,
  Server
} from 'lucide-react'

const CreatorStudio: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'content', label: 'Content', icon: Video },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'monetization', label: 'Monetization', icon: DollarSign },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'legal', label: 'Legal & Protection', icon: FileText }
  ]

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          {/* Header */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="is-flex is-justify-content-space-between is-align-items-center">
                <div>
                  <h1 className="title is-2 has-text-white">Creator Studio</h1>
                  <p className="subtitle is-5 has-text-grey-light">
                    Your professional content creation hub
                  </p>
                </div>
                <div className="is-flex">
                  <button className="button is-primary mr-3">
                    <span className="icon">
                      <Upload size={16} />
                    </span>
                    <span>Upload Content</span>
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
              <div className="column is-one-third">
                <div className="card mb-4">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Quick Stats</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Total Views</span>
                        <span className="has-text-white">1.2M</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Subscribers</span>
                        <span className="has-text-white">45.2K</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Videos</span>
                        <span className="has-text-white">127</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between">
                        <span className="has-text-grey-light">Revenue</span>
                        <span className="has-text-white">$2,847</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Recent Activity</h3>
                    <div className="content">
                      <div className="media mb-3">
                        <div className="media-left">
                          <span className="icon has-text-success">
                            <CheckCircle size={16} />
                          </span>
                        </div>
                        <div className="media-content">
                          <p className="has-text-white is-size-6">Video "Tech Review 2024" published</p>
                          <p className="has-text-grey-light is-size-7">2 hours ago</p>
                        </div>
                      </div>
                      <div className="media mb-3">
                        <div className="media-left">
                          <span className="icon has-text-primary">
                            <Eye size={16} />
                          </span>
                        </div>
                        <div className="media-content">
                          <p className="has-text-white is-size-6">New milestone: 1M total views</p>
                          <p className="has-text-grey-light is-size-7">1 day ago</p>
                        </div>
                      </div>
                      <div className="media">
                        <div className="media-left">
                          <span className="icon has-text-warning">
                            <AlertTriangle size={16} />
                          </span>
                        </div>
                        <div className="media-content">
                          <p className="has-text-white is-size-6">Copyright claim resolved</p>
                          <p className="has-text-grey-light is-size-7">3 days ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-two-thirds">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Performance Overview</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between is-align-items-end" style={{height: '200px'}}>
                        {[120, 200, 150, 300, 250, 180, 220, 280, 320, 290, 350, 400].map((views, index) => (
                          <div key={index} className="has-text-centered">
                            <div 
                              className="has-background-primary"
                              style={{
                                height: `${(views / 400) * 150}px`,
                                width: '20px',
                                marginBottom: '10px'
                              }}
                            ></div>
                            <span className="has-text-grey-light is-size-7">
                              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
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

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="card">
              <div className="card-content">
                <div className="is-flex is-justify-content-space-between is-align-items-center mb-4">
                  <h3 className="title is-5 has-text-white">Content Management</h3>
                  <button className="button is-primary">
                    <span className="icon">
                      <Upload size={16} />
                    </span>
                    <span>Upload New Video</span>
                  </button>
                </div>
                
                <div className="columns is-multiline">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="column is-one-third">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-16by9">
                            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop" alt={`Video ${i}`} />
                          </figure>
                        </div>
                        <div className="card-content">
                          <h4 className="title is-6 has-text-white mb-2">Video Title {i}</h4>
                          <div className="is-flex is-justify-content-space-between is-align-items-center">
                            <span className="has-text-grey-light is-size-7">12.5K views</span>
                            <span className="tag is-success">Published</span>
                          </div>
                          <div className="is-flex is-justify-content-space-between mt-2">
                            <span className="has-text-grey-light is-size-7">2 days ago</span>
                            <div className="buttons">
                              <button className="button is-small is-light">Edit</button>
                              <button className="button is-small is-primary">Analytics</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="columns">
              <div className="column is-half">
                <div className="card mb-4">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Audience Insights</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Total Views</span>
                        <span className="has-text-white">1,234,567</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Watch Time</span>
                        <span className="has-text-white">45,678 hours</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Subscribers</span>
                        <span className="has-text-white">45,234</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between">
                        <span className="has-text-grey-light">Engagement Rate</span>
                        <span className="has-text-white">8.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Top Performing Content</h3>
                    <div className="content">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="media mb-3">
                          <div className="media-left">
                            <figure className="image is-48x48">
                              <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=48&h=48&fit=crop" alt={`Video ${i}`} />
                            </figure>
                          </div>
                          <div className="media-content">
                            <p className="title is-6 has-text-white">Top Video {i}</p>
                            <p className="subtitle is-7 has-text-grey-light">125K views • 2.5K likes</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Monetization Tab */}
          {activeTab === 'monetization' && (
            <div className="columns">
              <div className="column is-one-third">
                <div className="card mb-4">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Revenue Summary</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">This Month</span>
                        <span className="has-text-white">$2,847</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Last Month</span>
                        <span className="has-text-white">$2,234</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Total Revenue</span>
                        <span className="has-text-white">$15,678</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between">
                        <span className="has-text-grey-light">Growth</span>
                        <span className="has-text-success">+27.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-two-thirds">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Revenue Sources</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Ad Revenue</span>
                        <span className="has-text-white">$1,456</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Subscriptions</span>
                        <span className="has-text-white">$892</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between mb-3">
                        <span className="has-text-grey-light">Merchandise</span>
                        <span className="has-text-white">$234</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between">
                        <span className="has-text-grey-light">Donations</span>
                        <span className="has-text-white">$265</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="columns">
              <div className="column is-half">
                <div className="card mb-4">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Security Status</h3>
                    <div className="content">
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Two-Factor Authentication</span>
                        <span className="tag is-success">Enabled</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Content Protection</span>
                        <span className="tag is-success">Active</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                        <span className="has-text-grey-light">Copyright Monitoring</span>
                        <span className="tag is-success">Enabled</span>
                      </div>
                      <div className="is-flex is-justify-content-space-between is-align-items-center">
                        <span className="has-text-grey-light">Account Security</span>
                        <span className="tag is-success">Secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-5 has-text-white mb-4">Security Tools</h3>
                    <div className="content">
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-3">
                          <Shield size={20} />
                        </span>
                        <span className="has-text-white">Advanced Content Protection</span>
                      </div>
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-3">
                          <Lock size={20} />
                        </span>
                        <span className="has-text-white">End-to-End Encryption</span>
                      </div>
                      <div className="is-flex is-align-items-center mb-3">
                        <span className="icon has-text-primary mr-3">
                          <Eye size={20} />
                        </span>
                        <span className="has-text-white">Real-time Monitoring</span>
                      </div>
                      <div className="is-flex is-align-items-center">
                        <span className="icon has-text-primary mr-3">
                          <AlertTriangle size={20} />
                        </span>
                        <span className="has-text-white">Threat Detection</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Legal & Protection Tab */}
          {activeTab === 'legal' && (
            <div className="columns">
              <div className="column is-full">
                <div className="card">
                  <div className="card-content">
                    <h3 className="title is-4 has-text-white mb-5">Legal Office & Security Systems</h3>
                    
                    {/* Legal Office Section */}
                    <div className="content mb-6">
                      <h4 className="title is-5 has-text-white mb-4">Legal Office</h4>
                      <p className="has-text-grey-light mb-4">
                        Our dedicated legal office operates 24/7 to protect creators and maintain platform integrity. 
                        We employ a team of specialized attorneys, copyright experts, and digital rights specialists 
                        who work tirelessly to ensure your content and rights are protected.
                      </p>
                      
                      <div className="columns">
                        <div className="column is-one-third">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">Copyright Protection</h5>
                              <ul className="has-text-grey-light">
                                <li>• Automated DMCA monitoring</li>
                                <li>• Content fingerprinting</li>
                                <li>• Legal takedown assistance</li>
                                <li>• Fair use guidance</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="column is-one-third">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">Creator Rights</h5>
                              <ul className="has-text-grey-light">
                                <li>• Revenue protection</li>
                                <li>• Contract review</li>
                                <li>• Dispute resolution</li>
                                <li>• Legal representation</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="column is-one-third">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">Platform Integrity</h5>
                              <ul className="has-text-grey-light">
                                <li>• Community guidelines enforcement</li>
                                <li>• Harassment prevention</li>
                                <li>• Content moderation</li>
                                <li>• Safety protocols</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Security Systems Section */}
                    <div className="content mb-6">
                      <h4 className="title is-5 has-text-white mb-4">Advanced Security Systems</h4>
                      <p className="has-text-grey-light mb-4">
                        We utilize cutting-edge security technologies and AI-powered systems to protect creators 
                        and maintain a safe platform environment. Our multi-layered security approach ensures 
                        comprehensive protection at every level.
                      </p>
                      
                      <div className="columns">
                        <div className="column is-half">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">Encryption & Data Protection</h5>
                              <div className="content">
                                <div className="is-flex is-align-items-center mb-2">
                                  <span className="icon has-text-primary mr-2">
                                    <Key size={16} />
                                  </span>
                                  <span className="has-text-grey-light">AES-256 encryption for all data</span>
                                </div>
                                <div className="is-flex is-align-items-center mb-2">
                                  <span className="icon has-text-primary mr-2">
                                    <Lock size={16} />
                                  </span>
                                  <span className="has-text-grey-light">End-to-end video encryption</span>
                                </div>
                                <div className="is-flex is-align-items-center mb-2">
                                  <span className="icon has-text-primary mr-2">
                                    <Database size={16} />
                                  </span>
                                  <span className="has-text-grey-light">Secure database architecture</span>
                                </div>
                                <div className="is-flex is-align-items-center">
                                  <span className="icon has-text-primary mr-2">
                                    <Globe size={16} />
                                  </span>
                                  <span className="has-text-grey-light">Global CDN with SSL/TLS</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="column is-half">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">AI-Powered Protection</h5>
                              <div className="content">
                                <div className="is-flex is-align-items-center mb-2">
                                  <span className="icon has-text-primary mr-2">
                                    <Brain size={16} />
                                  </span>
                                  <span className="has-text-grey-light">Machine learning threat detection</span>
                                </div>
                                <div className="is-flex is-align-items-center mb-2">
                                  <span className="icon has-text-primary mr-2">
                                    <Zap size={16} />
                                  </span>
                                  <span className="has-text-grey-light">Real-time content analysis</span>
                                </div>
                                <div className="is-flex is-align-items-center mb-2">
                                  <span className="icon has-text-primary mr-2">
                                    <Eye size={16} />
                                  </span>
                                  <span className="has-text-grey-light">Behavioral pattern recognition</span>
                                </div>
                                <div className="is-flex is-align-items-center">
                                  <span className="icon has-text-primary mr-2">
                                    <Shield size={16} />
                                  </span>
                                  <span className="has-text-grey-light">Automated security responses</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Platform Security Features */}
                    <div className="content">
                      <h4 className="title is-5 has-text-white mb-4">Platform Security Features</h4>
                      
                      <div className="columns">
                        <div className="column is-one-third">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">Content Security</h5>
                              <ul className="has-text-grey-light">
                                <li>• Watermarking technology</li>
                                <li>• Content fingerprinting</li>
                                <li>• Automated copyright detection</li>
                                <li>• Plagiarism prevention</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="column is-one-third">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">User Protection</h5>
                              <ul className="has-text-grey-light">
                                <li>• Identity verification</li>
                                <li>• Account security monitoring</li>
                                <li>• Privacy controls</li>
                                <li>• Data anonymization</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="column is-one-third">
                          <div className="card">
                            <div className="card-content">
                              <h5 className="title is-6 has-text-white mb-3">Infrastructure Security</h5>
                              <ul className="has-text-grey-light">
                                <li>• DDoS protection</li>
                                <li>• Firewall systems</li>
                                <li>• Intrusion detection</li>
                                <li>• Regular security audits</li>
                              </ul>
                            </div>
                          </div>
                        </div>
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

export default CreatorStudio
