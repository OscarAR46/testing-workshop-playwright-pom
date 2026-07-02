import { test } from "@playwright/test";
// import all the page objects you need here...
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from "./pages/irregularHoursPage";
import LeaveYearStartPage from "./pages/leaveYearStartPage"; 
import EntitlementBasedOnPage from "./pages/entitlementBasedOnPage";
import WorkOutHolidayPage from "./pages/workOutHolidayPage";
import DaysWorkedPerWeekPage from "./pages/daysWorkedPerWeekPage";
import SummaryPage from "./pages/summaryPage";

test(`Your test - Task 1 - flow diagram 2`, async ({ page }): Promise<void> => {
    // Navigate to the landing page
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    
    // 1. Landing Page
    const landingPage: LandingPage = new LandingPage(page);
    await landingPage.checkPageLoads();
    await landingPage.continueOn();

    // 2. Irregular Hours Page
    const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage(page);
    await irregularHoursPage.checkPageLoads();
    await irregularHoursPage.clickYesButton(); 
    await irregularHoursPage.continueOn();

    // 3. Leave Year Start Page
    const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage(page);
    await leaveYearStartPage.checkPageLoads();
    // Satisfies the "before 01/04/2020" flow criteria
    await leaveYearStartPage.enterDate('1', '1', '2020'); 
    await leaveYearStartPage.continueOn();

    // 4. Entitlement Based On Page
    const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage(page);
    await entitlementBasedOnPage.checkPageLoads();
    await entitlementBasedOnPage.selectDaysWorkedPerWeek();
    await entitlementBasedOnPage.continueOn();

    // 5. Work Out Holiday Page
    const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage(page);
    await workOutHolidayPage.checkPageLoads();
    await workOutHolidayPage.selectFullLeaveYear();
    await workOutHolidayPage.continueOn();

    // 6. Days Worked Per Week Page
    const daysWorkedPerWeekPage: DaysWorkedPerWeekPage = new DaysWorkedPerWeekPage(page);
    await daysWorkedPerWeekPage.checkPageLoads();
    await daysWorkedPerWeekPage.enterDays('3');
    await daysWorkedPerWeekPage.continueOn();

    // 7. Summary Page
    const summaryPage: SummaryPage = new SummaryPage(page);
    await summaryPage.checkPageLoads();
    // Ensure this text matches the exact result output seen in Flow Diagram 2!
    await summaryPage.expectSummary('The statutory holiday entitlement is 16.8 days holiday.');
})

test(`Your test - Task 2 - flow diagram 3`, async ({ page }): Promise<void> => {
    // Complete your second test here!
     // Navigate to the landing page
    await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');
    
    // 1. Landing Page...
});