website-monitoring-gapps
========================

Simple Monitoring script w/ Google Apps Script.

How it works?

It checks websites then sends notification (email & sms) when the website returns a code other than 200.


SETUP:

1. Create a new Google Spreadsheet using the format as seen on the the screenshot "screenshot.png".
2. Rename your sheet to "Main".
3. On your Spreadsheet goto Tools > Script Editor
4. On your Script Editor create script files and place functions. Names won't matter.

To Run:

1. You can choose function main and click run.
2. To simulate cron jobs, you can use triggers. Goto Resources > Current project's triggers.
   Add triggers. You can also send notifications to your email whenever the script fails.

SMS INTEGRATION:
We are using Google's Calendar Event to get SMS notification.

1. Create a new calendar (or use existing ones).
2. Set Calendar notification/reminder to send sms (set value to 0).
3. Get calendar ID. Can be found on calendar settings, under calendar address.
4. Don't forget to link your Mobile Phone number in Google.

Special note: You can add more emails, websites, and codes. But note that Google Apps Script has 5 mins max runtime. I'm not sure if this is still the case nowadays.

Note: When prompted by Google to authorize app, just authorize it.
Disclaimer: This is just a basic monitoring tool. Further development might be possible.

For inquiries please punt me an email: lexusbry@gmail.com
You might wanna extend this and share.

FEATURE REQUEST AND BUG ISSUES: https://github.com/lexbryan/website-monitoring-gapps/issues/new


