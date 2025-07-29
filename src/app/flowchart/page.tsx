'use client'

export default function FlowchartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-blue-600 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            ECE Career Navigator App
          </h1>
          <p className="text-xl text-slate-600">
            Simple 4-Step Process for Career Growth
          </p>
        </div>
        
        {/* Step 1 */} 
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 my-5 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 text-blue-600">
            1
          </div>
          <div className="text-2xl font-bold mb-3">Tell Us About You</div>
          <div className="text-lg">
            Answer a few questions about your current job, education, and career goals
          </div>
        </div>
        
        <div className="bg-slate-100 border-l-4 border-red-500 p-5 my-5 rounded-lg">
          <div className="font-bold text-slate-800 mb-2">Example:</div>
          <div className="text-slate-700">
              "I&apos;m Sarah. I run a family child care program with a high school diploma. I want to grow professionally but don&apos;t know where to start."
          </div>
        </div>
        
        <div className="text-center text-4xl text-blue-500 my-5 animate-bounce">
          ↓
        </div>
        
        {/* Step 2 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 my-5 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 text-blue-600">
            2
          </div>
          <div className="text-2xl font-bold mb-3">Get Your Personal Roadmap</div>
          <div className="text-lg">
            See your step-by-step career path with timelines and requirements
          </div>
        </div>
        
        <div className="flex justify-between items-center bg-teal-600 text-white p-5 rounded-xl my-4 flex-wrap gap-3">
          <div className="bg-teal-800 px-4 py-2 rounded-full text-sm text-center min-w-fit">
            Start Here
          </div>
          <div className="text-xl">→</div>
          <div className="bg-teal-800 px-4 py-2 rounded-full text-sm text-center min-w-fit">
            Get Training
          </div>
          <div className="text-xl">→</div>
          <div className="bg-teal-800 px-4 py-2 rounded-full text-sm text-center min-w-fit">
            Earn Credential
          </div>
          <div className="text-xl">→</div>
          <div className="bg-teal-800 px-4 py-2 rounded-full text-sm text-center min-w-fit">
            Advance Career
          </div>
        </div>
        
        <div className="text-center text-4xl text-blue-500 my-5 animate-bounce">
          ↓
        </div>
        
        {/* Step 3 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 my-5 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 text-blue-600">
            3
          </div>
          <div className="text-2xl font-bold mb-3">Connect to Resources</div>
          <div className="text-lg">
            Get direct contact info for coaches, training programs, and financial support in your area
          </div>
        </div>
        
        <div className="bg-slate-100 border-l-4 border-red-500 p-5 my-5 rounded-lg">
          <div className="font-bold text-slate-800 mb-2">What You Get:</div>
          <div className="text-slate-700 space-y-1">
            <div>• Contact info for your local CCR&R coach</div>
            <div>• Links to apply for WAGE$ salary support</div>
            <div>• Registration for TECTA orientation classes</div>
            <div>• Direct phone numbers and email addresses</div>
          </div>
        </div>
        
        <div className="text-center text-4xl text-blue-500 my-5 animate-bounce">
          ↓
        </div>
        
        {/* Step 4 */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 my-5 rounded-2xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 text-blue-600">
            4
          </div>
          <div className="text-2xl font-bold mb-3">Track Your Progress</div>
          <div className="text-lg">
            Check off completed steps and get reminders for what's next
          </div>
        </div>
        
        <div className="bg-slate-100 border-l-4 border-red-500 p-5 my-5 rounded-lg">
          <div className="font-bold text-slate-800 mb-2">Sarah's Progress After 6 Months:</div>
          <div className="text-slate-700 space-y-1">
            <div>✅ Completed TECTA Orientation</div>
            <div>🔄 Working on CDA Credential (halfway done)</div>
            <div>📅 Next: Apply for WAGE$ support</div>
            <div>🎯 Goal: Finish CDA by December</div>
          </div>
        </div>
        
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800 text-white p-5 rounded-xl text-center">
            <div className="text-3xl mb-3">🎯</div>
            <div className="font-bold">Clear Next Steps</div>
          </div>
          <div className="bg-slate-800 text-white p-5 rounded-xl text-center">
            <div className="text-3xl mb-3">📞</div>
            <div className="font-bold">Direct Contact Info</div>
          </div>
          <div className="bg-slate-800 text-white p-5 rounded-xl text-center">
            <div className="text-3xl mb-3">💰</div>
            <div className="font-bold">Find Financial Support</div>
          </div>
          <div className="bg-slate-800 text-white p-5 rounded-xl text-center">
            <div className="text-3xl mb-3">📈</div>
            <div className="font-bold">Track Your Growth</div>
          </div>
        </div>
      </div>
    </div>
  )
}