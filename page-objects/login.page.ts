import {
    BrowserContext,
    expect,
    type Locator,
    type Page,
} from '@playwright/test';
import { Environment } from '../lib/env';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.usernameInput = page.locator('//*[@id="username"]');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('//button[type="submit"]');
    }

    async login(username, password){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}