var $labels = $('.experience-label');   //selects all experience labels
var $experiences = $('.experience-item');   //selects all experience items

$labels.click(function () {
    $labels.css('color', 'white');
    $(this).css('color', '#69bfb9');
    var correspondExp = $(this).attr('id');
    /* Removes the "-label" suffix from the experience label, 
     * so correspondExp will then match the experience label's corresponding experience item.
     * For instance, for the experience label with id="it-desk-label", 
     * "it-desk-label" will be extracted then substringed to be "it-desk", which matches
     * the corresponding experience item with id="it-desk"  */
    correspondExp = correspondExp.substring(0, correspondExp.length-6)
    $experiences.hide();
    $("#" + correspondExp).show();
    $("#" + correspondExp + " ul").css('opacity', '1'); //for some reason UL opacity gets set to 0 when changing...
    $("#" + correspondExp).css('transform', 'none');    //for some reason when toggling divs the second one gets shifted down via transform...
});
