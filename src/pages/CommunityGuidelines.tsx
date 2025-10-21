import React from 'react'
import { Shield, Users, Flag, Heart, MessageCircle, Eye, AlertTriangle, CheckCircle } from 'lucide-react'

const CommunityGuidelines: React.FC = () => {
  return (
    <div className="container is-max-widescreen py-6">
      <div className="columns">
        <div className="column is-8">
          <div className="content">
            <h1 className="title is-2 has-text-white mb-6">Community Guidelines</h1>
            
            <div className="box has-background-dark mb-6">
              <div className="is-flex is-align-items-center mb-4">
                <Shield className="has-text-primary mr-3" size={24} />
                <h2 className="title is-4 has-text-white">Our Commitment</h2>
              </div>
              <p className="has-text-grey-light mb-4">
                Flith Farm is a platform built for creators and viewers to share, discover, and enjoy content. 
                We believe in fostering a positive, inclusive, and respectful community where everyone can express 
                themselves freely while maintaining a safe environment for all.
              </p>
              <p className="has-text-grey-light">
                These guidelines help ensure that our platform remains a welcoming space for creators and viewers alike. 
                By using Flith Farm, you agree to follow these guidelines and help us maintain a positive community.
              </p>
            </div>

            <div className="box has-background-dark mb-6">
              <h2 className="title is-4 has-text-white mb-4">What We Encourage</h2>
              <div className="columns">
                <div className="column is-6">
                  <div className="is-flex is-align-items-start mb-4">
                    <Heart className="has-text-success mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="title is-6 has-text-white">Respectful Communication</h3>
                      <p className="has-text-grey-light is-size-7">
                        Treat others with kindness and respect in comments and interactions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="is-flex is-align-items-start mb-4">
                    <Users className="has-text-info mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="title is-6 has-text-white">Inclusive Content</h3>
                      <p className="has-text-grey-light is-size-7">
                        Create content that welcomes and includes people from all backgrounds.
                      </p>
                    </div>
                  </div>
                  
                  <div className="is-flex is-align-items-start">
                    <MessageCircle className="has-text-warning mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="title is-6 has-text-white">Constructive Feedback</h3>
                      <p className="has-text-grey-light is-size-7">
                        Provide helpful and constructive feedback to creators.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="column is-6">
                  <div className="is-flex is-align-items-start mb-4">
                    <Eye className="has-text-primary mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="title is-6 has-text-white">Original Content</h3>
                      <p className="has-text-grey-light is-size-7">
                        Share your own original content and give credit where due.
                      </p>
                    </div>
                  </div>
                  
                  <div className="is-flex is-align-items-start mb-4">
                    <CheckCircle className="has-text-success mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="title is-6 has-text-white">Quality Content</h3>
                      <p className="has-text-grey-light is-size-7">
                        Strive to create high-quality, engaging content for your audience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="is-flex is-align-items-start">
                    <Flag className="has-text-info mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="title is-6 has-text-white">Report Issues</h3>
                      <p className="has-text-grey-light is-size-7">
                        Help us maintain a safe community by reporting violations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="box has-background-dark mb-6">
              <h2 className="title is-4 has-text-white mb-4">Prohibited Content</h2>
              <div className="content">
                <div className="mb-4">
                  <h3 className="title is-6 has-text-white mb-2">Harmful Content</h3>
                  <ul className="has-text-grey-light">
                    <li>Violence, graphic content, or content that promotes harm</li>
                    <li>Hate speech, harassment, or bullying</li>
                    <li>Content that targets individuals or groups based on protected characteristics</li>
                    <li>Threats, intimidation, or incitement to violence</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h3 className="title is-6 has-text-white mb-2">Inappropriate Content</h3>
                  <ul className="has-text-grey-light">
                    <li>Sexually explicit content involving minors</li>
                    <li>Non-consensual intimate content</li>
                    <li>Content that violates privacy or dignity</li>
                    <li>Spam, scams, or misleading content</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h3 className="title is-6 has-text-white mb-2">Illegal Content</h3>
                  <ul className="has-text-grey-light">
                    <li>Content that violates copyright or intellectual property rights</li>
                    <li>Content that promotes illegal activities</li>
                    <li>Content that violates local, state, or federal laws</li>
                    <li>Content that facilitates or promotes criminal activity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="box has-background-dark mb-6">
              <h2 className="title is-4 has-text-white mb-4">Enforcement</h2>
              <div className="content">
                <p className="has-text-grey-light mb-4">
                  We take violations of these guidelines seriously. When content or behavior violates our guidelines, 
                  we may take action including:
                </p>
                <ul className="has-text-grey-light">
                  <li>Removing the violating content</li>
                  <li>Issuing warnings to users</li>
                  <li>Temporarily restricting account features</li>
                  <li>Suspending or terminating accounts for repeated violations</li>
                  <li>Reporting serious violations to law enforcement when appropriate</li>
                </ul>
              </div>
            </div>

            <div className="box has-background-dark">
              <h2 className="title is-4 has-text-white mb-4">Reporting Violations</h2>
              <div className="content">
                <p className="has-text-grey-light mb-4">
                  If you encounter content or behavior that violates these guidelines, please report it immediately. 
                  You can report content by:
                </p>
                <ul className="has-text-grey-light mb-4">
                  <li>Clicking the "Report" button on any video or comment</li>
                  <li>Using the flag icon in the video player</li>
                  <li>Contacting our support team directly</li>
                  <li>Using the feedback form on our contact page</li>
                </ul>
                <p className="has-text-grey-light">
                  All reports are reviewed by our moderation team, and we take appropriate action based on our findings.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="column is-4">
          <div className="box has-background-dark">
            <h3 className="title is-5 has-text-white mb-4">Quick Reference</h3>
            <div className="content">
              <div className="is-flex is-align-items-center mb-3">
                <CheckCircle className="has-text-success mr-2" size={16} />
                <span className="has-text-white">Be respectful and kind</span>
              </div>
              <div className="is-flex is-align-items-center mb-3">
                <CheckCircle className="has-text-success mr-2" size={16} />
                <span className="has-text-white">Create original content</span>
              </div>
              <div className="is-flex is-align-items-center mb-3">
                <CheckCircle className="has-text-success mr-2" size={16} />
                <span className="has-text-white">Give credit where due</span>
              </div>
              <div className="is-flex is-align-items-center mb-3">
                <CheckCircle className="has-text-success mr-2" size={16} />
                <span className="has-text-white">Report violations</span>
              </div>
            </div>
          </div>
          
          <div className="box has-background-dark mt-4">
            <h3 className="title is-5 has-text-white mb-4">Need Help?</h3>
            <p className="has-text-grey-light mb-4">
              Have questions about these guidelines or need to report a violation?
            </p>
            <button className="button is-primary is-fullwidth mb-2">
              <Flag size={16} className="mr-2" />
              Report Content
            </button>
            <button className="button is-info is-fullwidth">
              <MessageCircle size={16} className="mr-2" />
              Contact Support
            </button>
          </div>
          
          <div className="box has-background-dark mt-4">
            <div className="is-flex is-align-items-center mb-3">
              <AlertTriangle className="has-text-warning mr-2" size={20} />
              <h3 className="title is-5 has-text-white">Important Note</h3>
            </div>
            <p className="has-text-grey-light is-size-7">
              These guidelines are updated regularly to reflect our evolving community standards. 
              Please check back periodically for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityGuidelines