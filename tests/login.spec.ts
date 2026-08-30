import test from '../lib/base-test';
import { Environment } from '../lib/env';

//This is a positive scenario for testing the login page
test('Verify login with correct credentials', async ({
    //This is the page we are going to be doing the test on
    clientLoginPage,
    securePage,
}) => {
    //This is the step where we validate the login with the correct credentials
    await test.step('Attempt login with correct credentials', async()=>{
        //We first navigate to the '/login' page
        await clientLoginPage.goto();
        //Then we attempt to login passing the correct values from the Environment file and we pass the expected message
        await clientLoginPage.login(Environment.username, Environment.password);
        await securePage.verifyBanner('You logged into a secure area!');
    });
})

//This is the second test, the first negative scenario for testing the login page passing the wrong username
test('Verify login with wrong username', async ({
    clientLoginPage,
}) => {
    await test.step('Attempt login with wrong username', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login('wrong name', Environment.password);
        await clientLoginPage.verifyBanner('Your username is invalid!');
    });
})

//This is the third test, the second negative scenario for testing the login page passing the wrong password
test('Verify login with wrong password', async ({
    clientLoginPage,
}) => {
    await test.step('Attempt login with wrong password', async()=>{
        await clientLoginPage.goto();
        await clientLoginPage.login(Environment.username, 'wrong password');
        await clientLoginPage.verifyBanner('Your password is invalid!');
    });
})

/*This is the forth test, the third negative scenario for testing the login page 
where we navigate directly to the '/secure' page without login in first*/
test('Verify direct navigation to the /secure page', async ({
    //Because we will be using both the '/login' and '/secure' on the test we pass both pages
    securePage,
    clientLoginPage,
}) => {
    await test.step('Attempt to directly navigate to the /secure page without login', async() =>{
        //We first try to navigate directly to the '/secure' page
        await securePage.goto();
        //After, we confirm the error message appears on the '/login' page
        await clientLoginPage.verifyBanner('You must login to view the secure area!');
    })
})