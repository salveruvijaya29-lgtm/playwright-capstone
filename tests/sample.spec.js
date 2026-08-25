mport { test, expect } from '@playwright/test';
import formData from '../helpers/formData.json' assert { type: 'json' };

test('form submission with valid data', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/form-validation');

    await page.locator('#validationCustom01').fill(formData.contactName);
    await page.locator('[name="contactnumber"]').fill(formData.contactNumber);
    await page.locator('[name="pickupdate"]').fill(formData.pickupDate);
    await page.locator('#validationCustom04').selectOption(formData.payment);

    await page.locator('button[type="submit"]').click();
    await expect(page.locator('.valid-feedback').first()).toBeVisible();
});