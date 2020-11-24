<template>
    <div class="menu-container">
        <div class="menu-logo">
            <img class="logo" src="~/assets/img/werkplaats75c.png" />
        </div>
        <div class="right-menu-container">
<!--            <menu-items />-->

            <div class="image-container">
                <transition name="fade" mode="out-in">
                    <img class="img" :key="image" :src="image">
                </transition>
            </div>
        </div>
        <div v-if="scrolledDown" class="sticky-menu">

        </div>
    </div>
</template>

<script>
    import MenuItems from "~/components/menuItems";

    export default {
        name: "MenuComponent",
        components: { MenuItems },
        data() {
            return {
                menuImage: '/',
            }
        },
        computed: {
            image() {
                return this.$store.state.menu.image;
            },
            scrolledDown() {
                if (process.client)
                    return (window.pageYOffset >= 100);
                return false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .router-link-exact-active {
        padding-bottom  : 16px;
        text-decoration : underline;
    }

    .menu-container {
        background      : #8f9e92;
        display         : flex;
        justify-content : space-between;
        box-shadow      : 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

        @media ('max-width: 992px') {
            height          : 30vw;
            justify-content : start;
        }
    }

    .logo {
        height : 100%;

        @media ('max-width: 1280px') {
            width  : 100%;
            height : auto;
        }
    }

    .menu-logo {
        width : 30%;

        @media ('max-width: 992px') {
            width : 35%;
        }
    }

    .right-menu-container {
        width          : 70%;
        display        : flex;
        flex-direction : column;
        position: sticky;
    }

    .img {
        width      : 80%;
        box-shadow : 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }

    .image-container {
        width           : 100%;
        display         : flex;
        align-content   : center;
        justify-content : center;
        margin-top      : 24px;

        @media ('max-width: 992px') {
            display : none;
        }
    }

    .calendar-icon-container {
        text-align      : right;
        justify-content : right;
        display         : flex;
        align-content   : flex-end;
        flex-direction  : row;

        a {
            @media('max-width : 920px') {
                width : 100%;
                .calendar-icon {
                    width      : 100%;
                    text-align : center;


                }
            }
            @media ('max-width : 500px') {
                .calendar-icon {
                    text-align : left;
                    width      : 100%;
                }
            }
        }
    }

    .calendar-icon {
        width                      : 80px;
        text-align                 : right;
        margin-left                : auto;
        transition-property        : transform, filter;
        transition-duration        : .3s;
        transition-timing-function : cubic-bezier(1.5, 2, 0.175, 1);


        &:hover {
            transform : scale(1.1);
            filter    : drop-shadow(0 3px 6px rgba(0, 0, 0, 0.35));
        }

        @media ('max-width: 992px') {
            margin-top     : 5px;
            display        : flex;
            flex-direction : row;
            &:after {
                content : "Kalender";
                width   : 100%;
            }
        }

        img {
            width : 100%;

            @media ('max-width: 992px') {
                display : none;
            }
            /*-webkit-filter: drop-shadow(2px 2px 1px #fff);*/

            /*border-radius: 4px;*/
        }
    }
</style>
