$(document).ready(function() {
    $("#onoff-switch").on("change", function(e) {
        a("onoff-switch", e.target.checked)
    }),
    $("#status-icon").on("change", function(e) {
        a("status-icon", e.target.checked)
    })
});


$(document).ready(function(){
  $( function() {
    $( "#intercom-launcher" ).draggable();
  } );
    $("#my").click(function(){
        $("p").toggle();
    });

});
var tips = [
    "To succeed in life, you need three things: a wishbone, a backbone and a funny bone.",
    "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
    "If you're going to do something tonight that you'll be sorry for tomorrow morning, sleep late.",
    "Get your facts first, then you can distort them as you please.",
    "Age is something that doesn't matter, unless you are a cheese.",
    "A child of five would understand this. Send someone to fetch a child of five.",
    "Expert: a man who makes three correct guesses consecutively.",
    "If you could kick the person in the pants responsible for most of your trouble, you wouldn't sit for a month.",
    "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works.",
    ];
    
    setInterval(function() {
        var i = Math.round((Math.random()) * tips.length);
        if (i == tips.length) --i;
        $("p").html(tips[i]);
    }, 5 * 1000);
