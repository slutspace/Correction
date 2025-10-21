import React, { useState } from 'react'
import { 
  HelpCircle, 
  Search, 
  Book, 
  MessageCircle, 
  Mail, 
  Phone, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  Database, 
  Server, 
  Globe, 
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
  ArrowRight, 
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
  User,
  Upload,
  DollarSign,
  Settings,
  Users
} from 'lucide-react'

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: Book },
    { id: 'account', name: 'Account & Profile', icon: User },
    { id: 'upload', name: 'Uploading & Content', icon: Upload },
    { id: 'monetization', name: 'Monetization', icon: DollarSign },
    { id: 'technical', name: 'Technical Issues', icon: Settings },
    { id: 'community', name: 'Community & Safety', icon: Users }
  ]

  const faqItems = [
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Creating an account is easy! Click the "Sign Up" button in the top right corner, enter your email address, choose a username, and create a password. You\'ll receive a confirmation email to verify your account.'
    },
    {
      id: 2,
      category: 'upload',
      question: 'What video formats are supported?',
      answer: 'We support most common video formats including MP4, MOV, AVI, WMV, and WebM. For best quality, we recommend uploading in MP4 format with H.264 codec. Maximum file size is 10GB per video.'
    },
    {
      id: 3,
      category: 'monetization',
      question: 'How do I start earning money?',
      answer: 'To start monetizing, you need to meet our requirements: 100+ subscribers, 1,000+ total views, and be active for 30+ days. Once eligible, visit your Creator Studio to enable monetization features.'
    },
    {
      id: 4,
      category: 'technical',
      question: 'Why is my video taking so long to upload?',
      answer: 'Upload speed depends on your internet connection and video file size. Large files or slow connections will take longer. Try uploading during off-peak hours or compressing your video file.'
    },
    {
      id: 5,
      category: 'community',
      question: 'How do I report inappropriate content?',
      answer: 'Click the flag icon on any video or comment to report it. Our moderation team reviews all reports and takes appropriate action. You can also contact us directly for serious violations.'
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I change my password?',
      answer: 'Go to your account settings, click on "Security", then "Change Password". Enter your current password and your new password twice to confirm the change.'
    },
    {
      id: 7,
      category: 'upload',
      question: 'Can I edit my videos after uploading?',
      answer: 'Yes! You can edit video titles, descriptions, thumbnails, and privacy settings at any time. For video content editing, you\'ll need to re-upload the edited version.'
    },
    {
      id: 8,
      category: 'monetization',
      question: 'When do I get paid?',
      answer: 'Payouts are processed monthly on the 15th of each month. You need a minimum balance of $50 to receive a payout. Payments are sent via PayPal, Stripe, or bank transfer.'
    }
  ]

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

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
                    <HelpCircle size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">Help Center</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Find answers to your questions and get the support you need
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Categories */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="field">
                <div className="control has-icons-left">
                  <input 
                    className="input is-large" 
                    type="text" 
                    placeholder="Search for help..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span className="icon is-left">
                    <Search size={20} />
                  </span>
                </div>
              </div>

              <div className="tabs is-centered mt-4">
                <ul>
                  {faqCategories.map(category => (
                    <li 
                      key={category.id}
                      className={selectedCategory === category.id ? 'is-active' : ''}
                    >
                      <a onClick={() => setSelectedCategory(category.id)}>
                        <span className="icon mr-1">
                          <category.icon size={16} />
                        </span>
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card">
            <div className="card-content">
              <h2 className="title is-4 has-text-white mb-4">Frequently Asked Questions</h2>
              
              {filteredFAQs.length === 0 ? (
                <div className="has-text-centered py-6">
                  <p className="has-text-grey-light">No results found. Try adjusting your search or category filter.</p>
                </div>
              ) : (
                <div className="accordion">
                  {filteredFAQs.map((item, index) => (
                    <div key={item.id} className="card mb-3">
                      <div className="card-content">
                        <div className="is-flex is-justify-content-space-between is-align-items-center">
                          <h3 className="title is-6 has-text-white">{item.question}</h3>
                          <span className="tag is-light">
                            {faqCategories.find(cat => cat.id === item.category)?.name}
                          </span>
                        </div>
                        <div className="content mt-3">
                          <p className="has-text-grey-light">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact Support */}
          <div className="card mt-5">
            <div className="card-content">
              <h2 className="title is-4 has-text-white mb-4">Still Need Help?</h2>
              <p className="has-text-grey-light mb-4">
                Can't find what you're looking for? Our support team is here to help you with any questions or issues.
              </p>

              <div className="columns">
                <div className="column is-4">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-primary mb-3">
                        <MessageCircle size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">Live Chat</h3>
                      <p className="has-text-grey-light mb-3">
                        Chat with our support team in real-time
                      </p>
                      <button className="button is-primary">Start Chat</button>
                    </div>
                  </div>
                </div>

                <div className="column is-4">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-success mb-3">
                        <Mail size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">Email Support</h3>
                      <p className="has-text-grey-light mb-3">
                        Send us an email and we'll respond within 24 hours
                      </p>
                      <button className="button is-success">Send Email</button>
                    </div>
                  </div>
                </div>

                <div className="column is-4">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-info mb-3">
                        <Phone size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">Phone Support</h3>
                      <p className="has-text-grey-light mb-3">
                        Call us for immediate assistance
                      </p>
                      <button className="button is-info">Call Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="notification is-info mt-4">
                <div className="is-flex is-align-items-center">
                  <span className="icon mr-2">
                    <Clock size={16} />
                  </span>
                  <span className="has-text-white">
                    <strong>Support Hours:</strong> Monday - Friday, 9 AM - 6 PM PST | Saturday - Sunday, 10 AM - 4 PM PST
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HelpCenter