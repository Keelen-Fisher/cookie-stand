'use strict';

// let cookiesSale = document.getElementById('cookie-city');
let salesTable = document.getElementById('sales-table');
// ************ STEP 1: 
let myForm = document.getElementById('my-form');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//  For lab 07:

 // fucntion createTeableHeader(){
// // create thead
// // create row add the content to row
// }

// function createTableFooter() - standalone function

// ********** CONSTRUCTOR REFACTOR *************
let cookieArray = [];

// Constructor
function Cookies(city, minCust, maxCust, avgCookie){

  // Unique
  this.city = city;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesBoughtPerHour = [];
  this.totalDailyCookies = 0;

  cookieArray.push(this);
}


// ************** PROTOTYPE METHODS ***********
//  Prototypes allow you to modify the properties and methods of an object at runtime. This means that you can change the behavior of an object on the fly, which can be useful in certain situations.

/* `Cookies.prototype.randomCustomerPerHour = function()` is a prototype method that generates a random
number of customers per hour for a `Cookies` object. It uses the `Math.random()` method to generate
a random number between the minimum and maximum number of customers per hour for the city
represented by the `Cookies` object. The `Math.floor()` method is used to round down the result to
the nearest integer. The method returns the random number of customers per hour. */
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
  /* `let rowNew = document.createElement('tr')` is creating a new HTML table row element (`<tr>`) and
  assigning it to the variable `rowNew`. This new row will be used to add data to the sales table. */
  let rowNew = document.createElement('tr');
  salesTable.appendChild(rowNew);

  /* `let emptySpace = document.createElement('td');` is creating a new HTML table data cell element
  (`<td>`) and assigning it to the variable `emptySpace`. */
  let emptySpace = document.createElement('td');
    rowNew.appendChild(emptySpace);

  for(let i = 0; i < hours.length; i++){
    let th2Elem = document.createElement('th');
    th2Elem.textContent = `${hours[i]}`;
    rowNew.appendChild(th2Elem);
  }

  let thHour = document.createElement('th');
  thHour.textContent = 'Hourly Totals';
  rowNew.appendChild(thHour);

};

/* `Cookies.prototype.render = function()` is a prototype method that is adding a `render()` method to
the `Cookies` constructor function's prototype. This method generates the HTML table row for the
city represented by the `Cookies` object, including the hourly cookie sales data and the total daily
cookies sold. */
Cookies.prototype.render = function()
{
this.cookiesHour();
let rowElem = document.createElement('tr');
  salesTable.appendChild(rowElem);

let th1Elem = document.createElement('th');
th1Elem.textContent = this.city
rowElem.appendChild(th1Elem);

for(let i = 0; i < hours.length; i++){
  // td -> cells within a table.
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
// Speak with instructor/TA over this area  
};

// function renderHeader()
// {
//   let tr = document.createElement('tr');
//   salesTable.appendChild(tr);
//   let thHour = document.createElement('th');
//   thHour.textContent = 'Hourly Totals';
//   tr.appendChild(thHour);
// };


function renderFooter(){
 let trElem = document.createElement('tr');
 salesTable.appendChild(trElem);

//  BUILD CONTENT FOR ROW 
// total string

let th3Elem = document.createElement('th');
  th3Elem.textContent = 'Totals';
  trElem.appendChild(th3Elem);

// nested loop
let grandTotal = 0;
for(let i = 0; i < hours.length; i++){
  let hourlyTotal = 0;

  for(let j = 0; j < cookieArray.length; j++){
    /* `hourlyTotal = hourlyTotal + cookieArray[j].cookiesBoughtPerHour[i]` is calculating the total
    number of cookies sold in a particular hour across all cities. It is iterating through each city
    in the `cookieArray` and adding the number of cookies sold in the current hour (`i`) to the
    `hourlyTotal` variable. This is done for each hour in the `hours` array, resulting in a total
    number of cookies sold per hour across all cities. */
    hourlyTotal = hourlyTotal + cookieArray[j].cookiesBoughtPerHour[i];
    grandTotal = grandTotal + cookieArray[j].cookiesBoughtPerHour[i];
  }


  let td3Elem = document.createElement('td');
    td3Elem.textContent = hourlyTotal;
    trElem.appendChild(td3Elem);

  
  }
  let td4Elem = document.createElement('td');
    td4Elem.textContent = grandTotal;
    trElem.appendChild(td4Elem);
};





// ************* Creating Cities, Time and number of Cookies ***********
let seattle = new Cookies('Seattle', 23, 65, 6.3);

let tokyo = new Cookies('Tokyo', 3, 24, 1.2);

let dubai = new Cookies('Dubai', 11, 38, 3.7);

let paris = new Cookies('Paris', 20, 38, 2.3);

let lima = new Cookies('Lima', 2, 16, 4.6);






createHeader();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

renderFooter();
// renderHeader();
// ********** Form Insert ****************

// ******** Step 3: Define our callback **********

function handleSubmit(event){
  event.preventDefault();
  // newStand = new.
  let cityL = event.target.City.value;
  console.log(cityL);
  let minCustL = +event.target.minCust.value;
  console.log(minCustL);
  let maxCustL = +event.target.maxCust.value;
  console.log(maxCustL);
  let avgCookieL = +event.target.avgCookie.value;
  console.log(avgCookieL);


  // splits a string into an array of substrings and return the new array
  // [variable]= [variable].split(',');

  let newArray = new Cookies(cityL, minCustL, maxCustL, avgCookieL);
  // Hint: Remove your footer (google it) and recreate it.


  // A way to reset the website: 

     document.getElementById('sales-table').deleteRow(-1);
    /* `newArray.render();` is calling the `render()` method on the newly created `Cookies` object
    `newArray`. This method generates the HTML table row for the city represented by the `newArray`
    object, including the hourly cookie sales data and the total daily cookies sold. */
    newArray.render();
    renderFooter();
    myForm.reset();
}



// ************ STEP 2:  Attach event listener for form lab 09*************
/* `myForm.addEventListener('submit', handleSubmit);` is attaching an event listener to the `myForm`
element that listens for a `submit` event. When the `submit` event is triggered (i.e. when the user
submits the form), the `handleSubmit` function is called. */
myForm.addEventListener('submit', handleSubmit);
