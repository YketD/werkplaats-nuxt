<template>
    <div class="menu-options">
        <nuxt-link class="menu-item" to="/">Home</nuxt-link>
        <nuxt-link class="menu-item" to="/contact">Contact</nuxt-link>
        <nuxt-link class="menu-item highlight" to="/werkplek-huren">Werkplek huren</nuxt-link>
        <nuxt-link class="menu-item highlight" to="/reserveren">Ruimte reserveren</nuxt-link>
        <div class="calendar-icon-container menu-item">
            <a href="https://www.supersaas.nl/schedule/werkplaats75c/ruimte_reserveren" target="_blank">
                <div class="calendar-icon">
                    <img class="icon" src="~/assets/img/calendar-2.png" />
                </div>
            </a>
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
        width                 : 100%;
        display               : grid;
        grid-template-columns : repeat(5, 1fr);
        height                : 15px;
        justify-content       : flex-end;
        margin-bottom         : 24px;
        font-family           : 'Poppins', sans-serif;
        font-weight           : 300;
        font-size             : 32px;

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
        margin: 0 24px;
        display: inline-block;
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

    a {
        color   : white;
        padding : 12px;

        &.highlight {
            height        : 24px;
            background    : #e88a60;
            border-radius : 2px;
            box-shadow    : 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
        }
    }
</style>
