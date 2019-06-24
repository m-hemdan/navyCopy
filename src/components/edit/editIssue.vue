<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="700"
    >
      <template v-slot:activator="{ on }"  >
      <v-btn v-on="on" flat style="height:100%" > Edit</v-btn>
       
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Change your issue
        </v-card-title>

        <v-card-text>
           <v-textarea v-model="sameText" ></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="updateIssue"
            :disabled="checkChangeIssue"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props:["issue"],
  data()
  {
    return {
      dialog:false,
      sameText:this.issue.issueText
    }
  },
  computed:
  {
    checkChangeIssue()
    {
     if (this.issue.issueText == this.sameText)
      {
        return true
      }
      else
      {
        return false
      }
    }
  },
  methods:
  {
    updateIssue()
    {
      this.dialog=false
      if (! this.checkChangeIssue)
      {
        const obj ={
          issueText:this.sameText,
          issueId:this.issue.issueId
        }
      this.$store.dispatch("updateIssue",obj)
      }
      else return
    }
  }
}
</script>
