
const SettingsModal = ({ customTime, setCustomTime, handleSaveSettings, handleCloseSettings }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Custom Timer (minutes)</label>
        <input
          type="number"
          min="1"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mr-2"
        onClick={handleSaveSettings}
      >
        Save
      </button>
      <button
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        onClick={handleCloseSettings}
      >
        Cancel
      </button>
    </div>
  </div>
);

export default SettingsModal;
