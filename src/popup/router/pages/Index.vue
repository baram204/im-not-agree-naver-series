<template>
    <h1>안녕하세요. 팝업 {{this.$store.getters.foo}} {{ defaultText }}</h1>
</template>

<script lang='ts'>
    import Vue from 'vue';

    export default class Popup extends Vue {


        private mounted() {
            chrome.runtime.sendMessage({});
        }

        private get defaultText() {
            return chrome.i18n.getMessage('extName');
        }
    }
</script>
