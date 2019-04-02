<template>
    <p>스탠드 얼론 {{ defaultText }}</p>
</template>

<script lang="ts">

    import Vue from 'vue';

    export default class extends Vue {


        private mounted() {
            chrome.runtime.sendMessage({});
        }

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
