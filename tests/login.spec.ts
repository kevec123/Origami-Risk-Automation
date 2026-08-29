import test from '../lib/base-test';
import { Environment } from '../lib/env';

/*This is a positive scenario for testing the login page*/
test('Verify login with correct credentials', async ({
    clientLoginPage,
}) => {
    await test.step('Attempt login with correct credentials', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login(Environment.username, Environment.password,'You logged into a secure area!')
    });
})

test('Verify login with wrong username', async ({
    clientLoginPage,
}) => {
    await test.step('Attempt login with wrong username', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login('wrong name', Environment.password, 'Your username is invalid!')
    });
})

test('Verify login with wrong password', async ({
    clientLoginPage,
}) => {
    await test.step('Attempt login with wrong password', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login(Environment.username, 'wrong password', 'Your password is invalid!')
    });
})

test('Verify direct navigation to the /secure page', async ({
    securePage,
    clientLoginPage,
}) => {
    await test.step('Attempt to directly navigate to the /secure page without login', async() =>{
        await securePage.goto();
        await clientLoginPage.verifyBanner('You must login to view the secure area!');
    })
})