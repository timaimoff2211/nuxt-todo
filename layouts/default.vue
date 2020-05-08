<template>
  <div>
    <Header v-bind:userToken="userToken" />
    <div class="container offset">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  export default {
    components: {
      Header, Footer
    },
    computed: {
      userToken() {
        return this.$store.getters['users/hasToken'];
      }
    }
  }
</script>

<style scoped>
  .offset {
    padding: 100px 0;
  }
</style>
