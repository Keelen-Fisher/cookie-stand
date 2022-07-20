'use strict';

let cookiesSale = document.getElementById('cookie-city');
let salesTable = document.getElementById('sales-table');
// console.dir(cookiesSale);
// console.dir(salesTable);

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//  For lab 07:

 // fucntion createTeableHeader(){
// // create thead
// // create row add the content to row
// }

// function createTableFooter() - standalone function

// ********** CONSTRUCTOR REFACTOR *************
let cookieArray = [];

function Cookies(city, minCust, maxCust, avgCookie){

  // Unique
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  
// //  Not Unique
  // this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  this.cookiesBoughtPerHour = [];
  this.totalDailyCookies = 0;

  cookieArray.push(this);
}


// ************** PROTOTYPE METHODS ***********

Cookies.prototype.randomCustomerPerHour = function(){
  return Math.floor(Math.random() * (this.maxCust -this.minCust + 1) + this.minCust);
};


Cookies.prototype.cookiesHour = function()
{
  for(let i = 0; i < hours.length; i++){
  let simCookies = Math.ceil(this.avgCookie * this.randomCustomerPerHour());
  this.cookiesBoughtPerHour.push(simCookies);
  this.totalDailyCookies += simCookies;
  }

};

function createHeader(){
  let rowNew = document.createElement('tr');
  salesTable.appendChild(rowNew);

  let emptySpace = document.createElement('td');
  rowNew.appendChild(emptySpace);

  for(let i = 0; i < hours.length; i++){
    let th2Elem = document.createElement('th');
    th2Elem.textContent = `${hours[i]}`;
    rowNew.appendChild(th2Elem);
  }

};

Cookies.prototype.render = function()
{
let rowElem = document.createElement('tr');
salesTable.appendChild(rowElem);

let th1Elem = document.createElement('th');
th1Elem.textContent = this.city
rowElem.appendChild(th1Elem);

for(let i = 0; i < hours.length; i++){
  let td1Elem = document.createElement('td');
  td1Elem.textContent = this.cookiesBoughtPerHour[i];
  rowElem.appendChild(td1Elem);
}

let td2Elem = document.createElement('td');
td2Elem.textContent = this.totalDailyCookies;
rowElem.appendChild(td2Elem);


// let ulElem = document.createElement('ul');
// articleElem.appendChild(ulElem);

// for(let i = 0; i < this.cookiesBoughtPerHour.length; i++){
//   let liElem = createElement('li');
//   liElem.textContent = this.cookiesBoughtPerHour[i];
//   ulElem.appendChild(liElem);
// };

  
};





// ************* Creating Cities, Time and number of Cookies ***********
let seattle = new Cookies('Seattle', 23, 65, 6.3);

let tokyo = new Cookies('Tokyo', 3, 24, 1.2);

let dubai = new Cookies('Dubai', 11, 38, 3.7);

let paris = new Cookies('Paris', 20, 38, 2.3);

let lima = new Cookies('Lima', 2, 16, 4.6);






createHeader();

seattle.cookiesHour();
seattle.render();

tokyo.cookiesHour();
tokyo.render();

dubai.cookiesHour();
dubai.render();

paris.cookiesHour();
paris.render();

lima.cookiesHour();
lima.render();



