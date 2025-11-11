<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <Navbar />
    
    <!-- Main Content Area -->
    <main class="flex-grow pt-30">
      <!-- Content akan ditampilkan di sini -->
      <div class="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-8">
        <div class="text-center">
          <h1 class="text-5xl font-bold text-gray-800 mb-4">
            Selamat Datang di BSF Academy
          </h1>
          <p class="text-xl text-gray-600">
            Tempat terbaik untuk mengembangkan kemampuan futsal Anda
          </p>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped>
/* Custom styles jika diperlukan */
</style>