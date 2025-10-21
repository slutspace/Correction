import React from 'react'
import { 
  FileText, 
  Shield, 
  Users, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  X, 
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

const TermsOfService: React.FC = () => {
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
                    <FileText size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">Terms of Service</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Last updated: January 15, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terms Content */}
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-4 has-text-white mb-4">1. Acceptance of Terms</h2>
                <p className="has-text-grey-light mb-4">
                  By accessing and using Flith Farm ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="title is-4 has-text-white mb-4">2. Description of Service</h2>
                <p className="has-text-grey-light mb-4">
                  Flith Farm is a creator platform that allows users to upload, share, and monetize video content. Our services include but are not limited to:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Video hosting and streaming services</li>
                  <li>Creator monetization tools and analytics</li>
                  <li>Community features and social interactions</li>
                  <li>Content management and organization tools</li>
                  <li>Security and copyright protection services</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">3. User Accounts and Registration</h2>
                <p className="has-text-grey-light mb-4">
                  To access certain features of the Platform, you must register for an account. You agree to:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>Accept responsibility for all activities under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">4. Content Guidelines and Prohibited Uses</h2>
                <p className="has-text-grey-light mb-4">
                  You agree not to use the Platform to upload, post, or transmit content that:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Violates any applicable laws or regulations</li>
                  <li>Infringes on intellectual property rights of others</li>
                  <li>Contains harmful, threatening, or abusive content</li>
                  <li>Promotes violence, discrimination, or illegal activities</li>
                  <li>Contains spam, malware, or malicious code</li>
                  <li>Violates privacy rights of individuals</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">5. Intellectual Property Rights</h2>
                <p className="has-text-grey-light mb-4">
                  You retain ownership of your content but grant Flith Farm a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content on the Platform. You represent that you have all necessary rights to your content.
                </p>

                <h2 className="title is-4 has-text-white mb-4">6. Monetization and Revenue Sharing</h2>
                <p className="has-text-grey-light mb-4">
                  Creators may monetize their content through various methods including advertising, subscriptions, and direct payments. Revenue sharing terms are outlined in separate agreements and may vary based on creator tier and content type.
                </p>

                <h2 className="title is-4 has-text-white mb-4">7. Privacy and Data Protection</h2>
                <p className="has-text-grey-light mb-4">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>

                <h2 className="title is-4 has-text-white mb-4">8. Security and Content Protection</h2>
                <p className="has-text-grey-light mb-4">
                  We employ advanced security measures to protect your content and personal information, including:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>End-to-end encryption for all data transmission</li>
                  <li>Advanced watermarking and content fingerprinting</li>
                  <li>Automated copyright detection and protection</li>
                  <li>Secure payment processing and financial data protection</li>
                  <li>Regular security audits and updates</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">9. DMCA and Copyright Policy</h2>
                <p className="has-text-grey-light mb-4">
                  We respect intellectual property rights and comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyright has been infringed, please follow our DMCA procedures outlined in our DMCA Policy.
                </p>

                <h2 className="title is-4 has-text-white mb-4">10. Termination</h2>
                <p className="has-text-grey-light mb-4">
                  We may terminate or suspend your account and access to the Platform immediately, without prior notice, for any reason, including breach of these Terms. Upon termination, your right to use the Platform will cease immediately.
                </p>

                <h2 className="title is-4 has-text-white mb-4">11. Disclaimers and Limitations of Liability</h2>
                <p className="has-text-grey-light mb-4">
                  The Platform is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>

                <h2 className="title is-4 has-text-white mb-4">12. Indemnification</h2>
                <p className="has-text-grey-light mb-4">
                  You agree to indemnify and hold harmless Flith Farm, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the Platform or violation of these Terms.
                </p>

                <h2 className="title is-4 has-text-white mb-4">13. Governing Law and Dispute Resolution</h2>
                <p className="has-text-grey-light mb-4">
                  These Terms are governed by the laws of the State of California, United States. Any disputes arising from these Terms or your use of the Platform will be resolved through binding arbitration.
                </p>

                <h2 className="title is-4 has-text-white mb-4">14. Changes to Terms</h2>
                <p className="has-text-grey-light mb-4">
                  We reserve the right to modify these Terms at any time. We will notify users of significant changes via email or platform notification. Continued use of the Platform after changes constitutes acceptance of the new Terms.
                </p>

                <h2 className="title is-4 has-text-white mb-4">15. Contact Information</h2>
                <p className="has-text-grey-light mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="content">
                  <p className="has-text-grey-light">
                    <strong>Email:</strong> legal@flithfarm.com<br />
                    <strong>Address:</strong> Flith Farm Legal Department<br />
                    123 Creator Street, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> (555) 123-4567
                  </p>
                </div>

                <div className="notification is-primary mt-5">
                  <div className="is-flex is-align-items-center">
                    <span className="icon mr-2">
                      <Info size={16} />
                    </span>
                    <span className="has-text-white">
                      <strong>Note:</strong> These Terms of Service are effective as of January 15, 2024, and will remain in effect until modified or terminated.
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

export default TermsOfService
