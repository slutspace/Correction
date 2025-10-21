import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Youtube, 
  Twitter, 
  Instagram, 
  Facebook, 
  Github, 
  Mail, 
  HelpCircle, 
  Shield, 
  FileText,
  Users,
  Heart
} from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="footer has-background-dark">
      <div className="container">
        <div className="columns">
          {/* Brand Section */}
          <div className="column is-3">
            <div className="is-flex is-align-items-center mb-4">
              <div className="is-flex is-align-items-center is-justify-content-center has-background-danger has-text-white mr-3" 
                   style={{width: '32px', height: '32px', borderRadius: '6px'}}>
                <span className="has-text-weight-bold">F</span>
              </div>
              <span className="title is-4 has-text-white">Flith Farm</span>
            </div>
            <p className="has-text-grey-light mb-4">
              The ultimate creator platform for sharing your videos with the world. 
              Join our community of content creators and discover amazing content.
            </p>
            <div className="is-flex">
              <a className="mr-3" href="#" aria-label="YouTube">
                <Youtube size={24} className="has-text-grey-light" />
              </a>
              <a className="mr-3" href="#" aria-label="Twitter">
                <Twitter size={24} className="has-text-grey-light" />
              </a>
              <a className="mr-3" href="#" aria-label="Instagram">
                <Instagram size={24} className="has-text-grey-light" />
              </a>
              <a className="mr-3" href="#" aria-label="Facebook">
                <Facebook size={24} className="has-text-grey-light" />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={24} className="has-text-grey-light" />
              </a>
            </div>
          </div>

          {/* Discover Section */}
          <div className="column is-2">
            <h3 className="title is-6 has-text-white mb-4">Discover</h3>
            <ul className="menu-list">
              <li><Link to="/newsletter" className="has-text-grey-light">Newsletter</Link></li>
              <li><Link to="/donate" className="has-text-grey-light">Donate</Link></li>
            </ul>
          </div>

          {/* Creator Section */}
          <div className="column is-2">
            <h3 className="title is-6 has-text-white mb-4">For Creators</h3>
            <ul className="menu-list">
              <li><Link to="/creator" className="has-text-grey-light">Creator Studio</Link></li>
              <li><Link to="/monetization" className="has-text-grey-light">Monetization</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="column is-2">
            <h3 className="title is-6 has-text-white mb-4">Support</h3>
            <ul className="menu-list">
              <li><Link to="/help" className="has-text-grey-light">Help Center</Link></li>
              <li><Link to="/contact" className="has-text-grey-light">Contact Us</Link></li>
              <li><Link to="/community" className="has-text-grey-light">Community</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="column is-3">
            <h3 className="title is-6 has-text-white mb-4">Legal</h3>
            <ul className="menu-list">
              <li><Link to="/guidelines" className="has-text-grey-light">Community Guidelines</Link></li>
              <li><Link to="/terms" className="has-text-grey-light">Terms of Service</Link></li>
              <li><Link to="/privacy" className="has-text-grey-light">Privacy Policy</Link></li>
              <li><Link to="/dmca" className="has-text-grey-light">DMCA</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="has-background-grey-dark" style={{margin: '2rem 0 1rem 0'}} />
        <div className="columns is-vcentered">
          <div className="column">
            <p className="has-text-grey-light is-size-7">
              © 2024 Flith Farm. All rights reserved.
            </p>
          </div>
          <div className="column has-text-right">
            <div className="is-flex is-justify-content-flex-end is-align-items-center">
              <span className="has-text-grey-light is-size-7 mr-2">Made with</span>
              <Heart size={14} className="has-text-danger mr-2" />
              <span className="has-text-grey-light is-size-7">by the Flith Farm team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
