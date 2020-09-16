<template>
    <div id="app">
        <transition name="fade" mode="in">
            <menu-component :image="image" class="menu-component" />
        </transition>
        <nuxt />
        <notifications group="reservations" />
        <notifications group="error" />
    </div>
</template>

<script>
    import MenuComponent from '../components/MenuComponent';

    export default {
        name: 'app',
        components: { MenuComponent },
        data() {
            return {
                image: this.$store.state.menu.image,
            }
        },
    }
</script>

<style lang="scss" scoped>
    /*@import "./style/app.scss";*/

    #app {
        font-family             : "Helvetica Neue", Arial, sans-serif;
        font-family             : 'Poppins', sans-serif;

        -webkit-font-smoothing  : antialiased;
        -moz-osx-font-smoothing : grayscale;
        text-align              : center;
        margin                  : 84px;

        @media ('max-width: 1440px') {
            margin : 44px
        }

        @media ('max-width: 500px') {
            margin : 12px
        }
    }

    .error {
        background : red;
    }

    .menu-component {
        height        : 350px;
        margin-bottom : 0;
        padding       : 24px;

        @media ('max-width: 920px') {
            height : 28vw;
        }

        @media ('max-width : 500px') {
            margin-bottom : 12px;
        }
    }
</style>
