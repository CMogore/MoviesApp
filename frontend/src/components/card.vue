<template>
    <div class="movie-slider">
      <div class="flex items-center space-x-4 overflow-x-auto scrollbar-hide ml-4 pb-4">
        <div
          v-for="(movie, index) in movies"
          :key="index"
          class="movie-card"
          @click="showModal(movie)"
        >
          <img
            :src="require(`../assets/${movie.poster}`)"
            alt="Movie Poster"
            class="w-full h-auto rounded-lg cursor-pointer"
          />
          <!-- <div class="mt-2 px-2">
            <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
            <p class="text-sm text-gray-500">{{ movie.year }}</p>
          </div> -->

          
        </div>
      </div>
  
      <!-- Modal -->
      <div v-if="selectedMovie" class="fixed top-0 left-0 w-full h-full  flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="modal-content bg-white px-8 py-2 rounded-lg max-w-lg ">
          <div class="flex justify-between items-center mb-4">
            <!-- Close button on top right -->
            <button @click="closeModal" class="text-gray-500 hover:text-gray-800 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
  
          <!-- Movie poster and title -->
          <div class=" mb-4">
            <img
              :src="require(`../assets/${selectedMovie.poster}`)"
              alt="Movie Poster"
              class="w-96 h-48 rounded-lg mr-4"
            />
            <h2 class="text-xl md:-ml-72 mt-2 font-semibold">{{ selectedMovie.title }}</h2>
            <p class="text-sm text-gray-600 md:-ml-72 mt-2 mb-2">Rating: {{ selectedMovie.year }} / 5</p>
            <!-- Action buttons section -->
      <div class="flex justify-between items-center">
        <!-- Like button -->
        <button @click="likeMovie(selectedMovie)" class="text-gray-500 hover:text-gray-800 focus:outline-none">
          <p> LIKE <i class="fas fa-heart"></i></p>
        </button>

        <!-- Add to Watchlist button -->
        <button @click="addToWatchlist(selectedMovie)" class="text-gray-500 hover:text-gray-800 focus:outline-none">
          <p> WATCHLIST <i class="fas fa-plus"></i></p>
        </button>

        <!-- Mark as Watched button -->
        <button @click="markAsWatched(selectedMovie)" class="text-gray-500 hover:text-gray-800 focus:outline-none">
          <p>WATCHED <i class="fas fa-check"></i></p>
        </button>
      </div>

          </div>
  
          <!-- Section toggle buttons -->
          <div class="mb-4">
            <button
              :class="{ 'text-blue-600': activeSection === 'details' }"
              @click="setActiveSection('details')"
              class="mr-4 focus:outline-none"
            >
              Details
            </button>
            <button
              :class="{ 'text-blue-600': activeSection === 'rating' }"
              @click="setActiveSection('rating')"
              class="focus:outline-none"
            >
              Rating & Comment
            </button>
          </div>
  
          <!-- Dynamic content based on activeSection -->
          <div v-if="activeSection === 'details'">
            <div class="mb-4">
              <div class="text-left">
                <h4 class="text-lg font-semibold" >About</h4>
                <p class="text-sm text-gray-600 mb-2"> movie is yeahjkifdcvbn</p>
                <p class="text-sm text-gray-600 mb-2">Year: {{ selectedMovie.year }} | Genre: {{ selectedMovie.year }}</p>
                <p class="text-sm text-gray-600 mb-2">Director: {{ selectedMovie.director }} | Cast: {{ selectedMovie.director }}</p>
                <div class="mt-4">
                  <h4 class="text-lg font-semibold">Trailer</h4>
                  <iframe
                    width="50%"
                    height="20%"
                    :src="`https://www.youtube.com/embed/6YnryDjEGr8?si=tpgSi1kip4iMZcgs`"
                    frameborder="1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="rounded"
                ></iframe>
                </div>
              </div>
            </div>
          </div>
  
          <div v-if="activeSection === 'rating'">
            <div>
              <h3 class="text-lg font-semibold mb-2">Rate & Comment</h3>
              <div class=" items-center">
                <label for="rating" class="text-sm mr-2">Your Rating:</label>
                <input type="number" id="rating" v-model="userRating" min="1" max="5" class="border rounded-md px-2 py-1 w-40 text-center">
              </div>
              <textarea v-model="userComment" rows="4" class="mt-4 w-full border rounded-md p-2" placeholder="Add your comment..."></textarea>
              <button @click="submitRating" class="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>

              <!-- Display all comments -->
          <div>
            <h3 class="text-lg font-semibold mb-2">Comments</h3>
            <ul>
              <li v-for="(comment, index) in selectedMovie.comments" :key="index" class="mb-2">
                <span class="font-semibold">{{ comment.username }}:</span> {{ comment.text }}
              </li>
            </ul>
          </div>

            </div>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieSlider',
    props: {
      movies: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        selectedMovie: null,
        userRating: null,
        userComment: '',
        activeSection: 'details' // Default active section
      };
    },
    methods: {
        likeMovie(movie) {
      // Perform like action (e.g., update movie data)
        console.log(`Liked: ${movie.title}`);
        },
        addToWatchlist(movie) {
        // Perform add to watchlist action (e.g., update user's watchlist)
        console.log(`Added to watchlist: ${movie.title}`);
        },
        markAsWatched(movie) {
        // Perform mark as watched action (e.g., update movie's watched status)
        console.log(`Marked as watched: ${movie.title}`);
        },
      showModal(movie) {
        this.selectedMovie = {...movie,
        comments: [] };
        document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
      },
      closeModal() {
        this.selectedMovie = null;
        this.userRating = null;
        this.userComment = '';
        this.activeSection = 'details'; // Reset active section when modal is closed
        document.body.style.overflow = 'auto'; // Re-enable scrolling when modal is closed
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      submitRating() {
        if (!this.userRating) {
          alert('Please provide a rating.');
          return;
        }
        
        const newComment = {
        username: 'User', // Example: You can replace this with actual user's name
        text: this.userComment
      };
      // Add new comment to the selected movie
      this.selectedMovie.comments.push(newComment);
      
      // Optionally, you can save the comment to a backend/database here

      console.log('User Rating:', this.userRating);
      console.log('User Comment:', this.userComment);
      this.userRating = null;
      this.userComment = '';
    },
    }
  };
  </script>
  
  <style scoped>
  .movie-slider {
    padding: 20px 0;
  }
  
  .movie-card {
    flex-shrink: 0;
    width: 300px; /* Set the width of each movie card */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .movie-card:hover {
    transform: translateY(-5px);
  }
  
  /* Style the modal */
  .modal-content {
    max-width: 90%;
  }
  
  /* Style the input and button within the modal */
  input[type="number"],
  button {
    border: 1px solid #ddd;
    padding: 8px;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.3s;
  }
  
  input[type="number"]:focus,
  textarea:focus {
    border-color: #3182ce;
  }
  
  /* Style section toggle buttons */
  button {
    cursor: pointer;
    color: #555;
  }
  
  button:hover,
  button:focus {
    color: #3182ce;
  }
  </style>
  