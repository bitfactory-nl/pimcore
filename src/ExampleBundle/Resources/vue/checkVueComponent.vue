<template>
    <span class="display">{{ check }}</span>
</template>

<script>
export default {
    data() {
        return {
            check: '✅'
        }
    },
    mounted() {
        this.$emit('isWorking', {isWorking: true});
    }
}
</script>

<style>
    /* These styles are also included in the 'main' css file */
    .display {
        display: inline;
    }

</style>
