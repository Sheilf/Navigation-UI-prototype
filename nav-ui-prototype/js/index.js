'use strict';
var message="Hello"

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function Post(title,top,second,third, img) {
  _classCallCheck(this, Post);

  this.title = title;
  this.top = top;
  this.second = second;
  this.third = third;
  this.img = img;
};

var app = new Vue({
  el: '#app',
  data: {
    keyword: "",
    show: false,
    postList: [new Post('Pre Algebra','Subjects1','Subjects11','Subjects111', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/prealgebra_owb4x1.png'), new Post('Algebra 1', 'Subjects2','Subjects22','Subjects222', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/algebra1_gh6jus.png'), new Post('Geometry', 'Subjects3','Subjects33','Subjects333', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/geometry_hhhlum.png'), new Post('Algebra 2', 'Subjects4','Subjects44','Subjects444', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/algebra2_vuj01m.png'), new Post('Trigonometry','Subjects5','Subjects55','Subjects555', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/trigonometry_u79re9.png'), new Post('Pre Calculus','Subjects6','Subjects66','Subjects666', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/precalc_gcp1fi.png'), new Post('Differential Calculus','Subjects7','Subjects77','Subjects777', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/differentialcalc_zlw0ac.png'), new Post('Integral Calculus','Subjects8','Subjects88','Subjects888', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/integralcalc_devt3f.png'), new Post('Multivariable Calculus','Subjects9','Subjects99','Subjects999', 'https://res.cloudinary.com/eduprojectsil/image/upload/v1489028899/multivariablecalc_yahref.png')],
    checkstring: "check this string",
    titlename: ""
  },
  computed: {
    filteredList: function filteredLfist() {
      var _this = this;

      return this.postList.filter(function (post) {
        return                  post.title.toLowerCase().includes(_this.keyword.toLowerCase());
      });
    }
  },
  methods: {
    changescreen: function(event){
      this.show = !this.show
      
      console.log(this.post.title)

      
  }
  

  }

})