<template>
       <Header/>
       <div class="con1">
        <h2 class="heading">Please type what you want to study today</h2>
        <input type="text" v-model="query" placeholder="Enter a course topic or any topic" class="search-input"/>
        <button class="searchBtn" >🔍</button>
       </div>
</template>


<script setup>
import Header from './components/header.vue'
</script>

<style scoped>
.con1{
    position: absolute;
    width:100%;
    background-color:#221358;
    margin-top: 0;
    margin-left:-190px;
    height:800px;
}
.heading{
    margin-top:50px;
    color:#ddd620;
    text-decoration: underline;
}
.search-input{
    background-color: white;
    width:40%;
    height:7%;
    border-radius: 9px;
    color:black;
}
.searchBtn{
    margin-left:10px;
    background-color: #ddd620;
}
</style>