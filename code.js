function isEveryInputEmpty() 
{
    var allEmpty = false;

    $('.input_rate_continue').each(function() {
        if ($(this).val() == '') {
            allEmpty = true;
            return true; // we've found a non-empty one, so stop iterating
        }
    });

    return allEmpty;
}
