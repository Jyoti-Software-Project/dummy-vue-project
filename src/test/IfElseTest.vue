<template lang="en">
    <div>
        <div class="d-flex flex-column justify-content-center color">
            <h3 class="h3" v-if="show">Show Hide if part&nbsp;</h3>
            <h3 class="h3" v-else="show">Show Hide else part&nbsp;</h3>
            <button class="btn btn-primary w-50 m-auto" v-on:click="display()">Hello</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'IfElseTest',
    data() {
        return {
            show: true
        }
    },
    methods: {
        hello() {
            console.log("Hello console");
        },
        display() {
            this.show = !this.show;
        },
    }
}
</script>
<style scoped>
    .color {
        color: green;
    }
    .h1 {
        font-size: 36px;
    }
</style>