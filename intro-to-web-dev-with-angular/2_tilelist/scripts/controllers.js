angular.module('tilelist')
.controller('tilesController', function(){
  var tiles = [
    {
      title: 'Monkey',
      imgSrc: 'http://www.cuteducky.com/img/monkey_x.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Monkey',
      lifeExpectancy: 15
    },
    {
      title: 'Giraffe',
      imgSrc: 'http://www.krugernational.co.za/wp-content/uploads/2010/01/Giraffe3-200x200.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Giraffe',
      lifeExpectancy: 25
    },
    {
      title: 'Hippopotamus',
      imgSrc: 'http://ibream.org/wp-content/uploads/2009/02/pygmy-hippo-conservation.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Hippopotamus',
      lifeExpectancy: 45
    },
    {
      title: 'Sloth',
      imgSrc: 'http://cs425727.vk.me/v425727415/a32/dmRQKhAeiwU.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Hippopotamus',
      lifeExpectancy: 25
    },
    {
      title: 'Rabbit',
      imgSrc: 'http://www.fundforanimals.org/images/rs/200x200_istock_generic-whit.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Rabbit',
      lifeExpectancy: 9
    },
    {
      title: 'Turtle',
      imgSrc: 'http://www.savetheseaturtle.org/Img/Leatherback.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Turtle',
      lifeExpectancy: 80
    },
    {
      title: 'Kangaroo',
      imgSrc: 'http://4.bp.blogspot.com/-IZAPHu794qg/TkdpCKVaohI/AAAAAAAAAVc/jj6K6Mg2pBo/s320/kangaroos-playing-their-mother-3-2-1-2-6.png',
      wikiUrl: 'http://en.wikipedia.org/wiki/Kangaroo',
      lifeExpectancy: 6
    },
    {
      title: 'Elephant',
      imgSrc: 'http://media.perthzoo.wa.gov.au.s3.amazonaws.com/wp-content/uploads/2011/06/Asian-Elephant1.jpg',
      wikiUrl: 'http://en.wikipedia.org/wiki/Elephant',
      lifeExpectancy: 44
    }
  ]
});