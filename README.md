# Report-Writer
This repo is for the demo of integration of PDF Reports generation with Panther

# Pre-Requisite:
  * Panther Servlet/Apache
  * ini file for the app

# This repo consists of the following files:
  * main.css
  * pyordr.html
  * pyordr.jpl
  * pyordr.js
  * cookiedbreport.lib
  * bootstrap_headers.zip
  * cookie
  
# cookiedbreport.lib
This is the library that contains the Panther client screen that has grids loaded on it and pyordr.html attached as the HTML template.

# Pyordr.jpl
This is the jpl code that we have separated out from the back of the screen of Panther and kept in a separate file keeping a "include" tag in the section where JPL Procedures are defined in Property Window of the screen.

# Pyordr.html
This is the HTML template that is attached in the JAM screen so as to generate a user-defined UI for the screen. main.css and pyordr.js are attached to HTML template. This has a Generate PDF button which will be visible on the UI and it will generate the Report in PDF format.

# bootstrap_headers
This is a zip file, please unzip it and point it into SMPATH of your ini file so that jserver has no issues with checking the contents of this folder. This folder contains multiple bootstrap JS and CSS files which are being called in a file called Header.html and Footer.html. These two files are being called in pyordr.html which will load the datatables on the browser.

# cookie
This is the database that will help you populate Panther Grids/Datatables.

For further queries: support@prolifics.com
