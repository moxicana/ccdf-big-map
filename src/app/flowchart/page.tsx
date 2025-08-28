'use client'

import { useState } from 'react'
import { 
  CheckCircleIcon, 
  ClockIcon, 
  CalendarDaysIcon, 
  FlagIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function FlowchartPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const handleNext = () => {
    if (currentStep < 4) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep])
      }
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepNumber: number) => {
    setCurrentStep(stepNumber)
  }

  const steps = [
    {
      number: 1,
      title: "Tell Us About You",
      description: "Answer a few questions about your current job, education, and career goals",
      example: {
        title: "Example:",
        content: "I'm Sarah. I run a family child care program with a high school diploma. I want to grow professionally but don't know where to start."
      }
    },
    {
      number: 2,
      title: "Get Your Personal Roadmap",
      description: "See your step-by-step career path with timelines and requirements",
      roadmap: [
        { step: "Start Here", active: true },
        { step: "Get Training", active: false },
        { step: "Earn Credential", active: false },
        { step: "Advance Career", active: false }
      ]
    },
    {
      number: 3,
      title: "Connect to Resources",
      description: "Get direct contact info for coaches, training programs, and financial support in your area",
      resources: [
        "Contact info for your local CCR&R coach",
        "Links to apply for WAGE$ salary support",
        "Registration for TECTA orientation classes",
        "Direct phone numbers and email addresses"
      ]
    },
    {
      number: 4,
      title: "Track Your Progress",
      description: "Check off completed steps and get reminders for what's next",
      progress: [
        { task: "Completed TECTA Orientation", status: "completed" },
        { task: "Working on CDA Credential (halfway done)", status: "in-progress" },
        { task: "Next: Apply for WAGE$ support", status: "upcoming" },
        { task: "Goal: Finish CDA by December", status: "goal" }
      ]
    }
  ]

  const currentStepData = steps[currentStep - 1]

  return (
    <div className="bg-gradient-to-br from-slate-800 to-blue-600 min-h-screen p-5">
      <div className="max-w-4xl mx-auto bg-card rounded-2xl p-8 shadow-2xl border border-border">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-card-foreground mb-3 font-serif">
            ECE Career Navigator App
          </h1>
          <p className="text-xl text-muted-foreground">
            Simple 4-Step Process for Career Growth
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <button
                  onClick={() => handleStepClick(step.number)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    currentStep === step.number
                      ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                      : completedSteps.includes(step.number)
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                  }`}
                >
                  {completedSteps.includes(step.number) ? '✓' : step.number}
                </button>
                {index < steps.length - 1 && (
                  <div className={`w-12 h-1 mx-2 rounded ${
                    completedSteps.includes(step.number) ? 'bg-green-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Current Step Content */}
        <div className="min-h-[500px] flex flex-col justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl text-center mb-8 transform transition-all duration-500">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-6 text-blue-600">
              {currentStepData.number}
            </div>
            <h2 className="text-3xl font-bold mb-4 font-serif">{currentStepData.title}</h2>
            <p className="text-xl">{currentStepData.description}</p>
          </div>

          {/* Step-specific content */}
          <div className="bg-muted p-6 rounded-xl">
            {currentStep === 1 && currentStepData.example && (
              <div className="bg-card border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
                <div className="font-bold text-card-foreground mb-3 text-lg font-serif">{currentStepData.example.title}</div>
                <div className="text-muted-foreground text-lg leading-relaxed">
                  &ldquo;{currentStepData.example.content}&rdquo;
                </div>
              </div>
            )}

            {currentStep === 2 && currentStepData.roadmap && (
              <div className="flex justify-between items-center bg-teal-600 text-white p-6 rounded-xl flex-wrap gap-3">
                {currentStepData.roadmap.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-teal-800 px-6 py-3 rounded-full text-sm text-center min-w-fit font-medium">
                      {item.step}
                    </div>
                    {index < currentStepData.roadmap.length - 1 && (
                      <div className="text-2xl mx-3">→</div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && currentStepData.resources && (
              <div className="bg-card border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
                <div className="font-bold text-card-foreground mb-4 text-lg font-serif">What You Get:</div>
                <div className="text-muted-foreground space-y-3">
                  {currentStepData.resources.map((resource, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-blue-600 mr-3">•</span>
                      <span className="text-lg">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && currentStepData.progress && (
              <div className="bg-card border-l-4 border-blue-500 p-6 rounded-lg shadow-sm">
                <div className="font-bold text-card-foreground mb-4 text-lg font-serif">Sarah&apos;s Progress After 6 Months:</div>
                <div className="text-muted-foreground space-y-3">
                  {currentStepData.progress.map((item, index) => (
                    <div key={index} className="flex items-start text-lg gap-2">
                      <span className="mt-1">
                        {item.status === 'completed' && <CheckCircleIcon className="w-5 h-5 text-green-600" />}
                        {item.status === 'in-progress' && <ClockIcon className="w-5 h-5 text-blue-600" />}
                        {item.status === 'upcoming' && <CalendarDaysIcon className="w-5 h-5 text-orange-600" />}
                        {item.status === 'goal' && <FlagIcon className="w-5 h-5 text-purple-600" />}
                      </span>
                      <span>{item.task}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={handlePrevious}
            disabled={currentStep <= 1}
            className="px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-lg font-medium flex items-center gap-2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            Previous
          </button>
          
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Progress</div>
            <div className="w-64 bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              ></div>
            </div>
            <div className="text-sm text-gray-600 mt-2">Step {currentStep} of 4</div>
          </div>

          <button 
            onClick={handleNext}
            disabled={currentStep >= 4}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-lg font-medium flex items-center gap-2"
          >
            Next
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}