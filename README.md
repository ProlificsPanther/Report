# ReportWriter
Generate a Panther  Web Report in PDF format

# Prerequisite:
  * Panther Servlet/Apache
  * Panther ini file for the Panther Web application
  * Panther 5.5*

# This repo consists of the following files:
  * main.css
  * pyordr.html
  * pyordr.jpl
  * pyordr.js
  * cookiedbreport.lib
  * bootstrap_headers.zip
  * cookie JDB database
  
# Cookiedbreport.lib
Panther client screen pyordr containing grid. Pyordr.html  is attached as the HTML template.

# Pyordr.jpl
 JPL included in screen pyordr. This screen contains the JPL  that creates the PDF report.  

# Pyordr.html
HTML template attached to the JAM screen generates the UI for the screen. Main.css and pyordr.js are also attached to the HTML template. The "Generate PDF" button which is visible will generate the Report in PDF format when clicked on.

# Bootstrap_headers
Please unzip the file and set SMPATH to point to it (via Panther ini file) .  This folder contains multiple Bootstrap Javascript and CSS files which are loaded from Header.html and Footer.html. These two files are referenced in pyordr.html which load the datatables.

# Database : cookie_db
JDB database containing data used to populate Panther Grids/Datatables.

# Videos & Download
Video Tutorial: https://youtu.be/qk_K2Jd9Aco

Need a Panther Web 552 Redhat Image? [Click Here](https://hub.docker.com/r/prolificspanther/pantherweb "Named link title") 

How to set up a Panther Servlet Web Application? [Click Here](https://github.com/ProlificsPanther/PantherWeb/releases "Named link title")

Read our Documentation [here](https://docs.prolifics.com)
