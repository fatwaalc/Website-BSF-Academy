<script setup>
import Heroes from '../components/Heroes.vue'

// Data untuk highlights program
const programHighlights = [
  {
    icon: 'calendar',
    text: 'Jumat Sore - Minggu Malam'
  },
  {
    icon: 'home',
    text: 'Menginap di Asrama'
  },
  {
    icon: 'clock',
    text: 'Durasi 6 Bulan'
  }
]

// Data Junior Academy
const juniorAcademyFocus = [
  'Basic ball control dan koordinasi gerak',
  'Fun games untuk pemahaman konsep futsal',
  'Pembentukan karakter dan sportivitas',
  'Aktivitas fisik untuk tumbuh kembang'
]

// Data Development Academy
const developmentAcademyFocus = [
  'Teknik fundamental: passing, dribbling, shooting',
  'Taktik dasar dan pemahaman posisi',
  'Kondisi fisik dan koordinasi lanjutan',
  'Mental training dan team work'
]

// Data Senior Academy
const seniorAcademyFocus = [
  'Taktik lanjutan dan game intelligence',
  'Mental training & competitive mindset',
  'Program fisik profesional & injury prevention',
  'Persiapan tournament & match preparation'
]
</script>

<template>
  <div>
    <!-- Heroes Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/Heroes_Section.jpg" 
          alt="Blue Shark Futsal Academy" 
          class="w-full h-full object-cover"
        />
        <!-- Dark Blue Overlay -->
        <div class="absolute inset-0 bg-[#406882]/85"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Program Blue Shark Futsal Academy
        </h1>
        <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto">
          Program pembinaan berkelanjutan selama 6 bulan dengan sistem weekend intensif
        </p>

        <!-- Program Highlights -->
        <div class="flex flex-wrap justify-center gap-8 md:gap-12">
          <div 
            v-for="(highlight, index) in programHighlights" 
            :key="index"
            class="flex items-center gap-3 text-white"
          >
            <!-- Calendar Icon -->
            <div v-if="highlight.icon === 'calendar'" class="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <!-- Home Icon -->
            <div v-if="highlight.icon === 'home'" class="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>

            <!-- Clock Icon -->
            <div v-if="highlight.icon === 'clock'" class="w-10 h-10 flex items-center justify-center bg-white/20 rounded-full">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <span class="text-lg font-semibold">{{ highlight.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Junior Academy Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 italic">
            Junior Academy
          </h2>
        </div>

        <!-- Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <!-- Left Side: Description & Details -->
          <div class="space-y-8">
            <!-- Pembinaan Usia Dini -->
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">
                Pembinaan Usia Dini
              </h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Program khusus untuk anak TK hingga kelas 1 SD yang berfokus pada pengenalan futsal dengan metode fun learning. Kami memahami pentingnya fondasi yang kuat di usia dini, sehingga setiap sesi dirancang menyenangkan namun tetap edukatif.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Dengan bimbingan pelatih yang berpengalaman menangani anak-anak, peserta akan belajar basic skill, koordinasi motorik, dan nilai-nilai sportivitas dalam suasana yang aman dan mendukung.
              </p>
            </div>

            <!-- Fokus Pembinaan -->
            <div class="bg-gray-50 rounded-2xl p-6">
              <h4 class="text-xl font-bold text-gray-800 mb-4">
                Fokus Pembinaan:
              </h4>
              <ul class="space-y-3">
                <li 
                  v-for="(focus, index) in juniorAcademyFocus" 
                  :key="index"
                  class="flex items-start"
                >
                  <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="text-gray-700">{{ focus }}</span>
                </li>
              </ul>
            </div>

            <!-- Pricing Card -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 class="text-2xl font-bold text-gray-800 mb-2">
                Junior Academy
              </h4>
              <p class="text-gray-600 mb-4">
                TK - Kelas 1 SD
              </p>
              <p class="text-gray-600 italic text-sm mb-6">
                Program pembinaan dasar untuk anak usia dini dengan metode fun learning yang menyenangkan
              </p>
              
              <div class="border-t border-gray-200 pt-4 mb-6">
                <p class="text-3xl font-bold text-gray-800">
                  Rp 5.000.000
                </p>
                <p class="text-gray-600 text-sm">
                  /6 bulan
                </p>
              </div>

              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Daftar Sekarang
              </button>
            </div>
          </div>

          <!-- Right Side: Image -->
          <div class="lg:sticky lg:top-24">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="../assets/Junior_Academy.jpg"
                alt="Junior Academy - Kids Playing Futsal"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Development Academy Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 italic">
            Development Academy
          </h2>
        </div>

        <!-- Content Grid - Image Left, Content Right -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <!-- Left Side: Image -->
          <div class="lg:sticky lg:top-24">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="../assets/Development_Academy.jpg"
                alt="Development Academy - Training Session"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Right Side: Description & Details -->
          <div class="space-y-8">
            <!-- Pengembangan Teknik Fundamental -->
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">
                Pengembangan Teknik Fundamental
              </h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Program untuk anak kelas 2-6 SD yang fokus pada pengembangan teknik fundamental futsal. Di fase ini, kami mulai memperkenalkan konsep taktik dasar dan meningkatkan intensitas latihan secara bertahap.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Peserta akan mendapatkan pembinaan yang lebih terstruktur dengan penambahan sesi video analysis, konsultasi ahli gizi, dan program pelatihan fisik yang disesuaikan dengan usia mereka.
              </p>
            </div>

            <!-- Fokus Pembinaan -->
            <div class="bg-white rounded-2xl p-6 shadow-md">
              <h4 class="text-xl font-bold text-gray-800 mb-4">
                Fokus Pembinaan:
              </h4>
              <ul class="space-y-3">
                <li 
                  v-for="(focus, index) in developmentAcademyFocus" 
                  :key="index"
                  class="flex items-start"
                >
                  <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="text-gray-700">{{ focus }}</span>
                </li>
              </ul>
            </div>

            <!-- Pricing Card -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 class="text-2xl font-bold text-gray-800 mb-2">
                Development Academy
              </h4>
              <p class="text-gray-600 mb-4">
                Kelas 2 SD - Kelas 6 SD
              </p>
              <p class="text-gray-600 italic text-sm mb-6">
                Program pengembangan teknik fundamental yang terstruktur untuk anak usia sekolah dasar
              </p>
              
              <div class="border-t border-gray-200 pt-4 mb-6">
                <p class="text-3xl font-bold text-gray-800">
                  Rp 7.000.000
                </p>
                <p class="text-gray-600 text-sm">
                  /6 bulan
                </p>
              </div>

              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Daftar Sekarang
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Senior Academy Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Title -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 italic">
            Senior Academy
          </h2>
        </div>

        <!-- Content Grid - Content Left, Image Right -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <!-- Left Side: Description & Details -->
          <div class="space-y-8">
            <!-- Persiapan Level Profesional -->
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-4">
                Persiapan Level Profesional
              </h3>
              <p class="text-gray-700 leading-relaxed mb-4">
                Program untuk siswa SMP hingga SMA yang serius ingin mengembangkan karir futsal. Program ini dirancang dengan intensitas tinggi dan fokus pada persiapan ke level profesional dengan bimbingan pelatih berlisensi Pro.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Peserta akan mendapatkan pelatihan komprehensif mencakup taktik lanjutan, mental training, program nutrisi profesional, dan akses penuh ke semua fasilitas termasuk gym dan meeting room untuk video analysis.
              </p>
            </div>

            <!-- Fokus Pembinaan -->
            <div class="bg-gray-50 rounded-2xl p-6">
              <h4 class="text-xl font-bold text-gray-800 mb-4">
                Fokus Pembinaan:
              </h4>
              <ul class="space-y-3">
                <li 
                  v-for="(focus, index) in seniorAcademyFocus" 
                  :key="index"
                  class="flex items-start"
                >
                  <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span class="text-gray-700">{{ focus }}</span>
                </li>
              </ul>
            </div>

            <!-- Pricing Card -->
            <div class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h4 class="text-2xl font-bold text-gray-800 mb-2">
                Senior Academy
              </h4>
              <p class="text-gray-600 mb-4">
                Kelas 1 SMP - Kelas 3 SMA
              </p>
              <p class="text-gray-600 italic text-sm mb-6">
                Program lanjutan untuk remaja dengan fokus taktik, mental, dan persiapan ke level profesional
              </p>
              
              <div class="border-t border-gray-200 pt-4 mb-6">
                <p class="text-3xl font-bold text-gray-800">
                  Rp 15.000.000
                </p>
                <p class="text-gray-600 text-sm">
                  /6 bulan
                </p>
              </div>

              <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
                Daftar Sekarang
              </button>
            </div>
          </div>

          <!-- Right Side: Image -->
          <div class="lg:sticky lg:top-24">
            <div class="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="../assets/Senior_Academy.jpg"
                alt="Senior Academy - Professional Training"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Akademi specific styles */
</style>