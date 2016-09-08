$(document).ready(function(){

    $('.element').typeIt({
       strings: ['Hello World'],
       speed:200,
       lifeLike: true,
       callback: function(){
       	setTimeout(function(){$("#arrow").append("<p id='init'>intializing...</p>")},300)
       	setTimeout(function(){
       		$("#arrow").hide()
       		$(".element").remove();
       		$("#init").hide();
       		$("#content").show();
       	}, 2300)
       }

      });
	
    $("#psuedo-input").focus(function(){
    $("#command").empty()
		$(".typed-cursor").show()
	})

	$("#psuedo-input").on("input",function(){
		$("#command").text($("#psuedo-input").val())
	})

$("#psuedo-input").change(function(){
    if($("#psuedo-input").val() == "cd Skills" || $("#psuedo-input").val() == "cd skills" ){
      $("#error").empty()
      $("#text").empty().append("<p>Credentials:</p>" + "<ul>" + "<li> (Currently Attending) Purdue University Bachelors of Science Computer Information Technology</li>" + "<li>General Assembly Vocational Certificate in Front End Web Development</li>" + "<li>Coding Dojo Vocational Certificate Web Development</li>" + "</ul>" + "<p>Skills:</p>"+ "<ul>" + "<li>Front End Web Development</li>" + "<li>Python</li>" + "<li>MEAN stack</li>" + "<li>Ruby</li>" + "</ul>" + "<p>Achievements:</p>" + "<ul>" + "<li>President of Purdue Student Chapter of Association for Unmanned Vehicles International (2016-present)</li>" + "<li>Won the Gap Tech Challenge at LA Hacks (2014)</li>" + "<li>Wolfram Challenge 3rd place winner at M Hacks (2015)</li>" + "</ul>").show()
    } 

    else if($("#psuedo-input").val() == "cd About" || $("#psuedo-input").val() == "cd about" ){
      $("#error").empty()
      $("#text").empty().append("<p> My name is Mitchell Lee. I am an aspiring web developer. I am also a Southern California native but I attend university Purdue. I like all things technology whether it be hardware or software, and am excited to see how technology will change the world for my generation </p>" + "<p>Some of My Hobbies:</p>" + "<ul>" +"<li>Hackathons</li>" +"<li>Airsoft</li>" +"<li>Anime</li>"+"<li>pondering about the future</li>"+"</ul>").show()
    } 

    else if($("#psuedo-input").val() == "cd Contact" || $("#psuedo-input").val() == "cd contact" ){
        $("#error").empty()
         $("#text").empty().append("<p>Number: 626-861-7861</p>" + "<p>email:mnsupreme@gmail.com</p>" + "<p>university email: lee2141@purdue.edu</p>" + "<p>Mailing Adress: 1016 West Stadium Ave</p>" + "<p>Cary Quadrangle #609</p>" + "<p>West Lafayette, IN 47906</p>" + "<p>Links:</p>" + "<p><a href='https://github.com/mnsupreme'>GitHub</a></p>" + "<p><a href='http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>DevPost</a></p>").show()
    } 

    else if($("#psuedo-input").val() == "cd Resume" || $("#psuedo-input").val() == "cd resume" ){
      $("#error").empty()
      window.open("resume.pdf", "_blank")
    } 

    else if($("#psuedo-input").val() == "cd github" || $("#psuedo-input").val() == "cd GitHub" || $("#psuedo-input").val() == "cd Github" ){
      $("#error").empty()
      window.open("https://github.com/mnsupreme", "_blank");
    }
     else if($("#psuedo-input").val() == "cd Devpost" || $("#psuedo-input").val() == "cd DevPost" || $("#psuedo-input").val() == "cd devpost" ){
      $("#error").empty()
      window.open("http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav", "_blank");
    } 
    else if($("#psuedo-input").val() == "help"){
      $("#error").empty()
       $("#text").empty().append("<table id='help'><tr><td>cd Skills</td><td>cd About</td></tr><tr><td>cd Contact</td><td>cd Resume</td></tr><tr><td>cd Github</td><td>cd Devpost</td></tr></table>").show()
    } 

    else{
      $("#error").text("bash error: command " + "\"" + $("#psuedo-input").val() + "\"" + " does not exist")
    }


  })

	
})

function about(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $('#command').empty().typeIt({
    strings: ['cd About'],
    speed:200,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#text").empty().append("<p> My name is Mitchell Lee. I am an aspiring web developer. I am also a Southern California native but I attend university Purdue. I like all things technology whether it be hardware or software, and am excited to see how technology will change the world for my generation </p>" + "<p>Some of My Hobbies:</p>" + "<ul>" +"<li>Hackathons</li>" +"<li>Airsoft</li>" +"<li>Anime</li>"+"<li>pondering about the future</li>"+"</ul>").show()
    }, 2100)
    }
  })
  
}

function skills(){
  $("#error").empty()
  $(".typed-cursor").hide()
  $('#command').empty().typeIt({
    strings: ['cd Skills'],
    speed:200,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#text").empty().append("<p>Credentials:</p>" + "<ul>" + "<li> (Currently Attending) Purdue University Bachelors of Science Computer Information Technology</li>" + "<li>General Assembly Vocational Certificate in Front End Web Development</li>" + "<li>Coding Dojo Vocational Certificate Web Development</li>" + "</ul>" + "<p>Skills:</p>"+ "<ul>" + "<li>Front End Web Development</li>" + "<li>Python</li>" + "<li>MEAN stack</li>" + "<li>Ruby</li>" + "</ul>" + "<p>Achievements:</p>" + "<ul>" + "<li>President of Purdue Student Chapter of Association for Unmanned Vehicles International (2016-present)</li>" + "<li>Won the Gap Tech Challenge at LA Hacks (2014)</li>" + "<li>Wolfram Challenge 3rd place winner at M Hacks (2015)</li>" + "</ul>").show()
    }, 2100)
  }
  })
}

function contact(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $('#command').empty().typeIt({
    strings: ['cd Contact'],
    speed:200,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#text").empty().append("<p>Number: 626-861-7861</p>" + "<p>email:mnsupreme@gmail.com</p>" + "<p>university email: lee2141@purdue.edu</p>" + "<p>Mailing Adress: 1016 West Stadium Ave</p>" + "<p>Cary Quadrangle #609</p>" + "<p>West Lafayette, IN 47906</p>" + "<p>Links:</p>" + "<p><a href='https://github.com/mnsupreme'>GitHub</a></p>" + "<p><a href='http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>DevPost</a></p>").show()
    }, 2100)
    }
  })
}

function resume(){
  $("#error").empty()
  $('.typed-cursor').hide()
  window.open("resume.pdf", "_blank")
  $('.typed-cursor').hide()
  $('#command').empty().typeIt({
    strings: ['cd Resume'],
    speed:200,
    lifeLike: true
  })
}
