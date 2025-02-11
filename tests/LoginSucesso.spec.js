// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) =>{
  await page.goto('/');
  })
test('Login com sucesso @Login', async ({ page }) => {

  const button = await page.getByRole('button', { name: 'Send Mail' })
  await button.scrollIntoViewIfNeeded()
  await button.click()

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('michaelfelipe777@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot.png' });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png' });
  await page.getByRole('button', { name: 'login' }).click();
  await page.getByRole('heading', { name: 'Login realizado' }).click();
  await page.getByText('Olá, michaelfelipe180@gmail.').click();
  await page.getByRole('button', { name: 'OK' }).click();
  // await page.locator('#userLogged i').first().click();
  // await page.getByRole('link', { name: ' Logout', exact: true }).click();
  // await page.getByRole('heading', { name: 'Logout realizado' }).click();
  // await page.getByText('Obrigado, e volte sempre!').click();
  // await page.getByRole('button', { name: 'OK' }).click();

  
});





