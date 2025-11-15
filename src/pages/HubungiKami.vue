<script setup>
import { ref } from 'vue'

const formData = ref({
  namaLengkap: '',
  email: '',
  noTelepon: '',
  subjek: '',
  pesan: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData.value)
  alert('Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.')
  
  // Reset form
  formData.value = {
    namaLengkap: '',
    email: '',
    noTelepon: '',
    subjek: '',
    pesan: ''
  }
}
</script>

<template>
  <section id="hubungi" class="bg-white">
    <!-- Header Section -->
    <div class="py-16 bg-gradient-to-r from-blue-500 to-blue-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Hubungi Kami
        </h2>
        <p class="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          Punya pertanyaan tentang Blue Shark Futsal Academy? Kami siap membantu Anda. 
          Hubungi kami melalui form di bawah atau kunjungi langsung academy kami.
        </p>
      </div>
    </div>

    <!-- Contact Cards -->
    <div class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Alamat Card -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Alamat</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Jl. Futsal No. 123,<br>
              Jakarta Selatan, DKI<br>
              Jakarta 12345
            </p>
          </div>

          <!-- Telepon Card -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Telepon</h3>
            <p class="text-gray-600 text-center">
              +62 812-3456-7890
            </p>
          </div>

          <!-- Email Card -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Email</h3>
            <p class="text-gray-600 text-center">
              info@futsalacademy.com
            </p>
          </div>

          <!-- Jam Operasional Card -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">Jam Operasional</h3>
            <p class="text-gray-600 text-center leading-relaxed">
              Weekday: 08:00 - 21:00<br>
              Weekend: 09:00 - 18:00
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Form & Map Section -->
    <div class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <!-- Contact Form -->
          <div class="bg-white">
            <h3 class="text-3xl font-bold text-gray-800 mb-8">Kirim Pesan</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Nama Lengkap -->
              <div>
                <label for="namaLengkap" class="block text-sm font-semibold text-gray-700 mb-2">
                  Nama Lengkap <span class="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="namaLengkap"
                  v-model="formData.namaLengkap"
                  required
                  placeholder="Masukkan nama lengkap"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <!-- Email & No Telepon -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    v-model="formData.email"
                    required
                    placeholder="email@example.com"
                    class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label for="noTelepon" class="block text-sm font-semibold text-gray-700 mb-2">
                    No. Telepon
                  </label>
                  <input
                    type="tel"
                    id="noTelepon"
                    v-model="formData.noTelepon"
                    placeholder="08123456789"
                    class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              <!-- Subjek -->
              <div>
                <label for="subjek" class="block text-sm font-semibold text-gray-700 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subjek"
                  v-model="formData.subjek"
                  placeholder="Topik pesan Anda"
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <!-- Pesan -->
              <div>
                <label for="pesan" class="block text-sm font-semibold text-gray-700 mb-2">
                  Pesan <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="pesan"
                  v-model="formData.pesan"
                  required
                  rows="6"
                  placeholder="Tuliskan pesan Anda di sini..."
                  class="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Kirim Pesan
              </button>

              <p class="text-sm text-gray-500 text-center">
                <span class="text-red-500">*</span> Field wajib diisi
              </p>
            </form>
          </div>

          <!-- Map & Visit Info -->
          <div class="space-y-8">
            <!-- Google Map -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md">
              <h3 class="text-2xl font-bold text-gray-800 p-6 pb-4">Lokasi Kami</h3>
              <div class="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.194830499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <!-- Visit Info -->
            <div class="bg-gray-50 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-gray-800 mb-4">Kunjungi Academy Kami</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Kami sangat senang jika Anda mengunjungi langsung fasilitas kami. Lihat sendiri lapangan dan fasilitas berkelas yang kami miliki.
              </p>
              <ul class="space-y-4 text-gray-700">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Kunjungan bebas pada jam operasional</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span>Hubungi untuk jadwalkan tour fasilitas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Custom styles jika diperlukan */
</style>