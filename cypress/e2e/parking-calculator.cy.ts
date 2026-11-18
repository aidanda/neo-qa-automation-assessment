
import { ParkingCalculatorPage } from '../pages/ParkingCalculatorPage';
import parkingTests from '../fixtures/parkingData.json';

// Defines the structure of each parking test scenario
interface ParkingTest {
    testType: string;
    scenario: string;
    parkingLot: string;
    startDate: string;
    startTime: string;
    startAmPm: string;
    leavingDate: string;
    leavingTime: string;
    leavingAmPm: string;
    expectedCharge: string;
    expectedResult: string;
}

// Creates an instance of the ParkingCalculatorPage class
const parkingPage = new ParkingCalculatorPage();

// Stores all JSON scenarios as ParkingTest objects
const allParkingTests = parkingTests as ParkingTest[];

// Reusable function to execute parking test scenarios
const runParkingTests = (testType: string) => {

    // Filters scenarios by test type
    const filteredTests = allParkingTests.filter(
        testData => testData.testType === testType
    );

    // Creates a separate test for each matching scenario
    filteredTests.forEach((testData) => {

        it(`Calculate parking charges - ${testData.scenario}`, () => {

            // Opens the parking calculator
            cy.visit('/');

            // Selects the parking lot
            cy.get(parkingPage.parkingLotDropdown).select(testData.parkingLot);

            // Enters the starting date, if provided
            cy.get(parkingPage.startDate).clear();
            if (testData.startDate) {
                cy.get(parkingPage.startDate).type(testData.startDate);
            }

            // Enters the starting time, if provided
            cy.get(parkingPage.startTime).clear();
            if (testData.startTime) {
                cy.get(parkingPage.startTime).type(testData.startTime);
            }

            // Selects AM/PM for the starting time
            cy.get(parkingPage.startingTimeAmPm).check(testData.startAmPm);

            // Enters the leaving date, if provided
            cy.get(parkingPage.leavingDate).clear();
            if (testData.leavingDate) {
                cy.get(parkingPage.leavingDate).type(testData.leavingDate);
            }

            // Enters the leaving time, if provided
            cy.get(parkingPage.leavingTime).clear();
            if (testData.leavingTime) {
                cy.get(parkingPage.leavingTime).type(testData.leavingTime);
            }

            // Selects AM/PM for the leaving time
            cy.get(parkingPage.leavingTimeAmPm).check(testData.leavingAmPm);

            // Submits the parking details
            cy.get(parkingPage.submit).click();

            // Checks the expected result
            if (testData.expectedResult === 'success') {

                // Verifies that the expected parking charge is displayed
                cy.get(parkingPage.parkingCost)
                    .should('contain', testData.expectedCharge);

            } else if (testData.expectedResult === 'validation_error') {

                // Verifies that no parking charge is displayed
                cy.get(parkingPage.parkingCost).should('not.exist');

            } else if (testData.expectedResult === 'expected_failure') {

                // Verifies that the known application defect occurs
                cy.get(parkingPage.parkingCost).should('exist');

            } else {

                // Fails if an unsupported expected result is provided
                throw new Error(`Unknown expected result: ${testData.expectedResult}`);
            }

        });
    });
};

// Groups the parking calculator tests
describe('Parking Calculator Tests', () => {

    // Groups the happy path tests
    describe('Happy Path Tests', () => {
        runParkingTests('happy_path');
    });

    // Groups the boundary tests
    describe('Boundary Tests', () => {
        runParkingTests('boundary');
    });

    // Groups the negative tests
    describe('Negative Tests', () => {
        runParkingTests('negative');
    });

    // Groups the known defect tests
    describe('Known Defect Tests', () => {
        runParkingTests('known_defect');
    });

});
