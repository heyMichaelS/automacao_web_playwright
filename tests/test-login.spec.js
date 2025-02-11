import { test, expect } from '@playwright/test';



test('teste de login michael', async ({page}) =>{
    await page.goto('https://my.api.org/');
    await expect(page.getByText('myAPI').first()).toBeVisible();

})