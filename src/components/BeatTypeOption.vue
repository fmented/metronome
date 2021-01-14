<template>
  <v-row>
      <v-col cols="6">
                <v-subheader>
                    Beat Duration
                  </v-subheader>
                </v-col>

              <v-col cols="6">
                <v-select
                  v-model="select"
                  :items="list"

                  label="Select"
                  persistent-hint
                  single-line
                  @change="change"
                ></v-select>
              </v-col>
  </v-row>
</template>

<script>
export default {
    data(){
        return{
            item: this.$store.state.beatType,
            select: this.$store.state.currentBeatType==1 ? this.$store.state.currentBeatType : `1/${this.$store.state.currentBeatType}`,
        }
    },

    computed:{
        list(){
            let x = []
            this.item.forEach(i => {
                if(i==1){
                    x.push(i)
                }
                else{
                    x.push(`1/${i}`)
                }
            });
            return x
        }
    },
    methods:{
        change(){
            let idx = this.list.indexOf(this.select)
            this.$store.commit('changeBeatType', this.$store.state.beatType[idx])
        }
    }

}
</script>

<style>

</style>