<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const isRouterReady = ref(false)

onMounted(() => {
  isRouterReady.value = true
  console.log('App mounted successfully')
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <!-- Navbar (selalu tampil) -->
    <Navbar />
    
    <!-- Debug Info -->
    <div v-if="!isRouterReady" class="flex-grow flex items-center justify-center">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Loading...</p>
      </div>
    </div>

    <!-- Router View - konten berubah sesuai route -->
    <main v-else class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Footer (selalu tampil) -->
    <Footer />
  </div>
</template>

<style scoped>
/* Transition animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>