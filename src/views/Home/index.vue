<template>
  <div class="home">
    <!-- <login-register /> -->
    <nav-menu
      activeIndex="1"
    />

    <div class="home-main-pic"></div>

    <consultant-wrapper />
    <home-footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavMenu from '../../components/NavMenu';
// import LoginRegister from '../../components/LoginRegister';
import homeFooter from '../../components/HomeFooter';
import ConsultantWrapper from './ConsultantWrapper';
import axios from '../../api/axios';

console.log(NavMenu);
console.log(homeFooter);

export default {
  name: 'hxxxxe',
  beforeCreate() {
    console.log('beforeCreate  home');
  },
  created() {
    console.log('created  home');
  },
  beforeMount() {
    console.log('beforeMount  home');
  },
  components: {
    // HelloWorld
    NavMenu,
    // LoginRegister,
    ConsultantWrapper,
    homeFooter
  },
  mounted() {
    // this.$api.exampleModule.getExample().then(res => {
    //   console.log(res);
    // })
    // axios.get('http://118.24.102.119:8080/travel-0.0.1-SNAPSHOT/news/getNewsPage', {
    // axios.get('http://118.24.102.119:18080/news/getNewsPage', {
    axios.get('/news/getNewsPage', {
      params: {
        pageSize: 10,
        pageIndex: 1
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    var ajax = new XMLHttpRequest();
            // 第二步： 设置状态监听函数
            ajax.onreadystatechange = function(){
                console.log(ajax.readyState);
                console.log(ajax.status);
                // 第五步：在监听函数中，判断readyState=4 && status=200表示请求成功
                if(ajax.readyState==4 && ajax.status==200){
                    // 第六步： 使用responseText、responseXML接受响应数据，并使用原生JS操作DOM进行显示
                    console.log(ajax.responseText);
                    console.log(ajax.responseXML);// 返回不是XML，显示null
                    console.log(JSON.parse(ajax.responseText));
                    console.log(eval("("+ajax.responseText+")"));
                }
            }
            // 第三步： open一个链接
            ajax.open("GET","http://118.24.102.119:8080/travel-0.0.1-SNAPSHOT/news/getNewsPage?pageSize=10&pageIndex=1&type=1",false);//true异步请求，false同步
            
            // 第四步： send一个请求。 可以发送对象和字符串，不需要传递数据发送null
            ajax.send(null);
    console.log('mounted  home');
  },
  
}
</script>

<style lang="stylus">
.home
  background-image url(../../assets/bg.jpg)
  height 100%
  &-main-pic
    // width 180px
    height 340px
    background-image url(../../assets/bpic.jpg);

</style>