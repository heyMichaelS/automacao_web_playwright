import { test as setup } from '@playwright/test';

const TOKEN_FILEPATH = "playwright/.auth/user.json";

setup('authenticate', async({page}) => {
    await page.goto('https://my.api.org/')
    await page.getByLabel('Email').fill('difija5435@nike4s.com')
    await page.getByLabel('Password').fill('Aghata@21')
    await page.getByRole('button', { name: 'Continue' }).click()
    await page.waitForTimeout(5000)
    await page.context().storageState({ path: TOKEN_FILEPATH })

})