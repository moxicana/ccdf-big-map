export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          ECE Career Navigator
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Helping Early Childhood Education professionals map their career growth journey
        </p>
        <div className="space-y-4">
          <a 
            href="/flowchart/" 
            className="block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            View Career Flow Chart
          </a>
          <p className="text-sm text-gray-500">
            Interactive prototype coming soon...
          </p>
        </div>
      </div>
    </main>
  )
}