import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import VideoPlayer from './pages/VideoPlayer'
import Upload from './pages/Upload'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreatorStudio from './pages/CreatorStudio'
import Community from './pages/Community'
import Newsletter from './pages/Newsletter'
import Donate from './pages/Donate'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DMCA from './pages/DMCA'
import CommunityGuidelines from './pages/CommunityGuidelines'
import Monetization from './pages/Monetization'
import HelpCenter from './pages/HelpCenter'
import ContactUs from './pages/ContactUs'
import SystemStatus from './pages/SystemStatus'

function AppContent() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen has-background-dark">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/video/:id" element={<PageTransition><VideoPlayer /></PageTransition>} />
            <Route path="/upload" element={<PageTransition><Upload /></PageTransition>} />
            <Route path="/profile/:username" element={<PageTransition><Profile /></PageTransition>} />
            <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
            <Route path="/search" element={<PageTransition><Search /></PageTransition>} />
            <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
            <Route path="/dashboard" element={<PageTransition><Dashboard /></PageTransition>} />
            <Route path="/creator" element={<PageTransition><CreatorStudio /></PageTransition>} />
            <Route path="/community" element={<PageTransition><Community /></PageTransition>} />
            <Route path="/newsletter" element={<PageTransition><Newsletter /></PageTransition>} />
            <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
            <Route path="/terms" element={<PageTransition><TermsOfService /></PageTransition>} />
            <Route path="/privacy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
            <Route path="/dmca" element={<PageTransition><DMCA /></PageTransition>} />
            <Route path="/guidelines" element={<PageTransition><CommunityGuidelines /></PageTransition>} />
            <Route path="/monetization" element={<PageTransition><Monetization /></PageTransition>} />
            <Route path="/help" element={<PageTransition><HelpCenter /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactUs /></PageTransition>} />
            <Route path="/status" element={<PageTransition><SystemStatus /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

