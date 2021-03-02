import LoginPage from "../pages/LoginPage"
import PublishPage from "../pages/PublishPage"
import ArticlesPage from "../pages/ArticlesPage"
import {user} from "../config";


describe('BackBase Automation',()=>{
    let loginpage;
    let publishpage;
    let articlespage;
  
    beforeAll(async ()=>{

     loginpage=new LoginPage();
     publishpage=new PublishPage();
     articlespage=new ArticlesPage();
     await loginpage.login();
    
    })


  it('Verify user able to sign up and then Sign In with the new account',async ()=>{
     
        await loginpage.signUp();
      
          
    })

   it('Verify user able to sign up and then publish an article',async ()=>{
    await publishpage.PublishArticle();
    
        
  })

  it('Verify user able to sign up and then publish an article and edit it',async ()=>{
    await publishpage.editArticle();
    
        
  })

  it('Verify user able to sign up and then publish an article and edit it and delete artcle',async ()=>{
    await publishpage.deleteArticle();
    
        
  })

  it('Verify user able to click on tags and navigate all the pages',async ()=>{
    await articlespage.clickTagList();
    
        
  })
  
      
    
})






