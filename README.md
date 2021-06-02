## Testcafe Example
E2E tests Framework written in [Testcafe](https://github.com/DevExpress/testcafe).
- Design Pattern: Page Object Model
- Language: Javascript

## Setup
1. Clone `clone git@github.com:AhmedHamada93/testcafe-e2e-automation-framework.git`
2. Install `npm install`

## Dependencies
1. [Testcafe](https://www.npmjs.com/package/testcafe)
2. [dotenv](https://www.npmjs.com/package/dotenv)
3. [testcafe-reporter-cucumber-json](https://www.npmjs.com/package/testcafe-reporter-cucumber-json)

## Run
* Run all tests with runner class `node runner.js`
* Run all tests in chrome without report `npm run test-chrome-without-report`
* Run all tests in chrome with report `npm run tests-chrome-with-report`
* Run all tests in functional suit only `npm run functional-tests-with-report`
* Run all tests in chrome in headless mode `npm run tests-chrome-headless-without-report`


## Report Example
![Alt text](https://i.ibb.co/frLs0wx/Screen-Shot-2020-02-20-at-6-09-37-PM.png)

#Future Enhancements
* Split test data based on test cases
* Add headless option for other browsers
* Enhance framework with testcafe's userrole feature
