<template>
  <div class="main">
    
  </div>
</template>

<script>
import Navbar from "@/generic_components/navbar/Navbar.vue"
import Alert from "@/generic_components/alert/Alert.vue"
import Button from "@/generic_components/buttons/Button.vue"
import Icon from "@/generic_components/icon/Icon.vue"
import Badge from "@/generic_components/badge/Badge.vue"
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
    Icon,
    Badge,
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
  background-color: rgb(202, 202, 202);
  height: 100%;
  @include d-flex(column,center,center);
  
}
</style>