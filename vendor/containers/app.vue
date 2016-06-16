<template>
    <div>count: {{counter}}</div>
    <button type="button" @click="add">ADD CLICK</button>
    <button type="button" @click="mod">MOD CLICK</button>
</template>
<script>

import { getCount } from "../vuex/getters";
import { add,mod } from "../vuex/actions";

export default {
    vuex: {
        getters: {
            counter: getCount
        },
        actions: {
            add,mod
        }
    },
    data() {
        return {
            test: "test"
        }
    },
    ready() {
        this.$http({url: "/", method: "GET"}).then( response => {
            console.log("success!");
        }, err => {
            console.log("failed");
        } )
    }
}

</script>