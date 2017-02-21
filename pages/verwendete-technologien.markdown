---
layout: post
title: Verwendete Technologien
subtitle: Die Arbeit im Maschinenraum
permalink: /technologien/
author: Adrian J.
---

Am Anfang unseres Projekts zu erwartungskonformen Webseiten standen verschiedene Entscheidungen über den Einsatz von Technologien, die uns bei der Organisation und im Ablauf, sowie beim Austausch von Dateien und der Erstellung unserer eigenen Webseite helfen sollten.

### E-Mail-Verteiler

Für die einfache schriftliche Kommunikation per E-Mail bot sich die Einrichtung eines E-Mail-Verteilers an. Dieser konnte uns durch die Mitarbeiter der [ARBI] (Abteilung Rechner- und Netzbetrieb Informatik) schnell zur Verfügung gestellt werden. Über den E-Mail-Verteiler wurden unter anderem die Einladungen zu den wöchentlichen Sitzungen sowie die dort angefertigten Protokolle von den jeweils verantwortlichen Gruppenmitgliedern versendet.

Das Vorgehen können wir für den Austausch mit offiziellerem Charakter durchaus empfehlen. Für die einfache und schnelle Kommunikation stellte sich allerdings Telegram als sinnvoller heraus.

### Telegram

Für die schnelle, informellere Kommunikation bot sich die Verwendung eines Messengers an, um beispielsweise auch kurzfristig Termine oder Aufgaben abzustimmen. Wir haben uns für den kostenlosen Messenger [Telegram] entschieden, da dieser neben Apps für alle gängigen Smartphones, auch Anwendungen für Desktop-PCs und Tablets bietet. Telegram verfügt über freie Programmierschnittstellen und bietet verschiedene Möglichkeiten zur Verschlüsselung von Nachrichten. Wir haben hier eine geschlossene Gruppe mit allen Gruppenmitgliedern eingerichtet.

Die Verwendung von Telegram war rückblickend sehr hilfreich und empfehlenswert, um die E-Mail-Flut bei E-Mail-Verteilern zu umgehen.

### Trello

[Trello] ist ein Online-Tool zur Verteilung und Verwaltung von Aufgaben. Wir haben mit einem gemeinsamen Trello-Board die Erledigung der angefallenen Aufgaben organisiert.

Nach kurzer Zeit wurde die Verwendung allerdings wieder eingestellt, da sie sich als überflüssig herausstellte.

### Gitlab

[Gitlab] ist eine Open-Source-Software für die Verwaltung von GIT-Repositorys. In der Gitlab-Installation der Universität unter [gitlab.uni-oldenburg.de] haben wir ein gemeinsames Repository zur Versionsverwaltung unserer Webseite angelegt. Die Verwendung von Gitlab bot allen Gruppenmitgliedern eine einfache Möglichkeit jederzeit inhaltliche und gestalterische Änderungen an der Webseite vorzunehmen, ohne dass hierfür weitere Software benötigt wurde.

Zudem wurden über dieses Repository die wöchentlichen Sitzungsprotokolle zur Verfügung gestellt.

Unser öffentlich Gitlab-Repository ist hier einsehbar: [Gitlab-Repository]

Die Verwendung von Gitlab können wir empfehlen, da sich ein guter Überblick der erledigten Aufgaben ergab und eine einfache Zusammenarbeit ermöglicht wurde.

### Jekyll

Jekyll ist ein einfacher Generator für statische Webseiten, der (vergleichbar mit LaTeX) aus Template-Dateien und Inhalten statische Verzeichnisstrukturen für den Einsatz auf einfachen Webservern generiert.
Hiermit konnten wir eine logische Trennung von Inhalten und dem Design unserer Webseite erreichen. Durch Jekylls Markdown-Unterstützung benötigten die Autorinnen und Autoren nicht einmal HTML-Kenntnisse zum Schreiben der Inhalte, während die Vorzüge der Versionsverwaltung durch die einfache Markdown-Syntax ausgenutzt wurden.

Unser Gitlab-Repository ist per Git-Hook mit einem externen Server verbunden, der auf Änderungen auf dem master-Branch hört und bei Commits automatisch den Jekyll-Build-Prozess auslöst. Die dabei generierte Verzeichnisstruktur wird schließlich per rsync mit dem uns zugewiesenen Server in der ARBI synchronisiert.

Über Plugins lässt sich der Funktionsumfang von Jekyll zusätzlich erweitern. Beispielsweise nutzen wir das Plugin [Simple-Jekyll-Search] für die Möglichkeit der Suche per Javascript auf der Webseite.

Als Grundlage für unsere Jekyll-Templates diente das freie Bootstrap-Theme [_Creative_ von _Start Bootstrap_]. Dieses beinhaltet folgendes ebenfalls frei lizenzierte Bild:

* Apple MacBook Pro laptop and black iPhone, CC0, [startupstockphotos.com]

Die Verwendung von Jekyll können wir ebenfalls empfehlen - wobei hierbei deutlich mehr Wissen im Bereich der Internettechnologien erforderlich ist. Insbesondere dann, wenn der Buildprozess automatisiert werden soll.

### Piwik

Zur Auswertung der Besucher auf unserer Webseite verwenden wir das Open-Source-Tool [Piwik].

Rückblickend hätte man auf Piwik verzichten können. Die Auswertungen am Ende des Semesters waren dennoch _nice to have_.

### Etherpad

Zum simultanen Verfassen der gemeinsamen Texte auf der Startseite und des Antrags für die Sonderaktion haben wir [Etherpads] verwendet. Etherpads bieten gegenüber GIT den Vorteil, dass die Texte in Echtzeit miteinander verfasst werden können. Gegenüber Google-Dokumenten bieten Etherpads eine bessere Nachvollziehbarkeit von Änderungen.

Für das gemeinsame Verfassen einzelner Texte können wir Etherpad empfehlen.

### Google Drive

Für die Erstellung der Kongress-Präsentation haben wir uns für ein gemeinsames Google-Dokument entschieden. Google Drive verfügt über eine intuitive Oberfläche und bietet gegenüber der Versionsverwaltung mit Git den Vorteil, dass Änderungen in Echtzeit übertragen werden, was das simultane Arbeiten stark vereinfacht.

Das gemeinsame Arbeiten an der Abschlusspräsentation außerhalb der Treffen führte zu einem sehr guten Ergebnis. Wir können die Verwendung von Google-Drive-Dokumenten deshalb durchaus empfehlen.

[ARBI]: <https://www.uni-oldenburg.de/informatik/department/arbi/>
[Telegram]: <http://telegram.me>
[Trello]: <https://trello.com>
[Gitlab]: <https://about.gitlab.com>
[gitlab.uni-oldenburg.de]: <http://gitlab.uni-oldenburg.de>
[Gitlab-Repository]: <https://gitlab.uni-oldenburg.de/erwartungskonforme-webseiten/website>
[Simple-Jekyll-Search]: <https://github.com/christian-fei/Simple-Jekyll-Search>
[_Creative_ von _Start Bootstrap_]: <https://github.com/IronSummitMedia/startbootstrap-creative>
[startupstockphotos.com]: <http://startupstockphotos.com>
[Piwik]: <http://piwik.org>
[Etherpads]: <http://etherpad.org>
