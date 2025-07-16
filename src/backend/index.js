import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();

const geminiKey = process.env.GEMINI_API_KEY;
const youtubeKey = process.env.YOUTUBE_API_KEY;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// ✅ Test Route
app.get('/api/test', (req, res) => {
  res.json({
    message: 'API working!',
    geminiKeyExists: !!geminiKey,
    youtubeKeyExists: !!youtubeKey,
  });
});

// ✅ /api/refine: Get subtopics + best YouTube video per subtopic
app.get('/api/refine', async (req, res) => {
  const query = req.query.q || 'web development';

  try {
    // Step 1: Get subtopics + corrected topic from Gemini
    const geminiRes = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-goog-api-key': geminiKey,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `The user wants to study: "${query}". 
1. Give me exactly 5 subtopics that are essential to understand this topic. 
2. In the last line, return only the correct and complete name of the topic the user meant — in simple, unambiguous form (e.g., "C++", "Web Development", "Machine Learning", etc). 
Don't explain anything, just give the list.
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const geminiData = await geminiRes.json();
    const rawText = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return res.status(500).json({ error: 'Gemini returned no content' });
    }

    // Split into lines
    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
    const subtopics = lines.slice(0, 5);
    const actualTopic = lines[5];

const videoResults = [];

for (const topic of subtopics) {
  const searchQuery = `"${topic} in ${actualTopic}" tutorial`;

  const youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&order=viewCount&q=${encodeURIComponent(searchQuery)}&key=${youtubeKey}`;

  const youtubeRes = await fetch(youtubeURL);
  const youtubeData = await youtubeRes.json();
  const items = youtubeData.items || [];

  // Match title/desc with actual topic
  let match = items.find(video => {
    const title = video.snippet.title.toLowerCase();
    const desc = video.snippet.description.toLowerCase();
    return (
      title.includes(actualTopic.toLowerCase()) ||
      desc.includes(actualTopic.toLowerCase())
    );
  });

  // If no match, fallback to first video
  if (!match && items.length > 0) {
    match = items[0];
  }

  if (match) {
    videoResults.push({
      subtopic: topic,
      title: match.snippet.title,
      videoId: match.id.videoId || match.id, // support both formats
      thumbnail: match.snippet.thumbnails.medium.url,
      description: match.snippet.description,
    });
  }
}


    // Send response
    res.json({
      topic: actualTopic,
      subtopics,
      videos: videoResults,
    });

  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: 'Failed to refine or fetch videos' });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
