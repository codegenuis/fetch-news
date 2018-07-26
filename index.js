
// Write Javascript code!
const appDiv = document.getElementById('app');
function fetch_news(){
fetch('https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&pageSize=100&apiKey=125cae3691a140489efa2b69a8d31d88').
then(res=>res.json())
.then(response=>{
  console.log(response)
  for(var i=0; i < response.articles.length; i++){
    var item = document.createElement('li');
    item.innerHtml = `<a href='${response.articles[i].url}'>${response.articles[i].title}</a>`;
    appDiv.appendChild(item);
  }
  }).
catch(Error=>console.log(error))
}

addEventListener('scroll', function() {
  if (appDiv.scrollTop + appDiv.clientHeight >= appDiv.scrollHeight) {
    fetch_news();
  }
});

fetch_news()