'use strict';

let cookiesSale = document.getElementById('cookie-city');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  city: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieBought: 6.3, 
  randomCustomerPerHour: function()
  {
    return Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);
  },
    // This Code was from mdn webdocs
  cookiesBoughtPerHour: [], 
  totalDailyCookies: 0,
  // Create a for loop 

  cookiesHour: function(){ for(let i = 0; i < hours.length; i++)
    {
      //  using avg and randCust - calc a number calculated number: avgCookieBought * randomcustomer
      let simCookies = Math.ceil(this.avgCookieBought * this.randomCustomerPerHour());
      // add that calculation to the array by using this.cookiesBoughtPerHour.push(calculated number)
      this.cookiesBoughtPerHour.push(simCookies);
      // Add all of the cookies together.
      this.totalDailyCookies += simCookies;
    }
  },
// Rendering itself to the HTML Document: Dom Manipulation pt 2

render: function(){
  this.cookiesHour();
  // CREATING ARTICLE:
  let articleElem = document.createElement('article');
  console.log(this.cookiesBoughtPerHour);
  // Adding this to the HTML document:
  cookiesSale.appendChild(articleElem);

  // CREATING H2
  let h2Elem = document.createElement('h2');

  // Adding: The City name
  h2Elem.textContent = this.city;
  articleElem.appendChild(h2Elem);

  let ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  for(let i = 0; i < this.cookiesBoughtPerHour.length; i++){
    let liElem = document.createElement('li');
    liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour[i]} Cookies!`;
    ulElem.appendChild(liElem);
  }
  
  let liElem = document.createElement('li');
  liElem.textContent = `Total: ${this.totalDailyCookies} Cookies!`;
  ulElem.appendChild(liElem);

  }

};

console.log(seattle.randomCustomerPerHour());
console.log(seattle.cookiesHour);
console.log(seattle.cookiesBoughtPerHour);
console.log(seattle.totalDailyCookies);

seattle.randomCustomerPerHour();
seattle.render();
console.log(seattle);


let Tokyo = {
  city1: 'Tokyo',
  minCustomer1: 3,
  maxCustomer1: 24,
  avgCookieBought1: 1.2,
  randomCustomerPerHour1: function()
  {
    return Math.floor(Math.random() * (this.maxCustomer1 - this.minCustomer1 + 1) + this.minCustomer1);
  },

  cookiesBoughtPerHour1: [],
  totalDailyCookies1: 0,

  cookiesHour1: function()
  {
    for(let i = 0; i < hours.length; i++)
    {
      let simCookies1 = Math.ceil(this.avgCookieBought1 *this.randomCustomerPerHour1());
      this.cookiesBoughtPerHour1.push(simCookies1);
      this.totalDailyCookies1 += simCookies1; 
    }
  },

  // Render
  render: function(){
    this.cookiesHour1();
    let articleElem = document.createElement('article');
    console.log(this.cookiesBoughtPerHour1);
    cookiesSale.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.city1;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    for(let i = 0; i < this.cookiesBoughtPerHour1.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${hours[i]}: ${this.cookiesBoughtPerHour1[i]} Cookies!`;
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.totalDailyCookies1} Cookies`;
    ulElem.appendChild(liElem);


  }

};

Tokyo.randomCustomerPerHour1();
Tokyo.render();
console.log(Tokyo);


let Dubai = {
  city2:
}