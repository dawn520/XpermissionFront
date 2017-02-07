<template>
    <div class="wrapper">
        <transition appear
                    appear-class=""
                    appear-active-class="animated fadeInDown">
            <component-header></component-header>
        </transition>
        <transition appear
                    appear-class=""
                    appear-active-class="animated fadeInLeft">
            <component-aside></component-aside>
        </transition>
        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <transition mode="out-in"
                        v-on:enter="enter"
                        v-on:leave="leave"
                        v-bind:css="false"
                        appear
                        v-on:before-appear="beforeAppear"
                        v-on:appear="appear"
                        v-on:after-appear="">
                <router-view></router-view>
            </transition>
        </div>
        <!-- /.content-wrapper -->
        <transition appear
                    appear-class=""
                    appear-active-class="animated fadeInUp">
        <component-footer></component-footer>
        </transition>
        <component-right-aside></component-right-aside>
    </div>
    <!-- ./wrapper -->
</template>
<script>
    import componentHeader from '../components/header.vue';
    import componentAside from '../components/aside.vue';

    import componentFooter from '../components/footer.vue';
    import componentRightAside from '../components/right-aside.vue';

    import Velocity from '../assets/js/velocity.min';
    import velocity from '../assets/js/velocity.min';
    import '../assets/js/velocity.ui';
    import '../assets/js/app.js';

    export default {
        data:function () {
            return {
                title: '首页',
                smallTitle: '这里是首页',
            }
        },
        created:function (){
            $('body').attr('class','hold-transition skin-blue sidebar-mini');
            this.loopFix();
        },
        watch: {
            '$route': function () {
            }
        },
        methods: {
            beforeEnter: function (el) {

            },
            enter: function (el, done) {
                Velocity(el, "transition.bounceRightIn", 500, done);
            },
            leave: function (el, done) {
                Velocity(el, "transition.bounceRightOut", 500, done);
            },
            beforeAppear: function (el) {
                $(el).attr('style','display:none;');
                //严格模式下不可用改用jquery
                // el.style = 'display:none;';
            },
            appear:function (el,done) {
                Velocity(el, "transition.bounceRightIn", { duration: 800,delay:800}, done);
               // el.style = 'animated lightSpeedIn aConfigDelay';
               // done;
            },
            fix: function () {
                // Remove overflow from .wrapper if layout-boxed exists
                $(".layout-boxed > .wrapper").css('overflow', 'hidden');
                //Get window height and the wrapper height
                var footer_height = $('.main-footer').outerHeight() || 0;
                var neg = $('.main-header').outerHeight() + footer_height;
                var window_height = $(window).height();
                var sidebar_height = $(".sidebar").height() || 0;
                console.log(neg);
                //Set the min-height of the content and sidebar based on the
                //the height of the document.
                if ($("body").hasClass("fixed")) {
                    $(".content-wrapper, .right-side").css('min-height', window_height - footer_height);
                    console.log(1)
                } else {
                    var postSetWidth;
                    if (window_height >= sidebar_height) {
                        $(".content-wrapper").css('min-height', window_height - neg);
                        postSetWidth = window_height - neg;
                        console.log(postSetWidth);
                    } else {
                        $(".content-wrapper, .right-side").css('min-height', sidebar_height);
                        postSetWidth = sidebar_height;
                        console.log(3)
                    }

                    //Fix for the control sidebar height
                    var controlSidebar = $($.AdminLTE.options.controlSidebarOptions.selector);
                    if (typeof controlSidebar !== "undefined") {
                        if (controlSidebar.height() > postSetWidth)
                            $(".content-wrapper, .right-side").css('min-height', controlSidebar.height());
                    }
                }
            },
            loopFix:function () {
                var that = this;
                console.log('i can not find it!');
                if ($('.content-wrapper').length && $('.content-wrapper').length > 0) {
                    that.fix();
                    return;
                }
                setTimeout(function () {
                    that.loopFix();
                }, 10);
            }
        },
        components: {
            componentHeader,
            componentAside,
            componentFooter,
            componentRightAside
        }
    }
</script>
<style>
    @import "../assets/css/animate.css";
    .custom-appear-class{
        display: none;
    }

    .aConfig {
        animation-duration: .8s;
        -moz-animation-duration: .8s;
        -webkit-animation-duration: .8s;
        -o-animation-duration: .8s;
    }
    .aConfigDelay{
        animation-delay: .8s;
        -moz-animation-delay: .8s;
        -webkit-animation-delay: .8s;
        -o-animation-delay: .8s;
    }

</style>