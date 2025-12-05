<script setup>
import Heroes from '../components/Heroes.vue'

// Import gambar coaches
import coach1Image from '../assets/coach1.jpg'
import coach2Image from '../assets/coach2.jpg'
import coach3Image from '../assets/coach3.jpeg'
import nutrisiImage from '../assets/coach4.png'
import psikologImage from '../assets/coach5.jpg'
import fisikImage from '../assets/coach6.jpg'

// Import gambar facilities
import facility1Image from '../assets/facility1.jpg'
import facility2Image from '../assets/facility2.jpg'
import facility3Image from '../assets/facility3.jpg'
import facility4Image from '../assets/facility4.jpg'
import facility5Image from '../assets/facility5.jpg'
import facility6Image from '../assets/facility6.jpg'

// Data Official Team (6 orang)
const coaches = [
  {
    id: 1,
    name: 'Coach Shin Tae Yong',
    image: coach1Image,
    role: 'Pelatih Junior Academy',
    experience: '8 Tahun Pengalaman',
    certification: 'AFC Futsal Level 1',
    specialty: 'Spesialis pembinaan usia dini (TK - Kelas 1 SD) dengan metode fun learning'
  },
  {
    id: 2,
    name: 'Coach Patrick Kluivert',
    image: coach2Image,
    role: 'Pelatih Development Academy',
    experience: '10 Tahun Pengalaman',
    certification: 'AFC Futsal Level 2',
    specialty: 'Spesialis pengembangan teknik fundamental (Kelas 2-6 SD)'
  },
  {
    id: 3,
    name: 'Coach Justin',
    image: coach3Image,
    role: 'Pelatih Senior Academy',
    experience: '11 Tahun Pengalaman',
    certification: 'AFC Futsal Level 3',
    specialty: 'Mantan pemain profesional, spesialis taktik lanjutan (SMP-SMA)'
  },
  {
    id: 4,
    name: 'dr. Tirta',
    image: nutrisiImage,
    role: 'Ahli Gizi Olahraga',
    experience: '7 Tahun Pengalaman',
    certification: 'Certified Sports Nutritionist',
    specialty: 'Merancang menu makanan bergizi untuk performa optimal atlet muda'
  },
  {
    id: 5,
    name: 'Lionel Messi, S.Psi., M.Psi., Psikolog',
    image: psikologImage,
    role: 'Psikolog Olahraga',
    experience: '9 Tahun Pengalaman',
    certification: 'Licensed Sports Psychologist',
    specialty: 'Pembinaan mental, motivasi, dan manajemen emosi atlet'
  },
  {
    id: 6,
    name: 'Coach Ade Rai',
    image: fisikImage,
    role: 'Pelatih Fisik',
    experience: '8 Tahun Pengalaman',
    certification: 'Certified Strength & Conditioning Specialist',
    specialty: 'Program kondisi fisik, kekuatan, dan injury prevention'
  }
]

// Data Fasilitas
const facilities = [
  {
    id: 1,
    name: '2 Lapangan Futsal',
    image: facility1Image
  },
  {
    id: 2,
    name: 'Asrama Nyaman',
    image: facility2Image
  },
  {
    id: 3,
    name: 'Meeting Room',
    image: facility3Image
  },
  {
    id: 4,
    name: 'Gym & Fitness',
    image: facility4Image
  },
  {
    id: 5,
    name: 'Ruang Ganti',
    image: facility5Image
  },
  {
    id: 6,
    name: 'Makanan Bergizi',
    image: facility6Image
  }
]
</script>

<template>
  <div>
    <!-- Hero Section with Blue Background -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image dari Heroes -->
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/Heroes_Section.jpg"
          alt="Blue Shark Futsal Academy Team"
          class="w-full h-full object-cover"
        />
        <!-- Dark Blue Overlay -->
        <div class="absolute inset-0 bg-[#406882]/90"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <!-- Left: Logo -->
            <div class="flex justify-center">
              <div class="w-64 h-64 md:w-80 md:h-80">
                <img 
                  src="../assets/Logo_BSF.png" 
                  alt="Blue Shark Futsal Academy Logo" 
                  class="w-full h-full object-contain"
                />
              </div>
            </div>

            <!-- Right: Description -->
            <div class="text-left">
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                <span class="font-bold text-[#406882]">Blue Shark Futsal Academy</span> adalah program pembinaan futsal berkelanjutan dengan konsep weekend intensif. Peserta menginap mulai Jumat sore hingga Minggu malam <span class="font-bold">selama 6 bulan berturut-turut</span>.
              </p>
              
              <p class="text-lg text-gray-700 leading-relaxed">
                Kami fokus pada pembinaan holistik dari usia dini (TK) hingga senior (SMA) melalui aspek <span class="font-bold">teknik, mental, gizi, dan fisik</span> dengan <span class="font-bold">fasilitas lengkap</span> dan <span class="font-bold">tim profesional berpengalaman</span>.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Visi & Misi Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Visi & Misi
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <!-- Visi -->
          <div class="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Visi</h3>

            <!-- Content -->
            <p class="text-gray-600 leading-relaxed text-center">
              Menjadi pusat pembinaan futsal berkelanjutan terbaik yang mengembangkan atlet dari usia dini hingga senior secara holistik, menghasilkan pemain berkualitas dengan fondasi teknik kuat, mental tangguh, dan karakter juara.
            </p>
          </div>

          <!-- Misi -->
          <div class="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-2xl font-bold text-gray-800 mb-6 text-center">Misi</h3>

            <!-- Content -->
            <ul class="space-y-4 text-gray-600">
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Menyelenggarakan program weekend intensif 6 bulan yang terstruktur dan berkelanjutan</span>
              </li>
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Membina atlet dari aspek teknik, mental, gizi, dan fisik secara menyeluruh</span>
              </li>
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Menyediakan fasilitas lengkap: 2 lapangan, asrama, gym, dan meeting room</span>
              </li>
              <li class="flex items-start">
                <span class="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Menghadirkan tim profesional: pelatih, ahli gizi, psikolog, dan pelatih fisik</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Official Team Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Official Team
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Tim profesional lengkap untuk pembinaan holistik atlet futsal
          </p>
        </div>

        <!-- Coaches Grid - 3 kolom -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-for="coach in coaches" 
            :key="coach.id"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <!-- Coach Image -->
            <div class="h-80 overflow-hidden bg-gray-200">
              <img 
                :src="coach.image" 
                :alt="coach.name"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Coach Info -->
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                {{ coach.name }}
              </h3>
              <p class="text-blue-600 font-semibold mb-4">
                {{ coach.role }}
              </p>
              
              <div class="space-y-2 mb-4">
                <p class="text-sm text-gray-600 font-medium">
                  {{ coach.experience }}
                </p>
                <p class="text-sm text-gray-800 font-semibold">
                  {{ coach.certification }}
                </p>
              </div>

              <p class="text-sm text-gray-600 italic leading-relaxed">
                {{ coach.specialty }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fasilitas Kami Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-6">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Fasilitas Kami
          </h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto mb-2">
            Nikmati fasilitas berkelas dunia yang dirancang untuk mendukung perkembangan optimal setiap atlet
          </p>
          <p class="text-base text-gray-600 max-w-3xl mx-auto">
            Fasilitas lengkap untuk mendukung program pembinaan berkelanjutan selama 6 bulan
          </p>
        </div>

        <!-- Facilities Grid - 3 columns -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div 
            v-for="facility in facilities" 
            :key="facility.id"
            class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            <!-- Facility Image -->
            <div class="h-72 overflow-hidden bg-gray-200">
              <img 
                :src="facility.image" 
                :alt="facility.name"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <!-- Facility Name -->
            <div class="p-6 text-center">
              <h3 class="text-xl font-bold text-gray-800">
                {{ facility.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Tentang Kami specific styles */
</style>