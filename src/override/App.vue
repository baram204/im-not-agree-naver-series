<template>
    <div>
        <p>새 탭 열면 나오는 페이지 오버라이드 {{ defaultText }}</p>
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
