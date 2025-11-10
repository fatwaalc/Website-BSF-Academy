<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const activeMenu = ref('beranda')

const menuItems = [
  { id: 'beranda', name: 'Beranda', href: '#beranda' },
  { id: 'tentang', name: 'Tentang Kami', href: '#tentang' },
  { id: 'akademi', name: 'Akademi', href: '#akademi' },
  { id: 'program', name: 'Program', href: '#program' },
  { id: 'hubungi', name: 'Hubungi Kami', href: '#hubungi' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const setActiveMenu = (menuId) => {
  activeMenu.value = menuId
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-[#06173e] shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-30">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <a href="#" class="flex items-center space-x-3">
            <!-- Logo Image -->
            <img src="../assets/Logo_BSF.png" alt="BSF Academy Logo" class="w-28 h-30 object-contain" />
            <!-- Logo Text -->
            <span class="text-2xl font-bold text-white">
              Blue Shark Futsal Academy
            </span>
          </a>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <a
            v-for="item in menuItems"
            :key="item.id"
            :href="item.href"
            @click="setActiveMenu(item.id)"
            :class="[
              'text-white relative px-3 py-3 text-lg font-semibold transition-colors duration-300 group',
            
            ]"
          >
            {{ item.name }}
            <!-- Underline Animation -->
            <span
              :class="[
                'absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-500 ease-out',
              ]"
            ></span>
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none transition-colors duration-300"
          >
            <svg
              class="h-6 w-6"
              :class="{ 'hidden': isMenuOpen, 'block': !isMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="h-6 w-6"
              :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
        <a
          v-for="item in menuItems"
          :key="item.id"
          :href="item.href"
          @click="setActiveMenu(item.id)"
          :class="[
            'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300',
            activeMenu === item.id
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
          ]"
        >
          {{ item.name }}
        </a>
        <div class="px-3 py-2">
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 shadow-md">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Custom styles jika diperlukan */
</style>