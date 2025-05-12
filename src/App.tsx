import React, { useState } from 'react'
import { OnboardingFlow } from './components/OnboardingFlow'
import { Header } from './components/Header'

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true)

  const handleOnboardingComplete = () => {
    setShowOnboarding(false)
    console.log('Onboarding completed!')
  }

  const handleOnboardingCancel = () => {
    setShowOnboarding(false)
    console.log('Onboarding cancelled!')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        {showOnboarding ? (
          <OnboardingFlow 
            onComplete={handleOnboardingComplete} 
            onCancel={handleOnboardingCancel} 
          />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Welcome to ChatAndBuild Community Spaces!</h2>
            <button
              onClick={() => setShowOnboarding(true)}
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Let's get started
            </button>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
