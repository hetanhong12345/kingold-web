<template>
    <div class="center">
<div class="content" flex="dir:top main:center cross:center">
   <p class="total">7000,00</p>
    <p class="info">可用余额（元）</p>
    <button class="btn">充值</button>
</div>
        <div class="content2" flex="main:justify">
           <div>
               <p class="num blue">
                   10000,00
               </p>
               <p class="info">总资产（元）</p>
           </div>
            <div>
                <p class="num green">
                    10000,00
                </p>
                <p class="info">冻结金额（元）</p>
            </div>
            <div>
                <p class="num red">
                    10000,00
                </p>
                <p class="info">在投金额（元）</p>
            </div>
        </div>
    </div>

</template>

<script>
import '../less/center.less';
    export default {
        name: 'center',
        data() {
            return {}
        },
        created() {
        },
        computed: {},
        methods: {},
        mounted() {
        },
        destroyed() {

        }
    }
</script>

<style scoped>

</style>
