function init(){

  new Vue({

    el:'#app',

    data:{

      'active': 0,

      'slides': [

        'img/img1.jpg',
        'img/img2.jpg',
        'img/img3.jpg'
      ],

      'pointer': 'bg-black', // class needed in order to color the right point indicator


    },

    // auto play
    mounted: function () {

      setInterval(this.next, 3000);
    },

    methods:{
      // stepping forward through images
      next: function(){

        if(this.active == (this.slides.length - 1)){

          this.active = 0;
        } else{

          this.active ++;
        }

      },
      // stepping backward through images
      prev: function(){

        if(this.active == 0){

          this.active = this.slides.length - 1;
        } else{

          this.active--;
        }
      },


    }
  })
}

$(init);
