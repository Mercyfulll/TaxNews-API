import express, { response } from "express";
import axios from "axios";
import * as cheerio from 'cheerio';


const app = express()

const newsPages = [
  {
    name: 'news24',
    address: 'https://www.news24.com/fin24/money',
    baseUrl : 'https://www.news24.com'
  },
  {
    name: 'dailymaverick',
    address: 'https://www.dailymaverick.co.za/business-maverick/?dm_source=top-menu&dm_medium=link',
    baseUrl: ''
  },
  {
    name: 'enca',
    address: 'https://www.enca.com/business',
    baseUrl: ''
  },
  {
    name: 'ewn',
    address: 'https://www.ewn.co.za/topics/Business',
    baseUrl: 'https://www.ewn.co.za/'
  }
  

]

let articles = []

newsPages.forEach(newsPage =>{
  axios.get(newsPage.address)
    .then(function (result){
      const webPage = result.data
     const $ = cheerio.load(webPage)
   
   $('a:contains("tax")', webPage).each(function(){
         const title = $(this).text().trim()
         const url = $(this).attr('href')

         articles.push({
           title,
           url: newsPage.baseUrl + url ,
           source : newsPage.name
         })
    })
  })
})

let PORT = process.env.PORT || 3005

app.get('/news', (req,res)=>{
  res.json(articles)
})

app.get('/news/:newsPageId',  function (req, res) {
  const newsPageId = req.params.newsPageId

  const newsWebsite = newsPages.filter(newspage => newspage.name === newsPageId )[0].address
  const newsBase = newsPages.filter(newspage => newspage.name === newsPageId )[0].baseUrl
  const specificArticle = []

    axios.get(newsWebsite)
      .then(result =>{

        const html = result.data
        const $ = cheerio.load(html)

        $('a:contains("tax")', html).each(function(){

          const title = $(this).text().trim()
          const url = $(this).attr('href')

          specificArticle.push ({
            title,
            url: newsBase + url,
            source: newsPageId
          })

        })
        res.json(specificArticle)
      })
})


app.listen(PORT, function(){
    console.log('App starting on port', PORT);
  });