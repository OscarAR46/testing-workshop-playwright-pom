import { Page, type Locator } from 'playwright';
import { expect } from "@playwright/test";
import hoursInPayPeriod_content from "../content/hoursInPayPeriod_content";

export class HoursInPayPeriodPage {
    private readonly page: Page;
    private readonly title: string;
    private readonly heading: string;
    private readonly hours_input: Locator;
    private readonly continue_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = hoursInPayPeriod_content.pageTitle;
        this.heading = hoursInPayPeriod_content.heading;
        this.hours_input = page.getByRole('textbox');
        this.continue_button = page.getByRole('button', { name: hoursInPayPeriod_content.continue_button });
    }

    async checkPageLoads(): Promise<void> {
        await Promise.all([
            await expect(this.page).toHaveTitle(this.title),
            await expect(this.page.getByRole('heading', { name: this.heading })).toBeVisible(),
            await expect(this.hours_input).toBeVisible(),
            await expect(this.continue_button).toBeVisible(),
        ]);
    }

    async enterHours(hours: string): Promise<void> {
        await this.hours_input.fill(hours);
    }

    async continueOn(): Promise<void> {
        await this.continue_button.click();
    }
}

export default HoursInPayPeriodPage;