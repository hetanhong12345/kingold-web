<template>
    <div id="app" class="app" flex="dir:top">
        <web-header flex-box="0"></web-header>
        <router-view flex-box="1"></router-view>
        <web-footer flex-box="0"></web-footer>

    </div>
</template>

<script>
    import WebHeader from './components/Header';
    import WebFooter from './components/Footer';

    import './less/app.less';
    export default {
        name: 'app',
        data(){
            return {}
        },
        components: {
            WebHeader,
            WebFooter
        },
        methods: {}
    }
</script>
