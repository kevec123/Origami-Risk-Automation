import test from '../lib/base-test';
import { Expect } from '@playwright/test';
import { Environment } from '../lib/env';

test('Verify login', async ({
    clientLoginPage,
}) => {
    await test.step('Verify login', async()=>{
        await clientLoginPage.login(Environment.username, Environment.password)
    });
})