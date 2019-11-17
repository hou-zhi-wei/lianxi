<template>
  <div>
      <!-- <div v-if="xiangqingList">
          {{xiangqingList.dataname}}

      </div> -->
      <div v-for="(item,index) in [xiangqingList]"  :key="index">
          <img :src="item.dataimg" alt="">
         <p> {{item.dataname}}</p>
         <p> {{item.datatitle}}</p>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            xiangqingList:[]
        }
    },
    created() {
        this.xiangList()
    },
    methods: {
        xiangList(){
            this.xiangqingList=this.$route.query
            console.log(this.xiangqingList)
        }
    },
}
</script>

<style>

</style>