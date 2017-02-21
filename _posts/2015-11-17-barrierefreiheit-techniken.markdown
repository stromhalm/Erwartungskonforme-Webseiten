---
layout: post
title:  "Die Techniken der Barrierefreiheit"
subtitle: Hier werden die Techniken der Barrierefreiheit vorgestellt
category: barrierefreiheit
author: Jan H.
---

Das Internet ist in den vergangenen Jahren immer mehr in den Mittelpunkt der Gesellschaft gerückt. Es genießt eine viel höhere Bedeutsamkeit, als noch vor wenigen Jahren. Sehr viele Tätigkeiten im Alltag finden heute über das Internet statt, sei es durch Nachrichten, Fernsehen, Einkäufe, Online Formulare und viele mehr. <!--more-->
Gerade vor diesem Hintergrund sollte nicht vergessen werden, dass auch immer mehr Menschen mit Behinderungen das Internet nutzen wollen. Eine entsprechende Sensibilisierung hat in den vergangenen Jahren stattgefunden und findet auch heute noch statt. So werden Webseiten für Menschen mit Behinderung angepasst, woraus alle Nutzer Vorteile erzielen, da Seiten so übersichtlicher und aufgeräumter aussehen und sich die Navigation vereinfacht.
Im Folgenden werden einige der wichtigsten Techniken vorgestellt.

<!--more-->

### Screenreader - die Schnittstelle zum Inhalt
Unter einem Screenreader versteht man ein Bildschirmleseprogramm, welches Inhalte auf dem Bildschirm erfasst. Dies ist essentiell für Blinde und Sehbehinderte, da sie die Inhalte nicht selbst wahrnehmen können. Somit wird eine alternative Benutzerschnittstelle zur grafischen Benutzeroberfläche geboten.
Ein Screenreader erkennt alle Elemente, welche auf dem Bildschirm angezeigt werden. Es können nicht nur Texte mittels Audioausgabe vorgelesen werden, sondern alle grafischen Elemente des Bildschirms. Der Nutzer kann also durch einen Screenreader alle Elemente auf dem Bildschirm wahrnehmen, denn die Software kann eine Vielzahl weiterer Informationen ausgeben. Dies kann beispielsweise die Position eines Fensters, eines Buttons und dessen Beschriftung oder auch ein Menü sein, in dem der Nutzer navigiert.
So kann eine vollwertige Navigation gewährleistet werden.<sup>1, 2</sup>

Hierfür gibt eine Vielzahl an Programmen, wie etwa JAWS, das als Marktführer im Bereich der Bildschirmleseprogramm gilt.<sup>4</sup>  Des Weiteren gibt es auch Programme, die direkt im Betriebssystem integriert sind, wie VoiceOver von Apple, das mit Mac OS ausgeliefert wird.<sup>5</sup>

Einige mögliche Anwendungen eines Screenreaders sind im Folgenden aufgelistet.


### Die Audioausgabe
Eine Möglichkeit Texte, welche mit einen Screenreader erfasst wurden, nicht visuell auszugeben ist die Audioausgabe. Der Text wird hierbei durch die Lautsprecher des Computers ausgegeben. Der Text klingt allerdings teilweise unangenehm, da die Aussprache nicht immer richtig ist und die Betonung nicht die Qualität eines Menschen erreicht.<sup>3</sup>


### Ausgabe in Braille-Schrift für Blinde
Falls eine Braillezeile vorhanden ist, kann der Text auch hierüber ausgegeben werden. Die vom Screenreader erfassten Inhalte werden an das Gerät weitergegeben und darauf ausgegeben. Wie bei der Blindenschrift, bei der Zeichen mit 6 Punkten kodiert und erfühlt werden können, kann auf dem Gerät der Inhalt auf die gleiche Weise erkannt werden. Dazu werden bei Bedarf kleine Erhebungen aus dem Gerät geschoben, die haptisch erkannt werden können.<sup>6</sup>

Der Inhalt einer Webseite kann - im Vergleich zur Audioausgabe - durch eine Braillezeile genauer erfasst werden, da so alle Buchstaben einzeln ausgegeben werden, wodurch die Rechtschreibung erkannt werden kann.

Ein Nachteil der Braillezeile sind die hohen Anschaffungsgebühren, die durchaus mehrere 1000 € betragen können.<sup>11</sup>

### Inhalte in Gebärdensprache für gehörlose Menschen
Gehörlose Menschen haben häufig das Problem, dass sie komplexe Texte nicht so gut erfassen können. Dies liegt darin begründet, dass unsere Sprache eine Lautsprache ist und das Textverständnis in hohem Maße von dem gedanklichen Mitsprechen des Textes abhängt.<sup>12</sup>

Für gehörlose Menschen sind daher Inhalte in Gebärdensprache sehr wichtig. Allerdings müssen Webseiten hierfür in Gebärdensprache umgewandelt werden. Dazu werden die Inhalte von einer Person in Gebärdensprache übersetzt und in einem eigenen Bereich Angeboten, wie etwa auf der Seite des [Bundesministeriums der Justiz und für Verbraucherschutz][gebärdensprache]{:target="_blank"}.


### Die Techniken im barrierefreien Internet
Das World Wide Web Consortium (W3C), welches Techniken und Spezifikationen im Internet standardisiert, hat die Web Accessibility Initiative (WAI) gegründet.<sup>8</sup> Diese Initiative beschäftigt sich mit dem barrierefreien Zugang zum Web. Von ihr wurden mehrere Standards veröffentlicht, die zum Beispiel festlegen, dass es Alternativen zu auditiven und visuellen Inhalten geben soll oder etwa dass die Benutzung nicht auf ein Eingabegerät beschränkt ist.

Barrierefreie Webseiten werden im Allgemeinen nicht durch Kompromisse beim Layout erreicht, sondern durch den webkonformen Einsatz von Auszeichnungs- und Stylesheetsprachen im Web.<sup>7</sup>

Eine der wichtigsten Methoden für Barrierefreiheit ist die Trennung von Inhalt und Layout, damit der Inhalt von Webseiten schnell für Programme erkannt werden kann. Die HTML-Standards sollten eingehalten werden, also die korrekte Bezeichnung der Überschriften usw. Vieles lässt sich erreichen, indem auf eine aussagekräftige Beschreibung geachtet wird.<sup>7, 9</sup>

Der Text sollte skalierbar sein, damit er an Bedürfnisse der Nutzer angepasst werden kann. Diese Bedürfnisse können zum Beispiel ein vergrößerter Text oder größere Abstände im Text sein.
Grafiken lassen sich häufig zumindest grundlegend als Text beschreiben, dies ist eine große Hilfe für Sehbehinderte.
Auch gilt es die Plattformunabhängigkeit zu gewährleisten, da Nutzer mit unterschiedlichen Browsern und Betriebsystemen auf die Seite zugreifen.<sup>5</sup>


### ARIA - Eine Empfehlung der W3C
Für barrierefreie Webseiten sind einige Anpassungen in technischer Hinsicht sinnvoll, damit auf sie problemlos, beispielsweise mit Screenreadern zugegriffen werden kann.
Deshalb hat die Web Accessibility Initiative<sup>8, 9</sup> die ARIA (Accessible Rich Internet Applications) Initiative entwickelt. ARIA ist eine Erweiterung für HTML, die mittels JavaScript und Ajax realisiert wird und das Aussehen der Webseite nicht verändert<sup>7</sup>. Sie stellt Informationen für die barrierefreie Nutzung zur Verfügung. Dafür werden Webseiten nicht als statische Seiten betrachtet, sondern als Anwendungen.
So können Elemente der Seite für Screenreader sichtbar gemacht werden. Auch werden Elemente, die sich selbst aktualisieren von Screenreadern erkannt.


### Captcha-Systeme - Ein Problem für die Barrierefreiheit
Im Internet werden Captcha-Systeme eingesetzt, damit sich Nutzer als Mensch identifizieren können und ausgeschlossen werden kann, dass ein Programm automatisierten Zugriff auf Funktionen erhält. Diese Systeme sind häufig im Internet bei Anmeldeformularen oder Ähnlichem zu finden. Zumeist werden Bilder eingesetzt, die eine verzerrte Ziffernfolge zeigen, welche richtig erkannt werden muss. Dies ist aber gerade für blinde oder sehbehinderte Menschen nicht möglich. Zum Teil werden auch akustische Systeme eingesetzt, hier muss z.B. eine vorgelesene Frage beantwortet werden. Dies ist jedoch wiederum nachteilig für taube Menschen oder für Nichtmuttersprachler.
Auch werden sich Captcha-Systeme in Zukunft dem Problem stellen müssen, dass künstliche Intelligenzen immer ausgefeilter werden und die Captcha-Systeme sich dem anpassen müssen, indem die Tests schwieriger werden, was wiederum bedeutet, dass Captchas für die Barrierefreiheit eine noch größere Hürde darstellen.<sup>10</sup>
Somit ergibt sich hier ein großes Problem des barrierefreien Internets für das bisher keine umfassende und zufriedenstellende Lösung existiert.


<hr id="sources">

#### Quellen
<small>
    <sup>1</sup>  [Einfach barrierefrei](http://einfach-barrierefrei.net){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>2</sup>  [Screendreader Beschreibung](http://www.incobs.de/produktgruppen/items/screenreader.html){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>3</sup>  [Barrierefreies Internet](https://de.wikipedia.org/wiki/Barrierefreies_Internet){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>4</sup>  [Der Screenreader JAWS - Produktseite](http://www.freedomsci.de/prod01.htm){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>5</sup>  [Einfach für alle (Blog) - Angebot der "Aktion Mensch"](https://www.einfach-fuer-alle.de/blog/id/2740/){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>6</sup>  [Braillezeile](http://www.incobs.de/produktgruppen/items/braillezeilen.html){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>7</sup>  [ARIA](https://de.wikipedia.org/wiki/Accessible_Rich_Internet_Applications){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>8</sup>  [W3C ARIA Launch](http://www.w3.org/Press/WAI-Launch.html){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>9</sup>  [W3C ARIA Einführung](http://www.w3.org/WAI/intro/aria){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>10</sup>  [CAPTCHAs im Spannungsfeld zwischen Accessibility und Sicherheit](https://www.bizeps.or.at/news.php?nr=8627){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>11</sup>  [Kosten einer Braillezeile - Deutscher Hilfmittelversand](http://deutscher-hilfsmittelversand.de/produkte/brz/index.html){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>
<small>
    <sup>12</sup>  [Wie funktioniert Gebärdensprache](https://dgfs.de/de/thema/wie-funktionieren-gebaerdensprachen.html){:target="_blank"} Abgerufen: 12.11.2015.
</small><br>



[//]: #
   [gebärdensprache]: <http://www.bmjv.de/DE/GebaerdenSprache/GebaerdenSprache_node.html/>
