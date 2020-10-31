let form = document.querySelector(".comments-form__container");
let commentList = document.querySelector(".comments__list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //selecting the value from name
  let name = event.target.name.value;
  //selecting the value from comment
  let comment = document.getElementById("comments-area").value;
  //creating an li element and giving it a class of box
  let li = document.createElement("li");
  li.className = "posted__comments__box";
  // creating a div that is going to contain the name, date
  let commentContainer = document.createElement("div");
  commentContainer.className = "posted__comments-top";
  //create a div that holds the image of the person that comments
  let profileImg = document.createElement("div");
  profileImg.className = "person-img";
  //create a p that is holds the profile name
  let nameElement = document.createElement("p");
  //create time element
  const messageTime = document.createElement("time");
  messageTime.innerText = new Date(event.timeStamp).toLocaleDateString();
  // adding a class to time
  messageTime.className = "time-style";
  //create another paragraph that is going to hold the value of the comment.
  let commentHolder = document.createElement("p");
  // appending the name content to its parent element
  nameElement.appendChild(document.createTextNode(name));
  // appending the comment content to its parent p element
  commentHolder.appendChild(document.createTextNode(comment));
  //creating a div that is going to hold the comment holder
  let commentsDivBottom = document.createElement("div");
  //giving a class to commentsDivBottom
  commentsDivBottom.className = "comments-div-bottom";
  //appending commentholder to its div holder
  commentsDivBottom.appendChild(commentHolder);
  //appending nameElement, and dateElement to his div
  commentContainer.appendChild(nameElement);
  commentContainer.appendChild(messageTime);
  //creating another div container that is going to separate de name and date from the paragraph
  let commentsDivLeft = document.createElement("div");
  //adding a class to commentDivTop
  commentsDivLeft.className = "comments-div-left";
  //apending name and date to its div parent
  commentsDivLeft.appendChild(commentContainer);
  commentsDivLeft.appendChild(commentsDivBottom);
  //appending both div to the li
  li.appendChild(profileImg);
  li.appendChild(commentsDivLeft);

  // appending the li to the ul
  commentList.appendChild(li);

  event.target.reset();
});

// test
const commentArray = [
  {
    name: "Daniel",
    timestamp: Date.now(),
    comment: "Hi my name is Daniel",
  },
  {
    name: "Edwin",
    timestamp: Date.now(),
    comment: "Hi my name is Edwin",
  },
  {
    name: "Ari",
    timestamp: Date.now(),
    comment: "Hi my name is Ari",
  },
];

let addComment = function (comment, placeToPut) {
  commentArray.forEach(function (comment) {
    // create a new li
    let li = document.createElement("li");
    li.className = "posted__comments__box";
    //create a new div
    let divContainer = document.createElement("div");
    //create a div that holds the image of the person that comments
    let profileImg = document.createElement("div");
    profileImg.className = "person-img";
    //creating a new paragraph that is going to hold the name
    let nameElem = document.createElement("p");
    nameElem.innerText = comment.name;
    //creating a new paragraph that is going to hold the date
    let dateElem = document.createElement("p");
    dateElem.innerText = new Date(comment.timestamp).toLocaleString();
    // creating a new paragraph hold the comment
    let commentElem = document.createElement("p");
    //giving the value of the comment
    commentElem.innerText = comment.comment;
    // creating a div that is going to contain the name, date
    let commentContainer = document.createElement("div");
    commentContainer.className = "posted__comments-top";
    //appending name element and date to its parent
    commentContainer.appendChild(nameElem);
    commentContainer.appendChild(dateElem);
    //creating a div that is going to hold the comment holder
    let commentsDivBottom = document.createElement("div");
    //giving a class to commentsDivBottom
    commentsDivBottom.className = "comments-div-bottom";
    // appeding the element the div to the li
    commentContainer.appendChild(divContainer);
    //appending the comment box to the bottom div
    commentsDivBottom.appendChild(commentElem);
    //creating another div container that is going to separate de name and date from the paragraph
    let commentsDivLeft = document.createElement("div");
    //adding a class to commentDivTop
    commentsDivLeft.className = "comments-div-left";
    //appending coments div top and bottom to the left
    commentsDivLeft.appendChild(commentContainer);
    commentsDivLeft.appendChild(commentsDivBottom);

    li.appendChild(profileImg);
    li.appendChild(commentsDivLeft);

    // appending the li to the ul
    commentList.appendChild(li);
  });
};
addComment(commentArray, commentList);
//test
