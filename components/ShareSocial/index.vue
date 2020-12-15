<template>
  <div class="flex">
    <ShareNetwork
      v-for="network in networks"
      :key="network.network"
      :network="network.network"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :quote="sharing.quote"
      :hashtags="sharing.hashtags"
    >
      <img class="mr-4" :src="network.icon" alt="icon media social" />
    </ShareNetwork>

    <img
      class="w-16 cursor-pointer"
      src="/icons/share_link.svg"
      alt="share link icon"
      @click="copyUrl"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sharing: {
        url: process.env.baseUrl,
        title: 'Sampurasun, Wargi Jabar!',
        description: `Kamu Anti-Korupsi? Yuk Buat Komitmen Anti Korupsimu di Sini. ${process.env.baseUrl} \n Wujudkan Jawa Barat bebas korupsi dengan ikut menandatangani petisi online untuk mewujudkan Jawa Barat Juara Tanpa Korupsi. \n
#JabarAntiKorupsi \n#JabarJuara`,
        quote: 'Jabar Juara Tanpa Korupsi. Integritas Terjaga Kala Pandemi.',
        hashtags: 'HakordiaJabar2020',
      },
      networks: [
        {
          network: 'facebook',
          name: 'Facebook',
          icon: require('static/icons/fb_icon.png'),
          color: '#1877f2',
        },
        {
          network: 'whatsapp',
          name: 'Whatsapp',
          icon: require('static/icons/wa_icon.png'),
          color: '#25d366',
        },
      ],
    }
  },
  methods: {
    async copyUrl() {
      try {
        await this.$copyText(this.sharing.url)
        this.$toast.success('URL disalin')
      } catch (_) {}
    },
  },
}
</script>

<style></style>
