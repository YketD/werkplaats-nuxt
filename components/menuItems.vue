<template>
    <div class="menu-options">
        <div>
            <nuxt-link class="menu-item lowlight" to="/">
                <div>Home</div>
            </nuxt-link>
            <nuxt-link class="menu-item lowlight" to="/contact">
                <div>Contact</div>
            </nuxt-link>
            <nuxt-link class="menu-item highlight" to="/werkplek-huren">
                <div>Werkplek huren</div>
            </nuxt-link>
            <nuxt-link class="menu-item highlight" to="/reserveren">
                <div>Ruimte reserveren</div>
            </nuxt-link>
<!--            <div class="calendar-icon-container menu-item">-->
<!--                <a href="https://www.supersaas.nl/schedule/werkplaats75c/ruimte_reserveren" target="_blank">-->
<!--                    <div class="calendar-icon">-->
<!--                        <img class="icon" src="~/assets/img/calendar-2.png" />-->
<!--                    </div>-->
<!--                </a>-->
<!--            </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "menuItems"
    }
</script>

<style lang="scss" scoped>
    .menu-options {
        width           : 100%;
        display         : flex;
        justify-content : flex-end;
        font-family     : 'Poppins', sans-serif;
        font-weight     : 300;
        font-size       : 32px;

        div {
            background: #8f9e92;
            padding: 12px;
        }

        @media ('max-width: 1620px ') {
            font-size : 28px;
        }

        @media ('max-width: 1420px') {
            font-size : 24px;
        }

        @media ('max-width: 1280px') {
            font-size : 20px;
        }

        @media ('max-width: 992px') {
            flex-direction : column;
            font-size      : 32px;
            height         : 100%;
        }

        @media('max-width: 720px') {
            font-size  : 24px;
            text-align : left;
        }

        @media ('max-width: 500px') {
            font-size    : 18px;
            padding-left : 12px;
        }
    }

    .menu-item {
        height                     : 100%;
        transition-property        : transform, text-shadow;
        transition-duration        : .3s;
        margin                     : 0 12px;
        display                    : inline-block;
        transition-timing-function : cubic-bezier(1.5, 2, 0.175, 1);

        &:hover {
            transform   : scale(1.1);
            text-shadow : 0 3px 6px rgba(0, 0, 0, 0.35);

            @media('max-width: 1024px') {
                transform   : none;
                text-shadow : none;
            }
        }

        @media ('max-width : 992px') {
            padding   : 0;
            font-size : 3vw;
        }
        @media ('max-width : 500px') {
            font-size : 13px;
            height    : 20%;
        }
    }

    .calendar-icon-container {
        display    : inline;
        max-height : 50px;

        a {
            max-height : 100%;
            padding    : 0;
            display    : inline-block;

            .calendar-icon {
                max-height : 100%;
                padding: 0;

                img {
                    width      : 60px;
                    max-height : 100%;
                    padding: 0;
                }
            }
        }
    }

    a {
        color     : white;
        padding   : 12px;
        font-size : 20px;


        &.highlight {
            padding     : 0;
            line-height : 50px;

            div {
                padding       : 0 24px;
                height        : 50px;
                display       : inline-block;
                background    : #e88a60;
                border-radius : 7px;
                box-shadow    : 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }
        }

        &.lowlight {
            padding     : 0;
            line-height : 50px;

            div {
                padding       : 0 24px;
                height        : 50px;
                display       : inline-block;
                background    : rgb(143, 158, 146);
                border-radius : 7px;
                box-shadow    : 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
            }

        }
    }
</style>
