<template>
    <div id="app" class="app">
        <web-header></web-header>
        <div class="body">
            <router-view></router-view>
        </div>
        <web-footer ></web-footer>

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
