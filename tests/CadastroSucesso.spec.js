// @ts-check
import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';

test.beforeEach(async ({page}) =>{
await page.goto('/');
})

test('Cadastro com sucesso @Cadastro', async ({ page }) => {

const texto = await page.waitForSelector('text=NEWSLETTER')
await texto.scrollIntoViewIfNeeded()


await page.getByRole('link', { name: ' Cadastro' }).click();
await page.locator('#user').click();
await page.locator('#user').fill('michael');
await page.locator('#email').click();
await page.locator('#email').fill('michaelfelipe777@gmail.com');
await page.locator('#password').click();
await page.locator('#password').fill('123456');
await page.getByRole('button', { name: 'Cadastrar' }).click();
await expect(page.locator('.swal2-title')).toHaveText(/Cadastro realizado!/);
await expect(page.locator('.swal2-html-container')).toHaveText(/Bem-vindo michael/);
await page.getByRole('button', { name: 'OK' }).click();

})


