<template>
    <transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="modal-content bg-white px-8 py-2 rounded-lg max-w-lg ">
          <!-- Close button on top right -->
          <button @click="closeModal" class="text-gray-500 hover:text-gray-800 focus:outline-none border p-2 rounded flex justify-between items-center mb-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          
  
          <!-- Movie poster and title -->
          <div class="  mb-4">
            <img :src="require(`../assets/${movie.poster}.png`)" alt="Movie Poster" class="w-96 h-48 rounded-lg mr-4">
            <div>
              <h2 class="text-xl md:-ml-72 mt-2 font-semibold">{{ movie.title }}</h2>
              <p class="text-sm text-gray-600 md:-ml-72 mt-2 mb-2">Rating: {{ movie.year }} / 5</p>
            </div>
          </div>
  
          <!-- Action buttons section -->
          <div class="flex justify-between items-center mb-2 ">
            <button @click="likeMovie(movie)" class="text-gray-500 hover:text-gray-800 focus:outline-none border p-2 rounded">
              <p>LIKE <i class="fas fa-heart"></i></p>
            </button>
            <button @click="addToWatchlist(movie)" class="text-gray-500 hover:text-gray-800 focus:outline-none border p-2 rounded">
              <span>WATCHLIST <i class="fas fa-plus"></i></span>
            </button>
            <button @click="markAsWatched(movie)" class="text-gray-500 hover:text-gray-800 focus:outline-none border p-2 rounded">
              <span>WATCHED <i class="fas fa-check"></i></span>
            </button>
          </div>
  
          <!-- Section toggle buttons -->
          <div class="mb-4">
            <button
              :class="{ 'text-blue-600': activeSection === 'details' }"
              @click="setActiveSection('details')"
              class="mr-4 focus:outline-none border p-2 rounded"
            >
              Details
            </button>
            <button
              :class="{ 'text-blue-600': activeSection === 'rating' }"
              @click="setActiveSection('rating')"
              class="focus:outline-none border p-2 rounded"
            >
              Rating & Comment
            </button>
          </div>
  
          <!-- Dynamic content based on activeSection -->
          <div v-if="activeSection === 'details'">
            <div class="mb-4 text-left">
              <h4 class="text-lg font-semibold">About</h4>
              <p class="text-sm text-gray-600 mb-2">{{ movie.title }} is a great movie!</p>
              <p class="text-sm text-gray-600 mb-2">Year: {{ movie.year }} | Genre: {{ movie.genre }}</p>
              <p class="text-sm text-gray-600 mb-2">Director: {{ movie.director }} | Cast: {{ movie.director }}</p>
              <div class="mt-4">
                <h4 class="text-lg font-semibold">Trailer</h4>
                <iframe
                  width="50%"
                  height="20%"
                  :src="`https://www.youtube.com/embed/6YnryDjEGr8?si=tpgSi1kip4iMZcgs`"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
  
          <div v-if="activeSection === 'rating'">
            <div>
              <h3 class="text-lg font-semibold mb-2">Rate & Comment</h3>
              <div class="flex items-center mb-4">
                <label for="rating" class="text-sm mr-2">Your Rating:</label>
                <input type="number" id="rating" v-model="userRating" min="1" max="5" class="border rounded-md px-2 py-1 w-24 text-center">
              </div>
              <textarea v-model="userComment" rows="4" class="w-full border rounded-md p-2 mb-4" placeholder="Add your comment..."></textarea>
              <button @click="submitRating" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none">Submit</button>
  
              <!-- Display all comments -->
              <div>
                <h3 class="text-lg font-semibold mt-4">Comments</h3>
                <ul>
                  <li v-for="(comment, index) in movie.comments" :key="index" class="mb-2">
                    <span class="font-semibold">{{ comment.username }}:</span> {{ comment.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        required: true
      },
      movie: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
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
      closeModal() {
        this.$emit('closeModal');
        this.userRating = null;
        this.userComment = '';
        this.activeSection = 'details'; // Reset active section when modal is closed
      },
      setActiveSection(section) {
        this.activeSection = section;
      },
      submitRating() {
  if (!this.userRating) {
    alert('Please provide a rating.');
    return;
  }

  // Ensure that the movie object has a comments array
  if (!this.movie.comments) {
    this.movie.comments = []; // Initialize comments array if it's undefined
  }

  const newComment = {
    username: 'User', // Example: You can replace this with actual user's name
    text: this.userComment
  };

  // Add new comment to the selected movie's comments array
  this.movie.comments.push(newComment);

  // Optionally, you can save the comment to a backend/database here

  console.log('User Rating:', this.userRating);
  console.log('User Comment:', this.userComment);

  // Reset userRating and userComment after submitting
  this.userRating = null;
  this.userComment = '';
}

    }
  };
  </script>
  
  <style scoped>
  /* Modal transition */
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s;
  }
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  
  /* Close button style */
  button.close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
  
  /* Style section toggle buttons */
  button.section-button {
    cursor: pointer;
    color: #555;
  }
  button:hover,
  button:focus {
    color: #3182ce;
  }
  
  button.section-button:hover,
  button.section-button:focus {
    color: #3182ce;
  }
  </style>
  