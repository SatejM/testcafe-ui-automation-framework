## Testcafe Example
E2E tests Framework written in [Testcafe](https://github.com/DevExpress/testcafe).
- Design Pattern: Page Object Model
- Language: Javascript

## Setup
1. Clone `git clone https://github.com/SatejM/testcafe-ui-automation-framework.git`
2. Install `npm install`

## Dependencies
1. [Testcafe](https://www.npmjs.com/package/testcafe)
2. [dotenv](https://www.npmjs.com/package/dotenv)
3. [testcafe-reporter-cucumber-json](https://www.npmjs.com/package/testcafe-reporter-cucumber-json)

## Run
* Run all tests with runner class `node runner.js`
* Run all tests in chrome without report `npm run test-chrome-without-report`
* Run all tests in chrome with report `npm run tests-chrome-with-report`
* Run all tests in functional suite only `npm run functional-tests-with-report`
* Run all tests in chrome in headless mode `npm run tests-chrome-headless-without-report`


## Report Example
![Alt text](https://ibb.co/6y0HQnn)

## Future Enhancements
* Split test data based on test cases
* Add headless option for other browsers
* Enhance framework with testcafe's userrole feature
