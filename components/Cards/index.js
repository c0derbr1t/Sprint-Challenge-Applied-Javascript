// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

let call = axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articles = Object.values(response.data.articles);
        axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            const articles = Object.values(response.data.articles);
            
            articles.forEach(thing =>{
                thing.forEach(item => {
                    let thisCard = newCard(item);
                    cardsContainer.appendChild(thisCard);
                })
            })
        })
    })

function newCard(item) {
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgContainer = document.createElement('div'),
        authorImg = document.createElement('img'),
        authorName = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = item.headline;
    authorName.textContent = item.authorName;
    authorImg.src = item.authorPhoto;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(authorName);
    imgContainer.appendChild(authorImg);

    return card;
}
