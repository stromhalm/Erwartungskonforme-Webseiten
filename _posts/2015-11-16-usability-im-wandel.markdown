---
layout: post
title:  "Usability im Wandel"
subtitle: Welche Usability-Richtlinien gelten morgen?
category: usability
author: Hendrik Kahlen
---

Die Usability von heute ist nicht mehr die gleiche wie vor 5 Jahren! Die Gründe sind unterschiedlich, weshalb in diesem Artikel ein genauerer Blick auf den Wandel in der Usability geworfen werden soll.<!--more--> Wem die [Normen und Konventionen] der Usability noch nicht bekannt sind, werfe an dieser Stelle zunächst einen Blick auf unsere entsprechende Unterrubrik.

### Gründe für Usability-Änderungen
Wie eingangs erwähnt, gibt es mehrere Gründe für den Wandel: Nach [usability.ch]{:target="_blank"} liegt der Hauptgrund dafür in den technischen Veränderungen (Innovationen) und dem verändertem Nutzerverhalten. Mit technischen Veränderungen ist hier gemeint, dass sich Browser und die Leistung der Endgeräte immer weiter verbessern, weshalb neue Design-Elemente möglich sind. Gleichzeitig ändert sich mit der Zeit das Nutzerverhalten, beispielsweise weil eine beliebte Webseite ein Grundmuster für die Navigation in die Köpfe der Masse gelegt hat (z.B. Google).<sup>1</sup>

### Was hat sich geändert? - Neue und alte Usability Regeln
Die Nutzung von Flash-Inhalten oder Webseiten die auf das Flash-Plugin angewiesen sind, wird heute nach Usability-Richtlinien als kritisch angesehen. Das liegt vor allem daran, dass Flash-Plugins sicherheitskritisch sind, auf vielen Apple-Geräten nicht funktionieren oder eine explizite Installation erforderlich ist, die Webseite also ohne das Plugin nicht (komplett) funktioniert. Noch Im Jahr 2000 war dies anders, da es damals keine vergleichbaren Alternativen für schnelle Animationen auf meist noch statischen Webseiten gab. Mit HTML5 gibt es jedoch heute eine solche Alternative (neben anderen), weshalb die Flash-Nutzung heutzutage nicht mehr als usabilitykonform angesehen wird. Eine gute Illustration eines (auf schlechte Weise) übertriebenen Gebrauchs von Flash findet sich auf [orrfelt.com]{:target="_blank"} und verdeutlicht die hier genannten Punkte.<sup>1</sup>

Auch haben sich die Positionen von Design-, Bedienelementen oder des eigentlichen Contents im Laufe der Jahre verändert, bzw. nähern diese sich einem Grenzmuster an. Mit Bezug auf [Einschränkungen der Werbung durch Usability]{:target="_blank"} ist es interessant zu sehen, wie sich die Erwartungen über die Position von Werbung auf einem Webseiten-Raster verändert haben, bis sie seit 2009 auf der rechten Seite verharren.
Ein ähnlicher Wandel lässt sich bei der Suchfunktion feststellen, wobei hier noch zusätzlich bemerkenswert ist, dass die Erwartung einer Suchfunktion insgesamt zurück geht. Ein Grund dafür könnte in der schnelleren Suche über Google und in den meist nur einmaligen Besuchen liegen (ausgenommen sind Online-Shops). Die Position einer Suchfunktion von 2003-2009 wurde fast ausnahmslos in der oberen rechten Hälfte erwartet, wie auf [eResult] zu sehen ist.<sup>2</sup>

### Usability der Zukunft - eine Blick in die Zukunft
Es gibt mehrere Usability-Design-Trends im Jahr 2016, wovon einige schon 2015 stark vertreten waren und auch noch weiterhin stark an Bedeutung gewinnen werden. Unter anderem ist dies das Responsive Web Design. Mit zahlreichen, mehr oder weniger verschiedenen, Browsern und Endgeräten, wie etwa Smartphones, Tablets und Laptops, braucht es für diese unterschiedlichen Umgebungen das passende Design mit anderen Größenordnungen, Struktur- und Bedienelementen. Damit nicht für jede Umgebung eine eigene Version der Webseite erstellt werden muss, wird die Webseite "responsive" (engl. für reagierend) entwickelt, also eine Webseite für alle Plattformen mit unterschiedlichen Abmessungen.<sup>3</sup>

Bemerkenswert ist hierbei, dass die Google-Websuche nach Responsive Design filtert und für mobile Endgeräte Ergebnisse benachteiligt, wenn sie sich nicht an die Abmessungen anpassen. Google bietet mit einem [Responsive Design Test]{:target="_blank"} ein Tool, mittels dessen man seine Webseite auf Googles Konventionsanforderungen prüfen kann.<sup>3</sup>

Ein weiterer Trend sind die Card Style Layouts, womit sich sehr schnell und übersichtlich viel Content organisieren lässt. Dazu werden Bilder genutzt, die zum Thema des Contents passen, bzw. diesen bestmöglich zusammenfassen. Diese Layouts können auch gut in Kombination mit Responsive Design eingebracht werden. Ein solches Card-Style-Layout findet sich auf unserer [Home Page]. Auch wenn damit nicht die Kategorien organisiert sind, verdeutlicht es gut die Funktionsweise:<sup>4</sup>

<section class="no-padding" id="portfolio">
    <div class="container-fluid">
        <div class="row no-gutter">
           {% for member in site.members %}
               <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
                   <div class="portfolio-box">
                       <img src="http://www.informatik.uni-oldenburg.de/~iug15/ew/img/members/{{ member.image }}" class="img-responsive" alt="">
                       <div class="portfolio-box-caption">
                           <div class="portfolio-box-caption-content">
                               <div class="project-category text-faded">
                                   {{ member.role }}
                               </div>
                               <div class="project-name">
                                   {{ member.name }}
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            {% endfor %}
        </div>
    </div>
</section>
Zu beachten ist an dieser Stelle natürlich, dass die gewählten Bilder zu dem erwarteten Content der Kategorie passen müssen.

Der vermutlich spannendste Design-Trend ist das Story-Telling. Man überlege sich hierbei, wie wichtig Content für Webseiten ist. Folgt dieser Content als langer Text, der nicht auf passende Weise visuell aufbereitet ist, so ist das lesen sehr mühselig. Mit Story-Telling gibt es die Möglichkeit dem Nutzer mit auf eine Story-Reise zu nehmen, wobei ihm mit kleinen Texten und zu diesen Texten passenden und erklärenden Bildern sowie Videos eine Geschichte erzählt wird. Der Hauptvorteil liegt darin, dass durch die teils starken Bilder und Videos die Aufmerksamkeit des Lesers nicht verloren geht, vor allem aber damit ein zum Inhalt passender Hintergrund einhergeht, was auch eine Forderung der Usability-Konventionen ist.
Auch werden Texte so interaktiver, wodurch. der Nutzer interaktiv die Geschichte durch scrollen oder Maus- oder Touchbewegungen steuern kann.<sup>3, 5</sup>
Eine schöne Verdeutlichung von Story Telling bietet [story.glass]{:target="_blank"}, wo Story Telling noch einmal mittels Story Telling erklärt wird.

### Fazit
Die Vielfältigkeit der Gründe des Wandels von Usability-Konventionen wurde nun kurz angerissen. Im Zuge der technischen Möglichkeiten wird es dabei auch zukünftig immer verschiedene Möglichkeiten geben Web-Designs umzusetzen, von denen einige zukünftig nicht mehr usabilitygerecht sein dürften. Usability wird immer einem Wandel unterliegen, aber heutige Web-Designer sind gut beraten, wenn sie aktuelle Trends im Auge behalten und diese usabilitykonform umsetzen.

<hr id="sources">

#### Quellen

<small>
    <sup>1</sup> Jakob Nielsen (2007), deutsche Übersetzung. [Veränderungen oder Stabilität bei Web-Usability-Richtlinien](http://www.usability.ch/news/veraenderung-oder-stabilitaet-bei-web-usability-richtlinien.html). Abgerufen: 23.11.2015.
</small><br>
<small>
    <sup>2</sup> (eResult). [Erwartungskonforme Website-Gestaltung – Ergebnisse einer Längsschnittanalyse (2003 bis 2009)](http://www.eresult.de/ux-wissen/forschungsbeitraege/einzelansicht/news/imagery-iii-erwartungskonforme-website-gestaltung-ergebnisse-einer-laengsschnittanalyse-2003-b/). Abgerufen: 23.11.2015.
</small><br>
<small>
    <sup>3</sup> Prince Pal (2015). [Web Design Trends Prediction for 2016](https://think360studio.com/web-design-trends-prediction-for-2016-by-prince-pal/). Abgerufen: 24.11.2015.
</small><br>
<small>
    <sup>4</sup> Ajeet Yadav (2015). [10 UX Design Trends You Shouldn’t Overlook in 2015](http://usabilitygeek.com/10-ux-design-trends-2015/). Abgerufen: 24.11.2015.
</small><br>
<small>
    <sup>5</sup> Tina Bauer (2015). [Webdesign 2016: Auf diese 6 Trends sollten Marketer sich einstellen](http://onlinemarketing.de/news/webdesign-2016-auf-diese-6-trends-sollten-marketer-sich-einstellen). Abgerufen: 24.11.2015.
</small><br>

[eResult]: <http://www.eresult.de/ux-wissen/forschungsbeitraege/einzelansicht/news/imagery-iii-erwartungskonforme-website-gestaltung-ergebnisse-einer-laengsschnittanalyse-2003-b/>
[usability.ch]: <http://www.usability.ch/news/veraenderung-oder-stabilitaet-bei-web-usability-richtlinien.html>
[Responsive Design Test]: <https://www.google.com/webmasters/tools/mobile-friendly/>
[story.glass]:<http://story.glass/>
[orrfelt.com]:<http://orrfelt.com/>
[Home Page]: <http://www.informatik.uni-oldenburg.de/~iug15/ew/>
[Die schlimmsten Usability-Fehler]: <http://www.informatik.uni-oldenburg.de/~iug15/ew/usability/die-haeufigsten-und-schlimmsten-usability-fehler/>
[Einschränkungen der Werbung durch Usability]: <http://www.informatik.uni-oldenburg.de/~iug15/ew/usability/einschraenkungen-der-werbung-durch-usability/>
[Testmethoden]: <http://www.informatik.uni-oldenburg.de/~iug15/ew/usability/Testmethoden/>
[Normen und Konventionen]: <http://www.informatik.uni-oldenburg.de/~iug15/ew/konventionen/>
