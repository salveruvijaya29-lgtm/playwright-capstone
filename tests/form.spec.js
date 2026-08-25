// @ts-check
import { test, expect } from '@playwright/test';
import formData from '../helpers/formData.json' assert { type: 'json' };

test('form submission with valid data', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/form-validation');

    await page.fill('#validationCustom01', formData.contactName);
    await page.fill('[name="contactnumber"]', formData.contactNumber);
    await page.locator('[name="pickupdate"]').type(formData.pickupDate);
    await page.selectOption('#validationCustom04', formData.payment);

    await page.click('button[type="submit"]');
//comment
    await expect(page.locator('.valid-feedback').first()).toBeVisible();
});
