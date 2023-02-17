<template>
    <AppHeader />
     <h2>User Detail</h2>
     <div v-if="user != null" class="card">
        <div  class="card-header">
            <img :src="user.picture" alt="">
            <span>FullName : {{ user.firstName }} {{ user.lastName }}</span>
            <span>title : {{ user.title }}</span>
            <span>gender : {{ user.gender }}</span>
        </div>
        <div class="card-body">
            <!-- <span>location-city : {{ user.location.city }}</span>  -->
             <span>location-country {{ user.location.country }}</span> 
             <span>location-state {{ user.location.state }}</span> 
             <span>location-street {{ user.location.street }}</span> 
             <span>location-timezone {{ user.location.timezone }}</span> 
        </div>
        <div class="card-footer">
            <span>registeredDate : {{ user.registerDate }}</span>
            <span>updatedDate : {{ user.updatedDate }}</span>
            <span>phone : {{ user.phone }}</span>
            <span>email : {{ user.email }}</span>
        </div>
     </div>
</template>
<script>
import AppHeader from '@/components/global/AppHeader.vue';
import axios from "axios"
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            // currentUser : this.returnCurrentUser,
            user: {},
        };
    },
    methods : {
       async mountUser() {
            console.log(this.returnCurrentUser)
            await axios.get(`https://dummyapi.io/data/v1/user/${this.returnCurrentUser}`,{
            headers : {
              "app-id" : "63eccb614fbcf1b317d9ab21"
            }
          }).then(res => {
            this.user = res.data
            console.log(this.user)

          })
        }
    },
    async created() {
          await this.mountUser();  
    },
    components: { AppHeader },
    computed : {
      ...mapGetters(["returnCurrentUser"])
   },
//    watch : {
//     currentUser(oldVal,newVal){
//         console.log(oldVal,newVal)
//         if(oldVal != newVal){
//             console.log(oldVal,newVal)
//             axios.get(`https://dummyapi.io/data/v1/user/${this.returnCurrentUser}`,{
//             headers : {
//               "app-id" : "63eccb614fbcf1b317d9ab21"
//             }
//           }).then(res => {
//             this.user = res.data
//             console.log(this.user)

//           })
//         }
//     }
//    }
}
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: row;
    }
    .card  >div {
        display: flex;
        flex-direction: column;
    }
</style>