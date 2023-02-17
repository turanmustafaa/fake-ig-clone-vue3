<template>
   <div>
      <AppHeader />
      <h2>Posts</h2>
      <div class="globalmargin d-flex flex-wrap">
         <div v-for="item in posts" :key="item.id" class="card" style="width: 250px">
            <router-link to="/userdetail" @click="updateCurrentId(item.owner.id)" style="cursor: pointer;" class="card-header">
               <div class="img">
                  <img :src="item.owner.picture" alt="">
               </div>
               <div class="name-location">
                  <p>{{ item.owner.firstName }} {{ item.owner.lastName }}</p>
                  <p>{{ item.owner.title }}</p>
               </div>
            </router-link>
            <div class="card-body">
               <img :src="item.image" alt="">
            </div>
            <div class="card-footer">
               <div class="tags">
                  <p v-for="(tag, index) in item.tags" :key="index">#{{ tag }}</p>
               </div>
               <div class="description">
                  <p>{{ item.text }}</p>
               </div>
               <div class="likes">
                  <span>{{ item.likes }} like</span>
                  <span>{{ item.publishDate }}</span>
               </div>
            </div>
         </div>
      </div>
      <nav class="d-flex justify-content-center">
         <ul class="pagination pagination-lg d-flex flex-wrap">
            <a v-for="i in paginationCount" :key="i" @click="addVal" class="page-link" href="#">{{ i }}</a>
         </ul>
      </nav>
</div>
</template>

<script>
import AppHeader from '@/components/global/AppHeader.vue';

import axios from "axios"
export default {
   data() {
      return {
         posts: [],
         totalPost : 0,
         currentPage: 0,
         perPageLimit : 20,
         paginationCount: null
      };
   },
   mounted() {
      this.getData()
   },
   methods: {
      getData() {
         axios.get(`https://dummyapi.io/data/v1/post?page=${this.currentPage}&limit=${this.perPageLimit}`, {
            headers: {
               "app-id": "63eccb614fbcf1b317d9ab21"
            }
         }).then(res => {
            this.posts = res.data.data
            this.totalPost = res.data.total
            this.paginationCount = Math.floor(this.totalPost / this.perPageLimit)
         })
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
   watch: {
      currentPage(oldVersion, newVersion) {
         if (oldVersion != newVersion) {
            this.getData()
         }
      }
   },
   components: { AppHeader },
}
</script>

<style scoped >
.card {
   position: relative;
   display: block;
   margin: 10px;
}

.card .card-header {
   display: flex;
   align-items: center;
}

.card .card-header .img {
   width: 50px;
   height: 50px;
   border-radius: 50%;
   overflow: hidden;
}

.card .card-header .name-location {
   margin-left: 10px;
}

.card .card-header .name-location>p {
   margin-bottom: 3px;
}

.card .card-header .img img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.card .card-body {
   position: relative;
   width: 100%;
   height: 200px;
}

.card .card-body img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}

.card .card-footer .tags {
   display: flex;
   align-items: center;
}

.card .card-footer .tags>p {
   margin: 0px 2px;
   padding: 0px 5px;
   border-radius: 20%;
   background: pink;
   color: white;
}

.card .card-footer .likes {
   display: flex;
   justify-content: space-between;
}

.card .card-footer .likes span {
   font-size: 12px;
}</style>