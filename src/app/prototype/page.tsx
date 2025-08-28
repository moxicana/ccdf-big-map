'use client'

import { useState } from 'react'

export default function InfantToddlerPrototype() {
  const [currentStep, setCurrentStep] = useState(1)
  const [userProfile, setUserProfile] = useState({
    education: '',
    experience: '',
    location: '',
    currentRole: '',
    goals: []
  })

  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const handleStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  const pathwaySteps = [
    {
      id: 'orientation',
      title: 'TECTA Infant/Toddler Orientation',
      description: 'Complete foundational training on infant/toddler development',
      timeframe: '2-4 weeks',
      status: completedSteps.includes('orientation') ? 'complete' : 'available'
    },
    {
      id: 'employment',
      title: 'Secure Employment',
      description: 'Work in a TN DHS licensed child care program',
      timeframe: 'Ongoing',
      status: completedSteps.includes('employment') ? 'complete' : 'available'
    },
    {
      id: 'cda',
      title: 'Infant/Toddler CDA Credential',
      description: 'Earn Child Development Associate credential',
      timeframe: '6-12 months',
      status: completedSteps.includes('cda') ? 'complete' : completedSteps.includes('orientation') ? 'available' : 'locked'
    },
    {
      id: 'certificate',
      title: 'Early Childhood Education Technical Certificate',
      description: 'Complete college-level coursework',
      timeframe: '12-18 months',
      status: completedSteps.includes('certificate') ? 'complete' : completedSteps.includes('cda') ? 'available' : 'locked'
    },
    {
      id: 'degree',
      title: 'Associate Degree in Early Childhood Development',
      description: 'Complete 2-year degree program',
      timeframe: '2-4 years',
      status: completedSteps.includes('degree') ? 'complete' : completedSteps.includes('certificate') ? 'available' : 'locked'
    },
    {
      id: 'endorsement',
      title: 'AIMHiTN Infant Mental Health Endorsement',
      description: 'Specialized credential in infant mental health',
      timeframe: '6-12 months',
      status: completedSteps.includes('endorsement') ? 'complete' : completedSteps.includes('degree') ? 'available' : 'locked'
    }
  ]

  const supportServices = {
    'CCR&R Coaching': {
      description: 'Personalized coaching throughout your journey',
      contact: 'Contact your local CCR&R: (865) 974-7053',
      available: true
    },
    'TECTA Support': {
      description: 'Training and technical assistance',
      contact: 'Visit tecta.utk.edu or call (865) 974-7053',
      available: true
    },
    'WAGE$ Support': {
      description: 'Salary supplements for qualified professionals',
      contact: 'Apply at childcaretn.gov/wage',
      available: completedSteps.length >= 1
    }
  }

  const renderStep1 = () => (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-8 rounded-2xl text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Infant/Toddler Career Pathway</h1>
        <p className="text-xl">Let's map your journey to becoming an infant/toddler specialist!</p>
      </div>

      <div className="bg-white rounded-xl p-6 border-2 border-teal-200 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tell us about yourself</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Education Level</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              value={userProfile.education}
              onChange={(e) => setUserProfile({...userProfile, education: e.target.value})}
            >
              <option value="">Select...</option>
              <option value="high-school">High School Diploma/GED</option>
              <option value="some-college">Some College</option>
              <option value="certificate">Certificate Program</option>
              <option value="associates">Associate Degree</option>
              <option value="bachelors">Bachelor's Degree</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Experience in Early Childhood</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              value={userProfile.experience}
              onChange={(e) => setUserProfile({...userProfile, experience: e.target.value})}
            >
              <option value="">Select...</option>
              <option value="none">New to the field</option>
              <option value="less-than-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-plus">5+ years</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Location (County)</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              placeholder="e.g., Knox County"
              value={userProfile.location}
              onChange={(e) => setUserProfile({...userProfile, location: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Role</label>
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
              value={userProfile.currentRole}
              onChange={(e) => setUserProfile({...userProfile, currentRole: e.target.value})}
            >
              <option value="">Select...</option>
              <option value="not-working">Not currently in ECE</option>
              <option value="assistant">Assistant Teacher</option>
              <option value="teacher">Lead Teacher</option>
              <option value="family-provider">Family Child Care Provider</option>
              <option value="substitute">Substitute/Temp Worker</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button 
            className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50"
            disabled={!userProfile.education || !userProfile.experience || !userProfile.location}
            onClick={() => setCurrentStep(2)}
          >
            Create My Pathway →
          </button>
        </div>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="max-w-6xl mx-auto p-8">
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 rounded-2xl text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Infant/Toddler Career Pathway</h1>
        <p className="text-lg">Based on your background: {userProfile.education.replace('-', ' ')} • {userProfile.experience.replace('-', ' ')} experience</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Pathway */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Learning Path</h2>
          <div className="space-y-4">
            {pathwaySteps.map((step, index) => (
              <div key={step.id} className={`p-6 rounded-xl border-2 transition-all ${
                step.status === 'complete' 
                  ? 'bg-green-50 border-green-200' 
                  : step.status === 'available' 
                    ? 'bg-white border-teal-200 hover:shadow-lg cursor-pointer' 
                    : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step.status === 'complete' 
                        ? 'bg-green-500 text-white' 
                        : step.status === 'available' 
                          ? 'bg-teal-500 text-white' 
                          : 'bg-gray-300 text-gray-600'
                    }`}>
                      {step.status === 'complete' ? '✓' : index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                      <span className="text-sm text-teal-600 font-medium">{step.timeframe}</span>
                    </div>
                  </div>
                  {step.status === 'available' && (
                    <button 
                      className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
                      onClick={() => handleStepComplete(step.id)}
                    >
                      Start
                    </button>
                  )}
                  {step.status === 'complete' && (
                    <span className="text-green-600 font-medium">Complete!</span>
                  )}
                  {step.status === 'locked' && (
                    <span className="text-gray-400 font-medium">Locked</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Services */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Support Services</h2>
          <div className="space-y-4">
            {Object.entries(supportServices).map(([service, details]) => (
              <div key={service} className={`p-4 rounded-xl border-2 ${
                details.available ? 'bg-white border-blue-200' : 'bg-gray-50 border-gray-200'
              }`}>
                <h3 className="font-semibold text-gray-800 mb-2">{service}</h3>
                <p className="text-sm text-gray-600 mb-3">{details.description}</p>
                {details.available ? (
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    {details.contact}
                  </a>
                ) : (
                  <span className="text-gray-400 text-sm">Available after completing first step</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-teal-50 p-4 rounded-xl">
            <h3 className="font-semibold text-teal-800 mb-2">Progress Summary</h3>
            <div className="text-sm text-teal-700">
              <p>Steps Completed: {completedSteps.length} of {pathwaySteps.length}</p>
              <div className="w-full bg-teal-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-teal-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(completedSteps.length / pathwaySteps.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors mr-4"
          onClick={() => setCurrentStep(1)}
        >
          ← Back to Profile
        </button>
        <button 
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setCurrentStep(3)}
        >
          View Resource Library →
        </button>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-2xl text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Infant/Toddler Resources</h1>
        <p className="text-lg">Everything you need to succeed in your pathway</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎓 Training Materials</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• TECTA Orientation Modules</li>
            <li>• CDA Portfolio Guidelines</li>
            <li>• Infant Development Resources</li>
            <li>• Safety Certification Materials</li>
          </ul>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Access Materials
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-green-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">💰 Financial Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• WAGE$ Salary Supplements</li>
            <li>• Tuition Assistance Programs</li>
            <li>• Professional Development Grants</li>
            <li>• Childcare Assistance</li>
          </ul>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
            Find Funding
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">👥 Community Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Local CCR&R Coaches</li>
            <li>• Infant/Toddler Specialists</li>
            <li>• Peer Learning Groups</li>
            <li>• Mentorship Programs</li>
          </ul>
          <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
            Connect Now
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl border-2 border-orange-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📋 Job Opportunities</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Infant/Toddler Teacher Positions</li>
            <li>• Early Interventionist Roles</li>
            <li>• Family Child Care Support</li>
            <li>• Professional Development Coordinator</li>
          </ul>
          <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            Browse Jobs
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button 
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => setCurrentStep(2)}
        >
          ← Back to Pathway
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-50">
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
    </div>
  )
}