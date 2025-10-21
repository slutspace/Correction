import React from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Heart, 
  Star, 
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

const Monetization: React.FC = () => {
  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          {/* Header */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="has-text-centered">
                <div className="is-flex is-justify-content-center is-align-items-center mb-4">
                  <span className="icon is-large has-text-success mr-3">
                    <DollarSign size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">Monetization</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Turn your creativity into income with our comprehensive monetization tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monetization Content */}
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-4 has-text-white mb-4">Revenue Streams</h2>
                <p className="has-text-grey-light mb-4">
                  Flith Farm offers multiple ways for creators to monetize their content and build sustainable income streams.
                </p>

                <div className="columns">
                  <div className="column is-6">
                    <div className="card has-background-grey-darker">
                      <div className="card-content">
                        <div className="is-flex is-align-items-center mb-3">
                          <span className="icon has-text-primary mr-2">
                            <TrendingUp size={24} />
                          </span>
                          <h3 className="title is-5 has-text-white">Advertising Revenue</h3>
                        </div>
                        <p className="has-text-grey-light mb-3">
                          Earn money from ads displayed on your videos. Higher engagement means higher revenue.
                        </p>
                        <ul className="has-text-grey-light">
                          <li>Pre-roll, mid-roll, and post-roll ads</li>
                          <li>Banner and overlay advertisements</li>
                          <li>Revenue sharing based on views and engagement</li>
                          <li>Advanced analytics and reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="column is-6">
                    <div className="card has-background-grey-darker">
                      <div className="card-content">
                        <div className="is-flex is-align-items-center mb-3">
                          <span className="icon has-text-warning mr-2">
                            <Users size={24} />
                          </span>
                          <h3 className="title is-5 has-text-white">Subscriptions</h3>
                        </div>
                        <p className="has-text-grey-light mb-3">
                          Create exclusive content for your subscribers and build a loyal community.
                        </p>
                        <ul className="has-text-grey-light">
                          <li>Monthly and annual subscription tiers</li>
                          <li>Exclusive content for subscribers</li>
                          <li>Early access to new videos</li>
                          <li>Direct communication with subscribers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="columns">
                  <div className="column is-6">
                    <div className="card has-background-grey-darker">
                      <div className="card-content">
                        <div className="is-flex is-align-items-center mb-3">
                          <span className="icon has-text-danger mr-2">
                            <Heart size={24} />
                          </span>
                          <h3 className="title is-5 has-text-white">Donations & Tips</h3>
                        </div>
                        <p className="has-text-grey-light mb-3">
                          Allow your audience to support you directly through donations and tips.
                        </p>
                        <ul className="has-text-grey-light">
                          <li>One-time donations and tips</li>
                          <li>Recurring monthly support</li>
                          <li>Super chat during live streams</li>
                          <li>Virtual gifts and badges</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="column is-6">
                    <div className="card has-background-grey-darker">
                      <div className="card-content">
                        <div className="is-flex is-align-items-center mb-3">
                          <span className="icon has-text-info mr-2">
                            <Star size={24} />
                          </span>
                          <h3 className="title is-5 has-text-white">Premium Content</h3>
                        </div>
                        <p className="has-text-grey-light mb-3">
                          Sell premium content, courses, and digital products directly to your audience.
                        </p>
                        <ul className="has-text-grey-light">
                          <li>Pay-per-view premium videos</li>
                          <li>Online courses and tutorials</li>
                          <li>Digital downloads and resources</li>
                          <li>Live workshops and masterclasses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="title is-4 has-text-white mb-4">Creator Tiers</h2>
                <p className="has-text-grey-light mb-4">
                  Our tiered system rewards creators based on their performance and community engagement.
                </p>

                <div className="columns">
                  <div className="column is-4">
                    <div className="card has-background-grey-darker">
                      <div className="card-content has-text-centered">
                        <h3 className="title is-5 has-text-white mb-3">Starter</h3>
                        <div className="has-text-grey-light mb-3">
                          <p><strong>Requirements:</strong></p>
                          <ul>
                            <li>100+ subscribers</li>
                            <li>1,000+ total views</li>
                            <li>Active for 30+ days</li>
                          </ul>
                        </div>
                        <div className="has-text-grey-light">
                          <p><strong>Benefits:</strong></p>
                          <ul>
                            <li>Basic monetization</li>
                            <li>Standard analytics</li>
                            <li>Community support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column is-4">
                    <div className="card has-background-grey-darker">
                      <div className="card-content has-text-centered">
                        <h3 className="title is-5 has-text-white mb-3">Professional</h3>
                        <div className="has-text-grey-light mb-3">
                          <p><strong>Requirements:</strong></p>
                          <ul>
                            <li>1,000+ subscribers</li>
                            <li>10,000+ total views</li>
                            <li>Active for 90+ days</li>
                          </ul>
                        </div>
                        <div className="has-text-grey-light">
                          <p><strong>Benefits:</strong></p>
                          <ul>
                            <li>Advanced monetization</li>
                            <li>Detailed analytics</li>
                            <li>Priority support</li>
                            <li>Custom branding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column is-4">
                    <div className="card has-background-grey-darker">
                      <div className="card-content has-text-centered">
                        <h3 className="title is-5 has-text-white mb-3">Elite</h3>
                        <div className="has-text-grey-light mb-3">
                          <p><strong>Requirements:</strong></p>
                          <ul>
                            <li>10,000+ subscribers</li>
                            <li>100,000+ total views</li>
                            <li>Active for 180+ days</li>
                          </ul>
                        </div>
                        <div className="has-text-grey-light">
                          <p><strong>Benefits:</strong></p>
                          <ul>
                            <li>Premium monetization</li>
                            <li>Advanced analytics</li>
                            <li>Dedicated support</li>
                            <li>Partnership opportunities</li>
                            <li>Revenue optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="title is-4 has-text-white mb-4">Payment & Payouts</h2>
                <p className="has-text-grey-light mb-4">
                  We offer flexible payment options and competitive revenue sharing to help you maximize your earnings.
                </p>

                <div className="columns">
                  <div className="column is-6">
                    <h3 className="title is-5 has-text-white mb-3">Revenue Sharing</h3>
                    <ul className="has-text-grey-light">
                      <li><strong>Starter Tier:</strong> 60% creator, 40% platform</li>
                      <li><strong>Professional Tier:</strong> 70% creator, 30% platform</li>
                      <li><strong>Elite Tier:</strong> 80% creator, 20% platform</li>
                      <li><strong>Premium Content:</strong> 90% creator, 10% platform</li>
                    </ul>
                  </div>

                  <div className="column is-6">
                    <h3 className="title is-5 has-text-white mb-3">Payout Options</h3>
                    <ul className="has-text-grey-light">
                      <li>PayPal, Stripe, and bank transfers</li>
                      <li>Minimum payout: $50</li>
                      <li>Monthly payouts on the 15th</li>
                      <li>Real-time earnings tracking</li>
                      <li>Tax reporting and documentation</li>
                    </ul>
                  </div>
                </div>

                <h2 className="title is-4 has-text-white mb-4">Getting Started</h2>
                <p className="has-text-grey-light mb-4">
                  Ready to start monetizing your content? Follow these steps to begin earning from your creativity.
                </p>

                <div className="content">
                  <ol className="has-text-grey-light">
                    <li><strong>Complete Your Profile:</strong> Add a profile picture, bio, and social links</li>
                    <li><strong>Upload Quality Content:</strong> Create engaging, original content regularly</li>
                    <li><strong>Build Your Audience:</strong> Engage with viewers and grow your subscriber base</li>
                    <li><strong>Enable Monetization:</strong> Apply for monetization once you meet the requirements</li>
                    <li><strong>Set Up Payments:</strong> Add your payment information and tax details</li>
                    <li><strong>Start Earning:</strong> Begin monetizing your content and track your earnings</li>
                  </ol>
                </div>

                <div className="notification is-success mt-5">
                  <div className="is-flex is-align-items-center">
                    <span className="icon mr-2">
                      <TrendingUp size={16} />
                    </span>
                    <span className="has-text-white">
                      <strong>Ready to Start?</strong> Visit your Creator Studio to begin the monetization process and start earning from your content.
                    </span>
                  </div>
                </div>

                <div className="notification is-info mt-4">
                  <div className="is-flex is-align-items-center">
                    <span className="icon mr-2">
                      <Info size={16} />
                    </span>
                    <span className="has-text-white">
                      <strong>Need Help?</strong> Contact our monetization support team at monetization@flithfarm.com for personalized assistance.
                    </span>
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

export default Monetization