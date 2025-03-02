// //register.spec.ts

// import { test, expect } from "@playwright/test";
// import { faker } from "@faker-js/faker";
// import LoginPage from '../poms/login'
// test.describe("Register page", () => {
//   test("should register a new user", async ({ page }) => {
//     const newUserName = faker.person.fullName();
//     const newUserEmail = faker.internet.email();
//     const newUserPassword = faker.internet.password();
//     const login = new LoginPage(page)

//     await page.goto("/");
//     await page.getByTestId("login-register-link").click();
//     await page.getByTestId("signup-name-field").fill(newUserName);
//     await page.getByTestId("signup-email-field").fill(newUserEmail);
//     await page.getByTestId("signup-password-field").fill(newUserPassword);
//     await page
//       .getByTestId("signup-password-confirmation-field")
//       .fill(newUserPassword);
//     await page.getByTestId("signup-submit-button").click();
//     await page.getByTestId("login-email-field").fill(newUserEmail);
//     await page.getByTestId("login-password-field").fill(newUserPassword);
//     await login.loginAndVerifyUser({email:newUserEmail,password:newUserPassword , username:newUserName})
//   });
// });









import { test } from "../fixtures";
import { faker } from "@faker-js/faker";

test.describe("Register page", () => {
  test("should register a new user", async ({ page, loginPage }) => {
    const username = faker.person.fullName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await page.goto("http://localhost:3000/");
    await page.getByTestId("login-register-link").click();
    await page.getByTestId("signup-name-field").fill(username);
    await page.getByTestId("signup-email-field").fill(email);
    await page.getByTestId("signup-password-field").fill(password);
    await page.getByTestId("signup-password-confirmation-field").fill(password);
    await page.getByTestId("signup-submit-button").click();
    await loginPage.loginAndVerifyUser({ email, password, username });
  });
});