website-monitoring-gapps
========================

Simple Monitoring script w/ Google Apps Script


SETUP:

1. Create a new Google Spreadsheet using the format as seen on the the screenshot or upload "Website Monitoring.gsheet" file.
2. Rename your sheet to "Main".
3. On your Spreadsheet goto Tools > Script Editor
4. On your Script Editor create script files and place functions. Names won't matter.

To Run:

1. You can choose function main and click run.
2. To simulate cron jobs, you can use triggers. Goto Resources > Current project's triggers.
   Add triggers. You can also send notifications to your email whenever the script fails.

Special note: You can add more emails, websites, and codes. But note that Google Apps Script has 5 mins max runtime. I'm not sure if this is still the case nowadays.

Note: When prompted by Google to authorize app, just authorize it.
Disclaimer: This is just a basic monitoring tool. Further development might be possible.

For inquiries please punt me an email: lexusbry@gmail.com
You might wanna extend this and share.

FEATURE REQUEST AND BUG ISSUES: https://github.com/lexbryan/website-monitoring-gapps/issues/new

TODO: SMS notification integration using Google Calendar API.
