// Docs for the Tumblr API v1 are here: http://www.tumblr.com/docs/en/api/v1#api_read
// Requires jQuery
// Create a function that will fetch n latest Tumblr posts and format them for placement into a page
var fetchLatestTumblrPost = function() {

  // Fetch the feed with Tumblr API v1
  $.getJSON("https://gabriella-ortiz.tumblr.com/api/read/json?num=10&callback=?", function(data) {

    // For each post in the returned data
    $.each(data.posts, function(i, posts) {
      var post = "", postElement;
      // The post variable holds the HTML that will be placed into the page
      // Use the relevant post variables for each type from the docs
      switch (this.type) {
        case "regular":
        // Be sure to check for the variables existence before appending it to the HTML
          if (this["regular-title"]) {
            post += "<h3>" + this["regular-title"] + "</h3>";
          }
          post += "<p>" + this["regular-body"] + "</p>";
          break;
        case "link":
          post = "<h3><a href='" + this["link-url"] + "'>" + this["link-text"] + "</a></h3>";
          break;
        case "quote":
          post = this["quote-text"];
          break;
        case "photo":
          // post = "<div class='image_box'> <img class='img_post' src='" + this["photo-url-1280"] + "'> </div>";

          // no div, just image blocks
          post = "<img class='img_post' src='" + this["photo-url-1280"] + "'>";

          // post = "<a href='" + this["url-with-slug"] + "'><img src='" + this["photo-url-1280"] + "'></a>";
          // if (this["photo-caption"]) {
          //   post += "<p>" + this["photo-caption"] + "</p>";
          // }
          break;
        // case "video":
        //   post = this["video-player"];
        //   // post = this["video-player"] + "<p>" + this["video-caption"] + "</p>";
        //   break;
        case "audio":
          post = this["audio-player"];
          if (this["id3-artist"] && this["id3-title"]) {
            post += "<p class='ap-info'><span class='artist'>" + this["id3-artist"] + "</span> – <span class='track'>" + this["id3-title"] + "</span></p>";
          } else {
            if (this["id3-title"]) {
              post += "<p class='ap-info'><span class='track'>" + this["id3-title"] + "</span></p>";
            }
          }
          if (this["audio-caption"]) {
            post += this["audio-caption"];
          }
          break;
        case "conversation":
        case "answer":
          break;
      }
      // Append this post HTML to the container, can be any jQuery selector
      $("#weblog").append(post);

      // Make individual images draggable
      $('.img_post').draggable({stack: "div"});
      // document.getElementsByClassName(".img_post").style.transform.rotate(Math.random());

      // Here I'm substituting the tumblr audio player with audiojs
      // This section of code might(?) be able to be removed because of the new HTML5 audio player
      postElement = document.getElementById("tumblr-audio");
      if (postElement) {
        return audiojs.create(postElement, {
          imageLocation: "images/player-graphics.gif",
          retinaImageLocation: "images/player-graphics@2x.gif",
          swfLocation: "swf/audiojs.swf"
        });
      }

    });
  });





      //   function getRandomPosition(element) {
      //   var x = document.body.offsetHeight-element.clientHeight;
      //   var y = document.body.offsetWidth-element.clientWidth;
      //   var randomX = Math.floor(Math.random()*x);
      //   var randomY = Math.floor(Math.random()*y);
      //   return [randomX,randomY];
      // }
      // window.onload = function() {
      //   var img_post = document.createElement('img_post');
      //   img_post.setAttribute("style", "position:absolute;");
      //   img_post.setAttribute("src", "some-image.jpg");
      //   document.body.appendChild(img_post);
      //   var xy = getRandomPosition(img_post);
      //   img_post.style.top = xy[0] + 'px';
      //   img_post.style.left = xy[1] + 'px';
      // }
};


// INSTAGRAM PULL
// $(document).ready(function () {
//   // $.when(getYoutube, getSecondInstagram,getMainInstagram, getPinterest, getPinterest2).done(function(youtube, instagram1, instagram2, pinterest) {
//   //  $.fn.fullpage.reBuild();  
//   // });  
//   var token = '5160003.1677ed0.5752c8d2a5e54d04ae553320e1de3e79', // learn how to obtain it below
//       userid = 16763727, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
//       num_photos = 20; // how much photos do you want to get
   
//   var main_insta_array = [];

//   var getMainInstagram = $.ajax({
//     url: 'https://api.instagram.com/v1/users/' + 'self' + '/media/recent', // or /users/self/media/recent for Sandbox
//     dataType: 'jsonp',
//     type: 'GET',
//     data: {access_token: token, count: num_photos},
//     success: function(data){
//       console.log(data);
//       for( x in data.data ){
//         $image_url = data.data[x].images.standard_resolution.url;
//         $link = data.data[x].link;
//         $date = new Date(parseInt(data.data[x].created_time) * 1000);
//         $date = ($date.getMonth()+1)+"/"+$date.getDate()+"/"+$date.getFullYear();
//         main_insta_array.push('<div class="image_source_container"><div class="image-draggable-parent"><div class="image-draggable-container"><img class="instagram1-js" src="' + $image_url + '"/><div class="source-link"><a target="_blank" href="'+ $link + '">Insta ' + $date + '</a></div></div></div></div>');
//         // console.log(data.data[x].images.standard_resolution.url);
//         // $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
//         // data.data[x].images.thumbnail.url - URL of image 150х150
//         // data.data[x].images.standard_resolution.url - URL of image 612х612
//         // data.data[x].link - Instagram post URL 
//       }
//       main_insta_array = prepSocialArray(main_insta_array);
//       if (main_insta_array.length > 1) {
//         var i = 0;
//         $('.main-instagram').each(function(){
//           $(this).html(main_insta_array[i]);
//           i++;
//         });
//       }

//     },
//     error: function(data){
//       console.log(data); // send the error notifications to console
//     },
//       complete: function (data) {
//         makeDraggable(); 
//         if($('body').hasClass('home')) {
//           drawCanvasOnSplash('.main-instagram','glitch-canvas-main');
//         }
//     }
//   });


//GET POSITION
  // function getpos(min, max) {
  //   return Math.floor(Math.random() * (max - min) + min);
  // }


// If the container exists on this page then fetch the lastest posts
// If this JS is only included on the required page then the function can be run without the if statement
// $(document).ready(function() {
//   if ($("#weblog").length > 0) {
//     fetchLatestTumblrPost();
//   }
// });