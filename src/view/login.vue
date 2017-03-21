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




    export default {
        data:function () {
            return {
                title: '首页',
                smallTitle: '这里是首页',

            }
        },
        created:function (){
            this.$nextTick(function () {
                $('body').attr('class','hold-transition login-page');
            });
        },
 //       beforeRouteEnter:function(to, from, next) {

//            this.$http.get('/someUrl', [options]).then(function(response){
//                // 响应成功回调
//            }, function(response){
//                // 响应错误回调
//            });
 //       },
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