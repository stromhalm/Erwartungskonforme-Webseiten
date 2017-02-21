---
layout: post
title:  Erwartungskonforme Suche
subtitle: Wann ist eine seiteninterne Suche erwartungskonform?
category: funktionalitaet
author: Jannik S.
---

Die Suchmaschine gilt heutzutage als zentrales Element vieler Internetauftritte. Besonders vorangetrieben durch seitenübergreifende Suchmaschinen wie Google oder Bing transferieren viele Nutzer ihre Erwartungen auch auf seiteninterne Suchmaschinen. Dabei sind die Nutzer derart an das Suchen nach spezifischen Schlagwörtern gewöhnt, dass die vorhandenen Erwartungen sehr hoch sind.

<!--more-->

Folgendermaßen erreicht der Nutzer möglicherweise nicht sein Ziel und gibt im Zweifelsfall auf. Da die marktführenden Suchmaschinen mittlerweile viele Antworten direkt auf der "Search Engine Results Page" (SERP) also der Ergebnisseite einer Suchanfrage, geben und hier mächtige Tools im Alltag sind, gehen Nutzer von einer äquivalenten Mächtigkeit seiteninterner Suchmaschinen aus. Laut [Jakob Nielsen][jkbnielsen1]{:target="_blank"} könnte in vielen Fällen durch grundlegende SEO-Techniken ("Search Engine Optimization", dt. Suchmaschinenoptimierung) auch die seiteninterne Suche optimiert werden.

Dabei haben die Nutzer verschiedene Erwartungen an die Suche. So ziemlich jedem Internetnutzer dürfte die Google-Suchmaschine ein Begriff sein, jedoch wissen die meisten nicht, was alles im Hintergrund einer jeden Suche passiert. Tatsächlich liegt die Erfolgsquote interner Suchmaschinen bei nur 33%.<sup>1</sup> Dennoch ist die Suche im Zeitalter der knappen Aufmerksamkeitsspanne ein starker Anziehungspunkt, um schneller zu seinen Ergebnissen zu gelangen. Nach [Nielsen][jkbnielsen1]{:target="_blank"} sind Suchfunktionen so beliebt, weil Besucher einer Webseite durch die Suchfunktion unabhängig von der Struktur des Seitenangebots sind und sie die Seite nicht navigieren müssen, wie es vom Entwickler vorgesehen wurde. Stattdessen können sie direkt das finden, wonach sie suchen. Des Weiteren gilt die Suche laut Nielsen als eine Art Rettungsluke, wenn sich der Nutzer auf der Seite verirrt. Aus diesem Grund sollte die Suche auf jeder Seite verfügbar sein – am besten an einer Stelle, an der jeder Nutzer sie schnell findet.

### Wo erwartet der Nutzer also die Suchleiste?
Laut einer [Untersuchung der eResult GmbH im Sommer 2009][eresult]{:target="_blank"} wird eine Suchleiste am häufigsten im oberen rechten Seitenbereich erwartet. Allerdings geben nur noch 71,8% der befragten Nutzer an, überhaupt eine Suchfunktion auf einem Internetangebot zu erwarten. Laut einer [vorherigen Untersuchung von Silberer, Wilhelm & Engelhardt][swe2001]{:target="_blank"} wurde die Suchleiste in 2001 noch im oberen linken Seitenrand erwartet. Dies untermalt die Dynamik des Seitenlayouts, welches sich stetig verändert und neuen Technologien anpasst. Auch das Aussehen einer Suchleiste ist von Bedeutung: Laut Nielsen hat sich das Nutzen der seiteninternen Suchfunktion auf seiner Webseite um 91% erhöht, nachdem er seine Suchfunktion nicht hinter einem Link platziert hat, sondern als Suchbox, in der man Text eingibt, darstellte. Außerdem sollte die Suchleiste breit genug sein, um seitentypische Suchbegriffe komplett darzustellen, damit der Nutzer nicht die Übersicht über seine eigenen Suchbegriffe verliert.

### Welche Funktionen erwartet der Nutzer?
Auch wenn der Nutzer immer höhere Erwartungen an eine Suchfunktion stellt, heißt das nicht automatisch, dass dieser sich immer besser damit auskennt und selbstständig lernt, wonach er suchen muss. Laut Jakob Nielsen ist dies [ganz und gar nicht der Fall][jkbnielsen2]{:target="_blank"}. Er fand heraus, dass der Standardnutzer bei seiner ersten Suche direkt ein passendes Ergebnis erwartet. Ist dies nicht der Fall, sinkt die Wahrscheinlichkeit, dass dem Nutzer bei seiner zweiten Suche ein Treffer gelingt und diese nimmt bei weiteren Suchen noch mehr ab. Tatsächlich finden oft gar nicht mehr als eine Suche statt, da der Nutzer in diesem Fall davon ausgeht, dass die angebotene Suchfunktion schlecht ist, aufgibt und auf seitenübergreifende Suchen wie Google zurückgreift. Bleibt der Nutzer doch auf der selben Seite, geht er meist nicht über die erste Seite der Suchergebnisse hinaus, da er davon ausgeht, dass die Suchergebnisse nach Relevanz sortiert sind und demnach bei fortführender Durchsuchung immer unpassender werden. Befindet sich das gesuchte Ergebnis nicht auf der ersten Seite der Ergebnisse, ist die Chance, ein passendes Ergebnis auf der zweiten Seite zu finden, umso geringer. Für den Entwickler ist es daher sehr wichtig, die Suchergebnisse möglichst sinnvoll zu priorisieren, sodass alle wahrscheinlich richtigen Ergebnisse direkt auf der ersten Seite stehen. Unterstützend dazu können im Log der eigenen Suchmaschine die eingegebenen Begriffe der Seitenbesucher analysiert werden, und damit die optimalen Treffer für gängige Suchbegriffe manuell anzupassen.

![xkcd Comic](http://www.informatik.uni-oldenburg.de/~iug15/ew/img/xkcd1334.png "xkcd Comic")

Ein bestehendes Problem ist demnach, dass der Nutzer nicht immer weiß, wonach er suchen muss, um sein gewünschtes Ergebnis zu erhalten und oftmals zu faul ist sich lange mit der Suchfunktion zu beschäftigen. Diesem kann man entgegen kommen, indem man dem Nutzer bereits beim Tippen der Anfrage durch eine automatische Erweiterung dieser, ähnliche Suchbegriffe anzeigt. Diese Funktion unterstützt den Nutzer in der Ausformulierung seiner Gedanken und zeigt ähnliche Informationen noch bevor die Eingabe beendet ist. Wichtig hierbei ist jedoch, dass der Nutzer bei einer Unterstützung seiner Eingabe, welche sein gewünschtes Suchergebnis *nicht* enthält, davon ausgehen könnte, dass die Seite den gewünschten Inhalt auch nicht anbietet. Eine andere Möglichkeit der Unterstützung ist das Anbieten ähnlicher Suchergebnisse, wenn die Suchanfrage keine Ergebnisse geliefert hat. Zu beachten ist aber, dass die ähnlichen Suchergebnisse nicht zu weit von der gegebenen Suchanfrage abweichen sollten, da der Nutzer ein schnelles Urteil fällen könnte. Besteht die Suchanfrage aus einem gängigem, aber vagem Begriff (bspw. wenn der Nutzer schlicht nach dem Begriff „Fernseher“ sucht), gibt es auch die Möglichkeit, dem Nutzer zunächst eine Kategorienübersicht anzubieten, mit der er seine Suche eingrenzen kann. Das Angebot an Fernsehern ist vielfältig und jeder Käufer hat eigene Erwartungen und Ansprüche, weswegen dem Budget-Käufer, der nur auf der Suche nach einem Schlafzimmerfernseher ist, kein halbes Kino angeboten werden sollte. Sehr beliebt für das Auswählen von Kategorien ist eine Ansammlung von Checkboxen auf der linken Seite der Ergebnisseite. Dies ermöglicht dem Nutzer eine Übersicht seiner Sucheingrenzungen und ist besonders konform mit den [Shneiderman-Regeln][shneidermanpost]{:target="_blank"}, da diese Ansicht eine einfache Reversibilität seiner Eingrenzung ermöglicht.

![Amazon Such-support](http://www.informatik.uni-oldenburg.de/~iug15/ew/img/amazonsearch.png "Amazon Such-support")

Laut einer [Studie von Nielsen][jkbnielsen2]{:target="_blank"} ist die typische Suche zwei Wörter lang. Dies sollte in der Optimierung der automatischen Suchanfragenerweiterung beachtet werden, um immer noch möglichst hochqualitative Ergebnisse zu erzeugen. Eine Art „Erweiterte Suche“ sollte laut Nielsen nicht direkt zur Verfügung stehen. Dies liegt daran, dass die Nutzer sich nicht direkt mit einer solchen Suche auskennen und diese eventuell falsch benutzen und somit nicht das gewünschte Ergebnis behalten. Eine erweiterte Suche kann man aber dann zur Verfügung stellen, wenn die erste Suche erfolglos war. Diese Teilsuche, die durch eine erweiterte Suche angeboten werden kann, ist jedoch auch mit Vorsicht anzuwenden. Beispielsweise erlaubt die Amazon das Suchen in einer Unterkategorie, beispielsweise „Küche und Haushalt“. Wenn man in dieser Teilsuche nach einer DVD sucht, hat man jedoch wenig Erfolg. Demnach sollte dem Nutzer stets klar und deutlich bewusst gemacht werden, in welcher Kategorie er sich befindet. Ist die Seite eher kompakter und hat ein weniger großes Angebot, kann man die Teilsuche auch komplett vermeiden, um derartige Fehler zu umgehen. Amazon bietet zudem einen sehr detaillierten Support für die Suchfunktion an, der es Amazon selber ermöglicht, die Suche zu optimieren und dem Kunden die Chance bietet seinen Artikel zu finden oder um neue Artikel aufzunehmen.

### Fazit
Abschließend lässt sich festhalten, dass hinter einer tatsächlich erwartungskonformen Suche mehr steckt, als eine schlichte 1:1 Suchbegriffsabfrage. Nicht nur das Aussehen spielt eine große Rolle, sondern auch die Funktionalität, die dahinter steckt. Mithilfe intelligenter Kategorisierung und andauernder Optimierung der Suche kann die Wahrscheinlichkeit erhöht werden, dass ein Seitenbesucher stets schnell zu seinem gewünschten Ergebnis gelangt.

<hr id="sources">
#### Quellen
<small>
    <sup>1</sup> Nielsen/Loranger (2006): Prioritizing Web Usability, New Riders Publ, S. 139
</small><br>
<small>
    <sup>2</sup> Krökel, F. (2006) [Reichweite der Suchfunktion](http://www.fit-fuer-usability.de/archiv/reichweite-der-suchfunktion/). Abgerufen: 14.11.2015.
</small><br>
<small>
    <sup>3</sup> Brand-Sassen, K. (2009) [Imagery III: Erwartungskonforme Website-Gestaltung – Ergebnisse einer Längsschnittanalyse (2003 bis 2009)](http://www.eresult.de/ux-wissen/forschungsbeitraege/einzelansicht/news/imagery-iii-erwartungskonforme-website-gestaltung-ergebnisse-einer-laengsschnittanalyse-2003-b/). Abgerufen: 07.11.2015.
</small><br>
<small>
    <sup>4</sup> Wilhelm, T. & Yom, M. & Wohlfahrt, J. [Aus dem Usability Labor - Erwartungskonforme Webseitengestaltung](http://www.marke-x.de/deutsch/webmarketing/archiv/usability_labor.htm). Abgerufen: 13.11.2015.
</small><br>
<small>
    <sup>5</sup> Ludewig, E. (2012) [SEO & Usability: Warum beides zusammengehört und wie Konflikte gelöst werden können](http://www.usabilityblog.de/2012/08/seo-usability-warum-beides-zusammengehort-wie-konflikte-gelost-werden-konnen/). Abgerufen: 13.11.2015.
</small><br>
<small>
    <sup>6</sup> [xkcd-Comic](http://xkcd.com/1334/). Abgerufen: 13.11.2015.
</small><br>
<small>
    <sup>7</sup> Nielsen, J. (2001) [Search: Visible and Simple](http://www.nngroup.com/articles/search-visible-and-simple/). Abgerufen: 15.11.2015.
</small><br>


[//]: #

   [jkbnielsen1]: <http://www.nngroup.com/articles/search-visible-and-simple/>
   [jkbnielsen2]: <http://www.nngroup.com/articles/search-navigation/>
   [uschulz]: <http://www.bui.haw-hamburg.de/pers/ursula.schulz/webusability/suchma.html>
   [eresult]: <http://www.eresult.de/ux-wissen/forschungsbeitraege/einzelansicht/news/imagery-iii-erwartungskonforme-website-gestaltung-ergebnisse-einer-laengsschnittanalyse-2003-b/>
   [swe2001]: <http://www.marke-x.de/deutsch/webmarketing/archiv/usability_labor.htm>
   [xkcd1334]: <http://i.imgur.com/DAhApW6.jpg>
   [amazonsuche]: <http://i.imgur.com/85rrKx4.jpg>
   [shneidermanpost]: <http://www.informatik.uni-oldenburg.de/~iug15/ew/usability/shneiderman-regeln/>
