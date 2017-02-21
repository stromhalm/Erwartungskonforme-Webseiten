(function($) {
    /**
     * Funktionalität für den Klick-Support der Quellenangaben.
     */
    var $sups = $('sup');

    // <sup> durchlaufen und zu Links umwandeln
    $sups.each(function() {
        var $el     = $(this);
        var sources = $el.text().split(', ');
        var cnt     = 0;
        var html    = '<sup>';

        // Links zu #cite_{nr} für jeden <sup> erzeugen
        sources.forEach(function(source) {
            if(cnt > 0) {
                html += ', ';
            }
            html += '<a href="#cite_' + source + '">' + source + '</a>';
            cnt++;
        });

        $el.after(html + '</sup>');
        $el.remove();
    });

    // <sup>-Links in #sources zu Anchor-Name-Tags umwandeln
    $('#sources').nextAll('p').find('small>sup').each(function() {
        var $anchor = $(this).find('a');

        // Name-Attribut anhand des href zusammenbauen.
        // Alles nach dem Hash verwenden.
        $anchor.attr(
            'name',
            $anchor.attr('href').substring(
                $anchor.attr('href').indexOf('#') + 1
            )
        );
        $anchor.removeAttr('href');
    });

    /**
     * Hervorheben von Suchbegriffen
     */
    var hash = window.location.hash;
    if (hash.indexOf('#highlight=') !== -1) {
        var highlight = hash.replace('#highlight=', '');
        $('p').highlightRegex(new RegExp(highlight, 'gi'));
    }
})(jQuery);