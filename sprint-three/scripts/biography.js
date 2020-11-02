let form = document.querySelector(".comments-form__container");
let commentList = document.querySelector(".comments__list");

let apiKey = "c257b061-5a87-4101-a7e3-8b88a9b8b673";

//Getting the access key for the API
let getAccess = axios.get("https://project-1-api.herokuapp.com/register");

const commentGetter = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=c257b061-5a87-4101-a7e3-8b88a9b8b673"
);
// commentGetter.then(function (result) {
//   console.log(result.data);
// });
const defaultComments = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=c257b061-5a87-4101-a7e3-8b88a9b8b673"
);

defaultComments.then((result) => {
  //Creating an array of the DATA
  let resultArray = result.data;
  resultArray.forEach((results) => {
    //getting the name from the default array
    let nameDefault = results.name;
    //getting the comment from the default array
    let commentDefault = results.comment;
    //getting the likes from the default array
    let likes = results.likes;
    //getting the time from the default array
    let time = results.timestamp;
    //renderin each of the comments
    let li1 = document.createElement("li");
    li1.className = "posted__comments__box";
    // creating a div that is going to contain the name, date
    let commentContainer1 = document.createElement("div");
    commentContainer1.className = "posted__comments-top";
    //create a div that holds the image of the person that comments
    let profileImg1 = document.createElement("div");
    profileImg1.className = "person-img";
    //create a p that is holds the profile name
    let nameElement1 = document.createElement("p");
    //create time element
    const messageTime1 = document.createElement("time");
    messageTime1.innerText = new Date(time).toLocaleDateString();
    // adding a class to time
    messageTime1.className = "time-style";
    //create another paragraph that is going to hold the value of the comment.
    let commentHolder1 = document.createElement("p");
    //adding a class to the commentHolder1
    commentHolder1.className = "comments__holder";
    // appending the name content to its parent element
    nameElement1.appendChild(document.createTextNode(nameDefault));
    // appending the comment content to its parent p element
    commentHolder1.appendChild(document.createTextNode(commentDefault));
    //creating a div that is going to hold the comment holder
    let commentsDivBottom1 = document.createElement("div");
    //giving a class to commentsDivBottom
    commentsDivBottom1.className = "comments-div-bottom";
    //appending commentholder to its div holder
    commentsDivBottom1.appendChild(commentHolder1);
    //appending nameElement, and dateElement to his div
    commentContainer1.appendChild(nameElement1);
    commentContainer1.appendChild(messageTime1);
    //creating another div container that is going to separate de name and date from the paragraph
    let commentsDivLeft1 = document.createElement("div");
    //adding a class to commentDivTop
    commentsDivLeft1.className = "comments-div-left";
    //creating a likes text title
    let likesTitleElem = document
      .createElement("p")
      .appendChild(document.createTextNode("likes"));
    likesTitleElem.className = "likesTitle";
    //creating a new div that is going to hold the title and the actual likes
    let likesContainer = document.createElement("div");
    likesContainer.className = "likesContainer";
    //creating a p to hold the likes
    let likesElem = document.createElement("p");
    //creating a class for time
    likesElem.className = "likes";
    //appending the time to the p element
    likesElem.appendChild(document.createTextNode(likes));
    //creating a delete botton
    let btn = document.createElement("button");
    btn.innerText = "X";
    btn.className = "delete__btn";
    btn.addEventListener("click", function () {
      axios.delete(
        "https://project-1-api.herokuapp.com/comments/results.id?api_key=c257b061-5a87-4101-a7e3-8b88a9b8b673"
      );
    });
    //creating a new div to add the delete btn
    let deleteDiv = document.createElement("div");
    deleteDiv.className = "delete__div";
    deleteDiv.appendChild(btn);
    //creating a new div to have the likes elem and likestitle elem
    let likesDiv = document.createElement("div");
    likesDiv.className = "likes__div";
    likesDiv.appendChild(likesElem);
    likesDiv.appendChild(likesTitleElem);
    //appending the btn to the likes container
    likesContainer.appendChild(deleteDiv);
    //appending the like title and the actual likes to its div parent
    likesContainer.appendChild(likesDiv);
    //apending name and date to its div parent
    commentsDivLeft1.appendChild(commentContainer1);
    commentsDivLeft1.appendChild(commentsDivBottom1);
    //creating a new div to hold the comment div left and the likes container
    let timeLikeCommentElem = document.createElement("div");
    timeLikeCommentElem.className = "big-container-left";
    timeLikeCommentElem.appendChild(commentsDivLeft1);
    timeLikeCommentElem.appendChild(likesContainer);
    //appending both div to the li
    li1.appendChild(profileImg1);
    li1.appendChild(commentsDivLeft1);
    li1.appendChild(likesContainer);
    // appending the li to the ul
    commentList.appendChild(li1);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //selecting the value from name
  let name = event.target.name.value;
  //selecting the value from comment
  let comment = document.getElementById("comments-area").value;
  //Making a POST REQUEST
  axios.post(
    "https://project-1-api.herokuapp.com/comments?api_key=c257b061-5a87-4101-a7e3-8b88a9b8b673",
    {
      name: name,
      comment: comment,
    }
  );

  const commentGetter = axios.get(
    "https://project-1-api.herokuapp.com/comments?api_key=c257b061-5a87-4101-a7e3-8b88a9b8b673"
  );

  commentGetter.then(function (result) {
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
    // assigining a class to the comment holder
    commentHolder.className = "comments__holder";
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
});
