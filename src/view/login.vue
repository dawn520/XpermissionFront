<template>
    <transition mode="out-in"
                v-on:enter="enter"
                v-on:leave="leave"
                v-bind:css="false"
                appear
                v-on:before-appear="beforeAppear"
                v-on:appear="appear"
                v-on:after-appear="">
        <login-box></login-box>
    </transition>
</template>
<script>
    import loginBox from '../components/login-box.vue';

    import Velocity from '../assets/js/velocity.min';
    import velocity from '../assets/js/velocity.min';
    import '../assets/js/velocity.ui';
    import '../plugins/iCheck/icheck.min.js';
    import '../plugins/iCheck/square/blue.css'

    export default {
        data:function () {
            return {
                title: '首页',
                smallTitle: '这里是首页',

            }
        },
        created:function (){
            $(function () {
                $('body').attr('class','hold-transition login-page');
                $('input').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue',
                    increaseArea: '20%' // optional
                });
            });
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
                el.style = 'display:none;';
            },
            appear:function (el,done) {
                Velocity(el, "transition.bounceRightIn", { duration: 800,delay:200}, done);
                // el.style = 'animated lightSpeedIn aConfigDelay';
                // done;
            }

        },
        components: {
            loginBox,
        }
    }
</script>
<style>
    @import "../assets/css/animate.css";


</style>