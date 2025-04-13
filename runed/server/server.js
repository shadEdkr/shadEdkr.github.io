// backend/server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'public', 'uploads');
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Create unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, `route-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB file size limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'));
    }
  }
});

// In-memory data store (replace with a proper database in production)
let runs = [];

// API Routes
app.post('/api/runs', upload.single('routeImage'), (req, res) => {
  try {
    const runData = JSON.parse(req.body.runData);
    
    // Store the run data
    const newRun = {
      id: Date.now().toString(),
      createdAt: new Date(),
      ...runData,
      routeImage: req.file ? `/uploads/${req.file.filename}` : null
    };
    
    runs.push(newRun);
    
    // Return the saved run data
    res.status(201).json({
      success: true,
      data: newRun
    });
  } catch (error) {
    console.error('Error saving run:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to save run data'
    });
  }
});

// Get all runs
app.get('/api/runs', (req, res) => {
  res.json({
    success: true,
    data: runs
  });
});

// Get specific run by ID
app.get('/api/runs/:id', (req, res) => {
  const run = runs.find(run => run.id === req.params.id);
  
  if (!run) {
    return res.status(404).json({
      success: false,
      error: 'Run not found'
    });
  }
  
  res.json({
    success: true,
    data: run
  });
});

// Delete a run
app.delete('/api/runs/:id', (req, res) => {
  const runIndex = runs.findIndex(run => run.id === req.params.id);
  
  if (runIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Run not found'
    });
  }
  
  // If there's an image, delete it
  const run = runs[runIndex];
  if (run.routeImage) {
    const imagePath = path.join(__dirname, 'public', run.routeImage);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
  }
  
  // Remove the run from the array
  runs.splice(runIndex, 1);
  
  res.json({
    success: true,
    message: 'Run deleted successfully'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: err.message || 'Something went wrong!'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
