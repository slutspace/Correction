import React, { useState } from 'react'
import { Mail, MessageCircle, Phone, MapPin, Send, Clock, Users } from 'lucide-react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container is-max-widescreen py-6">
      <div className="columns">
        <div className="column is-8">
          <div className="content">
            <h1 className="title is-2 has-text-white mb-6">Contact Us</h1>
            
            <div className="box has-background-dark">
              <h2 className="title is-4 has-text-white mb-4">Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="columns">
                  <div className="column is-6">
                    <div className="field">
                      <label className="label has-text-white">Name</label>
                      <div className="control">
                        <input 
                          className="input has-background-grey-darker has-text-white" 
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
                          className="input has-background-grey-darker has-text-white" 
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
                          className="input has-background-grey-darker has-text-white" 
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
                            className="has-background-grey-darker has-text-white"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                          >
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Support</option>
                            <option value="monetization">Monetization</option>
                            <option value="copyright">Copyright Issue</option>
                            <option value="partnership">Partnership</option>
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
                      className="textarea has-background-grey-darker has-text-white" 
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-primary is-large">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="column is-4">
          <div className="box has-background-dark">
            <h3 className="title is-5 has-text-white mb-4">Get in Touch</h3>
            <div className="content">
              <div className="is-flex is-align-items-center mb-4">
                <Mail className="has-text-primary mr-3" size={20} />
                <div>
                  <p className="has-text-white has-text-weight-bold">Email</p>
                  <p className="has-text-grey-light">support@flithfarm.com</p>
                </div>
              </div>
              
              <div className="is-flex is-align-items-center mb-4">
                <MessageCircle className="has-text-success mr-3" size={20} />
                <div>
                  <p className="has-text-white has-text-weight-bold">Live Chat</p>
                  <p className="has-text-grey-light">Available 24/7</p>
                </div>
              </div>
              
              <div className="is-flex is-align-items-center mb-4">
                <Phone className="has-text-info mr-3" size={20} />
                <div>
                  <p className="has-text-white has-text-weight-bold">Phone</p>
                  <p className="has-text-grey-light">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="is-flex is-align-items-center mb-4">
                <MapPin className="has-text-warning mr-3" size={20} />
                <div>
                  <p className="has-text-white has-text-weight-bold">Address</p>
                  <p className="has-text-grey-light">
                    123 Creator Street<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="box has-background-dark mt-4">
            <h3 className="title is-5 has-text-white mb-4">Support Hours</h3>
            <div className="content">
              <div className="is-flex is-justify-content-space-between mb-2">
                <span className="has-text-grey-light">Monday - Friday:</span>
                <span className="has-text-white">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="is-flex is-justify-content-space-between mb-2">
                <span className="has-text-grey-light">Saturday:</span>
                <span className="has-text-white">10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="is-flex is-justify-content-space-between">
                <span className="has-text-grey-light">Sunday:</span>
                <span className="has-text-white">Closed</span>
              </div>
            </div>
          </div>
          
          <div className="box has-background-dark mt-4">
            <h3 className="title is-5 has-text-white mb-4">Quick Links</h3>
            <div className="content">
              <a href="/help" className="has-text-primary is-block mb-2">
                <HelpCircle size={16} className="mr-2" />
                Help Center
              </a>
              <a href="/status" className="has-text-primary is-block mb-2">
                <Clock size={16} className="mr-2" />
                System Status
              </a>
              <a href="/community" className="has-text-primary is-block">
                <Users size={16} className="mr-2" />
                Community Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
