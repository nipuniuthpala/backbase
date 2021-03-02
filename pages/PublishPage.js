import {title,tags,markdown} from "../config";
const expect=require('chai').expect

export default class PublishPage{

    async PublishArticle(){
        await page.waitForSelector('[href="#/editor"]')
        await page.click('[href="#/editor"');
        await page.waitForSelector('[placeholder="Article Title"]')
        await page.type('[placeholder="Article Title"]',title);
        await page.waitForSelector('[placeholder="Write your article (in markdown)"]')
        await page.type('[placeholder="Write your article (in markdown)"]',markdown);
        await page.waitForSelector('[placeholder="Enter Tags"]')
        await page.type('[placeholder="Enter Tags"]',tags);
        const publish=await page.$x('//button[contains(text(),"Publish Article")]')
        publish[0].click();
      
    }

    async deleteArticle(){
   
        await page.waitForXPath('//button[contains(text(),"Delete Article")]')
        var articledelete=await page.$x('//button[contains(text(),"Delete Article")]')
        articledelete[0].click();
    }

    async editArticle(){
    await page.waitForXPath('//a[@class="btn btn-sm btn-outline-secondary"]')
    var articleEdit=await page.$x('//a[@class="btn btn-sm btn-outline-secondary"]')
    articleEdit[0].click();
    await page.waitForSelector('[placeholder="Article Title"]')
    await page.type('[placeholder="Article Title"]',"testarticleEdit");
    await page.waitForXPath('//button[contains(text(),"Publish Article")]')
    const publish=await page.$x('//button[contains(text(),"Publish Article")]')
    publish[0].click();
    }

  


}
