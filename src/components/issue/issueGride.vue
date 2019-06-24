<template>
    <div class="container">
        <app-quote   v-for="quote in quotes" :key="quote.id">{{quote}}</app-quote>
    </div>
</template>

<script>
import quote from './quotes.vue'
export default {
    props:["quotes"],
    components:
    {
        appQuote:quote
    }
}
</script>

<style>

</style>
