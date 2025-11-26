<script setup>
// Data Konsep Program
const programOverview = [
  {
    icon: 'calendar',
    title: '24 Weekend',
    description: 'Jumat sore - Minggu malam selama 6 bulan'
  },
  {
    icon: 'clock',
    title: '72 Hari Intensif',
    description: 'Latihan terstruktur dengan jadwal padat'
  },
  {
    icon: 'users',
    title: 'Tim Lengkap',
    description: 'Pelatih, ahli gizi, psikolog, pelatih fisik'
  }
]

const programAspects = [
  {
    icon: 'technical',
    title: 'Technical',
    description: 'Penguasaan keterampilan teknis futsal',
    points: [
      'Ball control & mastery',
      'Passing & receiving',
      'Shooting techniques',
      'Dribbling & feints'
    ]
  },
  {
    icon: 'tactical',
    title: 'Tactical',
    description: 'Pemahaman strategi dan kecerdasan bermain',
    points: [
      'Understanding formations',
      'Team coordination',
      'Offensive strategies',
      'Defensive organization'
    ]
  },
  {
    icon: 'physical',
    title: 'Physical',
    description: 'Kondisi fisik dan atletis optimal',
    points: [
      'Strength & conditioning',
      'Speed & agility',
      'Endurance training',
      'Flexibility & mobility'
    ]
  },
  {
    icon: 'mental',
    title: 'Mental & Gizi',
    description: 'Karakter juara dan nutrisi optimal',
    points: [
      'Competitive mindset',
      'Focus & concentration',
      'Team communication',
      'Leadership skills'
    ]
  }
]

// Data Fase Program
const programPhases = [
  {
    phase: 'Bulan 1-2: Foundation & Adaptation',
    tag: 'Pembentukan Dasar',
    description: 'Periode adaptasi dan pembentukan fondasi. Peserta mulai terbiasa dengan rutinitas weekend intensif, fasilitas asrama, dan tim pembinaan.',
    activities: [
      'Orientasi program dan fasilitas asrama',
      'Basic technical drills sesuai usia',
      'Konsultasi psikolog untuk adaptasi',
      'Assessment awal: teknik, fisik, mental',
      'Team building activities',
      'Program nutrisi personal dimulai'
    ]
  },
  {
    phase: 'Bulan 3-4: Skill Development & Refinement',
    tag: 'Pengembangan Intensif',
    description: 'Fase peningkatan intensitas latihan teknik dan taktik. Peserta mulai menunjukkan perkembangan signifikan dalam skill fundamental.',
    activities: [
      'Advanced technical training',
      'Tactical understanding & positioning',
      'Strength & conditioning program',
      'Video analysis sessions',
      'Mini tournament internal',
      'Mental toughness training'
    ]
  },
  {
    phase: 'Bulan 5-6: Performance & Competition',
    tag: 'Persiapan Kompetisi',
    description: 'Fase kompetisi dan evaluasi akhir. Peserta dipersiapkan untuk tournament eksternal dan menjalani assessment komprehensif.',
    activities: [
      'Match preparation & strategy',
      'Tournament participation',
      'Final assessment: teknik, fisik, mental',
      'Individual development report',
      'Career pathway consultation',
      'Graduation ceremony & certification'
    ]
  }
]
</script>

<template>
  <div>
    <!-- Heroes Section -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="../assets/Heroes_Section.jpg" 
          alt="Blue Shark Futsal Academy Program" 
          class="w-full h-full object-cover"
        />
        <!-- Dark Blue Overlay -->
        <div class="absolute inset-0 bg-[#406882]/85"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Kurikulum Program 6 Bulan
        </h1>
        <p class="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
          Program pembinaan terstruktur dengan sistem weekend intensif untuk pengembangan holistik atlet futsal
        </p>
      </div>
    </section>

    <!-- Konsep Program Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Konsep Program
          </h2>
          <p class="text-gray-700 leading-relaxed max-w-4xl mx-auto mb-4">
            Program weekend intensif berdurasi 6 bulan dengan sistem menginap (Jumat sore - Minggu malam). Setiap weekend, peserta akan mendapatkan pembinaan menyeluruh yang mencakup aspek teknik, taktik, fisik, mental, dan gizi.
          </p>
          <p class="text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Dengan total 24 weekend atau sekitar 72 hari latihan intensif, program ini dirancang untuk memberikan perkembangan signifikan yang terukur melalui pendekatan holistik dan profesional.
          </p>
        </div>

        <!-- Program Overview Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <!-- 24 Weekend -->
          <div class="bg-blue-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">24 Weekend</h3>
            <p class="text-gray-600">Jumat sore - Minggu malam selama 6 bulan</p>
          </div>

          <!-- 72 Hari Intensif -->
          <div class="bg-blue-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">72 Hari Intensif</h3>
            <p class="text-gray-600">Latihan terstruktur dengan jadwal padat</p>
          </div>

          <!-- Tim Lengkap -->
          <div class="bg-blue-50 rounded-2xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Tim Lengkap</h3>
            <p class="text-gray-600">Pelatih, ahli gizi, psikolog, pelatih fisik</p>
          </div>
        </div>

        <!-- Program Aspects - 4 Columns -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Technical -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Technical</h3>
            <p class="text-sm text-gray-600 mb-4">Penguasaan keterampilan teknis futsal</p>
            <ul class="space-y-2">
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Ball control & mastery</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Passing & receiving</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Shooting techniques</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Dribbling & feints</span>
              </li>
            </ul>
          </div>

          <!-- Tactical -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Tactical</h3>
            <p class="text-sm text-gray-600 mb-4">Pemahaman strategi dan kecerdasan bermain</p>
            <ul class="space-y-2">
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Understanding formations</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Team coordination</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Offensive strategies</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Defensive organization</span>
              </li>
            </ul>
          </div>

          <!-- Physical -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Physical</h3>
            <p class="text-sm text-gray-600 mb-4">Kondisi fisik dan atletis optimal</p>
            <ul class="space-y-2">
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Strength & conditioning</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Speed & agility</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Endurance training</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Flexibility & mobility</span>
              </li>
            </ul>
          </div>

          <!-- Mental & Gizi -->
          <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div class="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">Mental & Gizi</h3>
            <p class="text-sm text-gray-600 mb-4">Karakter juara dan nutrisi optimal</p>
            <ul class="space-y-2">
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Competitive mindset</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Focus & concentration</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Team communication</span>
              </li>
              <li class="flex items-start text-sm text-gray-700">
                <span class="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                <span>Leadership skills</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Fase Program 6 Bulan Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-800">
            Fase Program 6 Bulan
          </h2>
        </div>

        <!-- Program Phases -->
        <div class="space-y-8">
          <div 
            v-for="(phase, index) in programPhases" 
            :key="index"
            class="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <!-- Phase Header -->
            <div class="bg-blue-600 px-8 py-6 flex items-center justify-between">
              <h3 class="text-2xl font-bold text-white">
                {{ phase.phase }}
              </h3>
              <span class="bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                {{ phase.tag }}
              </span>
            </div>

            <!-- Phase Content -->
            <div class="p-8">
              <p class="text-gray-700 leading-relaxed mb-6">
                {{ phase.description }}
              </p>

              <div>
                <h4 class="font-bold text-gray-800 mb-4">Key Activities:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="(activity, actIndex) in phase.activities" 
                    :key="actIndex"
                    class="flex items-start"
                  >
                    <div class="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span class="text-blue-600 font-bold text-sm">{{ actIndex + 1 }}</span>
                    </div>
                    <span class="text-gray-700 leading-relaxed">{{ activity }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Program specific styles */
</style>