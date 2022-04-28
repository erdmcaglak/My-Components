<template>
  <div class="main">
    <!-- //! Navbar Sample -->
    <!-- <Navbar
      :items="headerItems"
      @clickEvent="temp"
      fontColor="#fff"
      fontSize="2.3"
      itemHoverColor="#1ee2e7"
      background="#333"
      dropMenuBackground="#444"
      iconColor="#fff"
    />
    <router-view></router-view> -->
    <!-- //! Button Sample || Alert Sample -->
    <!-- <Button 
        title="button1" 
        fontSize="2"
        background="#32a852"
        @clickFunc="temp"
        icon="danger.svg"
        iconColor="#fff"
        iconWidth="20"
        color="#fff"
        radius="4"
    />

    <Alert :err="error" /> -->

    <!-- //! Icon Sample -->
    <!-- <Icon 
        icon="danger.svg"
        :width="{
            default:'20',
            lg:'18',
            md:'16',
            sm:'14',
            xs:'12'
        }"
        iconColor="red"
    /> -->
  </div>
</template>

<script>
import Navbar from "@/generic_components/navbar/Navbar.vue"
import Alert from "@/generic_components/alert/Alert.vue"
import Button from "@/generic_components/buttons/Button.vue"
import Icons from "@/generic_components/icons/Icons.vue"
export default {
  data(){
    return{
      error:{},
      headerItems:[
        {
          title:'Anasayfa',
          api:'/'
        },
        {
          title:'Works',
          //! Api kullanılabilir fakat tıklama işlemi olduğunda api'deki route'a gider
          //api:'/work', 
          child:[
            {title:'Work1asdsadsadsa',api:'/work/work1'},
            {title:'Work2',api:'/work/work2'},
          ]
        },
        {
          title:'About',
          api:'/about'
        },
      ]
    }
  },
  components:{
    Button,
    Alert,
    Navbar,
  },
  methods:{
    temp(item){
      this.error={
          title: 'Error content',
          type: 'danger' || 'warning',
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/mixins.scss";
*{
  margin: 0;
  box-sizing: border-box;
  padding: 0;

}
html,body{
  height: 100%;
  font-size: 10px;
  @media (min-width: 1025px) and (max-width: 1440px){
    font-size: 9px;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    font-size: 8px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 7px;
  }
  @media (max-width: 480px) {
    font-size: 6px;
  }
}

.main{
  background-color: rgb(231, 229, 229);
  height: 100%;
  @include d-flex(column,flex-start,center);
}
</style>