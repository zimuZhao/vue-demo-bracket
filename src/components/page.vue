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

  import '@/vendors/retina.min'
  import '@/vendors/jquery.nicescroll.min'


  export default {
    components: {
      vHeaderbar,
      vLeftpanel,
      vFooter
    },
    created(){


      $("html").niceScroll();

      $(window).resize(function () {
        if ($('body').css('position') == 'relative') {
          $('body').removeClass('leftpanel-collapsed chat-view');
        } else {
          $('body').removeClass('chat-relative-view');
          $('body').css({left: '', marginRight: ''});
        }
      });


    },
    mounted(){
      // ends Page Preloader
      $('#preloader').delay(350).fadeOut(function () {
        $('body').delay(350).css({'overflow': 'visible'});
      });
    }
  }
</script>
