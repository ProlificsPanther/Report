# Report-Writer
This repository contains  sample source on how to create a PDF Report Writer. 

# Pre-Requisite:
  * Panther Servlet/Apache
  * Panther ini file for the Panther application

# This repo consists of the following files:
  * main.css
  * pyordr.html
  * pyordr.jpl
  * pyordr.js
  * cookiedbreport.lib
  * bootstrap_headers.zip
  * cookie JDB database
  
# cookiedbreport.lib
This is the library that contains the Panther client screen  <ADD NAME HERE> containing grids . Pyordr.html  is attached as the HTML template.

# Pyordr.jpl
 This jpl is included in the screen  <ADD NAME HERE>  . This screen contains the JPL  that creates the PDF report.  

# Pyordr.html
This is the HTML template that is attached in the JAM screen to generate a user-defined UI for the screen. Main.css and pyordr.js are attached to HTML template. The Generate PDF button which will be visible on the UI and it will generate the Report in PDF format.

# bootstrap_headers
This is a zip file, please unzip it and  have SMPATH  point to it (via Panther ini file) .  This folder contains multiple bootstrap javascript and CSS files which are being loaded from  Header.html and Footer.html. These two files are being  iloaded in pyordr.html which will load the datatables on the browser.

# cookie
This is the JDB database containing  used to  populate Panther Grids/Datatables.

For further queries: support@prolifics.com
