<template>
    <div>
        <p> 확장 프로그램 옵션 페이지 {{ defaultText }}</p>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';


    export default class App extends Vue {

        private get defaultText() {

            return chrome.i18n.getMessage('extName');
        }
    }
</script>

<style scoped>
    p {
        font-size: 20px;
    }
</style>
