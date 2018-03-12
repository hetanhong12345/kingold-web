<template>
    <div class="tip">
        <div class="body">
            <img src="../../images/close.png" alt="" class="close" @click.stop="close">
            <div class="line"></div>
            <p class="txt1">请您在新打开的网上银行页面上完成付款</p>
            <button class="tip-btn">已完成</button>
            <p class="txt2">如果在充值过程中遇到问题请致电：400-812-XXXXXXXX</p>
        </div>
    </div>
</template>

<script>
    import './tip.less';

    export default {
        name: 'tip',
        data() {
            return {}
        },
        created() {
        },
        computed: {},
        methods: {
            close() {
                this.$emit('close')
            }
        },
        destroyed() {

        }
    }
</script>
