export class ParkingCalculatorPage {

    // Identifies the parking lot selection dropdown
    parkingLotDropdown = '#ParkingLot';

    // Identifies the starting date input field
    startDate = '#StartingDate';

    // Identifies the starting time input field
    startTime = '#StartingTime';

    // Identifies the AM/PM radio button group for the starting time
    startingTimeAmPm = 'input[name="StartingTimeAMPM"]';

    // Identifies the leaving date input field
    leavingDate = '#LeavingDate';

    // Identifies the leaving time input field
    leavingTime = '#LeavingTime';

    // Identifies the AM/PM radio button group for the leaving time
    leavingTimeAmPm = 'input[name="LeavingTimeAMPM"]';

    // Identifies the Calculate button used to submit the parking details
    submit = 'input[name="Submit"]';

        // Identifies the displayed parking cost
    parkingCost = '.subhead';

    // Identifies the displayed parking duration
    parkingDuration = '.bodycopy';

}