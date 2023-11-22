
const TimerDisplay = ({ time, formatTime }) => (
  <div className="text-6xl font-bold mb-4 p-4 border rounded-lg shadow-lg flex items-center">
    {formatTime(time)}
  </div>
);

export default TimerDisplay;
