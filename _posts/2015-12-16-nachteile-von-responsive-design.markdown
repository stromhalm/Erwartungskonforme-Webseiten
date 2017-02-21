---
layout: post
title:  "Nachteile von Responsive Design"
subtitle: Folgen für die Erwartungskonformität
category: usability
author: Stephan A.
---

Responsive Design hat viele Vorzüge, wenn man bedenkt, dass manche Webseiten sowohl von mobilen Endgeräten, als auch von gewöhnlichen Desktop-PCs oder Laptops aus aufgerufen werden. Als Beispiel kann hier eine Touristen-Webseite dienen, die sowohl im Urlaub von Smartphone, als auch zu Hause auf dem Laptop o.Ä. aufgerufen wird. Allerdings hat Responsive Design auch Nachteile.<!--more--> Neben einem signifikant erhöhtem Entwicklungsaufwand zählt auch eine Beeinträchtigung der Performance der Webseite dazu. Das liegt daran, dass zusätzliche Informationen auf dem Endgerät (durch zusätzliche CSS-Einträge) verarbeitet und ständig abgefragt werden müssen, sodass Interaktionen des Nutzers mit der Webseite verlangsamt werden. Während dieses Problem im Desktop-Bereich aufgrund der erhöhten Rechenleistung kein allzu großes Problem darstellt, war und ist dies im mobilen Bereich anders.<sup>1</sup>

### Ist Responsive Design immer sinnvoll?
In manchen Fällen ist das Erstellen von responsiven Webseiten in Deutschland aufgrund des zu erwartenden Nutzerverhaltens weniger sinnvoll und steht in keinem Verhältnis zu den verursachenden Kosten. Man denke hier an Online-Shops, die Büroartikel vertreiben oder an Webseiten, die auf die Bedürfnisse von Senioren zugeschnitten sind. Man kann bei solchen Webseiten davon ausgehen, dass weit über 90 % der Nutzer Desktop-User sind. Entsprechend wäre es dort wenig sinnvoll das wesentlich aufwendigere und kostenintensivere Responsive Design anzuwenden. Anders sieht es beispielsweise bei Routenplanern aus, die zu einem erheblichen Anteil von mobilen Endgeräten aus benutzt werden. Entsprechend ist hier ein gutes Responsive Design, welches eine Nutzung auf Desktop- sowie mobilen Geräten ermöglicht, unabdingbar.<sup>4</sup> Es kann auch hilfreich sein, sich anzuschauen mit welchen Betriebssystemen im Internet gesurft wird, um die Hauptzielplattform zu ermitteln und die Sinnhaftigkeit von Responsive Design zu evaluieren. Laut der [W3SCHOOLS](http://www.w3schools.com/browsers/browsers_mobile.asp){:target="_blank"} sind im Jahr 2015 gerade einmal 5 % aller Geräte im Internet mobil.<sup>5</sup>

### Bedürfnisse für unterschiedliche Endgeräte
Technisch gesehen ergibt sich das Problem, dass sich die Bedienung und damit die Bedürfnisse der Nutzer von Smartphones und Tablets stark von denen der Desktop-PCs oder Laptops unterscheiden. Besteht Responsive Design primär darin dieselben Inhalte wie für die Desktop-PCs untereinander anzuordnen, so besteht das Problem, dass der Nutzer sehr viel scrollen muss. Das widerspricht jedoch der Erwartung schnell auf Informationen zugreifen zu können. Insbesondere kann es durch die Umordnung von Elementen passieren, dass einzelne Elemente auf der mobilen Seite an Positionen erscheinen, wo sie vom Nutzer nicht erwartet werden.<sup>2, 6</sup> Des Weiteren werden manchmal beim responsive Design Elemente auf mobilen Geräten gar nicht angezeigt. Ist der Nutzer jedoch an ein solches Element von der Desktop-Version gewöhnt, so widerspricht dies seiner Erwartungshaltung.<sup>6</sup> Insbesondere bei der Nutzung von Suchfunktionen kann es auf mobilen Geräten sinnvoll sein hierfür spezielle Seiten für eine bessere Nutzbarkeit einzufügen. Diese Seiten werden auf einem Desktop-PC nicht benötigt. Da Responsive Webdesign jedoch das Aufbauen paralleler Strukturen verhindern möchte, ergeben sich hier Schwierigkeiten.<sup>6</sup>

Wird die Webseite für den mobilen Bereich (m./Domain/) getrennt entwickelt, sodass sie optimal auf einem Smartphone genutzt werden kann, treten die oben genannten Probleme nicht auf. Allerdings impliziert dies die Notwendigkeit eine zweite Version für Desktop-Rechner zu entwickeln, sodass effektiv zwei Seiten entwickelt und gewartet werden müssten. Vorteilhaft bei zwei Versionen ist jedoch, dass bei der mobilen Version ein geringerer Overhead im Vergleich zur responsiven Seite entsteht, wodurch die Ladezeiten verringert werden können. Weiter sorgt dies auf leistungsschwächeren Endgeräten für einen Performance-Schub bei Interaktionen mit der Webseite. Solche Effekte auf die Erwartungskonformität sind nicht zu vernachlässigen. Wie Google 2009 auf der [O'Reilly Velocity Conferenz](http://conferences.oreilly.com/velocity/velocity2009/public/schedule/detail/8523){:target="_blank"} aufgezeigt hat, verringert sich die Zahl der Nutzer schon bei einer vergrößerten Wartezeit von etwa 400 ms um etwa 1 % in einem Zeitraum von 6 Wochen.<sup>3</sup>

Gerade bei Tablet-PCs sind heutzutage Bildschirmgrößen erreicht, die denen von (kleinen) Notebooks mehr gleichen als denen von Smartphones. Dadurch kann mit diesen Geräten auch auf „herkömmlichen“ Seiten wesentlich besser gesurft werden als auf Seiten, die für Smartphones optimiert worden sind.<sup>2, 4</sup>

### Fazit
Abschließend lässt sich festhalten, dass Responsive Webdesign Vor- und Nachteile hat. Je nach Leistungsfähigkeit der bevorzugten Endgeräte der Hauptzielgruppe sollte daher entschieden werden, ob auf Responsive Webdesign gesetzt wird. Zu beachten ist dabei, ob es zu größeren Problemen hinsichtlich der Erwartungskonformität und Performance kommt, wobei im letzteren Fall die Entwicklung einer zusätzlichen mobilen Version der Webseite empfohlen werden kann.

<hr id="sources">

#### Quellne
<small>
    <sup>1</sup> Maisriml, Chio & König, Sabine (2015). [Die Nachteile von Responsive Webdesign](http://beesign.com/themen/responsive-webdesign-nachteile.html){:target="_blank"}. Abgerufen: 07.11.2015.
</small><br>
<small>
    <sup>2</sup> Voelcker, Patrick (2013). [Warum Responsive Webdesign Schrott ist](http://www.mobile-zeitgeist.com/2013/08/07/warum-responsive-webdesign-schrott-ist/){:target="_blank"}. Abgerufen: 07.11.2015.
</small><br>
<small>
    <sup>3</sup> [Brutlag, Jake & Schurman, Eric (2009)](http://conferences.oreilly.com/velocity/velocity2009/public/schedule/detail/8523){:target="_blank"}. Abgerufen: 07.11.2015.
</small><br>
<small>
    <sup>4</sup> [Woelky, Frank (2015)](http://blog.ff-webdesigner.de/world-wide-webdesign/responsive-webdesign-schwachsinn.html){:target="_blank"}. Abgerufen: 07.11.2015.
</small><br>
<small>
    <sup>5</sup> [W3SCHOOLS (2015)](http://www.w3schools.com/browsers/browsers_mobile.asp){:target="_blank"}. Abgerufen: 07.11.2015.
</small>
<small><br>
    <sup>6</sup> [Hövener, Markus](http://www.suchradar.de/magazin/archiv/2014/1-2014/responsive-webdesign.php){:target="_blank"}. Abgerufen: 07.11.2015.
</small>
