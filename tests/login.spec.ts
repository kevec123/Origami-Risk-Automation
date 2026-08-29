import test from '../lib/base-test';
import { Expect } from '@playwright/test';
import { Environment } from '../lib/env';

test('Verify login', async ({
    clientLoginPage,
}) => {
    await test.step('Verify login', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login(Environment.username, Environment.password, 'You logged into a secure area!')
    });
})

test('Verify login with wrong username', async ({
    clientLoginPage,
}) => {
    await test.step('Verify login', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login('wrong name', Environment.password, 'Your username is invalid!')
    });
})