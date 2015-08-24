$(document).ready(function() {
   nextQuote();
   $('#nextBtn').on('click', nextQuote);
});

function nextQuote() {
   $.ajax({
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
         var post = data.shift();
         text = post.content;
         $('#quote').html(post.content);
         $('#whom').html("- " + post.title);
         $('#tweetContainer').empty();
         twttr.widgets.createHashtagButton(
            "QuoteOnDesign",
            document.getElementById("tweetContainer"), {
               size: "large",
               text: post.content.replace(/<[^>]*>/g, "")
            }
         );
      },
      cache: false
   });
}