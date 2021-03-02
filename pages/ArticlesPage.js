

export default class ArticlesPage{

    async clickTagList(){
      
    await page.waitForSelector('[href="#/"]')
    await page.click('[href="#/"]');
    const publish=await page.$x('//a[contains(text(),"microchip")]')
    publish[0].click();
  
    await page.$$eval('[class="tag-default tag-pill tag-outline"]', (elements) =>
    elements.some((el) => el.textContent.includes('microchip')));
    await page.waitForXPath('//a[@class="page-link"]')
    var articles=await page.$x('//a[@class="page-link"]')
   
   
    for (var index = 0; index < articles.length; ++index) {
      articles[index].click();
    
    }

    }

   
}