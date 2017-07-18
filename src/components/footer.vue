<style>
  .footer-text {
    color: whitesmoke;
  }
</style>

<template>
  <footer class="container">
    <span class="col-xs-4 col-xs-offset-4 text-center footer-text">{{text}}</span>
  </footer>
</template>

<script>
  import Service from './common'
  export default {
    data(){
      return {
        text: ""
      }
    },
    methods: {
      footer() {
        Service.footerText().then((data) => {
          this.text = data
        })
      }

    },
    created(){
      this.footer()
    }

  }
</script>
