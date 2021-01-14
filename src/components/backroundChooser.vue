<template>
  <v-row>
        <v-col cols="5">
            <v-subheader>
                Background Image
            </v-subheader>
        </v-col>

                <v-col cols="5">
                        <v-file-input @change="change" :clearable="false"
                        placeholder="Select Image File"
                        single-line></v-file-input>
                        
                  
              </v-col>
              <v-col cols="2">
                  <v-btn icon>
                        <v-icon @click="remove">
                          mdi-trash-can
                        </v-icon>
                        </v-btn>
              </v-col>

              
  </v-row>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        change(a){
            
            this.getFile(a).then(
                data => {
                    this.changeBackground(data)    
                }
                
            )
        },

        remove(){
            this.removeBackground()
        },

        getFile(file){
            return new Promise((resolve, reject)=>{
                let reader = new FileReader()
                reader.readAsDataURL(file);
                reader.onload=()=> resolve(reader.result)
                reader.onerror = error => reject(error)
            })
        }

    }
}
</script>

<style>

</style>