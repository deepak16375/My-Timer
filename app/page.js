'use client'
import React, { useState, useEffect } from 'react';
import TimerButton from '/components/TimerButton.jsx';
import TimerDisplay from '/components/TimerDisplay.jsx';
import TimerControls from '/components/TimerControls.jsx';
import TimerIcons from '/components/TimerIcons.jsx';
import SettingsModal from '/components/SettingsModals.jsx';
import StudyHistory from '/components/HistoryModal.jsx';

const PomodoroTimer = () => {
  const timerTypes = {
    work: { label: 'Work', duration: 25 },
    shortBreak: { label: 'Short Break', duration: 5 },
    longBreak: { label: 'Long Break', duration: 15 },
  };

  const [time, setTime] = useState(timerTypes.work.duration * 60);
  const [isActive, setIsActive] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [customTime, setCustomTime] = useState(String(timerTypes.work.duration));
  const [originalDuration, setOriginalDuration] = useState(timerTypes.work.duration);
  const [timerType, setTimerType] = useState('work');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      const endTime = new Date();
      const startTime = new Date(endTime - originalDuration * 60 * 1000);
      const duration = (endTime - startTime) / (60 * 1000);
      setHistory((prevHistory) => [...prevHistory, { type: timerType, duration, startTime }]);
      setIsActive(false);
      setTime(originalDuration * 60);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time, timerType, originalDuration]);

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}m ` : ''}${seconds}s`;
  };

  const handleStartPause = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(originalDuration * 60);
  };

  const handleOpenSettings = () => {
    setShowSettings(true);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  const handleOpenHistory = () => {
    setShowHistory(true);
  };

  const handleCloseHistory = () => {
    setShowHistory(false);
  };

  const handleSaveSettings = () => {
    const newTime = parseInt(customTime, 10) * 60;
    setTime(newTime);
    setOriginalDuration(parseInt(customTime, 10));
    handleCloseSettings();
  };

  const handleTimerType = (type) => {
    setIsActive(false);
    setTimerType(type);
    setCustomTime(String(timerTypes[type].duration));
    setTime(timerTypes[type].duration * 60);
    setOriginalDuration(timerTypes[type].duration);
    handleCloseSettings();
  };

  // Separate study and break entries
  const studyEntries = history.filter((entry) => entry.type === 'work');
  const breakEntries = history.filter((entry) => entry.type !== 'work');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Pomodoro Timer</h1>

      {/* Timer Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        {Object.keys(timerTypes).map((type) => (
          <TimerButton
            key={type}
            type={type}
            timerType={timerType}
            handleTimerType={handleTimerType}
          />
        ))}
      </div>

      {/* Timer Display */}
      <TimerDisplay time={time} formatTime={formatTime} />

      {/* Start/Pause and Reset Buttons */}
      <TimerControls isActive={isActive} handleStartPause={handleStartPause} handleReset={handleReset} />

      {/* Icons with hover text */}
      <TimerIcons handleOpenSettings={handleOpenSettings} handleOpenHistory={handleOpenHistory} />

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal
          customTime={customTime}
          setCustomTime={setCustomTime}
          handleSaveSettings={handleSaveSettings}
          handleCloseSettings={handleCloseSettings}
        />
      )}

      {/* History Modal */}
      {showHistory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg">
            <StudyHistory studyEntries={studyEntries} breakEntries={breakEntries} formatTime={formatTime} />
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
              onClick={handleCloseHistory}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PomodoroTimer;
