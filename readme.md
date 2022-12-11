# My Serato DJ Mapping for four decks on two Xone:K2

I was unable to debug my mapping, because some parameters behaved a bit different than I needed.
Serato XML is undocumented and hard to read (generated mapping file had ~2500 LOC of XML with many duplicities).
Serato UI doesn't help much, there is nothing like [Ableton Live Mapping Browser](https://www.ableton.com/en/manual/midi-and-key-remote-control/#29-2-the-mapping-browser). 

## Resources
* Original XML source that is used in this app [XONE K2 - 4 decks (Live FX).xml](XONE%20K2%20-%204%20decks%20%28Live%20FX%29.xml).
* [Allen&Heath Xone:K2 manual](https://www.allen-heath.com/media/XoneK2_UG_AP8509_3.pdf) contains all data needed for MIDI mapping of those devices.
* For SVG surfaces  I used [Xone:K2 Blank Overlays](https://www.allen-heath.com/media/Xone+K2+Blank+Overlays.zip) and converted Illustrator to SVG.
![K2 Blank.svg](K2%20Blank.svg)

## Parts

* [reader](reader) - deno script to convert source XML to JS representation (`cd reader; deno run --allow-read index.js | pbcopy`)
* [display](display) - web frontend for visualisation of Serato XML data. (`cd display; yarn; yarn dev`)