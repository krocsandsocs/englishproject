window.onload = function() {
    document.getElementsByClassName("tablinks")[0].click();
};

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(document).ready(function() {

    $('.lyricTrigger').click(function(e) {
        e.stopPropagation();
        var lyricId = $(this).attr('id'); 
        var content = lyricsContent[lyricId]; 
        var popup = $('#popupDiv');
        popup.html('<img src="' + content.img + '" alt="Lyric Image"><p>' + content.text + '</p>');
        popup.show();
      });
      

    $('#popupDiv').click(function(e) {
        e.stopPropagation();
    });

    $(document).click(function() {
        $('#popupDiv').hide();
    });

});

var lyricsContent = {
    "lyric1": {
      "img": "secondfirst.png",
      "text": "The lyrics &quot;I'm your lover, I'm your zero / I'm the face in your dreams of glass&quot; resonate with Holden&rsquo;s character as they express the same sense of yearning for connection and the familiarity of alienation. He went through life wanting to form genuine connections but many times felt like a &lsquo;zero&rsquo;, insignificant."
    },
    "lyric2": {
      "img": "first drawing.png",
      "text": "Throughout the song, the singer repeats the phrase &ldquo;She&rsquo;s the one for me&rdquo; multiple times, similarly throughout the novel, Holden constantly desires some sort of connection or companionship. Jane Gallagher is the best example of this as he has genuine feelings for her but echoing the song, never actually makes contact with her. "
    },
    "lyric3": {
        "img": "thirddrawing.png",
        "text": "Holden throughout the novel experiences disillusionment and isolation, the lyrics &quot;Emptiness is loneliness, and loneliness is cleanliness / And cleanliness is godliness, and God is empty / Just like me&quot; reflect that exact experience. &lsquo;Emptiness&rsquo; and &lsquo;Loneliness&rsquo; encapsulate Holden&rsquo;s feeling of isolation, while &lsquo;cleanliness&rsquo; and &lsquo;godliness&rsquo; connect to the idea that &lsquo;God is empty&rsquo;, reflecting his view of the world as being phony, inauthentic and artificial."
        },
    "lyric4": {
        "img": "COPOUT.png",
        "text": "The lyrics &ldquo;Intoxicated with the madness / I&rsquo;m in love with my sadness/ Bullshit fakers, enchanted kingdoms&rdquo; directly relate to the emotional turmoil that is synonymous with Holden&rsquo;s experience. It captures the broad strokes of his alienation from society, and how lonely he feels. It also reflects his disdain for the societal pretense he feels like is making up for the ultimately phony and hollow world of the adults."
        },
  };
  