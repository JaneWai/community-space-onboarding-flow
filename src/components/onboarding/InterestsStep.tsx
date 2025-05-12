import React from 'react'
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react'

interface InterestsStepProps {
  userData: {
    interests: string[]
  }
  updateUserData: (data: Partial<{ interests: string[] }>) => void
  onNext: () => void
  onBack: () => void
  onCancel: () => void
}

export const InterestsStep: React.FC<InterestsStepProps> = ({ 
  userData, 
  updateUserData, 
  onNext, 
  onBack,
  onCancel
}) => {
  const interestCategories = [
    {
      name: 'Development',
      options: ['Web Development', 'Mobile Apps', 'Game Development', 'AI & Machine Learning', 'Blockchain']
    },
    {
      name: 'Design',
      options: ['UI/UX Design', 'Graphic Design', '3D Modeling', 'Animation', 'Illustration']
    },
    {
      name: 'Business',
      options: ['Startups', 'Marketing', 'Product Management', 'Entrepreneurship', 'Freelancing']
    },
    {
      name: 'Content',
      options: ['Writing', 'Video Production', 'Podcasting', 'Social Media', 'Blogging']
    }
  ]

  const toggleInterest = (interest: string) => {
    const newInterests = userData.interests.includes(interest)
      ? userData.interests.filter(i => i !== interest)
      : [...userData.interests, interest]
    
    updateUserData({ interests: newInterests })
  }

  const handleContinue = () => {
    if (userData.interests.length > 0) {
      onNext()
    } else {
      alert('Please select at least one interest')
    }
  }

  return (
    <div>
      <div className="absolute top-4 right-4">
        <button 
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Cancel"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Select Your Interests</h2>
      <p className="text-gray-600 mb-6">
        Choose topics you're interested in to help us personalize your experience and recommend relevant spaces.
      </p>
      
      <div className="space-y-6 mb-8">
        {interestCategories.map((category) => (
          <div key={category.name}>
            <h3 className="font-medium text-gray-900 mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-3">
              {category.options.map((interest) => {
                const isSelected = userData.interests.includes(interest)
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full border ${
                      isSelected 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-700' 
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    } transition-colors flex items-center`}
                  >
                    {isSelected && <Check className="mr-1 h-4 w-4" />}
                    {interest}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-900 font-medium py-2 px-4"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </button>
          
          <button
            type="button"
            onClick={onCancel}
            className="text-gray-500 hover:text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
        
        <button
          type="button"
          onClick={handleContinue}
          className="flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
        >
          Continue
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
