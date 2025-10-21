import React from 'react'
import { 
  Shield, 
  AlertTriangle, 
  FileText, 
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

const DMCA: React.FC = () => {
  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          {/* Header */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="has-text-centered">
                <div className="is-flex is-justify-content-center is-align-items-center mb-4">
                  <span className="icon is-large has-text-warning mr-3">
                    <Shield size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">DMCA Policy</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Digital Millennium Copyright Act Compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DMCA Content */}
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h2 className="title is-4 has-text-white mb-4">1. DMCA Compliance</h2>
                <p className="has-text-grey-light mb-4">
                  Flith Farm respects the intellectual property rights of others and complies with the Digital Millennium Copyright Act (DMCA). We have implemented procedures to handle copyright infringement claims in accordance with the DMCA.
                </p>

                <h2 className="title is-4 has-text-white mb-4">2. Copyright Infringement Claims</h2>
                <p className="has-text-grey-light mb-4">
                  If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, please provide our designated agent with the following information:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                  <li>Identification of the copyrighted work claimed to have been infringed</li>
                  <li>Identification of the material that is claimed to be infringing and information sufficient to locate it</li>
                  <li>Contact information of the complaining party</li>
                  <li>A statement that the complaining party has a good faith belief that use of the material is not authorized</li>
                  <li>A statement that the information is accurate and that the complaining party is authorized to act on behalf of the copyright owner</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">3. Counter-Notification</h2>
                <p className="has-text-grey-light mb-4">
                  If you believe that your content was removed in error, you may file a counter-notification. Your counter-notification must include:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Your physical or electronic signature</li>
                  <li>Identification of the material that was removed and its location before removal</li>
                  <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                  <li>Your name, address, and telephone number</li>
                  <li>A statement that you consent to the jurisdiction of the federal court in your district</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">4. Repeat Infringer Policy</h2>
                <p className="has-text-grey-light mb-4">
                  In accordance with the DMCA, we have a policy of terminating, in appropriate circumstances, users who are repeat infringers. We may also limit access to our services or terminate the accounts of users who infringe any intellectual property rights of others.
                </p>

                <h2 className="title is-4 has-text-white mb-4">5. Automated Content Protection</h2>
                <p className="has-text-grey-light mb-4">
                  We employ advanced technology to help prevent copyright infringement:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Content Fingerprinting:</strong> Automated detection of copyrighted material</li>
                  <li><strong>Watermarking Technology:</strong> Protection of original content</li>
                  <li><strong>Machine Learning:</strong> AI-powered copyright detection</li>
                  <li><strong>Real-time Monitoring:</strong> Continuous scanning for infringing content</li>
                  <li><strong>Proactive Removal:</strong> Automatic removal of detected infringing content</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">6. Fair Use Considerations</h2>
                <p className="has-text-grey-light mb-4">
                  We recognize that fair use is an important exception to copyright law. Content that may qualify for fair use protection includes:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Educational and commentary content</li>
                  <li>Parody and satire</li>
                  <li>News reporting and criticism</li>
                  <li>Transformative works</li>
                  <li>Non-commercial use</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">7. Creator Protection</h2>
                <p className="has-text-grey-light mb-4">
                  We provide tools and resources to help creators protect their content:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li><strong>Content ID System:</strong> Automated identification and management of your content</li>
                  <li><strong>Revenue Protection:</strong> Monetization tools for original content</li>
                  <li><strong>Legal Support:</strong> Access to legal resources and guidance</li>
                  <li><strong>Dispute Resolution:</strong> Fair process for resolving copyright disputes</li>
                  <li><strong>Creator Education:</strong> Resources on copyright law and best practices</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">8. False Claims and Penalties</h2>
                <p className="has-text-grey-light mb-4">
                  Making false claims of copyright infringement is a serious matter. False claims may result in:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Legal liability for damages</li>
                  <li>Account termination</li>
                  <li>Loss of platform privileges</li>
                  <li>Potential legal action</li>
                </ul>

                <h2 className="title is-4 has-text-white mb-4">9. Contact Information</h2>
                <p className="has-text-grey-light mb-4">
                  For DMCA-related matters, please contact our designated agent:
                </p>
                <div className="content">
                  <p className="has-text-grey-light">
                    <strong>DMCA Agent:</strong> Legal Department<br />
                    <strong>Email:</strong> dmca@flithfarm.com<br />
                    <strong>Address:</strong> Flith Farm Legal Department<br />
                    123 Creator Street, San Francisco, CA 94105<br />
                    <strong>Phone:</strong> (555) 123-4567<br />
                    <strong>Fax:</strong> (555) 123-4568
                  </p>
                </div>

                <h2 className="title is-4 has-text-white mb-4">10. Response Time</h2>
                <p className="has-text-grey-light mb-4">
                  We will respond to valid DMCA notices within 24-48 hours. We take copyright infringement seriously and work to resolve all claims promptly and fairly.
                </p>

                <h2 className="title is-4 has-text-white mb-4">11. International Copyright</h2>
                <p className="has-text-grey-light mb-4">
                  While we primarily operate under U.S. law, we respect international copyright laws and work with creators and rights holders from around the world to resolve copyright issues.
                </p>

                <h2 className="title is-4 has-text-white mb-4">12. Updates to This Policy</h2>
                <p className="has-text-grey-light mb-4">
                  We may update this DMCA Policy from time to time to reflect changes in law or our practices. We will notify users of significant changes via email or platform notification.
                </p>

                <div className="notification is-warning mt-5">
                  <div className="is-flex is-align-items-center">
                    <span className="icon mr-2">
                      <AlertTriangle size={16} />
                    </span>
                    <span className="has-text-white">
                      <strong>Important:</strong> This DMCA Policy is effective as of January 15, 2024. Please ensure you understand your rights and responsibilities under copyright law.
                    </span>
                  </div>
                </div>

                <div className="notification is-primary mt-4">
                  <div className="is-flex is-align-items-center">
                    <span className="icon mr-2">
                      <Info size={16} />
                    </span>
                    <span className="has-text-white">
                      <strong>Note:</strong> For general copyright questions or creator support, please contact our Creator Support team at creators@flithfarm.com
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

export default DMCA
