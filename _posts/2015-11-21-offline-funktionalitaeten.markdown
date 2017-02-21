---
layout: post
title:  Offline Funktionalitäten
subtitle: Welche Möglichkeiten gibt es für moderne Webentwickler?
category: funktionalitaet
author: Jannik S.
---

Eine Webseite wird mit dem Internet, also mit dem Begriff „*online*“ assoziiert. Was also haben *Offline*-Funktionalitäten im Bereich erwartungskonformer Webseiten zu suchen?

Webseiten erreicht man, indem man die URL, also die Adresse der Internetseite, in die Navigationsleiste seines Browsers eingibt. Ein Internetbrowser kann neben diesen Webseiten aus dem Internet auch Offline-Webseiten anzeigen, also solche, die sich nur lokal auf dem Gerät befinden und nicht mit dem Internet verbunden sind. Über eine Offline-Webseite kann man beispielsweise Multimedia-Präsentationen darstellen. <!--more-->
Ein weiteres Konzept, komplett internetloser Webseiten sind offline „*Single Page Applications*“ (Einzelseiten-Webanwendung). Die Seite [TiddlyWiki][tiddlywiki]{:target="_blank"}<sup>3</sup> bietet beispielsweise eine dieser "Single Page Applications" zum herunterladen an. Hierbei handelt es sich um einen persönlichen Notizblock, auf den man über seinen Internetbrowser zugreift und Notizen hinzufügt. Diese Notizen gelangen aber nie ins Internet, sondern werden lokal auf der Festplatte gespeichert.


Wirklich interessant werden Seiten, die im Internet vorgehalten werden, aber viele der Funktionalitäten auf den Computer des Nutzers verlagern und somit verschiedene Offline-Features anbieten. So kann der Besucher Teilbereiche einer Webseite auch dann benutzen, wenn er kurzzeitig die Internetverbindung verliert. Ein sehr praktisches Beispiel hierfür ist die beta-Version, also die nicht komplett fertiggestellte Seitenerweiterung [„Gmail Offline“][gmailoffline]{:target="_blank"}<sup>4</sup> von Google. Diese erlaubt es dem Nutzer - nach einer ersten Synchronisierung mit dem jeweiligen Gmail-Account - sämtliche Mails auch ohne Internetzugriff zu lesen oder darauf zu antworten (abgeschickt werden die E-Mails, wenn wieder ein Internetzugriff vorhanden ist). Diese Funktion ist äußerst praktisch, da einem ein E-Mail-Entwurf, den man in der Internetseite eingibt, nicht verloren geht, wenn das Internet ausfällt, bevor man auf „*Absenden*“ gedrückt hat.<sup>1</sup>

Auch wenn die Anzahl der Breitbandanschlüsse in Deutschland in den vergangenen Jahren [drastisch gestiegen][fazstatistik]{:target="_blank"}<sup>2</sup> ist, macht es dennoch Sinn, Teilbereiche einer Webseite auf das Endgerät des Nutzers auszulagern. Offline-Technologien können die Daten von jedem Besucher individuell *cachen* (zwischenspeichern), was der Webapplikation erlaubt, die für den Nutzer relevanten Daten noch schneller anzuzeigen, als wenn dieser alles neu herunterladen müsste. Der Server bekommt nur die Veränderungen zu sehen, und passt die Daten dementsprechend an.

[Cookies][cookieswiki]{:target="_blank"} speichern auch Informationen offline, jedoch ist hierbei die Kapazität zu gering, um derartige Seiteninhalte zu speichern. Auch *Plugins* (Zusatzmodule), wie Flash oder Java können Inhalte zwischenspeichern. Hierbei ist jedoch vorausgesetzt, dass das Plugin beim Benutzer installiert ist, sodass man durch das Verwenden dieser einige Nutzer von den Funktionalitäten ausschließt.

### Was sind moderne Methoden zum Zwischenspeichern?
Es gibt primär zwei relevante offline-Funktionalitäten in HTML5: Zum einen das „*application caching*“ und den „*offline storage*“ (auch „*client-side storage*“). Beim application caching werden Teile der grundlegenden Programmlogik und der Bedienoberfläche zwischengespeichert, wohingegen beim offline storage nutzerspezifische Inhalte und Daten gespeichert werden.

Application caching ist bereits durch alle Internetbrowser möglich. Hierbei werden besuchte Webseitenlayouts zwischengespeichert, um die Seite beim erneuten Aufruf schneller darzustellen. So würde bei dem oben genannten Beispiel „Gmail Offline“ das Layout und das Design der Seite (also die HTML- und die CSS-Struktur) zwischengespeichert. Die durch den Browser angebotene Funktionalität bleibt jedoch nicht für immer vorhanden, sondern wird irgendwann durch aktuellere Inhalte ausgetauscht. Ein richtiger application cache hat dabei sozusagen einen „Sonderstatus“, denn diese Inhalte bleiben auf der Festplatte vorhanden, bis sie manuell gelöscht werden.

Mit Hilfe des application cache kann der Nutzer also die Seite sofort laden. Aber was geschieht, wenn er in seinem vorherigen Besuch der Seite eine E-Mail verfasst hat und als Entwurf gespeichert hat? Solche Daten sind nutzerspezifisch und deshalb nicht im application cache gespeichert. Stattdessen können diese Daten im offline storage gespeichert werden. So kann auch der Entwurf einer E-Mail sofort absendebereit dargestellt werden. Würde der Nutzer nun Text zur E-Mail hinzufügen, würden nur diese Veränderungen an den Server übermittelt und gleichzeitig lokal gespeichert werden. Sollte die Verbindung zum Internet erneut unterbrochen werden, sind die letzten Änderungen immer noch vorhanden. Deutlich wird dabei auch, dass der Seitenanbieter damit Bandbreite einsparen kann, da die Veränderungen viel kleiner sind, als die gesamte Seite.

### Wofür kann man Offline-Speicher noch verwenden?
Mit lokalem Speicher kann man auch andere Funktionen erzielen. Beispielsweise kann man dadurch Informationen auf den Nutzer soweit auslagern, dass man auf eine eigene Datenbank verzichten kann. Dies hat unter anderem den Vorteil, dass der Nutzer sich nicht zwangsweise registrieren muss und trotzdem die Webseite mit seinen eigenen Daten benutzen kann. Logischerweise sollte dies nur für nicht-sensible Daten geschehen, beispielsweise kann man so den Suchverlauf eines Nutzers auf einer Webseite darstellen.

Ein weiterer Verwendungszweck ist das sogenannte **Host-Proof Hosting**. Hierbei wird die Verschlüsselung von sensiblen Informationen auf den Nutzer ausgelagert. Das bedeutet, dass beispielsweise ein Passwort nie im Klartext den Browser verlässt, sondern vom Browser des Nutzers automatisch verschlüsselt wird. Würde ein potentieller Angreifer die Verbindung des Nutzers mit einer Internetseite abfangen, würde er also nicht das Passwort erlangen können, sondern nur die verschlüsselte Variante dessen, von der er nicht ohne Weiteres auf das Passwort schließen könnte. An dieser Stelle ist es aber wichtig zu erwähnen, dass diese auf den ersten Blick sichere Art der Verschlüsselung [nicht absolut sicher ist][javascriptharmful]{:target="_blank"}<sup>5</sup>.

### Fazit
Offline-Funktionalitäten haben viel Wachstumspotential. Dabei muss das Ziel nicht unbedingt sein, dass eine Webapplikation auch im Flugzeug oder im Zug benutzbar ist. Mit aktuellen Funktionen wie dem "HTML5 offline storage" hat ein moderner Entwickler viele Möglichkeiten um seine Seite nicht nur schneller sondern auch praktischer und für den Nutzer individueller zu gestalten.

<hr id="sources">
#### Quellen
<small>
    <sup>1</sup> Mahemoff, M. (2010) ["Offline": What does it mean and why should I care?](http://www.html5rocks.com/en/tutorials/offline/whats-offline/){:target="_blank"}. Abgerufen: 18.11.2015.
</small><br>
<small>
    <sup>2</sup> Bünder, H (2010) [Aufbruch in die Gigabit-Gesellschaft](http://www.faz.net/aktuell/technik-motor/computer-internet/bandbreite-in-deutschland-aufbruch-in-die-gigabit-gesellschaft-1592576.html){:target="_blank"}. Abgerufen: 19.11.2015.
</small><br>
<small>
    <sup>3</sup> [TiddlyWiki](http://tiddlywiki.com){:target="_blank"}. Abgerufen: 19.11.2015.
</small><br>
<small>
    <sup>4</sup> [GMail Offline](https://chrome.google.com/webstore/detail/gmail-offline/ejidjjhkpiempkbhmpbfngldlkglhimk?hl=en){:target="_blank"}. Abgerufen: 20.11.2015.
</small><br>
<small>
    <sup>5</sup> Ptacek, T. (2001) [Javascript Cryptography Considered Harmful](https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/august/javascript-cryptography-considered-harmful/){:target="_blank"}. Abgerufen: 22.11.2015.
</small><br>



[//]: #

[html5rocks]: <http://www.html5rocks.com/en/tutorials/offline/whats-offline/>
[tiddlywiki]: <http://tiddlywiki.com>
[gmailoffline]: <https://chrome.google.com/webstore/detail/gmail-offline/ejidjjhkpiempkbhmpbfngldlkglhimk?hl=en>
[fazstatistik]: <http://www.faz.net/aktuell/technik-motor/computer-internet/bandbreite-in-deutschland-aufbruch-in-die-gigabit-gesellschaft-1592576.html>
[cookieswiki]: <https://de.wikipedia.org/wiki/Cookie>
[javascriptharmful]: <https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/august/javascript-cryptography-considered-harmful/>
