<template>
  <div class="main">
      <div class="tooltip-sample">

      </div>
  </div>
</template>

<script>
import Navbar from "@/generic-components/navbar/Navbar.vue"
import Alert from "@/generic-components/alert/Alert.vue"
import Button from "@/generic-components/buttons/Button.vue"
import Icon from "@/generic-components/icon/Icon.vue"
import Badge from "@/generic-components/badge/Badge.vue"
import Modal from "@/generic-components/modal/Modal.vue"
import Slider from "@/generic-components/slider/Slider.vue"
export default {
  data(){
    return{
      images:[
          {src:'temp1.jpg',id:Math.round(Math.random()*1e4)},
          {src:'temp2.jpg',id:Math.round(Math.random()*1e4)},
          {src:'temp3.jpg',id:Math.round(Math.random()*1e4)},
          {src:'temp4.jpg',id:Math.round(Math.random()*1e4)},
      ],
      isOpen:false,
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
    Modal,
    Slider,
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
@import "@/scss/transition.scss";
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
  background-color: #fff;
  height: 100%;
  width: 100%;
  @include d-flex(column,center,center);
  .tooltip-sample{
    width: 100px;
    height: 100px;
    background-color: #65e;
  }
  
}
</style>