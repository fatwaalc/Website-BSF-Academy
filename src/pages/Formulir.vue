<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Form data
const formData = ref({
  namaLengkap: '',
  email: '',
  noTelepon: '',
  namaSekolah: '',
  umur: '',
  jenisKelamin: '',
  program: '',
  pesan: ''
})

// Show success modal
const showSuccessModal = ref(false)

// Form submission
const submitForm = () => {
  // Validasi form
  if (!formData.value.namaLengkap || !formData.value.email || !formData.value.noTelepon || !formData.value.program) {
    alert('Mohon lengkapi semua data yang wajib diisi!')
    return
  }

  // Simulasi pengiriman form
  console.log('Form submitted:', formData.value)
  
  // Tampilkan modal sukses
  showSuccessModal.value = true
}

// Close modal dan redirect
const closeModal = () => {
  showSuccessModal.value = false
  
  // Reset form
  formData.value = {
    namaLengkap: '',
    email: '',
    noTelepon: '',
    namaSekolah: '',
    umur: '',
    jenisKelamin: '',
    program: '',
    pesan: ''
  }
  
  // Redirect ke halaman Akademi
  router.push({ name: 'Akademi' })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="bg-blue-600 rounded-t-3xl px-8 py-12 text-center">
        <h1 class="text-4xl font-bold text-white mb-3">
          Formulir Pendaftaran
        </h1>
        <p class="text-white/90 text-lg">
          Bergabunglah dengan Blue Shark Futsal Academy dan wujudkan impian menjadi atlet futsal profesional
        </p>
      </div>

      <!-- Form -->
      <div class="bg-white rounded-b-3xl shadow-xl p-8 md:p-12">
        
        <!-- Data Pendaftaran Section -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b-2 border-blue-600">
            Data Pendaftaran
          </h2>

          <form @submit.prevent="submitForm" class="space-y-6">
            
            <!-- Nama Lengkap Orang Tua / Wali -->
            <div>
              <label class="block text-gray-700 font-semibold mb-2">
                Nama Orang Tua / Wali <span class="text-red-500">*</span>
              </label>
              <input
                v-model="formData.namaLengkap"
                type="text"
                required
                placeholder="Masukkan nama lengkap orang tua/wali"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <!-- Email & No. Telepon -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-700 font-semibold mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
              <div>
                <label class="block text-gray-700 font-semibold mb-2">
                  No. Telepon / WhatsApp <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="formData.noTelepon"
                  type="tel"
                  required
                  placeholder="08xxxxxxxxxx"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <!-- Data Calon Peserta -->
            <div class="pt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg class="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Data Calon Peserta
              </h3>

              <div class="space-y-6">
                <!-- Nama Lengkap Calon Peserta -->
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">
                    Nama Lengkap Calon Peserta <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="formData.namaSekolah"
                    type="text"
                    required
                    placeholder="Masukkan nama lengkap calon peserta"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  />
                </div>

                <!-- Umur & Jenis Kelamin -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-gray-700 font-semibold mb-2">
                      Umur / Usia <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="formData.umur"
                      type="number"
                      required
                      placeholder="Contoh: 10"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label class="block text-gray-700 font-semibold mb-2">
                      Jenis Kelamin / Gender <span class="text-red-500">*</span>
                    </label>
                    <select
                      v-model="formData.jenisKelamin"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    >
                      <option value="" disabled>Pilih jenis kelamin</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                </div>

                <!-- Pilih Program -->
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">
                    Pilih Program yang Diminati <span class="text-red-500">*</span>
                  </label>
                  <select
                    v-model="formData.program"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  >
                    <option value="" disabled>Pilih program</option>
                    <option value="Junior Academy">Junior Academy (TK - Kelas 1 SD)</option>
                    <option value="Development Academy">Development Academy (Kelas 2-6 SD)</option>
                    <option value="Senior Academy">Senior Academy (SMP - SMA)</option>
                  </select>
                </div>

                <!-- Pesan / Catatan -->
                <div>
                  <label class="block text-gray-700 font-semibold mb-2">
                    Pesan / Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    v-model="formData.pesan"
                    rows="4"
                    placeholder="Tuliskan pertanyaan atau info tambahan yang ingin disampaikan (jika ada)"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            <!-- Info Text -->
            <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p class="text-sm text-gray-700 leading-relaxed">
                Dengan mengirimkan formulir ini, Anda menyatakan bahwa data yang diberikan adalah benar dan dapat dipertanggungjawabkan. Tim Blue Shark Futsal Academy akan menghubungi Anda untuk proses selanjutnya.
              </p>
            </div>

            <!-- Submit Button -->
            <div class="pt-6">
              <button
                type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Submit Pendaftaran
              </button>
            </div>

          </form>
        </div>

      </div>

      <!-- Back Button -->
      <div class="mt-6 text-center">
        <button
          @click="router.push({ name: 'Akademi' })"
          class="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center gap-2"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Akademi
        </button>
      </div>

    </div>

    <!-- Success Modal -->
    <Transition name="modal">
      <div 
        v-if="showSuccessModal"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        @click.self="closeModal"
      >
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-bounce-in">
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Success Icon -->
          <div class="flex justify-center mb-6">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <!-- Title -->
          <h2 class="text-3xl font-bold text-gray-800 mb-4 text-center">
            Selamat! 🎉
          </h2>

          <!-- Message -->
          <div class="text-center mb-6 space-y-3">
            <p class="text-gray-800 font-semibold text-lg">
              Terima kasih!
            </p>
            <p class="text-gray-700 leading-relaxed">
              Anda telah resmi menjadi calon peserta<br>
              <span class="text-blue-600 font-semibold">Blue Shark Futsal Academy</span>
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Tim kami akan segera menghubungi Anda melalui email atau telepon untuk proses selanjutnya dalam waktu 1x24 jam
            </p>
          </div>

          <!-- Success Message with Icon -->
          <div class="bg-green-50 border-l-4 border-green-600 p-4 rounded mb-6">
            <p class="text-green-700 text-sm font-semibold flex items-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Selamat bergabung dengan keluarga besar Blue Shark!
            </p>
          </div>

          <!-- Close Button -->
          <button
            @click="closeModal"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors duration-300"
          >
            Tutup
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .animate-bounce-in,
.modal-leave-active .animate-bounce-in {
  transition: transform 0.3s ease;
}

.modal-enter-from .animate-bounce-in {
  transform: scale(0.9);
}

.modal-leave-to .animate-bounce-in {
  transform: scale(0.9);
}

/* Bounce In Animation */
@keyframes bounceIn {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-bounce-in {
  animation: bounceIn 0.5s ease-out;
}
</style>