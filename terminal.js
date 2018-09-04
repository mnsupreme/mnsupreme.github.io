var Skills = "<p>Credentials:</p>" + "<ul>" + "<li> Purdue University: Bachelors of Science Computer Information Technology <ul> <li>Concentration: Cyber Security</li><li>Expected Graduation Date: May 2019</li></ul></li>" + "<li>General Assembly Vocational Certificate in Front End Web Development (2016)</li>" + "<li>Coding Dojo Vocational Certificate Web Development (2016)</li>" + "<li>Stanford Machine Learning Certificate issued by Coursera (2018)</li>" +"</ul>" + "<p>Skills:</p>"+ "<ul>" + "<li>HTML</li>" + "<li>CSS</li>" + "<li>bootstrap</li>" + "<li>javascript</li>" + "<li>jquery</li>" + "<li>Python</li>" + "<li>SQL</li>" + "<li>MEAN stack (MongoDB, Express, Angular, Node.js)</li>" + "<li>Hapi.js</li>" + "<li>Handlebars</li>" + "<li>Unit Testing</li>" + "</ul>" + "<p>Involvements:</p>" +"<ul>" + "<li>Purdue Student Chapter of Association for Unmanned Vehicles International: President (2016-2017), Vice President (2017-present)</li>" + "</ul>"
var About =  "<p> My name is Mitchell Lee, and I am a web developer. I am a Southern California native currently studying Computer Information Technology with an emphasis in Cyber Security at Purdue University. I like all things technology whether it be hardware or software, and I am excited to see how technology will change the world for my generation </p>" + "<p>Some of My Hobbies:</p>" + "<ul>" +"<li>Hackathons</li>" +"<li>Anime</li>"+"<li>Boxing</li>"+"</ul>"
var Contact = "<p>Number: 626-861-7861</p>" + "<p>email:mnsupreme@gmail.com</p>" + "<p>university email: lee2141@purdue.edu</p>" + "<p>Mailing Adress:</p>" + "<ul id='address'> <li>1875 Arriba Dr.</li>"  + "<li>Monterey Park, CA 91754</li></ul>" + "<p>Links:</p>" + "<p><a href='https://github.com/mnsupreme' target='_blank'>GitHub</a></p>" + "<p><a href='http://devpost.com/mnsupreme?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav' target='_blank'>DevPost</a></p>" + "<p><a href='https://www.hackerearth.com/@lee2141' target='_blank'>Hacker Earth</a></p>" + "<p><a href='https://www.linkedin.com/in/mitchell-lee' target='_blank'>LinkedIn</a></p>" 
var Help = "<table id='help'><tr><td>cd Skills</td><td>cd About</td></tr><tr><td>cd Contact</td><td>cd Resume</td></tr><tr><td>cd Github</td><td>cd Devpost</td></tr><tr><td>cd Projects</td></tr></table>"
var Portfolio = `
<h3 class="project_title"><a href='https://engineering.purdue.edu/CEM/events/2016/3id-joins-cem-enterprise-' target="_blank" class="project_link"> 3iD Applications Student Developer 2016-2018</a></h3><p>3iD develops websites and mobile apps for Purdue University and its associated departments. As a Student developer I help to develop the backend in PHP and SQL. I also help to develop the front end in Javascript, Jquery, HTML and CSS.</p>
<h3 class="project_title"><a href='http://www.in3applications.com/' target="_blank" class="project_link"> IN3 Applications Student Developer 2016-2018</a></h3><p>IN3 applications develops websites and mobile apps for private clientel. As a Student developer I help to develop the backend in PHP and SQL. I also help to the develop the front end in Javascript, Jquery, HTML and CSS. I have also write python scripts to help get images and location information from the Google Maps API</p>
<h3 class="project_title"><p class="project_link">Lowe's Summer 2017 Web Development Internship</p></h3><p class="project_description">Interned as a Web Developer for Lowe's Home Improvement at their corporate headquarters. Developed a front end interface to test their store finder API. Formatted and displayed JSON from the API. The app caught invalid entries and assigned each JSON category a different color for readability purposes. Project finished well ahead of schedule. Written using Node.js using Hapi.js as the backend framework and Handlebars as the front end framework. HTML, Jquery and Lowe's own in house CSS framework were used to stylize the front end. Lastly, the app was unit tested using Lab.js which is part of the Hapi framework.</p>
<h3 class="project_title"><a href='https://github.com/purdue-arc/mission7_state_estimator' target="_blank" class="project_link" >Unscented Kalman Filter for State Estimation Spring 2018</a></h3><p class="project_description">My robotics team needed a way to predict the states (positions) of ground robots so that the quadcopter we were building could better track them. This was a challenge because the process that determined the states of these robots was both non-linear and discontinous. I first wrote software to simulate the behavior of the ground robots and then I implemented an Unscented Kalman Filter to try to predict their states. The Unscented Kalman Filter was able to track the robots except when the robots rotated.</p>"
<h3 class="project_title"><a href='http://devpost.com/software/lahacks-gap' target="_blank" class="project_link" >LA Hacks Spring 2015 Gap Tech Challenge (1st place winner)</a></h3><p class="project_description">This project was created at LA Hacks 2015 for Gap with the goal of using web development to better engage their customers. Gap would host a \"who wore it better contest\" on Instagram where users would mark their submissions with a certain hashtag. Our web app would then scrape Instagram for this hashtag and send it to a mock employee console. I wrote most of the front end (two web pages) in bootstrap as well as embed the Instagram posts (from their api) into the front end using iframes. The title of this project is GapWWIB. It is important to note that because this was our first hackathon, the documentation for the project was not to good. I am not marked as a contributor on Github and the Devpost submission does not mark us as winners even though we did win first place.</p>
<h3 class="project_title"><a href='http://devpost.com/software/application-optimization' target="_blank" class="project_link" >M Hacks Fall 2015 Wolfram Challenge (3rd place)</a></h3><p class="project_description">This app allowed people seeking employment to rank job postings based on the public sentiment of the employers. It was written in Mathematica, Node.js and Jade. We used a jobs posting website's api to get the job listings. A web scraper looked up thousands of online articles related to the employers and ran it through a sentiment analysis script writen in Mathematica that gave the employers an aggregate seniment ranking. I wrote a responsive front end in CSS flex box, Jquery and Jade. My team mates helped correct some of my Jade code as it was my first time using it. We won third place in this challenge. The title of the project is FLuxDuck</p>
<h3 class="project_title"><a href='https://bigredhacks2016.hackerearth.com/sprints/bigredhacks-fall-2016/teams/4eb2c88/submission/' target="_blank" class="project_link">Subletr Big Red Hacks Fall 2016</a></h3><p class="project_description">This app helped people find places to sublet. It was written in MEAN (MongoDB, Express, Angular, Node.js) stack. I wrote 40% of the node server, most of the angular and all of the MongoDB. I also deployed the project on an Amazon EC2 instance and helped some of the newer memebers. At first glance, this app may seem simple and may have a few bugs. However, it was an impressive feat of team work considering that all my teammates had never been to a hackathon or had used MEAN stack before. Half of the team had never had any exposure to web development of front end development.  Yet, we were able deploy a full web app complete with front end frame work and database on an Amazon EC2 server within 36 hours.</p>
<h3 class="project_title"><a href='http://devpost.com/software/delta-skymile-services' target="_blank" class="project_link" >Delta Skymile Services Hack Georgia Tech Fall 2016</a></h3><p class="project_description">This app allowed Delta fliers to spend their skymile points on a Lyft ride. It was written in python flask and SQLite. We used the Delta API, Google Geocoding API and Lyft API. I wrote all of the back end except for the database and helped plug in the front end to the templating engine. I also handled all of the API work. It is important to note that due to trouble with working with the Uber API and Lyft API, I was not able to create a mock ride request for the app as originally planned. This project taught me a lot about OAuth 2 protocol for integrating user accounts from different apps (Lyft) into our app. It also helped me improve my ability to communicate with API's in general.</p>
<h3 class="project_title"><a href='http://devpost.com/software/parentlock-5k1ivn' target="_blank" class="project_link" >ParentLock M Hacks Fall 2016</a></h3><p class="project_description">This app allowed parents to track the location of their child's car based on GPS readings from the car. This app was built in MEAN stack (MongoDB, Express, Angular, Node.js) and Swift 2. This app used the newly unveiled General Motors API and SDK to send coordinates to a node server that would then redirect that information to an IOS app. I wrote the angular web app that would run on the dashboard display of the car. I also worked with the GM API to send gps data to the server every five minutes. The most challenging part of this app was getting my angular app to communicate with our node server as these were two seperate servers rather than one integrated app. My angular app ran on General Motors propietary web server. This inter-communication between servers caused conflicts with the CORS protocol. We were able to fix this by using methods and data that did not require special permissions in the CORS protocol. While I was able to finish my portion of the project, our team failed to finish the geofencing and gps display on the IOS app. Through this project, I was able to learn more about CORS protocol as well as GPS API's. It is important to note that since General Motors unveiled their API and SDK for the first at that hackathon, we were asked not upload any SDK related code on Github and I'm not sure if we were allowed to provide pictures either. A modified version of my angular app is on the Github repository.</p>
<h3 class="project_title"><a href='https://github.com/mnsupreme/HBach' target="_blank" class="project_link" >Electromagnetic Hallbach Array International Aerial Robotics Team Fall 2015</a></h3><p class="project_description">My robotics team needed a way for our quadcopter trigger the magnetic sensors on moving ground robots. I designed an proprietary electromagnet to be mounted on a quadcopter to try to solve this. The electromagnet channeled most of the magnetic field away from the quadcopter so as not to damage onboard sensors. I used Finite Element Magnetics software to create simulate the magnet. Was able to calculate estimate power requirements and number of coils needed. It was my first time using Finite Element Magnetics software.</p>`
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
          $("#psuedo-input").focus()
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

    else if($("#psuedo-input").val() == "cd Portfolio" || $("#psuedo-input").val() == "cd portfolio" || $("#psuedo-input").val() == "cd cat Portfolio" || $("#psuedo-input").val() == "cd cat portfolio" ){
        $("#error").empty()
        $("#psuedo-input").val("")
        $("#command").empty()
        $("#text").empty().append(Portfolio).show()
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

function portfolio(){
  $("#error").empty()
  $('.typed-cursor').hide()
  $("html, body").scrollTop( $(document).height() );
  $('#command').empty().typeIt({
    strings: ['cd Portfolio'],
    speed:100,
    lifeLike: true,
    callback: function(){
      setTimeout(function(){
      $("#psuedo-input").val("")
      $("#command").empty()
      $("#text").empty().append(Portfolio).show()
      $("html, body").scrollTop( $(document).height() );
    }, 1200)
    }
  })
}
