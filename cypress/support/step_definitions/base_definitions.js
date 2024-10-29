beforeEach(()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    });
});

afterEach(() => {
  const screenshotsFolder = Cypress.config("screenshotsFolder");
  if (window.cucumberJson?.generate) {
    const testState = window.testState;
    const stepResult =
      testState.runTests[testState.currentScenario.name][testState.currentStep];
    if (stepResult?.status === "failed") {
      const screenshotFileName = `${testState.feature.name} -- ${testState.currentScenario.name} (failed).png`;
      cy.fixture('screenshots/' + `${Cypress.spec.name}/${screenshotFileName}`).then((imgData) => {
        stepResult.attachment = {
          data: imgData,
          media: { type: "image/png" },
          index: testState.currentStep,
          testCase: testState.formatTestCase(testState.currentScenario),
        };
    });
    }
  }
});