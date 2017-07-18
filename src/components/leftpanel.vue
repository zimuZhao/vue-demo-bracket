<style>
  .leftpanel {
    width: 240px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .logopanel {
    padding: 10px;
    background: #fff;
  }

  .logopanel h1 {
    font-size: 30px;
    letter-spacing: -1.5px;
    color: #1d2939;
    line-height: 30px;
    margin: 0;
  }

  .logopanel h1 span {
    color: #1caf9a;
  }

  .leftpanelinner {
    padding: 5px 15px;
  }

  .leftpanel .userlogged {
    margin: 0;
    padding: 0;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: none;
  }

  .leftpanel .userlogged .media-object {
    width: 40px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;
    border-radius: 100px;
    float: left;
    border: 2px solid #1CAF9A;
    padding: 2px;
    margin-left: 2px;
  }

  .leftpanel .userlogged .media-body {
    margin-left: 50px;
    color: #ccc;
  }

  .leftpanel .userlogged .media-body h4 {
    font-size: 15px;
    margin: 0;
  }

  .leftpanel .userlogged .media-body span {
    font-style: italic;
    font-size: 11px;
    opacity: 0.5;
  }

  /***** NAVIGATION STYLES *****/

  .sidebartitle {
    font-size: 11px;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 10px;
  }

  .nav-bracket {
    margin-bottom: 30px;
  }

  .nav-bracket > li > a {
    color: #8f939e;
    padding: 7px 10px;
  }

  .nav-bracket > li > a:hover, .nav-bracket > li > a:active, .nav-bracket > li > a:focus {
    background-color: #fff;
    color: #1d2939;
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  .nav-bracket > li.nav-parent > a {
    background: transparent url('../assets/images/plus-white.png') no-repeat 92% center;
  }

  .nav-bracket > li.nav-parent > a:focus {
    background-color: unset;
    color: #8F939E;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .nav-bracket > li.nav-parent > a:hover, .nav-bracket > li.nav-parent > a:active {
    color: #1d2939;
    background-color: #fff;
    background-image: url('../assets/images/plus.png');
  }

  .nav-bracket > li.nav-active > a {
    background-color: #fff;
    background-image: url('../assets/images/minus.png');
    color: #1d2939;
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  .nav-bracket > li.nav-active > a:hover {
    background-image: url('../assets/images/minus.png');
    background-repeat: no-repeat;
  }

  .nav-bracket > li.nav-active > a:focus {
    color: #1d2939;
  }

  .nav-bracket > li > a.active {
    background-color: #1caf9a;
    color: #fff;
    -moz-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 3px 0 rgba(0, 0, 0, 0.2);
  }

  .nav-bracket > li.nav-parent.active > a {
    background-image: url('../assets/images/plus.png');
  }

  .nav-bracket > li.nav-active.active > a {
    background-image: url('../assets/images/minus.png');
  }

  .nav-bracket > li.nav-active.active > a:hover {
    background-image: url('../assets/images/minus.png');
  }

  .nav-bracket li .fa, .nav-bracket li .glyphicon {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 10px;
    width: 16px;
    text-align: center;
  }

  .nav-bracket > li > a > .badge {
    margin-top: 2px;
  }

  .nav-bracket .children {
    list-style: none;
    display: none;
    margin: 5px 0;
    padding: 0;
  }

  .nav-bracket .children > li > a {
    color: #94989d;
    font-size: 13px;
    display: block;
    padding: 5px 0 5px 27px;
    -moz-transition: all 0.2s ease-out 0s;
    -webkit-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
  }

  .nav-bracket .children > li > a > span {
    margin-top: 2px;
  }

  .nav-bracket .children > li > a:hover, .nav-bracket .children > li > a:active, .nav-bracket .children > li > a:focus, .nav-bracket .children > li > a.active {
    text-decoration: none;
    color: #1caf9a;
  }

  .nav-bracket .children > li .fa {
    font-size: 12px;
    opacity: 0.5;
    margin-right: 5px;
    text-align: left;
    width: auto;
    vertical-align: baseline;
  }

  .nav-bracket .children > li.active > a {
    color: #1caf9a;
  }

  .nav-bracket .children ul {
    margin-left: 12px;
    border: 0;
  }

  /********** LEFT PANEL COLLAPSED **********/

  .leftpanel-collapsed .logopanel {
    display: none;
  }

  .leftpanel-collapsed .headerbar {
    margin-left: -50px;
  }

  .leftpanel-collapsed .leftpanel {
    width: 50px;
    top: 50px;
  }

  .leftpanel-collapsed .leftpanelinner {
    padding: 0;
  }

  .leftpanel-collapsed .leftpanelinner .sidebartitle {
    display: none;
  }

  .leftpanel-collapsed .nav-bracket {
    margin: 5px;
  }

  .leftpanel-collapsed .nav-bracket li a {
    text-align: center;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    padding: 10px;
    position: relative;
  }

  .leftpanel-collapsed .nav-bracket > li > a:hover {
    border-radius: 2px 0 0 2px;
  }

  .leftpanel-collapsed .nav-bracket > li.nav-parent > a {
    background-image: none;
  }

  .leftpanel-collapsed .nav-bracket > li > a > span:last-child {
    position: absolute;
    background: #fff;
    padding: 10px 10px 10px 5px;
    left: 40px;
    top: 0;
    min-width: 209px;
    text-align: left;
    z-index: 100;
    display: none;
    -moz-box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
    -webkit-box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
    box-shadow: 0 3px 0 rgba(12, 12, 12, 0.03);
    -moz-border-radius: 0 2px 2px 0;
    -webkit-border-radius: 0 2px 2px 0;
    border-radius: 0 2px 2px 0;
  }

  .leftpanel-collapsed .nav-bracket > li > a .badge {
    display: none;
  }

  .leftpanel-collapsed .nav-bracket > li.active > a > span:last-child {
    -moz-border-radius: 0 2px 0 0;
    -webkit-border-radius: 0 2px 0 0;
    border-radius: 0 2px 0 0;
  }

  .leftpanel-collapsed .nav-bracket ul {
    display: none;
  }

  .leftpanel-collapsed .nav-bracket > li.nav-hover > a {
    background: #fff;
    color: #1d2939;
  }

  .leftpanel-collapsed .nav-bracket > li.nav-hover.active > a {
    background: #1CAF9A;
    color: #fff;
  }

  .leftpanel-collapsed .nav-bracket > li.nav-hover > a > span:last-child {
    display: block;
  }

  .leftpanel-collapsed .nav-bracket > li.nav-hover.active > a > span:last-child {
    background: #1CAF9A;
    color: #fff;
  }

  .leftpanel-collapsed .nav-bracket li.nav-hover ul {
    display: block;
    position: absolute;
    top: 41px;
    left: 45px;
    margin: 0;
    min-width: 204px;
    background: #1d2939;
    z-index: 100;
    -moz-border-radius: 0 0 2px 0;
    -webkit-border-radius: 0 0 2px 0;
    border-radius: 0 0 2px 0;
  }

  .leftpanel-collapsed .nav-bracket ul a {
    text-align: left;
    padding: 6px 10px;
    padding-left: 0;
  }

  .leftpanel-collapsed .nav-bracket ul a:hover {
    background: none;
  }

  .leftpanel-collapsed .nav-bracket li a i {
    margin-right: 0;
  }

  .leftpanel-collapsed .mainpanel {
    margin-left: 50px;
  }

  .leftpanel-collapsed .infosummary {
    display: none;
  }

  .leftpanel-collapsed .sticky-leftpanel {
    overflow-y: visible;
  }

  .leftpanel-collapsed .nav-bracket .children {
    display: none;
  }

</style>

<template>
  <div class="leftpanel">

    <div class="logopanel">
      <h1>
        <span>[</span>
        {{leftData.menuName}}
        <span>]</span>
      </h1>
    </div>

    <div class="leftpanelinner">

      <!--<h5 class="sidebartitle">Navigation</h5>-->
      <ul class="nav nav-pills nav-stacked nav-bracket">
        <li>
          <a href="/home" :active="active">
            <i class="fa fa-home"></i>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/list" :active="active">
            <i class="fa fa-list"></i>
            <span>List</span>
          </a>
        </li>
        <li>
          <a href="modals" active="active">
            <span class="pull-right badge badge-success">2</span>
            <i class="fa fa-suitcase"></i>
            <span>Modals</span>
          </a>
        </li>
        <li class="nav-parent">
          <a>
            <i class="fa fa-edit"></i>
            <span>Forms</span>
          </a>
          <ul class="children">
            <li>
              <a href="forms/general" active="active">
                <i class="fa fa-caret-right"></i>
                General Forms
              </a>
            </li>
            <li>
              <a href="forms/table" active="active">
                <i class="fa fa-caret-right"></i>
                Table
              </a>
            </li>
            <li>
              <a href="forms/uregister" active="active">
                <i class="fa fa-caret-right"></i>
                Uregister
              </a>
            </li>
          </ul>
        </li>
      </ul>

    </div>
    <!-- /ends leftpanel -->
  </div>

</template>

<script>
  import Service from './common'
  export default {
    data(){
      return {
        leftData: {
          menuName: "",
          leftMenu: [{
            name: "",
            link: "/",
            faClass: ""
          }]
        }
      }
    },
    mounted(){
      let _vm = this;

      // Toggle Left Menu
      jQuery('body').on('click', '.leftpanel .nav-parent > a', function () {
        var parent = jQuery(this).parent();
        var sub = parent.find('> ul');
        // Dropdown works only when leftpanel is not collapsed
        if (!jQuery('body').hasClass('leftpanel-collapsed')) {
          if (sub.is(':visible')) {
            sub.slideUp(200, function () {
              parent.removeClass('nav-active');
              jQuery('.mainpanel').css({height: ''});
              _vm.adjustmainpanelheight();
            });
          } else {
            _vm.closeVisibleSubMenu();
            parent.addClass('nav-active');
            sub.slideDown(200, function () {
              _vm.adjustmainpanelheight();
            });
          }
        }
        return false;
      });

      // Add class everytime a mouse pointer hover over it
      jQuery('.nav-bracket > li').hover(function () {
        jQuery(this).addClass('nav-hover');
      }, function () {
        jQuery(this).removeClass('nav-hover');
      });

      // Check if leftpanel is collapsed
      if (jQuery('body').hasClass('leftpanel-collapsed'))
        jQuery('.nav-bracket .children').css({display: ''});
    },
    methods: {
      // init data
      leftDataInit() {
        let _vm = this;
        Q.all([Service.menuName(), Service.leftMenu()]).then((data) => {
          let rtnData = {
            menuName: data[0],
            leftMenu: data[1]
          }
          _vm.leftData = Object.assign({}, rtnData)
        })
      },

      closeVisibleSubMenu() {
        jQuery('.leftpanel .nav-parent').each(function () {
          var t = jQuery(this);
          if (t.hasClass('nav-active')) {
            t.find('> ul').slideUp(200, function () {
              t.removeClass('nav-active');
            });
          }
        });
      },
      adjustmainpanelheight() {
        var docHeight = jQuery(document).height();
        if (docHeight > jQuery('.mainpanel').height())
          jQuery('.mainpanel').height(docHeight);
      }


    },
    created(){
      this.leftDataInit();
    }

  }

</script>
