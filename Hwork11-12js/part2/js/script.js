$(document).ready(function() {
	
  var html = $('#profile-tmpl').html();
  
  var contents = [
  	  {
  		  title: 'Струков Ростислав Александрович',
  		  content: [  'Инженер по автоматизации производства', 
  					        'Я хочу стать разработчиком фронтенд потому что:', 
  					        'Мой контактный телефон:', 
  					        '+380956934598, +380973636693', 
  					        'Мой профиль в Facebook:', 
  					        'Мой фидбэк:', 
  					        'Творю Вэб картины'
  	    ]
  	  },
  	  {
  		  list: [ 'Мне это нравится', 
				        'Это моя цель', 
				        'Развиваться постояно', 
				        'Достигать успеха', 
				        'Приносить радость людям'
			  ]
  	  },
  	  {
  		 link: 'Струков Ростислав'
  	  }
  ];
  
  var insert = tmpl(html, {
		data: contents
	});
  
  $('body').append(insert);

  $('a').attr('href', '#');

  $('img').attr('src', 'img/myphoto.jpg');

  $('img').addClass('displayed');
});