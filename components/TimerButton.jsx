
const TimerButton = ({ type, timerType, handleTimerType }) => (
  <button
    className={`px-4 py-2 ${
      timerType === type ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-700'
    } rounded-md focus:outline-none focus:ring-2`}
    onClick={() => handleTimerType(type)}
  >
    {type === 'work' ? 'Work' : type === 'shortBreak' ? 'Short Break' : 'Long Break'}
  </button>
);

export default TimerButton;
