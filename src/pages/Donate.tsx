import React, { useState } from 'react'
import { 
  Heart, 
  DollarSign, 
  CreditCard, 
  Smartphone, 
  Laptop, 
  Monitor, 
  Shield, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Lock, 
  Eye, 
  Globe, 
  Server, 
  Database, 
  Key, 
  Bell, 
  MessageCircle, 
  ThumbsUp, 
  Share2, 
  Download, 
  Upload, 
  Play, 
  Pause, 
  Volume2, 
  Camera, 
  Video, 
  Mic, 
  Edit, 
  Settings, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Clock, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Activity, 
  Target, 
  Lightbulb, 
  BookOpen, 
  FileText, 
  Image, 
  Music, 
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

const Donate: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const presetAmounts = [5, 10, 25, 50, 100, 250]

  const donationImpact = [
    {
      amount: 5,
      impact: 'Supports 1 creator for 1 day',
      description: 'Help cover basic operational costs for a creator'
    },
    {
      amount: 25,
      impact: 'Supports 1 creator for 1 week',
      description: 'Enable a creator to focus on content creation'
    },
    {
      amount: 50,
      impact: 'Supports 1 creator for 2 weeks',
      description: 'Help creators invest in better equipment'
    },
    {
      amount: 100,
      impact: 'Supports 1 creator for 1 month',
      description: 'Provide sustained support for content creation'
    },
    {
      amount: 250,
      impact: 'Supports 1 creator for 2+ months',
      description: 'Enable creators to pursue ambitious projects'
    }
  ]

  const donationFeatures = [
    {
      title: 'Direct Creator Support',
      description: 'Your donations go directly to creators you choose to support',
      icon: Heart,
      color: 'has-text-danger'
    },
    {
      title: 'Platform Development',
      description: 'Help us improve tools and features for all creators',
      icon: Settings,
      color: 'has-text-primary'
    },
    {
      title: 'Community Programs',
      description: 'Support educational programs and creator workshops',
      icon: Users,
      color: 'has-text-success'
    },
    {
      title: 'Safety & Security',
      description: 'Fund advanced security measures and legal protection',
      icon: Shield,
      color: 'has-text-warning'
    }
  ]

  const securityFeatures = [
    {
      title: 'Secure Payment Processing',
      description: 'All transactions are encrypted and secure',
      icon: Lock,
      color: 'has-text-success'
    },
    {
      title: 'Privacy Protection',
      description: 'Your donation information is kept confidential',
      icon: Eye,
      color: 'has-text-primary'
    },
    {
      title: 'Transparent Reporting',
      description: 'See exactly how your donations are used',
      icon: BarChart3,
      color: 'has-text-info'
    },
    {
      title: 'Tax Deductible',
      description: 'Receive receipts for tax purposes',
      icon: FileText,
      color: 'has-text-warning'
    }
  ]

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate donation processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setSelectedAmount(null)
        setCustomAmount('')
      }, 5000)
    }, 2000)
  }

  const getTotalAmount = () => {
    return selectedAmount || (customAmount ? parseFloat(customAmount) : 0)
  }

  const getImpactMessage = () => {
    const amount = getTotalAmount()
    const impact = donationImpact.find(item => item.amount <= amount)
    return impact ? impact.impact : 'Supports the creator community'
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
                  <span className="icon is-large has-text-danger mr-3">
                    <Heart size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">Support Flith Farm</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Help us build a better platform for creators
                    </p>
                  </div>
                </div>
                <p className="has-text-grey-light is-size-5 mb-4">
                  Your support helps us maintain a safe, innovative platform where creators can thrive. 
                  Every donation directly impacts our community and enables us to provide better tools, 
                  security, and opportunities for content creators worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Features */}
          <div className="columns mb-6">
            {donationFeatures.map((feature, index) => {
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

          {/* Donation Form */}
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-4 has-text-white mb-4">Make a Donation</h3>
                  
                  {!isSuccess ? (
                    <form onSubmit={handleDonate}>
                      {/* Donation Type */}
                      <div className="field">
                        <label className="label has-text-white">Donation Type</label>
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select 
                              value={donationType} 
                              onChange={(e) => setDonationType(e.target.value)}
                            >
                              <option value="one-time">One-time Donation</option>
                              <option value="monthly">Monthly Donation</option>
                              <option value="yearly">Yearly Donation</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Amount Selection */}
                      <div className="field">
                        <label className="label has-text-white">Select Amount</label>
                        <div className="columns is-multiline">
                          {presetAmounts.map((amount) => (
                            <div key={amount} className="column is-one-sixth">
                              <button
                                type="button"
                                className={`button is-fullwidth ${
                                  selectedAmount === amount ? 'is-primary' : 'is-light'
                                }`}
                                onClick={() => {
                                  setSelectedAmount(amount)
                                  setCustomAmount('')
                                }}
                              >
                                ${amount}
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Custom Amount */}
                      <div className="field">
                        <label className="label has-text-white">Custom Amount</label>
                        <div className="control">
                          <input
                            className="input"
                            type="number"
                            placeholder="Enter custom amount"
                            value={customAmount}
                            onChange={(e) => {
                              setCustomAmount(e.target.value)
                              setSelectedAmount(null)
                            }}
                            min="1"
                            step="0.01"
                          />
                        </div>
                      </div>

                      {/* Impact Message */}
                      {getTotalAmount() > 0 && (
                        <div className="notification is-primary">
                          <div className="is-flex is-align-items-center">
                            <span className="icon mr-2">
                              <Heart size={16} />
                            </span>
                            <span className="has-text-white">
                              <strong>Your Impact:</strong> {getImpactMessage()}
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Payment Method */}
                      <div className="field">
                        <label className="label has-text-white">Payment Method</label>
                        <div className="control">
                          <div className="select is-fullwidth">
                            <select>
                              <option value="card">Credit/Debit Card</option>
                              <option value="paypal">PayPal</option>
                              <option value="bank">Bank Transfer</option>
                              <option value="crypto">Cryptocurrency</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="field">
                        <div className="control">
                          <button 
                            type="submit" 
                            className={`button is-primary is-large is-fullwidth ${
                              isProcessing ? 'is-loading' : ''
                            }`}
                            disabled={getTotalAmount() <= 0 || isProcessing}
                          >
                            {isProcessing ? (
                              'Processing...'
                            ) : (
                              <>
                                <span className="icon">
                                  <Heart size={16} />
                                </span>
                                <span>Donate ${getTotalAmount().toFixed(2)}</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Security Notice */}
                      <div className="content">
                        <p className="has-text-grey-light is-size-7">
                          <span className="icon">
                            <Lock size={12} />
                          </span>
                          Your payment information is secure and encrypted. We never store your 
                          payment details and all transactions are processed securely.
                        </p>
                      </div>
                    </form>
                  ) : (
                    <div className="has-text-centered">
                      <div className="icon is-large has-text-success mb-4">
                        <CheckCircle size={64} />
                      </div>
                      <h3 className="title is-4 has-text-white mb-3">Thank You!</h3>
                      <p className="has-text-grey-light mb-4">
                        Your donation of ${getTotalAmount().toFixed(2)} has been processed successfully. 
                        You'll receive a receipt via email shortly.
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
              {/* Security Features */}
              <div className="card mb-4">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-4">Secure Donations</h3>
                  <div className="content">
                    {securityFeatures.map((feature, index) => {
                      const Icon = feature.icon
                      return (
                        <div key={index} className="is-flex is-align-items-center mb-3">
                          <span className={`icon ${feature.color} mr-2`}>
                            <Icon size={16} />
                          </span>
                          <div>
                            <p className="has-text-white is-size-6">{feature.title}</p>
                            <p className="has-text-grey-light is-size-7">{feature.description}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Donation Stats */}
              <div className="card mb-4">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-4">Community Impact</h3>
                  <div className="content">
                    <div className="is-flex is-justify-content-space-between mb-3">
                      <span className="has-text-grey-light">Total Raised</span>
                      <span className="has-text-white">$125,847</span>
                    </div>
                    <div className="is-flex is-justify-content-space-between mb-3">
                      <span className="has-text-grey-light">Creators Supported</span>
                      <span className="has-text-white">2,847</span>
                    </div>
                    <div className="is-flex is-justify-content-space-between mb-3">
                      <span className="has-text-grey-light">Donations This Month</span>
                      <span className="has-text-white">$12,456</span>
                    </div>
                    <div className="is-flex is-justify-content-space-between">
                      <span className="has-text-grey-light">Average Donation</span>
                      <span className="has-text-white">$44.20</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Donors */}
              <div className="card">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-4">Recent Supporters</h3>
                  <div className="content">
                    <div className="media mb-3">
                      <div className="media-left">
                        <figure className="image is-32x32">
                          <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                            alt="Supporter" 
                            className="is-rounded" 
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6 has-text-white">Anonymous</p>
                        <p className="subtitle is-7 has-text-grey-light">$50 • 2 hours ago</p>
                      </div>
                    </div>
                    <div className="media mb-3">
                      <div className="media-left">
                        <figure className="image is-32x32">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" 
                            alt="Supporter" 
                            className="is-rounded" 
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6 has-text-white">Sarah M.</p>
                        <p className="subtitle is-7 has-text-grey-light">$25 • 5 hours ago</p>
                      </div>
                    </div>
                    <div className="media">
                      <div className="media-left">
                        <figure className="image is-32x32">
                          <img 
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" 
                            alt="Supporter" 
                            className="is-rounded" 
                          />
                        </figure>
                      </div>
                      <div className="media-content">
                        <p className="title is-6 has-text-white">Mike R.</p>
                        <p className="subtitle is-7 has-text-grey-light">$100 • 1 day ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="card mt-6">
            <div className="card-content">
              <h3 className="title is-4 has-text-white mb-4">How Your Donations Help</h3>
              <div className="columns is-multiline">
                {donationImpact.map((impact, index) => (
                  <div key={index} className="column is-one-fifth">
                    <div className="card">
                      <div className="card-content has-text-centered">
                        <div className="title is-3 has-text-white mb-2">${impact.amount}</div>
                        <p className="has-text-grey-light is-size-7 mb-2">{impact.impact}</p>
                        <p className="has-text-grey-light is-size-7">{impact.description}</p>
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

export default Donate
