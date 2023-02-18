<template>
    <AppHeader />
     <h2>User Detail</h2>
     <div v-if="user != null" class="card">
        <div  class="card-header">
            <span class="img">
                <img :src="user.picture" alt="">
            </span>
            <span>FullName : {{ user.firstName }} {{ user.lastName }}</span>
            <span>Title : {{ user.title }}</span>
            <span>Gender : {{ user.gender }}</span>
        </div>
        <div class="card-body">
            <span>City : {{ user.location.city }}</span> 
             <span>Country : {{ user.location.country }}</span> 
             <span>State : {{ user.location.state }}</span> 
             <span>Street : {{ user.location.street }}</span> 
             <span>Timezone : {{ user.location.timezone }}</span> 
        </div>
        <div class="card-footer">
            <span>Registered date : {{ user.registerDate }}</span>
            <span>Updated date : {{ user.updatedDate }}</span>
            <span>Phone : {{ user.phone }}</span>
            <span>Email : {{ user.email }}</span>
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
}
</script>

<style scoped>
    .card {
        display: flex;
        flex-direction: row;
        width: 80%;
        margin: auto;
        border-radius: 50px;
        overflow: hidden;
    }
    .card  >div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    .card  >div span:nth-child(odd) {
        background: lightgrey;
    }
    .card .card-header span.img {
        width: 150px;
        height: 150px;
        position: relative;
        margin: auto;
        border-radius: 50%;
        overflow: hidden;
    }

    .card .card-header span.img img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    @media only screen and (max-width: 900px) {
    .card {
       flex-direction: column;
    }

}
</style>