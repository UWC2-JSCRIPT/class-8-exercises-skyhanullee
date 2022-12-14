// create api-key.js file with const API_KEY="your_api_key" in this same directory to use

const API_KEY = '6SkznYbjb3It1qUc8iHhcNgfFyG2zoEq';

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

// changed to car after q= to change the search topic
const url = `${BASE_URL}?q=car&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
      console.log(article.multimedia);

      // added article link to href
      document.getElementById('article-link').href = article.web_url;
      console.log(imgUrl);

      // create new author element and append to body
      const authorElement = document.createElement('p');
      const authorText = document.createTextNode(article.byline.original);
      authorElement.appendChild(authorText);
      document.getElementsByClassName('container')[0].appendChild(authorElement);
      console.log(article.byline.original);
    }
  });
