$(document).ready(function(){

    var ask = 0;

    // First Button
    $('#firstButton').click(function(){
        if ( ask == 0) {
            $('#firstButton').html("Cacher l'article");
            $('#firstArticle').show("slow");
            ask = 1;
        }
        else {
            $('#firstButton').html("Afficher l'article");
            $('#firstArticle').hide("slow");
            ask = 0;
        }

    }); // Fin First Button

    // Second Button
    $('#secondButton').click(function(){

        if (ask == 0) {
            $('#secondButton').html("Cacher l'image");
            $('#secondArticle').show("slow");
            ask = 1;
        }
        else {
            $('#secondButton').html("Afficher l'image");
            $('#secondArticle').hide("slow");
            ask = 0;
        }


    }); // Fin First Button

});