(function($) {
    /**
     * Gesuchten Begriff an URL anhängen
     */
    var $container = $('#results-container');
    if ($container.length > 0) {
        $container.delegate('a', 'click', function(evt) {
            evt.preventDefault();
            window.location.href = $(this).attr('href') + '#highlight=' + $('#search-input').val();
        });
    }
})(jQuery);
