<template>
  <AppHeader />
  <h2>Users</h2>
  <div class="d-flex inputFlex">
         <input v-model="inputData" type="text" placeholder="user'lar içinde arayınız....">
      </div>
  <div class="d-flex flex-wrap globalmargin justify-content-between responsiveItems">
    <div v-for="item in usersList" :key="item.id" class="card" style="width: 200px;">
      <router-link to="/userdetail" class="card-header" @click="updateCurrentId(item.id)">
        <img :src="item.picture" alt="">
      </router-link>
      <div class="card-body">
        <p>{{ item.firstName }} {{ item.lastName }}</p>
        <p>gender : {{ item.title }} </p>
      </div>
    </div>
  </div>
  <nav class="d-flex justify-content-center">
    <ul class="pagination pagination-lg d-flex flex-wrap">
      <a v-for="i in paginationCount" :key="i" @click="addVal" class="page-link" href="#">{{ i }}</a>
    </ul>
  </nav>
</template>

<script>
import AppHeader from "@/components/global/AppHeader.vue"
import axios from "axios"
export default {
  data() {
    return {
      inputData : "",
      users: [],
      totalUser: 0,
      currentPage: 0,
      perPageLimit: 20,
      paginationCount: null
    };
  },
  methods: {
    getData() {
      axios.get(`https://dummyapi.io/data/v1/user?page=${this.currentPage}&limit=${this.perPageLimit}`, {
        headers: {
          "app-id": "63eccb614fbcf1b317d9ab21"
        }
      }).then(res => {
        console.log(res.data)
        this.users = res.data.data;
        this.users.forEach(user => {
          user.fullName = user.firstName + " " + user.lastName;
        })
        this.totalUser = res.data.total
        this.paginationCount = Math.floor(this.totalUser / this.perPageLimit)
      });
    },
    addVal(e) {
      this.currentPage = e.target.outerText
      console.log(this.currentPage)
    },
    updateCurrentId(val){
         this.$store.commit("updateState",val)
         console.log(this.$store.state.currentUserid)
      }
  },
  created() {
    this.getData()
  },
  watch: {
      currentPage(oldVersion, newVersion) {
         if (oldVersion != newVersion) {
            this.getData()
         }
      }
   },
   computed : {
    usersList() {
      if(this.inputData.trim().length > 0) {
        return this.users.filter((user) =>
        user.fullName.toLowerCase().includes(this.inputData))
      }
      return this.users
    }
   },
  components: { 
    AppHeader 
  }
}
</script>
<style scoped>
.card {
  margin: 10px;
}
</style>