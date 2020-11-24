<template>
    <div class="sticky-menu">
        <menu-items />
    </div>
</template>

<script>
    import MenuItems from "~/components/menuItems";

    export default {
        name: "StickyMenu",
        components: { MenuItems }
    }
</script>

<style lang="scss" scoped>
    .sticky-menu {
        position   : sticky;
        top        : 0;
        background : #8f9e92dd;
        height     : 50px;
        z-index    : 500;
        padding    : 24px;
        margin     : 12px 0 ;
        box-shadow                 : 0 5px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

        //width : calc(100% - (168px + 48px));

        @media ('max-width: 1440px') {
            width : calc(100% - 88px);
        }
    }
</style>
