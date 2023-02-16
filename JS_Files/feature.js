const featureContent = [
    {
        card: 1,
        image: './images/elonMask2.png',
        icon: './images/matrixWithTransfusionBG.avif',
        title: 'Elon Musk',
        subHeading: 'Chief Executive Officer of Twitter',
        description: 'Elon Musk cofounded the electronic payment firm PayPal, and in 2002 he founded SpaceX, a company that makes rockets and spacecraft. He was a major early funder of Tesla, which makes electric cars and batteries, and became its chief executive officer in 2008. He purchased the social media service Twitter in 2022',
    },
    {
        card: 2,
        image: './images/billGates.webp',
        icon: './images/matrixWithTransfusionBG.avif',
        title: 'Bill Gates',
        subHeading: 'American Business Magnate',
        description: 'Bill Gates is a technologist, business leader, and philanthropist. He grew up in Seattle, Washington, with an amazing and supportive family who encouraged his interest in computers at an early age. He dropped out of college to start Microsoft with his childhood friend Paul Allen.',
    },
    {
        card: 3,
        image: './images/LarryPageBG.png',
        icon: './images/matrixWithTransfusionBG.avif',
        title: 'Larry Page',
        subHeading: 'American Business Magnate',
        description: 'Larry Page, byname of Lawrence Edward Page, (born March 26, 1973, East Lansing, Michigan, U.S.), American computer scientist and entrepreneur who, with Sergey Brin, created the online search engine Google, one of the most popular sites on the Internet.',
    },
    {
        card: 4,
        image: './images/sergeyBrin.png',
        icon: './images/matrixWithTransfusionBG.avif',
        title: 'Sergey Brin',
        subHeading: 'American Business Magnates',
        description: "Sergey Mikhailovich Brin (Russian: Сергей Михайлович Брин; born August 21, 1973) is an American business magnate, computer scientist, and internet entrepreneur, who co-founded Google with Larry Page. Brin was the president of Google's parent company, Alphabet Inc., until stepping down from the role on December 3, 2019",
    },
    {
        card: 5,
        image: './images/satoshiNakamotoBG.png',
        icon: './images/matrixWithTransfusionBG.avif',
        title: 'Satoshi Nakamoto',
        subHeading: 'Founder of Bitcoin',
        description: 'Satoshi Nakamoto is a pseudonym for the person or people who helped develop the first bitcoin software and introduced the concept of cryptocurrency to the world in a 2008 paper. Nakamoto remained active in the creation of bitcoin and the blockchain until about 2010 but has not been heard from since.',
    },
    {
        card: 6,
        image: './images/patrickCollisionBg (1).png',
        icon: './images/matrixWithTransfusionBG.avif',
        title: 'Patrick Collison',
        subHeading: 'Chief Executive Officer of Stripe',
        description: 'Patrick Collison is an Irish billionaire entrepreneur. He is the co-founder and CEO of Stripe, which he started with his younger brother, John, in 2010. He won the 41st Young Scientist and Technology Exhibition in 2005 at the age of sixteen.',
    },
];

document.getElementById('actContainer').innerHTML = featureContent.map((act, index) => `
          <article class="${index >= 2 ? 'act-card collapse test' : 'act-card'}">
            <div class="card-images">
              <img class="card-image1" src="${act.image}" alt="Featured speaker image" />
              <img class="card-image2" src="${act.icon}" alt="coding image background" />
            </div>
            <div class="act-content">
              <h2 class="content-title">${act.title}</h2>
              <h3 class="content-subhead">${act.subHeading}</h3>
              <hr class="content-solid" />
              <p class="content-description">
               ${act.description}
              </p>
            </div>
          </article>
  `).join('');

const collapseButton = document.getElementById('collapse');
const articles = document.querySelectorAll('.test');
if (collapseButton) {
    collapseButton.addEventListener('click', () => {
        articles.forEach((article) => {
            article.classList.toggle('collapse');
        });
        const more = document.getElementById('expand');
        const less = document.getElementById('exit');
        if (more) {
            more.classList.toggle('hide');
        }
        if (less) {
            less.classList.toggle('hide');
        }
    });
}