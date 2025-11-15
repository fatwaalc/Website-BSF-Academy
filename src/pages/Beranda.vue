<script setup>
import Heroes from '../components/Heroes.vue'
// Hapus import CTA
</script>

<template>
  <div>
    <!-- Heroes Section -->
    <Heroes />

    <!-- Mengapa Memilih Kami Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Mengapa Memilih Kami?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami berkomitmen memberikan pelatihan futsal terbaik dengan pendekatan profesional dan fasilitas berkelas dunia.
          </p>
        </div>

        <!-- Reasons Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Reason 1: Tim Profesional -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Tim Profesional Lengkap</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              Pelatih bersertifikat, ahli gizi, psikolog, dan pelatih fisik untuk pembinaan holistik
            </p>
          </div>

          <!-- Reason 2: Program Weekend -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Program Weekend Intensif</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              Pelatihan Jumat sore - Minggu malam dengan menginap di asrama, durasi 6 bulan berkelanjutan
            </p>
          </div>

          <!-- Reason 3: Fasilitas -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Fasilitas Standar Profesional</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              2 lapangan futsal, asrama nyaman, gym lengkap, meeting room, dan makanan bergizi
            </p>
          </div>

          <!-- Reason 4: Pembinaan Berkelanjutan -->
          <div class="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
            <div class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-3 text-center">Pembinaan Berkelanjutan</h3>
            <p class="text-gray-600 text-center text-sm leading-relaxed">
              Program terstruktur dari Junior (TK-SD) hingga Senior (SMP-SMA) dengan kurikulum progresif
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Overview Section (Tentang Singkat) -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          <!-- Left: Text Content -->
          <div class="flex flex-col justify-between">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tentang <span class="text-blue-600">Blue Shark Futsal Academy</span>
              </h2>
              <p class="text-lg text-gray-600 mb-6 leading-relaxed">
                Blue Shark Futsal Academy adalah program pembinaan futsal berkelanjutan dengan konsep weekend intensif. 
                Kami fokus pada pembinaan holistik dari usia dini (TK) hingga senior (SMA) melalui aspek teknik, mental, gizi, dan fisik.
              </p>
              <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                Program 6 bulan kami dimulai setiap...
              </p>
            </div>

            <!-- CTA Button to Tentang Kami -->
            <div>
              <router-link 
                to="/tentang-kami"
                class="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 inline-flex"
              >
                Selengkapnya...
                <svg 
                  class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Right: Image -->
          <div class="relative h-full min-h-[500px] lg:min-h-[600px]">
            <div class="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="../assets/Informatics_Squad.jpg"
                alt="Team BSF Academy"
                class="w-full h-full object-cover"
              />
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Beranda specific styles */
</style>