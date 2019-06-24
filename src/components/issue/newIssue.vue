<template>
    <div class="container">
       <v-form>
         <div class=" xs12  ">
            <label>Quote</label>
            <v-text-field v-model="quote" outline v-on:keyUp.enter="createNew" ></v-text-field>
        </div>
        <div class="sm8 offset-2 xs12 md6 offset-md3">
            <button @click.prevent="createNew">Add quote</button>
        </div>
        </v-form>
  </div>
</template>

<script>

export default {

    data()
    {
        return {
            quote:''
        }
    },
    methods:
    {
        createNew()
        {
            if (this.quote == '')
            {
                return
            }
            this.$emit('issueAdded',this.quote)
            this.quote=''
        }
    }
}
</script>

<style>

</style>
