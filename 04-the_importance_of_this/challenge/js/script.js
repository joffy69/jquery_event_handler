$(document).ready(function() {
    $(".stream-nav").on("click", function() {
        // A selector to match all cards in all streams
        var allStreamsSelector = ".card";
        // A selector to match just this stream's cards
        // for this, we use the class with the same name as this nav link's id
        var thisStreamSelector = "." + this.id;

        // First remove the highlight from all of the cards
        $(allStreamsSelector).removeClass("card-highlight");
        // Then apply the highlight to just this stream's cards
        $(thisStreamSelector).addClass("card-highlight");
    });
});
