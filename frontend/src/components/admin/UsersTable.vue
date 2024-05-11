<template>
    <table class="table-auto w-full">
      <thead>
        <tr>
          <th class="px-4 py-2">ID</th>
          <th class="px-4 py-2">Name</th>
          <th class="px-4 py-2">Email</th>
          <th class="px-4 py-2">Username</th>
          <th class="px-4 py-2">Role</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Example user rows, replace with actual data from API or Vuex store -->
        <tr v-for="user in users" :key="user.id">
          <td class="border px-4 py-2">{{ user.id }}</td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.email }}</td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.role }}</td>
          <td class="border border-gray-300 px-4 py-2">
            <button @click="editUser(user)" class="text-blue-500 hover:text-blue-700 focus:outline-none mr-2">Edit</button>
            <button @click="deleteUser(user.id)" class="text-red-500 hover:text-red-700 focus:outline-none">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Create User button -->
    <div class="mt-4 text-left">
      <button @click="openCreateUserModal" class="px-4 py-2  bg-blue-500 text-white rounded-md">Create User</button>
    </div>

    <!-- User creation modal -->
    <UserModal ref="userModal" @closeModal="closeCreateUserModal" />

  </template>
  
  <script>
  import UserModal from '@/components/admin/CreateUsers.vue';
  export default {
    components: {
    UserModal
  },

    data() {
      return {
        users: [
          { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
          // Add more user data
        ]
      };
      
    },
    methods: {
    editUser(user) {
      // Implement edit user functionality (e.g., open modal with user details for editing)
      console.log('Edit User:', user);
    },
    deleteUser(userId) {
      // Implement delete user functionality (e.g., send request to delete user from backend)
      console.log('Delete User ID:', userId);
    },
    openCreateUserModal() {
      // Check if userModal ref exists before calling openModal
      if (this.$refs.userModal) {
        this.$refs.userModal.openModal();
      }
    },
    closeCreateUserModal() {
      // Check if userModal ref exists before calling closeModal
      if (this.$refs.userModal) {
        this.$refs.userModal.closeModal();
      }
    }
  }
};

  </script>
  
  <style scoped>
  /* Add scoped styles if needed */
  </style>
  