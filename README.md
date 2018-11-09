# Report-Writer
This repository contains  sample source on how to create a PDF file from your Panther Report Writer. 

# Pre-Requisite:
  * Panther Servlet/Apache
  * Panther ini file for the Panther Web application

# This repo consists of the following files:
  * main.css
  * pyordr.html
  * pyordr.jpl
  * pyordr.js
  * cookiedbreport.lib
  * bootstrap_headers.zip
  * cookie JDB database
  
# cookiedbreport.lib
This is the library that contains the Panther client screen pyordr which contains grids . Pyordr.html  is attached as the HTML template.

# Pyordr.jpl
 This jpl is included in the screen pyordr. This screen contains the JPL  that creates the PDF report.  

# Pyordr.html
This is the HTML template that is attached to the JAM screen to generate a user-defined UI for the screen. Main.css and pyordr.js are also attached to HTML template. The Generate PDF button which is visible will generate the Report in PDF format when clicked on.

# bootstrap_headers
Please unzip the file and  have SMPATH  point to it (via Panther ini file) .  This folder contains multiple bootstrap javascript and CSS files which are loaded from Header.html and Footer.html. These two files are referenced in pyordr.html which are load the datatables.

# cookie
JDB database containing data used to populate Panther Grids/Datatables.

Video Tutorial: https://youtu.be/qk_K2Jd9Aco

For further queries: support@prolifics.com
