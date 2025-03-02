// import {test,expect} from '@playwright/test'

// test.describe("Login page" , async() => {
//     test('should login with the correct credentials', async({page}) => {
//         await page.goto('/');
//         await page.getByTestId('login-email-field').fill('oliver@example.com');
//         await page.getByTestId('login-password-field').fill('welcome');
//         await page.getByTestId('login-submit-button').click();
//         await expect(page.getByTestId('navbar-username-label')).toBeVisible()
//         await expect(page.getByTestId("navbar-logout-link")).toBeVisible();
//     })
// })

// import {test} from '../fixtures'


// test.describe('Login page', () => {
//   test('should login with correct credentials', async({
//     page,
//     loginPage
//   }) => {
//     await page.goto('/');
//     await loginPage.loginAndVerifyUser({
//         email: "oliver@example.com",
//       password: "welcome",
//       username: "Oliver Smith",
//     })
//   })
// })





// login.setup.ts

import { STORAGE_STATE } from "../../playwright.config"; // STORAGE_STATE = "./auth/session.json"
import { test } from "../fixtures";

test.describe("Login page", () => {
  test("should login with the correct credentials", async ({
    page,
    loginPage,
  }) => {
    await page.goto("http://localhost:3000");
    await loginPage.loginAndVerifyUser({
      email: "oliver@example.com",
      password: "welcome",
      username: "Oliver Smith",
    });
    await page.context().storageState({ path: STORAGE_STATE });
  });
});