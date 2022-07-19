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
      this.totalDailyCookies += simCookies
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