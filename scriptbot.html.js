/* VARS */

let userData = [];
let userDataControl = [];
let isTyping = false; 

const areaMessages = document.getElementById('area-messages');

const inputMessage = document.getElementById('message');
const sendMessage = document.getElementById('send');

/* TYPING BOT CONTROL */
function typingControl() {
   if (isTyping) {
     document.getElementById('typing').classList.remove('no-typing');
     document.getElementById('typing').classList.add('is-typing');
   } else {
     document.getElementById('typing').classList.remove('is-typing');
     document.getElementById('typing').classList.add('no-typing');
   }
}

/* WRITE */

inputMessage.addEventListener("input", _ => {
   if (inputMessage.value.length > 0) {
     sendMessage.style.background = '#63E2DB'
   } else {
     sendMessage.style.background = '#181E2A'
   }
});

inputMessage.addEventListener("keyup", event => {
   if (event.code === 'Enter') {
     event.preventDefault();
     getData();
   }
});

/* SCROLL */

function autoScroll() {
   const heightPage = document.body.scrollHeight;
   window.scrollTo(0, heightPage);
}

function scrollDiv() {
   areaMessages.scrollTo(0, 10000);
}

/* GET USER DATA */

function getData() {

   if (inputMessage.value != '' && inputMessage.value != undefined && inputMessage.value != null) {
     userData.push(inputMessage.value);
     userDataControl.push(inputMessage.value);
     inputMessage.value = '';
     sendMessage.style.background = '#181E2A'
     controlInteraction();
   }
}

/* CONFIG USER DATA */

function configData() {
   let levelAc = userData[5];
   let compare = levelAc.toUpperCase();
   switch(compare) {
     case 'Nenhuma':
       userData[5] = 1.2;
       break;
     case 'Mild':
       userData[5] = 1,375;
       break;
     case 'Moderate':
       userData[5] = 1.55;
       break;
     case 'Intense':
       userData[5] = 1,725;
       break;
   }
}

function loadData() {
   userName = userData[0];
   userGender = userData[1];
   userWeight = parseInt(userData[2]);
   userHeight = parseInt(userData[3]);
   userAge = parseInt(userData[4]);
   userActivity = userData[5];
   calcAll();
}

/* START INTERACTION */
function startInteraction() {

   setTimeout(function () {
     areaMessages.innerHTML += `<p class="bot-message">Hello, I'm the Healthbot and I'm here to help you  &#128170&#128526</p><br>`;
     isTyping = true;
     typingControl();
   }, 1000);

   setTimeout(function () {
     areaMessages.innerHTML += `<p class="bot-message">How can I call you?</p>`;
     isTyping = false;
     typingControl();
     autoScroll();
   }, 2000);

}

startInteraction();

/* CONTROL INTERACTION */

function controlInteraction() {

   /* USER NAME */
   if (userDataControl[0] != null) {
     areaMessages.innerHTML += `<p class="user-message"> ${userData[0]}</p>`;
     userDataControl[0] = null;
     isTyping = true;
     typingControl();
     scrollDiv();

     setTimeout(function () {
       areaMessages.innerHTML += `<p class="bot-message">Certainly ${userData[0]}, I will need some information regarding your health.</p><br>`;
       scrollDiv();
     }, 3000);

     setTimeout(function () {
       areaMessages.innerHTML += `<p class="bot-message">What is your gender? To be more accurate in our precise calculations of this information, please enter "<span class="info">Male</span>" or "<span class="info">Female</span>".</p>` ;
       isTyping = false;
       typingControl();
       scrollDiv();
     }, 6000);
   }

   /* USER GENDER */
   if (userDataControl[1] != null) {
     areaMessages.innerHTML += `<p class="user-message">${userData[1]}</p>`;
     userDataControl[1] = null;
     isTyping = true;
     typingControl();
     scrollDiv();

     setTimeout(function () {
       areaMessages.innerHTML += `<p class="bot-message">Are you a student or a working professional? </p>`;
       isTyping = false;
       typingControl();
       scrollDiv();
     }, 3000);
   }

   /* user WEIGHT */
   if (userDataControl[2] != null) {
     areaMessages.innerHTML += `<p class="user-message">${userData[2]}</p>`;
     userDataControl[2] = null;
     isTyping = true;
     typingControl();
     scrollDiv();

     setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">How old are you? <span class="example">Example: 25</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
    }, 3000);
  }
  /* USER AGE */
  if (userDataControl[3] != null) {
   areaMessages.innerHTML += `<p class="user-message">${userData[3]} years</p>`;
   userDataControl[3] = null;
   isTyping = true;
   typingControl();
   scrollDiv();

  

     setTimeout(function () {
       areaMessages.innerHTML += `<p class="bot-message">Do you want to book appoinment with doctor?<span class="example">Example: yes or no</span></p>`;
       isTyping = false;
       typingControl();
       scrollDiv();
     }, 3000);
   }

   /* USER HEIGHT */
   if (userDataControl[4] != null) {
     areaMessages.innerHTML += `<p class="user-message">${userData[4]}</p>`;
     userDataControl[4] = null;
     isTyping = true;
     typingControl();
     scrollDiv();

    

 

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Perfect, I already have everything that I need to calculate here.</p><br>`;
      loadData();
      scrollDiv();
    }, 3000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">But first some very important information, ${userName}:</p><br>`;
      scrollDiv();
    }, 5000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">TO KEEP THE BODY IN GOOD HEALTH IS A DUTY... OTHERWISE WE SHALL NOT BE ABLE TO KEEP OUR MIND STRONG AND CLEAR.</span></p><br>`;
      scrollDiv();
    }, 10000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">It is therefore essential that you seek a expert so that he can guide you more precisely!</p><br>`;
      scrollDiv();
    }, 16000);

    // setTimeout(function () {
    //   areaMessages.innerHTML += `<p class="bot-message">But let's go, while talking with you, já fiz the calculations here... &#128540</p><br>`;
    //   scrollDiv();
    // }, 19000);

   

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">If you are going to book an appointment you are at right place. At <span class="info">U R NORMAL </span>we provide best care for your mental being.we also track your progress. register link and book your appointment link <a href="appointment.html">.</p><br>` ; 
      scrollDiv();
    }, 19000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">If you intend to join free session with our expert or join our free online yoga classes visit here.</p> <br>`;
      scrollDiv();
    }, 22000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message">Well, that's all the information I can give to you at the moment. Hope I helped you.</p><br>`;
      scrollDiv();
    }, 24000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="bot-message"><span class="info">Thank you for using the Healthbot!</span></p>`;
      isTyping = false;
      typingControl();
      scrollDiv();
      //console.log(`Just for control analyse: ${userGender}`)
    }, 33000);

    setTimeout(function () {
      document.getElementById('area-interaction').innerHTML = '<p class="example">Chat ended.</p>'
    }, 41000);

    setTimeout(function () {
      areaMessages.innerHTML += `<p class="credits">Follow U R Normal on your fav social media.<br><br><i class="fab fa-linkedin"></i></a><a class="social" href="https://github.com/DanielMafra"><i class="fab fa-github"></i></a><a class ="social" href="https://www.instagram.com/danielmafraoficial/"><i class="fab fa-instagram"></i></a></p>`;
      scrollDiv();
    }, 51000);
  }

}