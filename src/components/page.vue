<template>

  <section>

    <div id="preloader">
      <div id="status">
        <i class="fa fa-spinner fa-spin"></i>
      </div>
    </div>

    <v-leftpanel/>

    <div class="mainpanel">
      <v-headerbar/>
      <div class="contentpanel">
        <slot></slot>
      </div>
    </div>

    <v-footer/>

  </section>
</template>
<script>
  import "@/assets/styles/style.default.css"
  import vHeaderbar from './header.vue'
  import vLeftpanel from './leftpanel.vue'
  import vFooter from './footer.vue'
  import '@/vendors/toggles.min'
  import '@/vendors/retina.min'
  //  import '@/vendor/jquery.cookies'
  import '@/vendors/jquery.nicescroll.min'
  import './custom'


  export default {
    components: {
      vHeaderbar,
      vLeftpanel,
      vFooter
    }
  }
</script>
