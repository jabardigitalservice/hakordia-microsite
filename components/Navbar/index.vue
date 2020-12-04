<template>
  <nav class="bg-white z-30 fixed top-0 py-6 w-full">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-24">
      <div class="relative flex justify-between h-16">
        <!-- mobile menu botton -->
        <!-- <MobileMenuButton /> -->
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <nuxt-link to="/">
              <img
                class="block w-auto mr-4"
                src="/icons/logo_hakordia.png"
                alt="logo hakordia"
              />
            </nuxt-link>

            <nuxt-link to="/">
              <img
                class="block w-auto"
                src="/icons/logo_pemprov_jawa_barat.png"
                alt="logo pemprov jabar"
              />
            </nuxt-link>
          </div>

          <!-- menu -->
          <!-- <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium text-gray-900"
              >
                menu 1
              </a>
              <a
                href="#"
                class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                menu 2
              </a>
            </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import MobileMenuButton from '@/components/MobileMenuButton'
export default {
  // components: { MobileMenuButton },
}
</script>

<style></style>
