export default function Dashboard() {
  return (
    <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-2">Total Projects</h2>
            <p className="text-5xl font-bold text-blue-800">12</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Completed Tasks</h2>
            <p className="text-5xl font-bold text-green-800">45</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-2">In Progress</h2>
            <p className="text-5xl font-bold text-purple-800">8</p>
          </div>
        </div>
      </div>
    </div>
  )
}
