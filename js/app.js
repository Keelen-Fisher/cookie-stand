'use strict';

let cookiesSale = document.getElementById('cookie-city');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  city: 'Seattle',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieBought: 6.3, 
  randomCustomerPerHour: function(){
    return Math.floor(Math.random() * (this.maxCustomer -this.minCustomer + 1) + this.minCustomer);},
    // This Code was from mdn webdocs
  cookiesBoughtPerHour: [], 
  totalDailyCookies: 0,
  // Create a for loop 

  cookiesHour: function(){ for(let i = 0; i < hours.length; i++)
    {
      //  using avg and randCust - calc a number calculated number: avgCookieBought * randomcustomer
      let simCookies = this.avgCookieBought * randomCustomerPerHour();
      // add that calculation to the array by using this.cookiesBoughtPerHour.push(calculated number)
      this.cookiesBoughtPerHour.push(simCookies);
      // Add all of the cookies together.
      this.totalDailyCookies += simCookies
    }
  },

  
  





}

console.log(seattle.randomCustomerPerHour());
console.log(seattle.cookiesHour);
 console.log(seattle.cookiesBoughtPerHour);
 console.log(seattle.totalDailyCookies)