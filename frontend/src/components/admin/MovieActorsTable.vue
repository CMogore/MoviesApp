<template>
    <div>
      <!-- Table to display movie-actors relationships -->
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Movie ID</th>
            <th class="px-4 py-2">Actor ID</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Display movie-actors data -->
          <tr v-for="(relationship, index) in movieActors" :key="index">
            <td class="border px-4 py-2">{{ relationship.id }}</td>
            <td class="border px-4 py-2">{{ relationship.movie_id }}</td>
            <td class="border px-4 py-2">{{ relationship.actor_id }}</td>
            <td class="border px-4 py-2">
              <button @click="editMovieActor(index)" class="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">Edit</button>
              <button @click="deleteMovieActor(index)" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add Movie-Actor Relationship button -->
      <div class="mt-4">
        <button @click="openAddRelationshipModal" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Relationship</button>
      </div>
  
      <!-- Add Movie-Actor Relationship modal -->
      <AddMovieActorModal ref="addRelationshipModal" @closeModal="closeAddRelationshipModal" :relationshipToEdit="selectedRelationship" />
    </div>
  </template>
  
  <script>
  import AddMovieActorModal from '@/components/admin/CreateMovieActors.vue';
  
  export default {
    components: {
      AddMovieActorModal
    },
    data() {
      return {
        movieActors: [
          { id: 1, movie_id: 1, actor_id: 1 },
          { id: 2, movie_id: 1, actor_id: 2 }
          // Add more movie-actors data
        ],
        selectedRelationship: null // Store the selected relationship for editing
      };
    },
    methods: {
      openAddRelationshipModal() {
        if (this.$refs.addRelationshipModal) {
          this.selectedRelationship = null; // Reset selected relationship for add operation
          this.$refs.addRelationshipModal.openModal();
        }
      },
      closeAddRelationshipModal() {
        if (this.$refs.addRelationshipModal) {
          this.$refs.addRelationshipModal.closeModal();
        }
      },
      editMovieActor(index) {
        // Set the selected relationship for editing
        this.selectedRelationship = { ...this.movieActors[index] };
        this.$refs.addRelationshipModal.openModal();
      },
      deleteMovieActor(index) {
        // Implement delete movie-actor relationship functionality
        this.movieActors.splice(index, 1);
        console.log('Deleted Movie-Actor Relationship at index:', index);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles */
  </style>
  