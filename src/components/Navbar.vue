<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-white shadow-md fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-32">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center gap-4" @click="closeMenu">
            <img src="../assets/Logo_BSF.png" alt="BSF Academy Logo" class="h-[130px] w-auto" />
            <span class="text-3xl font-bold text-blue-600">BSF Academy</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8 items-center">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300"
            active-class="text-blue-600 font-bold"
          >
            Beranda
          </router-link>
          <router-link 
            to="/tentang-kami" 
            class="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300"
            active-class="text-blue-600 font-bold"
          >
            Tentang Kami
          </router-link>
          <router-link 
            to="/akademi" 
            class="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300"
            active-class="text-blue-600 font-bold"
          >
            Akademi
          </router-link>
          <router-link
            to="/program"
            class="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300"
            active-class="text-blue-600 font-bold"
          >
            Program
          </router-link>
          <router-link
            to="/hubungi-kami"
            class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-lg"
          >
            Hubungi Kami
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button 
            @click="toggleMenu" 
            class="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                v-if="!isMenuOpen" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMenuOpen" 
        class="md:hidden pb-4"
      >
        <router-link 
          to="/" 
          @click="closeMenu"
          class="block py-3 text-gray-700 hover:text-blue-600 font-medium text-lg"
          active-class="text-blue-600 font-bold"
        >
          Beranda
        </router-link>
        <router-link 
          to="/tentang-kami" 
          @click="closeMenu"
          class="block py-3 text-gray-700 hover:text-blue-600 font-medium text-lg"
          active-class="text-blue-600 font-bold"
        >
          Tentang Kami
        </router-link>
        <router-link 
          to="/akademi" 
          @click="closeMenu"
          class="block py-3 text-gray-700 hover:text-blue-600 font-medium text-lg"
          active-class="text-blue-600 font-bold"
        >
          Akademi
        </router-link>
        <router-link 
          to="/program" 
          @click="closeMenu"
          class="block py-3 text-gray-700 hover:text-blue-600 font-medium text-lg"
          active-class="text-blue-600 font-bold"
        >
          Program
        </router-link>
        <router-link 
          to="/hubungi-kami"
          @click="closeMenu"
          class="block py-3 text-blue-600 font-semibold text-lg"
        >
          Hubungi Kami
        </router-link>
      </div>
    </div>
  </nav>

  <!-- Spacer untuk fixed navbar - sesuaikan dengan tinggi navbar -->
  <div class="h-32"></div>
</template>

<style scoped>
/* Navbar specific styles */
</style>