<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (routeName) => {
  router.push({ name: routeName })
}
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="../assets/Heroes_Section.jpg"
        alt="Blue Shark Futsal Academy Team"
        class="w-full h-full object-cover"
      />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <div class="max-w-4xl mx-auto">
        <!-- Main Heading -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span class="text-blue-500">Blue Shark</span> Futsal<br>Academy
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-white mb-10 leading-relaxed max-w-3xl mx-auto">
          Akademi futsal weekend intensif (Jumat-Minggu) dengan program 6 bulan.
          Pembinaan menyeluruh dari usia dini hingga senior meliputi aspek teknik,
          mental, gizi, dan fisik dengan fasilitas lengkap dan tim profesional.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <!-- Primary Button -->
          <button
            @click="navigateTo('Akademi')"
            class="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            Lihat Akademi
            <svg 
              class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <!-- Secondary Button -->
          <button 
            @click="navigateTo('HubungiKami')"
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  animation: fadeInUp 0.8s ease-out;
}

p {
  animation: fadeInUp 0.8s ease-out 0.2s;
  animation-fill-mode: backwards;
}

button {
  animation: fadeInUp 0.8s ease-out 0.4s;
  animation-fill-mode: backwards;
}
</style>