
//below  this line for shade and fade
const items = document.querySelectorAll('.item:not(:first-child)');

const options = {
    threshold: 0.3
  }


  function addSlideIn(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('slide-in');
      }
    });
  }
  
  const observer = new IntersectionObserver(addSlideIn, options)



  items.forEach(item => {
    observer.observe(item);
  })

//above this line for shade and fade

//Below  this line is for image slider on click

const images = document.querySelectorAll('#slider img');
const previousImage = document.getElementById("prev");
const nextImage = document.getElementById("next");


let currentIndex = 0;

function reset() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove('active');
  }
}

function initializeSlider() {
  reset();
  images[currentIndex].classList.add('active');
}


function slideLeft() {
  reset();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  images[currentIndex].classList.add('active');
}

function slideRight() {
  reset();
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  images[currentIndex].classList.add('active');
}


initializeSlider();

previousImage.addEventListener('click', function() {
  slideLeft();
});

nextImage.addEventListener('click', function() {
  slideRight();
});
//End of image slider on click

// below this line to show day on the front page header
/*const d = new Date();
    dateTime = d.toLocaleString();
    document.getElementById("dateTime").innerHTML = dateTime;*/
    //<p id="showDate"></p> ---showDate id copied and posted under the title of the website on First OR Home page.
    //const d = new Date();
    const girma = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
    let text = girma.toString();
    document.getElementById("showDate").innerHTML = text;

    // Below this line is for image auto slider

    window.onload = selectPic

var myAllImage= new Array("Media/correlation one jordan.png","Media/birds.JPG","Media/Qase dashboard.png","Media/IBM-gettyimages.jpg","Media/Dog-by-Oscar-Sutton.PNG", 
"Media/dog-services-screen-capture.PNG","Media/class-example1.jpg", "Media/class-example2.jpg", "Media/class-example3.jpg","Media/class-example4.jpg","Media/americaflag1.jpg",);

function selectPic() {
	randomNum = Math.floor((Math.random() * myAllImage.length));
	document.getElementById("myImagePractice").src = myAllImage[randomNum];
}
setInterval(selectPic, 1500);
// End of image auto slider


// function for booking-confirmation-message (OPENS a NEW Window)
            
function bookingFunction() {
  var a = window.open("", a, "width=500, height=150");
  a.document.write("<h2>Dear our reader, your message has been successfully submitted! Thank you.");
  a.document.body.style.background = "green";
  a.document.body.style.color = "white";
  setTimeout(function () { a.close() }, 5000);
}


/* javaScript code to handle Contact Form start here*/
// Get all the necessary DOM elements
const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')

// Store all form elements in an array by spreading the elements property of the form
const formElements = [ ...form.elements ]

// Create function to check if all form elements are valid
const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'SELECT') {
      //return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  })
  return valid
}


// Define a function to handle changes to any form element
const handleChange = () => {
  // Use the forEach() function to execute the provided function once for each element in the formElements array
  formElements.forEach((element) => {
    // If the element is invalid and is not a button, a select dropdown, a checkbox, or a radio button, style it with a red border and red text
    if (!element.checkValidity()
          && element.nodeName !== 'button-for-form'
          
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    // If the element is valid, reset its style to the original colors
    // The conditions are the same as above for excluding certain elements
    if (element.checkValidity()
          && element.nodeName !== 'button-for-form'
          
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }
    
  })

  // If all form elements are valid, enable the submit button; otherwise, disable it
  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}
// Define a function to handle form submission
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault()

  // If all form elements are valid after the form submission, display a success message, reset the form, and disable the submit button
  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    // Hide the success message after 10 seconds
    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 4000)
  }
}
// Add event listener to each form element
formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

// Add submit listener to the form
form.addEventListener('submit', (e) => handleSubmit(e))

/* javaScript code to handle Contact Form end here*/

/* javaScript code to handle Project 14 starts here*/
/* In the next code we set up the coordinates of the “Accenture Headquarters: Dublin, Ireland, using Google Maps tiles.
 */
const map = L.map('map').setView([53.348372, //latitude
-6.279154 ], //longitude
    13);    //zoom

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,

    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: 'Copyright Google Maps'
    }).addTo(map);
    var marker = L.marker([53.348372, -6.279154]).addTo(map); // This is the marker (marks on Accenture Headquarters: Dublin, Ireland)
    var circle = L.circle([53.353016, -6.312957], {radius: 600}).addTo(map);//Add a circle to map: in this case you should 
    //indicate the radius of the circle in meter. For this example, Accenture Headquarters: Dublin, Ireland marked but not circled, because both have not same 
    //latitude and longitude coordinates.

    // create a red polygon from an array of LatLng points
    var latlngs = [[53.356398723448805, -6.305084183219093],[ 53.35642156817638, -6.3057348823744235],[ 53.355953248813584, -6.3051798742713485]];      
    var polygon = L.polygon(latlngs, {color: 'red', fillOpacity: 0.8, weight: 6 }).addTo(map);
    var popup = L.popup() //Sometimes you need to attach information in your map. Use this code to add a popup.
       .setLatLng([53.1123, -6.01])
       .setContent("Testing a popup.")
       .openOn(map);
       /* We also can add a popup to our objects as makers, polygons, circles, etc. 
       In this case now the above popup will not work (Testing a popup) */
        marker.bindPopup("Example to show how a popup works (Dublin, Ireland).Please click a big circle on the left.").openPopup();
        circle.bindPopup("Thank you for clicking me. This is Phoenix Park, Dublin, Ireland. It is so green and beautiful. Example to show how a circle works, please click a red polygon.");
        polygon.bindPopup("Danger! Wild animalas! Do not approach. Example to show how a polygon works, Dublin Zoo.");
        /* You can interact with the map using events. Every object has its corresponding event which can be used as a function. 
        It allows you to react to user interaction. With this code, you can click anywhere on the map to view the coordinates of that point.
         It will show an alert like "You clicked the map at LatLng(43.101484, -79.018822)" */
        function onMapClick(e) {
        alert("You clicked the map at " + e.latlng);
      }
        map.on('click', onMapClick); 
        /* javaScript code to handle Project 14 ends here*/

