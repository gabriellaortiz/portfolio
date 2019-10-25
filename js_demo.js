$.ajax({
    url: "https://api.tumblr.com/v2/blog/lolsnack.tumblr.com/info?api_key=sNCvOfqUTzUJzBOViCbYfkaGeQaFAS4Q4XNtHMu8YPo6No3OiY",
    dataType: 'jsonp',
    success: function(results){
    $("header h1").html(results.response.blog.title); 
    }
});
$.ajax({
    url: "https://api.tumblr.com/v2/blog/lolsnack.tumblr.com/info?api_key=sNCvOfqUTzUJzBOViCbYfkaGeQaFAS4Q4XNtHMu8YPo6No3OiY",
    dataType: 'jsonp',
    success: function(results){
    $("#total").html(results.response.blog.total_posts); 
    }
});

$.ajax({
    url: "https://api.tumblr.com/v2/blog/lolsnack.tumblr.com/info?api_key=sNCvOfqUTzUJzBOViCbYfkaGeQaFAS4Q4XNtHMu8YPo6No3OiY",
    dataType: 'jsonp',
    success: function(results){
    $("#urlthing").html(results.response.blog.url); 
    }
});

$.ajax({
    url: "https://api.tumblr.com/v2/blog/lolsnack.tumblr.com/avatar/128?api_key=sNCvOfqUTzUJzBOViCbYfkaGeQaFAS4Q4XNtHMu8YPo6No3OiY",
    dataType: 'jsonp',
    success: function(avatar){
      console.log(avatar);
 $(".avatar").attr('src', avatar.response.avatar_url); 
    }
});


$.ajax({
    url: "https://api.tumblr.com/v2/blog/typophile.tumblr.com/posts?api_key=sNCvOfqUTzUJzBOViCbYfkaGeQaFAS4Q4XNtHMu8YPo6No3OiY",
    dataType: 'jsonp',
    success: function(posts){
      var postings = posts.response.posts;
      console.log(postings);
      var text = '';
      for (var i in postings) {
        var p = postings[i];
        text += '<li><img src=' + p.photos[0].original_size.url +'><a href='+p.post_url+' target="_blank"></a></li>';
      }
      $('ul').append(text);
    }
});

