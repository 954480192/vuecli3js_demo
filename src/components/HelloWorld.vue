<template>
  <div class="hello">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {

  },
  data(){
    return{
      list:[1,2,3]
    }
  },
  methods:{
    loadTop(){
      console.log('top')
    },
    loadBottom(){
      console.log('Bottom')
    },
    allLoaded(){
      console.log('allLoaded')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
