
import { FaCog, FaHistory } from 'react-icons/fa';

const TimerIcons = ({ handleOpenSettings, handleOpenHistory }) => (
  <div className="flex space-x-4 mt-4">
    <FaCog
      className="text-gray-600 hover:text-gray-800 cursor-pointer"
      size={24}
      onClick={handleOpenSettings}
      title="Set Custom Time"
    />
    <FaHistory
      className="text-gray-600 hover:text-gray-800 cursor-pointer"
      size={24}
      onClick={handleOpenHistory}
      title="See History"
    />
  </div>
);

export default TimerIcons;
