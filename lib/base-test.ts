import { test as baseTest, BrowserContext, Page} from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { SecurePage } from '../page-objects/secure.page';

const test = baseTest.extend<{

    clientBrowser: BrowserContext;
    clientPage: Page;
    clientLoginPage: LoginPage;
    securePage: SecurePage

}>({

    clientBrowser: async ({browser}, use) => {
        const context = await browser.newContext();
        await use(context);
    },

    clientPage: async ({clientBrowser}, use) => {
        const clientPage = await clientBrowser.newPage();
        await use(clientPage);
    },

    clientLoginPage: async ({ clientBrowser, clientPage }, use) => {
        await use(new LoginPage(clientPage, clientBrowser));
    },

    securePage: async ({ clientBrowser, clientPage }, use) => {
        await use(new SecurePage(clientPage, clientBrowser));
    },
});

export default test;