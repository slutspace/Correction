import React from 'react'
import { 
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

const PrivacyPolicy: React.FC = () => {
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
                    <Shield size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">Privacy Policy</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Last updated: January 15, 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Content */}
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-4 has-text-white mb-4">1. Information We Collect</h2>
                <p className="has-text-grey-light mb-4">
                  We collect information you provide directly to us, such as when you create an account, upload content, or use our services. This includes:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Account Information:</strong> Name, email address, username, profile picture</li>
                  <li><strong>Content:</strong> Videos, thumbnails, descriptions, comments, and other content you upload</li>
                  <li><strong>Payment Information:</strong> Billing details, payment methods, transaction history</li>
                  <li><strong>Communication Data:</strong> Messages, comments, and other communications</li>
                  <li><strong>Usage Data:</strong> How you interact with our platform and services</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">2. How We Use Your Information</h2>
                <p className="has-text-grey-light mb-4">
                  We use the information we collect to:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">3. Information Sharing and Disclosure</h2>
                <p className="has-text-grey-light mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Service Providers:</strong> Trusted third parties who assist in operating our platform</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">4. Data Security and Protection</h2>
                <p className="has-text-grey-light mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Encryption:</strong> All data is encrypted in transit and at rest using AES-256 encryption</li>
                  <li><strong>Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                  <li><strong>Regular Audits:</strong> Regular security audits and vulnerability assessments</li>
                  <li><strong>Secure Infrastructure:</strong> Protected servers and secure data centers</li>
                  <li><strong>Employee Training:</strong> Regular security training for all staff members</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="has-text-grey-light mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how you use our platform</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements (with your consent)</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">6. Your Privacy Rights</h2>
                <p className="has-text-grey-light mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Export your data in a machine-readable format</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">7. Data Retention</h2>
                <p className="has-text-grey-light mb-4">
                  We retain your information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. Specifically:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Account Data:</strong> Retained until account deletion or 3 years of inactivity</li>
                  <li><strong>Content:</strong> Retained until you delete it or close your account</li>
                  <li><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained longer</li>
                  <li><strong>Legal Requirements:</strong> Some data may be retained for legal compliance</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">8. International Data Transfers</h2>
                <p className="has-text-grey-light mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international transfers, including:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Standard contractual clauses approved by relevant authorities</li>
                  <li>Adequacy decisions by competent data protection authorities</li>
                  <li>Certification schemes and codes of conduct</li>
                  <li>Binding corporate rules for intra-group transfers</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">9. Children's Privacy</h2>
                <p className="has-text-grey-light mb-4">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>

                <h2 className="title is-4 has-text-white mb-4">10. Third-Party Services</h2>
                <p className="has-text-grey-light mb-4">
                  Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any personal information.
                </p>

                <h2 className="title is-4 has-text-white mb-4">11. Changes to This Policy</h2>
                <p className="has-text-grey-light mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>

                <h2 className="title is-4 has-text-white mb-4">12. Contact Us</h2>
                <p className="has-text-grey-light mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="content">
                  <p className="has-text-grey-light">
                    <strong>Email:</strong> privacy@flithfarm.com<br />
                    <strong>Address:</strong> Flith Farm Privacy Team<br />
                    123 Creator Street, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> (555) 123-4567<br />
                    <strong>Data Protection Officer:</strong> dpo@flithfarm.com
                  </p>
                </div>

                <div className="notification is-primary mt-5">
                  <div className="is-flex is-align-items-center">
                    <span className="icon mr-2">
                      <Info size={16} />
                    </span>
                    <span className="has-text-white">
                      <strong>Note:</strong> This Privacy Policy is effective as of January 15, 2024, and will remain in effect until modified or updated.
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

export default PrivacyPolicy
