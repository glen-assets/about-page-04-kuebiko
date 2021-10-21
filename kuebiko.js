// IF THE EYES ARE THE WINDOW TO THE SOUL
// WHY DO YOU ONLLY FEEL ALIVE WHEN THEY'RE CLOSED

$(document).ready(function(){
    
    /*------- CALCULATE BIOTEXT HEIGHT -------*/
    var sbH = parseInt(getComputedStyle(document.documentElement)
             .getPropertyValue("--Sidebar-Image-Height")),
          t = $(".title").outerHeight(),
        sbt = $(".subtitle").outerHeight(),
          q = $(".quote-sect").height(),
         cl = $(".customlinks").height(),
       gap1 = parseInt(getComputedStyle(document.documentElement)
             .getPropertyValue("--Subtitle-Top-Gap")),
       gap2 = parseInt(getComputedStyle(document.documentElement)
             .getPropertyValue("--Subtitle-Bottom-Gap")),
       gap3 = parseInt(getComputedStyle(document.documentElement)
             .getPropertyValue("--Quote-Section-Top-Gap")),
       gap4 = parseInt(getComputedStyle(document.documentElement)
             .getPropertyValue("--CustomLinks-Top-Gap"));
    
    var houh = sbH - t - sbt - q - cl - gap1 - gap2 - gap3 - gap4;
    
    $(".bio-text").height(houh);
    
    if($(".the-text").height() < $(".bio-text").height()){
        $(".the-text").css("padding-right","0");
        $(".bio-text").css("width","100%");
        $(".quote-text").css("padding-right","0");
    }

    
    /*------- RETRIEVE LAST LINE OF PARAGRAPH by godfrzero -------*/
    /* https://stackoverflow.com/a/17783444/8144506 */
    /* help from @annasthms & @magnusthemes */
    $(window).load(function(){
        if (!$(".quote-source").length){
            $(".quote-text p:last").css("margin-bottom","-3px");
        }
        
        var srcpos = $("[position]").attr("position");
        if(srcpos == "left"){
            $(".quote-source").removeClass("ergh");
            $(".quote-text").find("p:last").css("margin-bottom","1em");
            $(".q-line, .source-text").css("margin-top","0");
        }
        
        if(srcpos == "right"){
            $(".quote-source").addClass("right");
            $(".quote-source").removeClass("ergh");
        }
        
        if(srcpos == "inline"){
            $(".quote-source").addClass("inline");
            var $paraQuote = $(".quote-text").find("p:last");
                originalHeight = $paraQuote.height();
            
            var lastLine = "";
            
            while ($paraQuote.height() === originalHeight && $paraQuote.height() && originalHeight) {
            	lastLine = ($paraQuote.text().split(" ").slice(-1) + " " + lastLine).trim();
                $paraQuote.text($paraQuote.text().split(" ").slice(0, -1).join(" "));
            }
            
            $paraQuote.html($paraQuote.html() + " <span>" + lastLine + "</span>");
            $(".quote-text span").wrap("<div class=imdoingmybest></div>");
            
            $(".quote-source").appendTo($(".imdoingmybest"));
            $(".inline").removeClass("ergh");
            
        }//end 'inline' if
    });//end winload
    
    
    /*------- QUOTATION MARK -------*/
    /* load external file w/o using jquery .load() */
    /* by: Nikhil Singh | https://stackoverflow.com/a/60820479/8144506 */
    fetch('https://glen-assets.github.io/about-page-04-kuebiko/quotation-mark.html')
    .then(data => {
      return data.text()
    })
    .then(data => {
      var divs = document.getElementsByClassName("quote-svg");
        for (var i = 0; i < divs.length; i++){
            divs[i].innerHTML = data;
        }
    });
    
    window.onload = () => {
        $(".quote-svg svg").css("fill","var(--Quotation-Mark-Color)");
    }
    
    
    /*------- MUSIC PLAYER -------*/
    var aaa = document.getElementById("audio");
    
    var hasAutoplay = $("#audio").attr("autoplay");
    
    if (typeof hasAutoplay !== typeof undefined && hasAutoplay !== false) {
        $(".pausee").addClass("aff");
        $(".playy").addClass("beff");
    }
        
    $(".parmesan").click(function(){
        if (aaa.paused) {
          aaa.play();
          $(".pausee").toggleClass("aff");
          $(".playy").toggleClass("beff");
        } else {
          aaa.pause();

          $(".playy").toggleClass("beff");
          $(".pausee").toggleClass("aff");
        }
    });
    
    aaa.onended = function(){
        $(".playy").removeClass("beff");
    	$(".pausee").removeClass("aff");
    };
});//end docready
