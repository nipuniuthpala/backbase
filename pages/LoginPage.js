import {username,password,email,accountpassword,user} from "../config";

export default class LoginPage{

    async login(){
        
      
        await page.authenticate({'username':username, 'password': password});
        await page.goto('https://qa-task.backbasecloud.com/');
    }

    async signUp(){
        
        await page.waitForSelector('[routerlink="/register"]')
        await page.click('[routerlink="/register"]');
        await page.waitForSelector('[placeholder="Username"]')
        await page.type('[placeholder="Username"]',user);   
        await page.waitForSelector('[placeholder="Email"]')
        await page.type('[placeholder="Email"]',email);    
        await page.waitForSelector('[placeholder="Password"]')
        await page.type('[placeholder="Password"]',accountpassword);
        await page.waitForSelector('button[type="submit"]')
        await page.click('button[type="submit"]');
    }

    async signIn(){
        
        await page.waitForSelector('[routerlink="/login"]')
        await page.click('[routerlink="/login"]');
        await page.waitForSelector('[placeholder="Username"]')
        await page.type('[placeholder="Username"]',email);     
        await page.waitForSelector('[placeholder="Password"]')
        await page.type('[placeholder="Password"]',accountpassword);
        await page.waitForSelector('button[type="submit"]')
        await page.click('button[type="submit"]');
    }

    
}