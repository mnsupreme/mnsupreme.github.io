$(document).ready(function(){

var Skills = "<p>Credentials:</p>" + "<ul>" + "<li> Purdue University: Bachelors of Science Computer Information Technology <ul> <li>Expected Graduation Date: May 2019</li></ul></li>" + "<li>General Assembly Vocational Certificate in Front End Web Development</li>" + "<li>Coding Dojo Vocational Certificate Web Development</li>" + "</ul>" + "<p>Skills:</p>"+ "<ul>" + "<li>Front End Web Development</li>" + "<li>Python</li>" + "<li>MEAN stack</li>" + "<li>Ruby</li>" + "</ul>" + "<p>Achievements:</p>" + "<ul>" + "<li>President of Purdue Student Chapter of Association for Unmanned Vehicles International (2016-present)</li>" + "<li>Won the Gap Tech Challenge at LA Hacks (2015)</li>" + "<li>Wolfram Challenge 3rd place winner at M Hacks (2015)</li>" + "</ul>"
var About =  "<p> My name is Mitchell Lee, and I am junior web developer. I am a Southern California native currently studying Computer Information Technology at Purdue University. I like all things technology whether it be hardware or software, and I am excited to see how technology will change the world for my generation </p>" + "<p>Some of My Hobbies:</p>" + "<ul>" +"<li>Hackathons</li>" +"<li>Airsoft</li>" +"<li>Anime</li>"+"<li>pondering about the future</li>"+"</ul>"
    $('.element').typeIt({
       strings: ['Hello World'],
       speed:150,
       lifeLike: true,
       callback: function(){
       	setTimeout(function(){$("#arrow").append("<p id='init'>initializing...</p>")},300)
       	setTimeout(function(){
       		$("#arrow").hide()
       		$(".element").remove();
       		$("#init").hide();
       		$("#content").show();
       	}, 2100)
       }

      });
    
	$("#pointer").click(function(){
    $("#psuedo-input").focus()
    $("#psuedo-input").val("")
    $("#command").empty()
		$(".typed-cursor").show()
	})

	$("#psuedo-input").on("input",function(){
		$("#command").text($("#psuedo-input").val())
	})

$("#psuedo-input").change(function(){
    if($("#psuedo-input").val() == "cd Skills" || $("#psuedo-input").val() == "cd skills" || $("#psuedo-input").val() == "cd cat Skills" || $("#psuedo-input").val() == "cd cat skills"){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Skills).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd About" || $("#psuedo-input").val() == "cd about" || $("#psuedo-input").val() == "cd cat About" || $("#psuedo-input").val() == "cd cat about" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(About).show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd Contact" || $("#psuedo-input").val() == "cd contact" || $("#psuedo-input").val() == "cd cat Contact" || $("#psuedo-input").val() == "cd cat contact" ){
        $("#error").empty()
        $("#psuedo-input").val("")
        $("#command").empty()
        $("#text").empty().append("<p>Number: 626-861-7861</p>" + "<p>email:mnsupreme@gmail.com</p>" + "<p>university email: lee2141@purdue.edu</p>" + "<p>Mailing Adress:</p>" + "<ul id='address'> <li>1016 West Stadium Ave</li>" + "<li>Cary Quadrangle #609</li>" + "<li>West Lafayette, IN 47906</li></ul>" + "<p>Links:</p>" + "<p><a href='https://github.com/mnsupreme'>GitHub</a></p>" + "<p><a href='http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>DevPost</a></p>").show()
        $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd Resume" || $("#psuedo-input").val() == "cd resume" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("resume.pdf", "_blank")
      $("html, body").scrollTop( $(document).height() );
    } 

    else if($("#psuedo-input").val() == "cd github" || $("#psuedo-input").val() == "cd GitHub" || $("#psuedo-input").val() == "cd Github" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("https://github.com/mnsupreme", "_blank");
      $("html, body").scrollTop( $(document).height() );
    }
     else if($("#psuedo-input").val() == "cd Devpost" || $("#psuedo-input").val() == "cd DevPost" || $("#psuedo-input").val() == "cd devpost" ){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      window.open("http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav", "_blank");
      $("html, body").scrollTop( $(document).height() );
    } 
    else if($("#psuedo-input").val() == "help" || $("#psuedo-input").val() == "ls"){
      $("#error").empty()
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append("<table id='help'><tr><td>cd Skills</td><td>cd About</td></tr><tr><td>cd Contact</td><td>cd Resume</td></tr><tr><td>cd Github</td><td>cd Devpost</td></tr></table>").show()
      $("html, body").scrollTop( $(document).height() );
    } 

    else{
      
      $("#error").text("bash error: command " + "\"" + $("#psuedo-input").val() + "\"" + " does not exist")
      $("#psuedo-input").val("")
      $("#command").empty()
      $("html, body").scrollTop( $(document).height() );
    }


  })

	
})

function about(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd About'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(About).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
  
}

function skills(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Skills'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Skills).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
  }
  })
}

function contact(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Contact'],
    speed:100,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append("<p>Number: 626-861-7861</p>" + "<p>email:mnsupreme@gmail.com</p>" + "<p>university email: lee2141@purdue.edu</p>" + "<p>Mailing Adress:</p>" + "<ul id='address'> <li>1016 West Stadium Ave</li>" + "<li>Cary Quadrangle #609</li>" + "<li>West Lafayette, IN 47906</li></ul>" + "<p>Links:</p>" + "<p><a href='https://github.com/mnsupreme'>GitHub</a></p>" + "<p><a href='http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>DevPost</a></p>").show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}

function resume(){
  $("#error").empty()
  $('.typed-cursor').hide()
  window.open("resume.pdf", "_blank")
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Resume'],
    speed:150,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }

  })
}
