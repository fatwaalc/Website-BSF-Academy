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
      <div class="flex justify-between items-center h-20 lg:h-32">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center gap-2 lg:gap-4" @click="closeMenu">
            <img src="../assets/Logo_BSF.png" alt="BSF Academy Logo" class="h-16 lg:h-[130px] w-auto" />
            <span class="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600">BSF Academy</span>
          </router-link>
        </div>

        <!-- Desktop Menu - Hidden sampai lg breakpoint -->
        <div class="hidden lg:flex space-x-8 items-center">
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
            class="text-gray-700 hover:text-blue-600 text-lg font-medium transition-colors duration-300"
            active-class="text-blue-600 font-bold"
          >
            Hubungi Kami
          </router-link>
        </div>

        <!-- Mobile Menu Button - Show sampai lg breakpoint -->
        <div class="lg:hidden">
          <button 
            @click="toggleMenu" 
            class="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
          >
            <svg class="h-6 w-6 sm:h-8 sm:w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      <!-- Mobile Menu - Show sampai lg breakpoint -->
      <Transition name="slide">
        <div 
          v-show="isMenuOpen" 
          class="lg:hidden pb-4 border-t border-gray-200 mt-2"
        >
          <router-link 
            to="/" 
            @click="closeMenu"
            class="block py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
            active-class="text-blue-600 font-bold bg-blue-50"
          >
            Beranda
          </router-link>
          <router-link 
            to="/tentang-kami" 
            @click="closeMenu"
            class="block py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
            active-class="text-blue-600 font-bold bg-blue-50"
          >
            Tentang Kami
          </router-link>
          <router-link 
            to="/akademi" 
            @click="closeMenu"
            class="block py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
            active-class="text-blue-600 font-bold bg-blue-50"
          >
            Akademi
          </router-link>
          <router-link 
            to="/program" 
            @click="closeMenu"
            class="block py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
            active-class="text-blue-600 font-bold bg-blue-50"
          >
            Program
          </router-link>
          <router-link 
            to="/hubungi-kami"
            @click="closeMenu"
            class="block py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg font-medium text-base transition-colors"
            active-class="text-blue-600 font-bold bg-blue-50"
          >
            Hubungi Kami
          </router-link>
        </div>
      </Transition>
    </div>
  </nav>

  <!-- Spacer untuk fixed navbar -->
  <div class="h-20 lg:h-32"></div>
</template>

<style scoped>
/* Slide transition untuk mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>