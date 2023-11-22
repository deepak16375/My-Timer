
const StudyHistory = ({ studyEntries, breakEntries, formatTime }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Study History</h2>
    <div>
      <h3 className="text-xl font-bold mb-2">Study Time</h3>
      <ul>
        {studyEntries.map((entry, index) => (
          <li key={index}>{`${entry.type} for ${formatTime(entry.duration * 60)}`}</li>
        ))}
      </ul>
    </div>
    <div className="mt-4">
      <h3 className="text-xl font-bold mb-2">Break Time</h3>
      <ul>
        {breakEntries.map((entry, index) => (
          <li key={index}>{`${entry.type} for ${formatTime(entry.duration * 60)}`}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default StudyHistory;
