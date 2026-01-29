export default function Projects() {
  return (
    <div className="flex-1 bg-gradient-to-br from-green-50 to-green-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 mb-6">Projects</h1>
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Website Redesign</h2>
            <p className="text-gray-600">Status: <span className="font-bold text-green-600">In Progress</span></p>
            <div className="mt-4 bg-green-200 rounded-full h-2 w-full">
              <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Mobile App</h2>
            <p className="text-gray-600">Status: <span className="font-bold text-yellow-600">Pending</span></p>
            <div className="mt-4 bg-green-200 rounded-full h-2 w-full">
              <div className="bg-green-600 h-2 rounded-full w-1/4"></div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">API Development</h2>
            <p className="text-gray-600">Status: <span className="font-bold text-green-600">Completed</span></p>
            <div className="mt-4 bg-green-200 rounded-full h-2 w-full">
              <div className="bg-green-600 h-2 rounded-full w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
