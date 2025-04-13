import { useState, useEffect } from 'react';
import { MapPin, Clock, Award, Smile } from 'lucide-react';

const RunClassifier = () => {
  const [routeImage, setRouteImage] = useState(null);
  const [routePreview, setRoutePreview] = useState(null);
  const [runForm, setRunForm] = useState({
    distance: '',
    hours: '',
    minutes: '',
    seconds: '',
    emoji: '🏃'
  });
  const [runStats, setRunStats] = useState(null);
  const [classificationResult, setClassificationResult] = useState(null);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [savedRuns, setSavedRuns] = useState([]);
  
  // Load saved runs from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem('runs');
    if (saved) {
      setSavedRuns(JSON.parse(saved));
    }
  }, []);
  
  const emojiOptions = [
    { emoji: '🏃', description: 'Running' },
    { emoji: '🏆', description: 'Achievement' },
    { emoji: '💪', description: 'Strength' },
    { emoji: '🥇', description: 'First Place' },
    { emoji: '🔥', description: 'Fire Run' },
    { emoji: '😅', description: 'Hard Run' },
    { emoji: '🚀', description: 'Fast Run' },
    { emoji: '🌄', description: 'Scenic Run' },
    { emoji: '☔', description: 'Rainy Run' },
    { emoji: '❄️', description: 'Cold Run' },
    { emoji: '🌞', description: 'Sunny Run' }
  ];
  
  const handleRouteUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setRouteImage(file);
    
    // Create a preview of the route image
    const reader = new FileReader();
    reader.onload = () => {
      setRoutePreview(reader.result);
    };
    reader.readAsDataURL(file);
    
    // Reset results when a new route is uploaded
    setRunStats(null);
    setClassificationResult(null);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRunForm({
      ...runForm,
      [name]: value
    });
  };
  
  const handleEmojiSelect = (emoji) => {
    setRunForm({
      ...runForm,
      emoji: emoji
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    // Calculate total time in minutes
    const totalMinutes = 
      (parseInt(runForm.hours || 0) * 60) + 
      parseInt(runForm.minutes || 0) + 
      (parseInt(runForm.seconds || 0) / 60);
    
    // Calculate pace (min/km)
    const distance = parseFloat(runForm.distance);
    const pace = totalMinutes / distance;
    
    const stats = {
      id: Date.now().toString(),
      distance: distance,
      time: totalMinutes,
      pace: pace.toFixed(2),
      emoji: runForm.emoji,
      date: new Date().toISOString(),
      routeImage: routePreview
    };
    
    setRunStats(stats);
    classifyRun(stats);
    
    try {
      // Save to localStorage
      const newRuns = [...savedRuns, stats];
      localStorage.setItem('runs', JSON.stringify(newRuns));
      setSavedRuns(newRuns);
      
      // Show results
      setResultsVisible(true);
    } catch (error) {
      console.error('Error saving run:', error);
      setSubmitError('Failed to save your run. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const classifyRun = (stats) => {
    // Simple classification logic
    const { distance } = stats;
    
    if (distance < 5) {
      setClassificationResult({
        type: "Short Run",
        description: "A quick run to stay active and build consistency.",
        color: "bg-blue-500"
      });
    } else if (distance < 10) {
      setClassificationResult({
        type: "Regular Run",
        description: "A solid training run for maintaining fitness.",
        color: "bg-blue-500"
      });
    } else if (distance < 15) {
      setClassificationResult({
        type: "Long Run",
        description: "Building endurance for half marathon training.",
        color: "bg-purple-500"
      });
    } else if (distance < 21.1) {
      setClassificationResult({
        type: "Half Marathon Training",
        description: "Excellent distance for half marathon preparation.",
        color: "bg-yellow-500"
      });
    } else {
      setClassificationResult({
        type: "Marathon Training",
        description: "Serious distance for full marathon preparation.",
        color: "bg-red-500"
      });
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-3xl bg-white p-6 rounded-lg shadow-md my-8">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-2">RunEd</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Track and upload your runs</p>
        
        <div className="info-box bg-gray-100 p-4 rounded-lg mb-4">
          <h3 className="font-bold text-lg mb-3">Input Values</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-3">
              <div>
                <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
                  Distance (kilometers)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="distance"
                    name="distance"
                    step="0.01"
                    min="0"
                    value={runForm.distance}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter distance"
                  />
                  <span className="absolute right-3 top-2 text-gray-500">km</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div className="relative">
                    <input
                      type="number"
                      name="hours"
                      min="0"
                      value={runForm.hours}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="HH"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">h</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      name="minutes"
                      min="0"
                      max="59"
                      value={runForm.minutes}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="MM"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">m</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      name="seconds"
                      min="0"
                      max="59"
                      value={runForm.seconds}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      placeholder="SS"
                    />
                    <span className="absolute right-3 top-2 text-gray-500">s</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Route Image
                </label>
                <label 
                  htmlFor="route-upload" 
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  {!routePreview ? (
                    <div className="flex flex-col items-center justify-center">
                      <MapPin className="w-8 h-8 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-500">Upload your Nike route map</p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG or JPEG</p>
                    </div>
                  ) : (
                    <img 
                      src={routePreview} 
                      alt="Route preview" 
                      className="h-full object-contain"
                    />
                  )}
                  <input 
                    id="route-upload" 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleRouteUpload}
                  />
                </label>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Choose an Emoji for Your Run
                </label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2 mt-2">
                  {emojiOptions.map((option) => (
                    <button
                      type="button"
                      key={option.emoji}
                      onClick={() => handleEmojiSelect(option.emoji)}
                      className={`flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 ${
                        runForm.emoji === option.emoji ? 'bg-blue-100 border-2 border-blue-500' : 'border border-gray-200'
                      }`}
                    >
                      <span className="text-2xl mb-1">{option.emoji}</span>
                      <span className="text-xs text-gray-600">{option.description}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-2 rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} text-white flex items-center`}
              >
                {isSubmitting ? 'Uploading...' : 'Upload My Run'}
              </button>
            </div>
            
            {submitError && (
              <p className="text-red-500 text-center mt-4">{submitError}</p>
            )}
          </form>
        </div>
        
        {resultsVisible && (
          <div id="results" className="mt-6">
            <div className="info-box bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="font-bold text-lg mb-3">Run Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-gray-500 text-sm">Distance</p>
                  <p className="text-2xl font-bold">{runStats.distance.toFixed(2)} km</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="text-2xl font-bold">
                    {Math.floor(runStats.time / 60) > 0 ? `${Math.floor(runStats.time / 60)}h ` : ''}
                    {Math.floor(runStats.time % 60)}m
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-gray-500 text-sm">Pace</p>
                  <p className="text-2xl font-bold">{runStats.pace} min/km</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <p className="text-gray-500 text-sm">Your Mood</p>
                  <p className="text-4xl">{runStats.emoji}</p>
                </div>
              </div>
            </div>
            
            {classificationResult && (
              <div className="info-box bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-3">Run Classification</h3>
                <div className={`${classificationResult.color} text-white p-4 rounded-lg`}>
                  <p className="text-xl font-bold mb-1">{classificationResult.type}</p>
                  <p>{classificationResult.description}</p>
                </div>
              </div>
            )}
          </div>
        )}
        
        <div className="social-links mt-8 pt-4 border-t border-gray-200 text-center">
          <div className="flex justify-center space-x-6 my-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              GitHub
            </a>
            <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <path d="M21 15l-5-5L5 21"></path>
              </svg>
              Medium
            </a>
            <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
          </div>
          <p className="text-gray-600 text-sm">RunEd © {new Date().getFullYear()}</p>
          <p className="mb-2 text-xs text-gray-500">Your personal running tracker</p>
        </div>
      </div>
    </div>
  );
};

export default RunClassifier;