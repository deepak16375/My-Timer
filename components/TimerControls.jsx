
const TimerControls = ({ isActive, handleStartPause, handleReset }) => (
  <div className="flex space-x-4">
    <button
      className={`px-4 py-2 ${
        isActive
          ? 'bg-yellow-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600'
          : 'bg-green-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-600'
      }`}
      onClick={handleStartPause}
    >
      {isActive ? 'Pause' : 'Start'}
    </button>
    <button
      className="px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
      onClick={handleReset}
    >
      Reset
    </button>
  </div>
);

export default TimerControls;
