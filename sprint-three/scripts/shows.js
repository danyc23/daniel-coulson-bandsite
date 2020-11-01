// const concertsArray = [
//   {
//     DATE: "Mon Dec 17 2018",
//     VENUE: "Ronald Lane",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Tue July 18 2019",
//     VENUE: "Pier 3 East",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Fri Jul 22 2019",
//     VENUE: "View Loungue",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Sat Aug 12 2019",
//     VENUE: "Hyatt Agency",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Fri Sep 05 2019",
//     VENUE: "Moscow Center",
//     LOCATION: "San Francisco, CA",
//   },
//   {
//     DATE: "Wed Aug 11 2019",
//     VENUE: "Press Club",
//     LOCATION: "San Francisco, CA",
//   },
// ];
// Getting the data from axios
const shows = axios.get(
  "https://project-1-api.herokuapp.com/showdates?api_key=let apiKey =c257b061-5a87-4101-a7e3-8b88a9b8b673"
);

// Using the data
shows.then(function (shows) {
  let showsArray = shows.data;
  let addShow = function (showsArray, showList) {
    let dateFirstTitle = document.createElement("h3");
    showsArray.forEach(function (event) {
      //creating the li element that is going to hold the date venue and location
      let li = document.createElement("li");
      //adding a class to the main li
      li.className = "concert";
      // create the div that is going to contain the DATE
      let dateContainer = document.createElement("div");
      //adding a class to the date div container
      dateContainer.className = "date-container";
      // create an h3 that is going to have the title DATE
      let dateElem = document.createElement("h3");
      //adding a class to the date h3
      dateElem.className = "concert-date-title";
      // adding the date title to the h3
      dateElem.innerText = "DATE";
      //creating an another h3 that is going to hold the value of date
      let eventElem = document.createElement("h3");
      // addinv a class to the event element
      eventElem.className = "concert-date";
      // graving the actual date from the object
      eventElem.innerText = event.date;
      // adding the date title and the actual date to the div container
      dateContainer.appendChild(dateElem);
      dateContainer.appendChild(eventElem);

      // creating the div that is going to contain the VENUE
      let venueContainer = document.createElement("div");
      //adding a class to the venue container
      venueContainer.className = "venue-container";
      // creating the element that is going to have the venue title
      let venueElem = document.createElement("h3");
      //adding a class to the venue title
      venueElem.className = "venue-title";
      //adding the inner text to the venueTitle h3
      venueElem.innerText = "VENUE";
      //Creating an h3 element that is going to have the actual venue value
      let venue = document.createElement("h3");
      //adding a class to the venue content
      venue.className = "venue";
      //adding the value of the venue to the element
      venue.innerText = event.place;
      //appeding both h3 to its parent div
      venueContainer.appendChild(venueElem);
      venueContainer.appendChild(venue);

      // creating the div that is going to contain the location
      let locationContainer = document.createElement("div");
      //adding a class to the location container
      locationContainer.className = "location-container";
      // creating the element that is going to have the location title
      let locationElem = document.createElement("h3");
      //adding a class to the location title
      locationElem.className = "location-title";
      //adding the inner text to the location title h3
      locationElem.innerText = "LOCATION";
      //Creating an h3 element that is going to have the actual location value
      let location = document.createElement("h3");
      // adding a class to the location content
      location.className = "location";
      //adding the value of the location to the element
      location.innerText = event.location;
      //appeding both h3 to its parent div
      locationContainer.appendChild(locationElem);
      locationContainer.appendChild(location);

      //appending the li to the ul
      li.appendChild(dateContainer);
      li.appendChild(venueContainer);
      li.appendChild(locationContainer);

      let btn = document.createElement("button");
      //adding a class to the button
      btn.className = "btn-concert";
      //adding the botton inner text
      btn.innerText = "BUY TICKETS";
      //adding the button to the li
      li.appendChild(btn);

      //appending the li to the ul

      showList.appendChild(li);
      //creating a button to append it as well
    });
  };
  //running the function
  addShow(showsArray, showsContainer);
});
// selecting the ul from the DOM
let showsContainer = document.getElementById("show-list-container");
// //---------------------------- sprint two at the bottom

// //creating the first titles FOR DATE
// let dateFirstTitle = document.createElement("h3");
// dateFirstTitle.innerText = "DATE";
// //adding a class to the datefirsttitle
// dateFirstTitle.className = "date-first-title";
// //creating the first title for venue
// let venueFirstTitle = document.createElement("h3");
// venueFirstTitle.innerText = "VENUE";
// //adding a class to the venuefirsttitle
// venueFirstTitle.className = "venue-first-title";
// //creating the first title for venue
// let locationFirstTitle = document.createElement("h3");
// locationFirstTitle.innerText = "LOCATION";
// //adding a class to the locationfirsttitle
// locationFirstTitle.className = "location-first-title";
// //CREATING A DIV TO ADD IT TO THE LI
// let firstTitleContainer = document.createElement("div");
// //adding a class to first titles
// firstTitleContainer.className = "first-title";
// //appending the first titles to its div
// firstTitleContainer.appendChild(dateFirstTitle);
// firstTitleContainer.appendChild(venueFirstTitle);
// firstTitleContainer.appendChild(locationFirstTitle);
// //appending the first title to the li
// showsContainer.appendChild(firstTitleContainer);

// //FUNCTION THAT ADDS THE SHOW TO THE LIST

// let addShow = function (events, showList) {
//   let dateFirstTitle = document.createElement("h3");
//   events.forEach(function (event) {
//     //creating the li element that is going to hold the date venue and location
//     let li = document.createElement("li");
//     //adding a class to the main li
//     li.className = "concert";
//     // create the div that is going to contain the DATE
//     let dateContainer = document.createElement("div");
//     //adding a class to the date div container
//     dateContainer.className = "date-container";
//     // create an h3 that is going to have the title DATE
//     let dateElem = document.createElement("h3");
//     //adding a class to the date h3
//     dateElem.className = "concert-date-title";
//     // adding the date title to the h3
//     dateElem.innerText = "DATE";
//     //creating an another h3 that is going to hold the value of date
//     let eventElem = document.createElement("h3");
//     // addinv a class to the event element
//     eventElem.className = "concert-date";
//     // graving the actual date from the object
//     eventElem.innerText = event.DATE;
//     // adding the date title and the actual date to the div container
//     dateContainer.appendChild(dateElem);
//     dateContainer.appendChild(eventElem);

//     // creating the div that is going to contain the VENUE
//     let venueContainer = document.createElement("div");
//     //adding a class to the venue container
//     venueContainer.className = "venue-container";
//     // creating the element that is going to have the venue title
//     let venueElem = document.createElement("h3");
//     //adding a class to the venue title
//     venueElem.className = "venue-title";
//     //adding the inner text to the venueTitle h3
//     venueElem.innerText = "VENUE";
//     //Creating an h3 element that is going to have the actual venue value
//     let venue = document.createElement("h3");
//     //adding a class to the venue content
//     venue.className = "venue";
//     //adding the value of the venue to the element
//     venue.innerText = event.VENUE;
//     //appeding both h3 to its parent div
//     venueContainer.appendChild(venueElem);
//     venueContainer.appendChild(venue);

//     // creating the div that is going to contain the location
//     let locationContainer = document.createElement("div");
//     //adding a class to the location container
//     locationContainer.className = "location-container";
//     // creating the element that is going to have the location title
//     let locationElem = document.createElement("h3");
//     //adding a class to the location title
//     locationElem.className = "location-title";
//     //adding the inner text to the location title h3
//     locationElem.innerText = "LOCATION";
//     //Creating an h3 element that is going to have the actual location value
//     let location = document.createElement("h3");
//     // adding a class to the location content
//     location.className = "location";
//     //adding the value of the location to the element
//     location.innerText = event.LOCATION;
//     //appeding both h3 to its parent div
//     locationContainer.appendChild(locationElem);
//     locationContainer.appendChild(location);

//     //appending the li to the ul
//     li.appendChild(dateContainer);
//     li.appendChild(venueContainer);
//     li.appendChild(locationContainer);

//     let btn = document.createElement("button");
//     //adding a class to the button
//     btn.className = "btn-concert";
//     //adding the botton inner text
//     btn.innerText = "BUY TICKETS";
//     //adding the button to the li
//     li.appendChild(btn);

//     //appending the li to the ul

//     showList.appendChild(li);
//     //creating a button to append it as well
//   });
// };
// //running the function
// addShow(concertsArray, showsContainer);

// //creating the first title for the tablet and desktop
