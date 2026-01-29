export default function Tasks() {
  return (
    <div className="flex-1 bg-gradient-to-br from-purple-50 to-purple-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-900 mb-6">Tasks</h1>
        <div className="space-y-3">
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-4" />
            <span className="text-lg text-gray-700">Design homepage mockups</span>
            <span className="ml-auto bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-bold">Urgent</span>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-4" />
            <span className="text-lg text-gray-700">Setup database schema</span>
            <span className="ml-auto bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold">High</span>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-4" checked />
            <span className="text-lg text-gray-400 line-through">Write API documentation</span>
            <span className="ml-auto bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Complete</span>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 flex items-center">
            <input type="checkbox" className="w-5 h-5 mr-4" />
            <span className="text-lg text-gray-700">Test user authentication</span>
            <span className="ml-auto bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Medium</span>
          </div>
        </div>
      </div>
    </div>
  )
}
