import { Page, type Locator } from 'playwright';
import { expect } from "@playwright/test";
import leaveYearStartPage_content from "../content/leaveYearStartPage_content";

export class LeaveYearStartPage {
    private readonly page: Page;
    private readonly titlePartial: string;
    private readonly heading: string;
    private readonly day_input: Locator;
    private readonly month_input: Locator;
    private readonly year_input: Locator;
    private readonly continue_button: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.titlePartial = leaveYearStartPage_content.pageTitlePartial;
        this.heading = leaveYearStartPage_content.heading;
        
        // Target date input elements safely by their visible text labels
        this.day_input = page.getByLabel('Day');
        this.month_input = page.getByLabel('Month');
        this.year_input = page.getByLabel('Year');
        
        this.continue_button = page.getByRole('button', { name: 'Continue' });
    }

    async checkPageLoads(): Promise<void> {
        await expect(this.page).toHaveTitle(new RegExp(this.titlePartial));
        await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible();
        await expect(this.day_input).toBeVisible();
        await expect(this.month_input).toBeVisible();
        await expect(this.year_input).toBeVisible();
        await expect(this.continue_button).toBeVisible();
    }

    async enterDate(day: string, month: string, year: string): Promise<void> {
        await this.day_input.fill(day);
        await this.month_input.fill(month);
        await this.year_input.fill(year);
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default LeaveYearStartPage;