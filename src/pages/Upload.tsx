import React, { useState } from 'react'
import { Upload as UploadIcon, X, FileVideo, Image } from 'lucide-react'

const Upload: React.FC = () => {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [thumbnail, setThumbnail] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type.startsWith('video/')) {
        setUploadedFile(file)
      }
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const handleThumbnailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0])
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!uploadedFile || !title.trim()) return

    setUploading(true)
    // Simulate upload
    setTimeout(() => {
      setUploading(false)
      alert('Video uploaded successfully!')
    }, 3000)
  }

  return (
    <div className="has-background-dark" style={{minHeight: '100vh'}}>
      <section className="section">
        <div className="container is-max-widescreen">
          <div className="mb-6">
            <h1 className="title is-2 has-text-white">Upload Video</h1>
            <p className="subtitle is-4 has-text-grey-light">Share your content with the Flith Farm community</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Video Upload */}
            <div className="card mb-6">
              <div className="card-content">
                <h2 className="title is-4 has-text-white mb-4">Video File</h2>
            
                {!uploadedFile ? (
                  <div
                    className={`box has-text-centered ${dragActive ? 'has-background-danger-light' : ''}`}
                    style={{
                      border: '2px dashed #666',
                      borderColor: dragActive ? '#ff0000' : '#666',
                      backgroundColor: dragActive ? 'rgba(255, 0, 0, 0.1)' : 'transparent'
                    }}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <UploadIcon size={48} className="has-text-grey mb-4" />
                    <h3 className="title is-5 has-text-white mb-2">
                      Drag and drop your video here
                    </h3>
                    <p className="has-text-grey-light mb-4">
                      or click to browse files
                    </p>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleFileInput}
                      className="is-hidden"
                      id="video-upload"
                    />
                    <label
                      htmlFor="video-upload"
                      className="button is-primary"
                    >
                      Choose File
                    </label>
                    <p className="is-size-7 has-text-grey mt-4">
                      Supports MP4, MOV, AVI, and other video formats
                    </p>
                  </div>
                ) : (
                  <div className="box">
                    <div className="media">
                      <div className="media-left">
                        <FileVideo size={32} className="has-text-danger" />
                      </div>
                      <div className="media-content">
                        <p className="title is-6 has-text-white">{uploadedFile.name}</p>
                        <p className="subtitle is-7 has-text-grey-light">
                          {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </p>
                      </div>
                      <div className="media-right">
                        <button
                          type="button"
                          onClick={removeFile}
                          className="delete"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Video Details */}
            <div className="card mb-6">
              <div className="card-content">
                <h2 className="title is-4 has-text-white mb-4">Video Details</h2>
                
                <div className="field">
                  <label htmlFor="title" className="label has-text-white">
                    Title *
                  </label>
                  <div className="control">
                    <input
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter video title"
                      className="input"
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="description" className="label has-text-white">
                    Description
                  </label>
                  <div className="control">
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell viewers about your video"
                      rows={4}
                      className="textarea"
                    />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="thumbnail" className="label has-text-white">
                    Thumbnail
                  </label>
                  <div className="field is-grouped">
                    <div className="control">
                      <input
                        type="file"
                        id="thumbnail"
                        accept="image/*"
                        onChange={handleThumbnailInput}
                        className="is-hidden"
                      />
                      <label
                        htmlFor="thumbnail"
                        className="button is-light"
                      >
                        <span className="icon">
                          <Image size={16} />
                        </span>
                        <span>Choose Thumbnail</span>
                      </label>
                    </div>
                    {thumbnail && (
                      <div className="control">
                        <span className="has-text-grey-light">
                          {thumbnail.name}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="help has-text-grey">
                    Upload a custom thumbnail or we'll generate one from your video
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="card mb-6">
              <div className="card-content">
                <h2 className="title is-4 has-text-white mb-4">Privacy Settings</h2>
                
                <div className="field">
                  <div className="control">
                    <label className="radio has-text-white">
                      <input
                        type="radio"
                        name="privacy"
                        value="public"
                        defaultChecked
                      />
                      Public - Anyone can view this video
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="radio has-text-white">
                      <input
                        type="radio"
                        name="privacy"
                        value="unlisted"
                      />
                      Unlisted - Only people with the link can view
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="radio has-text-white">
                      <input
                        type="radio"
                        name="privacy"
                        value="private"
                      />
                      Private - Only you can view this video
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <button
                  type="button"
                  className="button is-light"
                  disabled={uploading}
                >
                  Save as Draft
                </button>
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-primary"
                  disabled={!uploadedFile || !title.trim() || uploading}
                >
                  {uploading ? (
                    <>
                      <span className="icon">
                        <div className="fa fa-spinner fa-spin"></div>
                      </span>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    'Upload Video'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Upload

