<template>
    <div>
      <!-- Table to display actors -->
      <table class="table-auto w-full">
        <thead>
          <tr>
            <th class="px-4 py-2">ID</th>
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Display actors data -->
          <tr v-for="actor in actors" :key="actor.id">
            <td class="border px-4 py-2">{{ actor.id }}</td>
            <td class="border px-4 py-2">{{ actor.name }}</td>
            <td class="border px-4 py-2">
              <button @click="editActor(actor)" class="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">Edit</button>
              <button @click="deleteActor(actor.id)" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Create Actor button -->
      <div class="mt-4">
        <button @click="openCreateActorModal" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Actor</button>
      </div>
  
      <!-- Actor creation modal -->
      <ActorModal ref="actorModal" @closeModal="closeCreateActorModal" />
    </div>
  </template>
  
  <script>
  import ActorModal from '@/components/admin/CreateActors.vue';
  
  export default {
    components: {
      ActorModal
    },
    data() {
      return {
        actors: [
          { id: 1, name: 'Actor 1' },
          { id: 2, name: 'Actor 2' }
          // Add more actor data
        ]
      };
    },
    methods: {
      openCreateActorModal() {
        if (this.$refs.actorModal) {
          this.$refs.actorModal.openModal();
        }
      },
      closeCreateActorModal() {
        if (this.$refs.actorModal) {
          this.$refs.actorModal.closeModal();
        }
      },
      editActor(actor) {
        // Implement edit actor functionality (e.g., open modal with actor details for editing)
        console.log('Edit Actor:', actor);
      },
      deleteActor(actorId) {
        // Implement delete actor functionality (e.g., send request to delete actor from backend)
        console.log('Delete Actor ID:', actorId);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add scoped styles */
  </style>
  