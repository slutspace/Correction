import React, { useState, useEffect } from 'react'
import { 
  Server, 
  Wifi, 
  Database, 
  Globe, 
  Smartphone, 
  Monitor, 
  Laptop, 
  Tablet, 
  Headphones, 
  Speaker, 
  Signal, 
  Battery, 
  WifiOff, 
  SignalOff, 
  BatteryLow, 
  AlertTriangle, 
  CheckCircle, 
  X, 
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
  Eye, 
  Key, 
  Lock, 
  Shield
} from 'lucide-react'

const SystemStatus: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const systemComponents = [
    {
      name: 'Video Streaming',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '45ms',
      description: 'Core video streaming infrastructure'
    },
    {
      name: 'User Authentication',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '23ms',
      description: 'Login and user management systems'
    },
    {
      name: 'Content Upload',
      status: 'operational',
      uptime: '99.7%',
      responseTime: '120ms',
      description: 'Video upload and processing pipeline'
    },
    {
      name: 'Database',
      status: 'operational',
      uptime: '99.9%',
      responseTime: '12ms',
      description: 'Primary database systems'
    },
    {
      name: 'CDN',
      status: 'operational',
      uptime: '99.95%',
      responseTime: '8ms',
      description: 'Content delivery network'
    },
    {
      name: 'API Services',
      status: 'operational',
      uptime: '99.6%',
      responseTime: '67ms',
      description: 'REST API and GraphQL endpoints'
    },
    {
      name: 'Payment Processing',
      status: 'operational',
      uptime: '99.8%',
      responseTime: '89ms',
      description: 'Monetization and payment systems'
    },
    {
      name: 'Email Services',
      status: 'operational',
      uptime: '99.5%',
      responseTime: '156ms',
      description: 'Notification and communication systems'
    }
  ]

  const recentIncidents = [
    {
      id: 1,
      title: 'Scheduled Maintenance - Video Processing',
      status: 'resolved',
      date: '2024-01-10 02:00 UTC',
      duration: '2 hours',
      description: 'Planned maintenance window for video processing infrastructure upgrades.'
    },
    {
      id: 2,
      title: 'CDN Performance Optimization',
      status: 'resolved',
      date: '2024-01-08 14:30 UTC',
      duration: '45 minutes',
      description: 'Temporary performance issues with content delivery network.'
    },
    {
      id: 3,
      title: 'Database Connection Pool Optimization',
      status: 'resolved',
      date: '2024-01-05 09:15 UTC',
      duration: '30 minutes',
      description: 'Optimization of database connection pooling for improved performance.'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'has-text-success'
      case 'degraded': return 'has-text-warning'
      case 'outage': return 'has-text-danger'
      case 'maintenance': return 'has-text-info'
      default: return 'has-text-grey-light'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle size={16} />
      case 'degraded': return <AlertTriangle size={16} />
      case 'outage': return <X size={16} />
      case 'maintenance': return <Info size={16} />
      default: return <HelpCircle size={16} />
    }
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
                    <Server size={48} />
                  </span>
                  <div>
                    <h1 className="title is-2 has-text-white">System Status</h1>
                    <p className="subtitle is-5 has-text-grey-light">
                      Real-time monitoring of our platform infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Status */}
          <div className="card mb-5">
            <div className="card-content">
              <div className="columns is-vcentered">
                <div className="column is-8">
                  <h2 className="title is-4 has-text-white mb-2">All Systems Operational</h2>
                  <p className="has-text-grey-light">
                    All services are running normally. We're monitoring our systems 24/7 to ensure the best experience for our users.
                  </p>
                </div>
                <div className="column is-4 has-text-right">
                  <div className="is-flex is-justify-content-flex-end is-align-items-center">
                    <span className="icon has-text-success mr-2">
                      <CheckCircle size={24} />
                    </span>
                    <span className="title is-3 has-text-success">99.9%</span>
                  </div>
                  <p className="has-text-grey-light is-size-7">Overall Uptime</p>
                </div>
              </div>
            </div>
          </div>

          {/* System Components */}
          <div className="card mb-5">
            <div className="card-content">
              <h2 className="title is-4 has-text-white mb-4">System Components</h2>
              <div className="columns is-multiline">
                {systemComponents.map((component, index) => (
                  <div key={index} className="column is-6">
                    <div className="card has-background-grey-darker">
                      <div className="card-content">
                        <div className="is-flex is-justify-content-space-between is-align-items-center mb-3">
                          <h3 className="title is-6 has-text-white">{component.name}</h3>
                          <span className={`icon ${getStatusColor(component.status)}`}>
                            {getStatusIcon(component.status)}
                          </span>
                        </div>
                        <p className="has-text-grey-light mb-3">{component.description}</p>
                        <div className="columns">
                          <div className="column">
                            <p className="has-text-grey-light is-size-7">Uptime</p>
                            <p className="has-text-white has-text-weight-bold">{component.uptime}</p>
                          </div>
                          <div className="column">
                            <p className="has-text-grey-light is-size-7">Response Time</p>
                            <p className="has-text-white has-text-weight-bold">{component.responseTime}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Incidents */}
          <div className="card mb-5">
            <div className="card-content">
              <h2 className="title is-4 has-text-white mb-4">Recent Incidents</h2>
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="card has-background-grey-darker mb-3">
                  <div className="card-content">
                    <div className="is-flex is-justify-content-space-between is-align-items-center mb-2">
                      <h3 className="title is-6 has-text-white">{incident.title}</h3>
                      <span className={`tag ${incident.status === 'resolved' ? 'is-success' : 'is-warning'}`}>
                        {incident.status}
                      </span>
                    </div>
                    <p className="has-text-grey-light mb-2">{incident.description}</p>
                    <div className="is-flex is-justify-content-space-between">
                      <span className="has-text-grey-light is-size-7">
                        <strong>Date:</strong> {incident.date}
                      </span>
                      <span className="has-text-grey-light is-size-7">
                        <strong>Duration:</strong> {incident.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="card">
            <div className="card-content">
              <h2 className="title is-4 has-text-white mb-4">Performance Metrics</h2>
              <div className="columns">
                <div className="column is-3">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-success mb-2">
                        <Wifi size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white">Network</h3>
                      <p className="has-text-grey-light">Latency: 8ms</p>
                      <p className="has-text-grey-light">Bandwidth: 99.9%</p>
                    </div>
                  </div>
                </div>

                <div className="column is-3">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-info mb-2">
                        <Database size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white">Database</h3>
                      <p className="has-text-grey-light">Queries: 12ms</p>
                      <p className="has-text-grey-light">Connections: 99.8%</p>
                    </div>
                  </div>
                </div>

                <div className="column is-3">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-warning mb-2">
                        <Server size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white">Servers</h3>
                      <p className="has-text-grey-light">CPU: 45%</p>
                      <p className="has-text-grey-light">Memory: 67%</p>
                    </div>
                  </div>
                </div>

                <div className="column is-3">
                  <div className="card has-background-grey-darker">
                    <div className="card-content has-text-centered">
                      <span className="icon is-large has-text-primary mb-2">
                        <Globe size={32} />
                      </span>
                      <h3 className="title is-5 has-text-white">CDN</h3>
                      <p className="has-text-grey-light">Cache Hit: 94%</p>
                      <p className="has-text-grey-light">Global: 99.9%</p>
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
                <strong>Last Updated:</strong> {lastUpdated.toLocaleString()} | 
                <strong> Monitoring:</strong> 24/7 automated monitoring with alerts
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SystemStatus