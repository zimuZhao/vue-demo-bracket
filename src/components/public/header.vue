<style>
  .headerbar {
    border-left: 1px solid #eee;
    background: #fff;
  }

  .headerbar::after {
    clear: both;
    display: block;
    content: '';
  }

  /***** HEADER LEFT *****/

  .menutoggle {
    float: left;
    width: 50px;
    height: 50px;
    font-size: 22px;
    cursor: pointer;
    float: left;
    color: #1d2939;
    border-right: 1px solid #eee;
    -moz-transition: all 0.2s ease-out 0s;
    -webkit-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
  }

  .menutoggle:hover {
    color: #1d2939;
    background-color: #f7f7f7;
  }

  .menutoggle .fa {
    margin: 14px 0 0 15px;
  }

  .header-left {
    float: left;
  }

  /***** HEADER RIGHT *****/

  .header-right {
    float: right;
  }

  .headermenu {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .headermenu:after {
    clear: both;
    display: block;
    content: '';
  }

  .headermenu > li {
    display: inline-block;
    float: left;
    border-left: 1px solid #eee;
    position: relative;
  }

  .headermenu .dropdown-toggle {
    padding: 12px 10px;
    border-color: #fff;
    background: #fff;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }

  .headermenu .dropdown-toggle:hover, .headermenu .dropdown-toggle:focus, .headermenu .dropdown-toggle:active, .headermenu .dropdown-toggle.active, .headermenu .open .dropdown-toggle.dropdown-toggle {
    background: #f9f9f9;
    color: #333;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .headermenu .dropdown-toggle img {
    vertical-align: middle;
    margin-right: 5px;
    width: 26px;
    -moz-border-radius: 50px;
    -webkit-border-radius: 50px;
    border-radius: 50px;
  }

  .headermenu .dropdown-toggle .caret {
    margin-left: 5px;
  }

  .headermenu .dropdown-menu {
    border: 0;
    margin-top: 0px;
    margin-right: -1px;
    -moz-border-radius: 2px 0 2px 2px;
    -webkit-border-radius: 2px 0 2px 2px;
    border-radius: 2px 0 2px 2px;
    -moz-box-shadow: 3px 3px 0 rgba(12, 12, 12, 0.05);
    -webkit-box-shadow: 3px 3px 0 rgba(12, 12, 12, 0.05);
    box-shadow: 3px 3px 0 rgba(12, 12, 12, 0.05);
    padding: 5px;
  }

  .headermenu .dropdown-menu:after {
    border-bottom: 6px solid #1d2939;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    content: "";
    display: inline-block;
    right: 17px;
    position: absolute;
    top: -6px;
  }

  .headermenu .dropdown-menu li {
    display: block;
    margin: 0;
    float: none;
    background: none;
    padding: 15px 5px;
  }

  .headermenu .dropdown-menu-usermenu li {
    padding: 0;
  }

  .headermenu .dropdown-menu-usermenu:after {
    right: 95px;
  }

  .headermenu .dropdown-menu li a {
    color: #94989d;
    font-size: 13px;
    padding: 7px 10px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    -moz-transition: all 0.2s ease-out 0s;
    -webkit-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
  }

  .headermenu .dropdown-menu li a:hover {
    background: #1caf9a;
    color: #fff;
  }

  .headermenu .dropdown-menu li i {
    font-size: 11px;
    margin-right: 5px;
  }

  .headermenu .dropdown-menu-head {
    padding: 0;
    min-width: 300px;
  }

  .headermenu .tp-icon {
    padding: 12px 15px;
    height: 50px;
    font-size: 16px;
    background: #fff;
    color: #333;
    border-color: #fff;
    -moz-transition: all 0.2s ease-out 0s;
    -webkit-transition: all 0.2s ease-out 0s;
    transition: all 0.2s ease-out 0s;
  }

  .headermenu .tp-icon + .dropdown-menu:after {
    right: 17px;
  }

  .headermenu .chat-icon {
    border-right: 0;
  }

  .headermenu .dropdown-menu-usermenu {
    background: #1d2939;
    min-width: 200px;
  }

  .headermenu .dropdown-menu-head ul {
    border: 1px solid #ddd;
    border-top: 0;
    padding: 0 10px;
  }

  .headermenu .dropdown-menu-head li a {
    color: #333;
    padding: 0;
    opacity: 1;
  }

  .headermenu .dropdown-menu-head li a:hover {
    background: none;
    color: #428BCA;
    text-decoration: none;
  }

  .headermenu .btn-group {
    margin-bottom: 0;
  }

  .dropdown-list li {
    padding: 15px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
  }

  .dropdown-list li:last-child {
    border-bottom: 0;
  }

  .dropdown-list .thumb {
    width: 36px;
    float: left;
  }

  .dropdown-list .thumb img {
    width: 100%;
    display: block;
    vertical-align: middle;
  }

  .dropdown-list .desc {
    margin-left: 45px;
    display: block;
  }

  .dropdown-list .desc h5 {
    font-size: 13px;
    margin-top: 7px;
  }

  .dropdown-list li:last-child {
    padding: 7px 5px;
  }

  .dropdown-list li .badge {
    float: right;
  }

  .user-list {
    width: 300px;
  }

  .gen-list li a {
    display: block;
  }

  .gen-list li a:hover {
    color: #333 !important;
    text-decoration: none;
  }

  .gen-list li .name {
    font-size: 13px;
    line-height: 21px;
    display: block;
  }

  .gen-list li .msg {
    font-size: 11px;
    line-height: normal;
    color: #999;
    display: block;
  }

</style>

<template>

  <div class="headerbar">

    <!-- control leftpanel -->
    <a class="menutoggle" @click="menuClick">
      <i class="fa fa-bars"></i>
    </a>

    <!-- user's operate -->
    <div class="header-right">
      <ul class="headermenu">
        <li>
          <div class="btn-group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              &nbsp;&nbsp;
              {{headerData.userName}}
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropdown-menu-usermenu pull-right">
              <li>
                <a href="user/profile">
                  <i class="fa fa-user"></i>
                  My Profile
                </a>
              </li>
              <li>
                <a href="user/change-password">
                  <i class="fa fa-key"></i>
                  Change password
                </a>
              </li>
              <li>
                <a href="user/help">
                  <i class="fa fa-question-circle"></i>
                  Help
                </a>
              </li>
              <li>
                <a href="user/logout">
                  <i class="fa fa-sign-out"></i>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- /ends user's operate -->
  </div>

</template>
<script>
  import Service from './common'
  import Q from 'q'
  export default {
    data() {
      return {
        headerData: {
          userName: "",
          navList: []
        }
      }
    },
    methods: {
      // init data
      headerDataInit() {
        let _vm = this
        Q.all([Service.userName(), Service.navList()]).then((data) => {
          let rtnData = {
            userName: data[0],
            navList: data[1]
          }
          _vm.headerData = Object.assign({}, rtnData)
        })
      },
      // show/hidden left panel
      menuClick() {
        let body = jQuery('body');
        let bodypos = body.css('position');

        if (bodypos != 'relative') {
          if (!body.hasClass('leftpanel-collapsed')) {
            body.addClass('leftpanel-collapsed');
            jQuery('.nav-bracket ul').attr('style', '');
            jQuery(this).addClass('menu-collapsed');
          } else {
            body.removeClass('leftpanel-collapsed chat-view');
            jQuery('.nav-bracket li.active ul').css({display: 'block'});
            jQuery(this).removeClass('menu-collapsed');
          }
        } else {
          if (body.hasClass('leftpanel-show'))
            body.removeClass('leftpanel-show');
          else
            body.addClass('leftpanel-show');
          //Adjust mainpanel height
          let docHeight = jQuery(document).height();
          if (docHeight > jQuery('.mainpanel').height())
            jQuery('.mainpanel').height(docHeight);

        }
      }// ends menuClick

    },
    created() {
      this.headerDataInit()
    }
  }
</script>
