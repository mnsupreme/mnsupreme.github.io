var Skills = "<p>Credentials:</p>" + "<ul>" + "<li> Purdue University: Bachelors of Science Computer Information Technology <ul> <li>Expected Graduation Date: May 2019</li></ul></li>" + "<li>General Assembly Vocational Certificate in Front End Web Development</li>" + "<li>Coding Dojo Vocational Certificate Web Development</li>" + "</ul>" + "<p>Skills:</p>"+ "<ul>" + "<li>HTML</li>" + "<li>CSS</li>" + "<li>bootstrap</li>" + "<li>javascript</li>" + "<li>jquery</li>" + "<li>Python</li>" + "<li>MEAN stack (MongoDB, Express, Angular, Node.js)</li>" + "<li>Ruby</li>" + "</ul>" + "<p>Involvements:</p>" + "<ul>" + "<li>President of Purdue Student Chapter of Association for Unmanned Vehicles International (2016-present)</li>" + "<li>Purdue Hackers(2015-present)</li>"  + "</ul>"
var About =  "<p> My name is Mitchell Lee, and I am a junior web developer. I am a Southern California native currently studying Computer Information Technology at Purdue University. I like all things technology whether it be hardware or software, and I am excited to see how technology will change the world for my generation </p>" + "<p>Some of My Hobbies:</p>" + "<ul>" +"<li>Hackathons</li>" +"<li>Airsoft</li>" +"<li>Anime</li>"+"<li>pondering about the future</li>"+"</ul>"
var Contact = "<p>Number: 626-861-7861</p>" + "<p>email:mnsupreme@gmail.com</p>" + "<p>university email: lee2141@purdue.edu</p>" + "<p>Mailing Adress:</p>" + "<ul id='address'> <li>1016 West Stadium Ave</li>" + "<li>Cary Quadrangle #609</li>" + "<li>West Lafayette, IN 47906</li></ul>" + "<p>Links:</p>" + "<p><a href='https://github.com/mnsupreme'>GitHub</a></p>" + "<p><a href='http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav'>DevPost</a></p>"
var Help = "<table id='help'><tr><td>cd Skills</td><td>cd About</td></tr><tr><td>cd Contact</td><td>cd Resume</td></tr><tr><td>cd Github</td><td>cd Devpost</td></tr></table>"
var Project = `<ul style='list-style-type:none;'> 
<li><u><h3><a href='http://devpost.com/software/lahacks-gap' target="_blank">LA Hacks Spring 2015 Gap Tech Challenge (1st place winner)</a></h3></u><p>This project was created at LA Hacks 2015 for Gap with the goal of using web development to better engage their customers. Gap would host a " + "\"who wore it better contest\" " + "on Instagram where users would mark their submissions with a certain hashtag. Our web app would then scrape Instagram for this hashtag and send it to a mock employee console. I wrote most of the front end (two web pages) in bootstrap as well as embed the Instagram posts (from their api) into the front end using iframes. The title of this project is GapWWIB. It is important to note that because this was our first hackathon, the documentation for the project was not to good. I am not marked as a contributor on Github and the Devpost submission does not mark us as winners even though we did win first place.</p></li> 
<li><u><h3><a href='http://devpost.com/software/application-optimization' target="_blank">M Hacks Fall 2015 Wolfram Challenge (3rd place)</a></h3></u><p>This app allowed people seeking employment to rank job postings based on the public sentiment of the employers. It was written in Mathematica, Node.js and Jade. We used a jobs posting website's api to get the job listings. A web scraper looked up thousands of online articles related to the employers and ran it through a sentiment analysis script writen in Mathematica that gave the employers an aggregate seniment ranking. I wrote a responsive front end in CSS flex box, Jquery and Jade. My team mates helped correct some of my Jade code as it was my first time using it. We won third place in this challenge. The title of the project is FLuxDuck</p></li>
<li><u><h3><a href='https://bigredhacks2016.hackerearth.com/sprints/bigredhacks-fall-2016/teams/4eb2c88/submission/' target="_blank">Subletr Big Red Hacks Fall 2016</a></h3></u><p>This app helped people find places to sublet. It was written in MEAN (MongoDB, Express, Angular, Node.js) stack. I wrote 40% of the node server, most of the angular and all of the MongoDB. I also deployed the project on an Amazon EC2 instance and helped some of the newer memebers. At first glance, this app may seem simple and may have a few bugs. However, it was an impressive feat of team work considering that all my teammates had never been to a hackathon or had used MEAN stack before. Half of the team had never had any exposure to web development of front end development.  Yet, we were able deploy a full web app complete with front end frame work and database on an amazon W2 server within 36 hours.</p></li>
<li><u><h3><a href='http://devpost.com/software/delta-skymile-services' target="_blank">Delta Skymile Services Hack Georgia Tech Fall 2016</a></h3></u><p>This app allowed Delta fliers to spend their skymile points on a Lyft ride. It was written in python flask and SQLite. We used the Delta API, Google Geocoding API and Lyft API. I wrote all of the back end except for the database and helped plug in the front end to the templating engine. I also handled all of the API work. It is important to note that due to trouble with working with the Uber API and Lyft API, I was not able to create a mock ride request for the app as originally planned. This project taught me a lot about OAuth 2 protocol for integrating user accounts from different apps (Lyft) into our app. It also helped me improve my ability to communicate with API's in general.</p></li>
<li><u><h3><a href='http://devpost.com/software/parentlock-5k1ivn' target="_blank">ParentLock M Hacks Fall 2016</a></h3></u><p>This app allowed parents to track the location of their child's car based on GPS readings from the car. This app was built in MEAN stack (MongoDB, Express, Angular, Node.js) and Swift 2. This app used the newly unveiled General Motors API and SDK to send coordinates to a node server that would then redirect that information to an IOS app. I wrote the angular web app that would run on the dashboard display of the car. I also worked with the GM API to send gps data to the server every five minutes. The most challenging part of this app was getting my angular app to communicate with our node server as these were two seperate servers rather than one integrated app. My angular app ran on General Motors propietary web server. This inter-communication between servers caused conflicts with the CORS protocol. We were able to fix this by using methods and data that did not require special permissions in the CORS protocol. While I was able to finish my portion of the project, our team failed to finish the geofencing and gps display on the IOS app. Through this project, I was able to learn more about CORS protocol as well as GPS API's. It is important to note that since General Motors unveiled their API and SDK for the first at that hackathon, we were asked not upload any SDK related code on Github and I'm not sure if we were allowed to provide pictures either. A modified version of my angular app is on the Github repository.</p></li>
<li><u><h3><a href='https://github.com/mnsupreme/HBach' target="_blank">Electromagnetic Hallbach Array International Aerial Robotics Team Fall 2015</a></h3></u><p>My robotics team needed a way for our quadcopter trigger the magnetic sensors on moving ground robots. I designed an proprietary electromagnet to be mounted on a quadcopter to try to solve this. The electromagnet channeled most of the magnetic field away from the quadcopter so as not to damage onboard sensors. I used Finite Element Magnetics software to create simulate the magnet. Was able to calculate estimate power requirements and number of coils needed. It was my first time using Finite Element Magnetics software.</p></li></ul>`
$(document).ready(function(){

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
        $("#text").empty().append(Contact).show()
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
      $("#text").empty().append(Help).show()
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
      $("#text").empty().append(Contact).show()
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

function projects(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Projects'],
    speed:100,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Project).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}
