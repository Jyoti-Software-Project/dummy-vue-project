<template lang="en">
    <div>
        <p v-html="html"></p>
        <h3 v-once>{{ name }}</h3>
        <h3>{{ name }}</h3>
        <h3>{{ a + b }}</h3>

        <h3>{{ ok ? "Yes" : "No" }}</h3>
        <button v-bind:disabled="disableBtn" v-on:click="updateText">Click me</button>
        <button v-on:click="updateBtn">Enable / Disable</button>
    </div>
</template>
<script>
export default {
    name: "VariableVue",
    data() {
        return {
            name: "Jyoti",
            a: 10,
            b: 20,
            ok: false,
            html: "<h2>Template in vue js</h2>",
            disableBtn: false,
        }
    },
    methods: {
        updateText() {
            this.ok=!this.ok;
        },
        updateBtn() {
            this.disableBtn=!this.disableBtn;
        },
    },
}
</script>
<style lang="">
    
</style>