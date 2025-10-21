import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Users, 
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
  FolderMinimize
} from 'lucide-react'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
                    <h1 className="title is-2 has-text-white">Contact Us</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Get in touch with our team - we're here to help!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            {/* Contact Form */}
            <div className="column is-8">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4 has-text-white mb-4">Send us a Message</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="columns">
                      <div className="column is-6">
                        <div className="field">
                          <label className="label has-text-white">Name</label>
                          <div className="control">
                            <input 
                              className="input" 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-6">
                        <div className="field">
                          <label className="label has-text-white">Email</label>
                          <div className="control">
                            <input 
                              className="input" 
                              type="email" 
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column is-6">
                        <div className="field">
                          <label className="label has-text-white">Subject</label>
                          <div className="control">
                            <input 
                              className="input" 
                              type="text" 
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-6">
                        <div className="field">
                          <label className="label has-text-white">Category</label>
                          <div className="control">
                            <div className="select is-fullwidth">
                              <select 
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                              >
                                <option value="general">General Inquiry</option>
                                <option value="technical">Technical Support</option>
                                <option value="monetization">Monetization</option>
                                <option value="copyright">Copyright Issue</option>
                                <option value="partnership">Partnership</option>
                                <option value="feedback">Feedback</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="field">
                      <label className="label has-text-white">Message</label>
                      <div className="control">
                        <textarea 
                          className="textarea" 
                          rows={6}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div className="field">
                      <div className="control">
                        <button className="button is-primary is-large" type="submit">
                          <span className="icon mr-2">
                            <Send size={16} />
                          </span>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="column is-4">
              <div className="card">
                <div className="card-content">
                  <h2 className="title is-4 has-text-white mb-4">Get in Touch</h2>
                  
                  <div className="content">
                    <div className="is-flex is-align-items-center mb-4">
                      <span className="icon has-text-primary mr-3">
                        <Mail size={20} />
                      </span>
                      <div>
                        <p className="has-text-white has-text-weight-bold">Email</p>
                        <p className="has-text-grey-light">support@flithfarm.com</p>
                      </div>
                    </div>

                    <div className="is-flex is-align-items-center mb-4">
                      <span className="icon has-text-success mr-3">
                        <Phone size={20} />
                      </span>
                      <div>
                        <p className="has-text-white has-text-weight-bold">Phone</p>
                        <p className="has-text-grey-light">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="is-flex is-align-items-center mb-4">
                      <span className="icon has-text-info mr-3">
                        <MapPin size={20} />
                      </span>
                      <div>
                        <p className="has-text-white has-text-weight-bold">Address</p>
                        <p className="has-text-grey-light">
                          123 Creator Street<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="is-flex is-align-items-center mb-4">
                      <span className="icon has-text-warning mr-3">
                        <Clock size={20} />
                      </span>
                      <div>
                        <p className="has-text-white has-text-weight-bold">Business Hours</p>
                        <p className="has-text-grey-light">
                          Monday - Friday: 9 AM - 6 PM PST<br />
                          Saturday - Sunday: 10 AM - 4 PM PST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="card-content">
                  <h3 className="title is-5 has-text-white mb-3">Quick Links</h3>
                  <div className="content">
                    <ul className="has-text-grey-light">
                      <li><a href="/help" className="has-text-primary">Help Center</a></li>
                      <li><a href="/guidelines" className="has-text-primary">Community Guidelines</a></li>
                      <li><a href="/terms" className="has-text-primary">Terms of Service</a></li>
                      <li><a href="/privacy" className="has-text-primary">Privacy Policy</a></li>
                      <li><a href="/status" className="has-text-primary">System Status</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Methods */}
          <div className="card mt-5">
            <div className="card-content">
              <h2 className="title is-4 has-text-white mb-4">Other Ways to Reach Us</h2>
              
              <div className="columns">
                <div className="column is-4">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-primary mb-3">
                        <MessageCircle size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">Live Chat</h3>
                      <p className="has-text-grey-light mb-3">
                        Chat with our support team in real-time for immediate assistance.
                      </p>
                      <button className="button is-primary">Start Chat</button>
                    </div>
                  </div>
                </div>

                <div className="column is-4">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-success mb-3">
                        <Users size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">Community Forum</h3>
                      <p className="has-text-grey-light mb-3">
                        Connect with other users and get help from the community.
                      </p>
                      <button className="button is-success">Visit Forum</button>
                    </div>
                  </div>
                </div>

                <div className="column is-4">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-info mb-3">
                        <Shield size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white mb-3">Security Issues</h3>
                      <p className="has-text-grey-light mb-3">
                        Report security vulnerabilities or safety concerns.
                      </p>
                      <button className="button is-info">Report Issue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="notification is-info mt-4">
            <div className="is-flex is-align-items-center">
              <span className="icon mr-2">
                <Info size={16} />
              </span>
              <span className="has-text-white">
                <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours. For urgent technical issues, please call our support line.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
