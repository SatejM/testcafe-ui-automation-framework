const report = require('multiple-cucumber-html-reporter');

report.generate({
    reportName: 'UI Automation Report',
    jsonDir: 'reports',
    reportPath: 'reports',
    openReportInBrowser: false,
    disableLog: true,
    displayDuration: true,
    durationInMS: true,
});