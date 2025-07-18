<template>
  <Header/>
  <div class="con1">
    <h2 class="heading">Please type what you want to study today</h2>

    <input
      type="text"
      v-model="query"
      placeholder="Enter a course topic or any topic"
      class="search-input"
    />

    <button class="searchBtn" @click="searchCourses">🔍</button>

    <div v-if="loading">Loading....</div>

    <div v-else-if="Object.keys(videosBySubtopic).length" class="results">
      <div
        class="topic-block"
        v-for="(video, topic) in videosBySubtopic"
        :key="topic"
      >
        <h3 style="color: white; margin-top: 40px">{{ topic }}</h3>
        <div class="videos">
          <div class="video-card">
            <!-- ✅ Embedded YouTube video -->
            <iframe
              :src="`https://www.youtube.com/embed/${video.videoId}`"
              frameborder="0"
              allowfullscreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              class="youtube-frame"
            ></iframe>
            <p>{{ video.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import Header from './components/header.vue'

const query = ref('')
const loading = ref(false)
const videosBySubtopic = ref({})

const searchCourses = async () => {
  if (!query.value.trim()) return

  try {
    loading.value = true
    const response = await fetch(`http://localhost:3000/api/refine?q=${encodeURIComponent(query.value)}`)
    const data = await response.json()

    const result = {}
    data.videos.forEach(video => {
      result[video.subtopic] = {
        title: video.title,
        videoId: video.videoId,
        thumbnail: video.thumbnail
      }
    })

    videosBySubtopic.value = result
  } catch (err) {
    console.error('Search failed:', err)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.con1 {
  position: relative;
  width: 100vw;
  background-color: #221358;
  margin-top: 100px; 
  height: 100%;
  min-height: 800px;
  text-align: center;
}


.heading {
  margin-top: 50px;
  color: #ddd620;
  text-decoration: underline;
}

.search-input {
  background-color: white;
  width: 40%;
  height: 40px;
  border-radius: 9px;
  color: black;
  padding: 10px;
  font-size: 16px;
}

.searchBtn {
  margin-left: 10px;
  background-color: #ddd620;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.videos {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.video-card {
  width: 300px;
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  text-align: center;
}

.video-card img {
  width: 100%;
  border-radius: 8px;
}

.video-card p {
  margin-top: 10px;
  font-weight: bold;
  color: black;
}
.youtube-frame {
  width: 100%;
  height: 200px;
  border-radius: 12px;
}

</style>
