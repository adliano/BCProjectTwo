console.log('index.js loaded at addPet.html')

// Get references to page elements
/* eslint-disable no-undef */
/* ************ 🌍 Globals 🌏 *************** */
let setPetBtn = document.querySelector('.setPet')
let availablePetsContainer = document.querySelector('#petsContainer')
// Object with all input elements.
let dataInputs = {
  getAnimalName: document.querySelector('.getAnimalName'),
  getAnimalAge: document.querySelector('.getAnimalAge'),
  getAnimalType: document.querySelector('.getAnimalType'),
  getanimalAttitude: document.querySelector('.getanimalAttitude'),
  getPictName: document.querySelector('.getPictName')
}

// The API object contains methods for each kind of request we'll make
class API {
  // Constructor
  constructor (someDefault = 'defaultVal') {
    this.someDefault = someDefault
  }
  // This will fetch the API to create a new pet
  savePet (data) {
    return fetch('/api/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  // This will fetch all pets available on database and display on
  // availablePets.html
  getAllPets () {
    // GET method is Default on fetch
    return fetch('api/findAll')
      .then(result => result.json())
      .then(data => {
        for (let pet of data) {
          mkPetCard(pet)
        }
      })
  }
  // Thsi will be used to remove a pet from database
  deletePet (id) {
    return fetch('/api/delete/' + id, {
      method: 'DELETE'
    })
  }
}
/**
 *
 * Code used For availablePets.html
 * This will Create a card and add the card to petContainer
 *
 */
function mkPetCard (petJSON) {
  // Code for card (Bootstrap)
  let _colCard =
  `<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-7 p-1">
    <div class="card p-1 gif-card">
      <h4 class="card-title text-center p-2 mx-2  bg-primary text-light">${petJSON.petName}</h4>
      <img src="${petJSON.imgPath}" class="px-1 mx-auto" alt="" height="150" width="150">
        <div class="card-body text-center">
          <h2 class="card-title">${petJSON.attitude}</h2>
          <h3 class="card-text">Type: ${petJSON.type}</h3>
          <h3 class="card-text">${petJSON.age} years old</h3>
        </div>
      </div>
  </div>`

  console.log(petJSON.imgPath)

  // Insert beforeend
  if (availablePetsContainer) {
    availablePetsContainer.insertAdjacentHTML('beforeend', _colCard)
  }
}
/*
******************* Event Listner ***********************
 */
// Event Listner for setPet
// handleFormSubmit is called whenever we submit a new Pet
// Save the new example to the db and refresh the list
let handleFormSubmit = function (event) {
  event.preventDefault()
  let api = new API()

  // Suppose Multer are saiving imgs at public/uploads
  // Generate file path base on Express/Multer settings for static route
  // let imagPath = `/uploads/${getPictName.value.split('\\')[2]}`
  let imagPath = `/uploads/${dataInputs.getPictName.value.split('\\')[2]}`

  let petToAdd = {
    petName: dataInputs.getAnimalName.value.trim(),
    type: dataInputs.getAnimalType.value.trim(),
    attitude: dataInputs.getanimalAttitude.value.trim(),
    age: dataInputs.getAnimalAge.value.trim(),
    imgPath: imagPath
  }

  // Check if All inputs has data
  for (let key in dataInputs) {
    if (dataInputs[key].value.trim().length === 0) {
      alert(`'You must enter all data!'`)
      return
    }
  }
  // Save Animals data
  api.savePet(petToAdd).then(function (data) {
    // refreshExamples()
    console.log(data)
  })

  // Rest all fields
  for (let key in dataInputs) {
    dataInputs[key].value = ''
  }
}

let _api = new API()
_api.getAllPets()

// Add event listeners to the submit and delete buttons
if (setPetBtn) {
  setPetBtn.addEventListener('click', handleFormSubmit)
}

/* eslint-enable no-undef */
//
//
//
//
// NOTES
/* ******* OLD CODE ************ */
// refreshExamples gets new examples from the db and repopulates the list
// let refreshExamples = function () {
//   let api = new API()

//   api
//     .getExamples()
//     .then(results => results.json())
//     .then(function (data) {
//       while (exampleList.firstChild) {
//         exampleList.removeChild(exampleList.firstChild)
//       }

//       for (let example of data) {
//         let aElem = document.createElement('a')
//         aElem.textContent = example.text
//         aElem.setAttribute('href', '/example/' + example.id)

//         let liElem = document.createElement('li')
//         liElem.classList.add('list-group-item')
//         liElem.dataset.id = example.id
//         liElem.appendChild(aElem)

//         let buttonElem = document.createElement('button')
//         buttonElem.classList.add('btn', 'btn-danger', 'float-right', 'delete')
//         buttonElem.textContent = 'ｘ'

//         liElem.appendChild(buttonElem)

//         exampleList.appendChild(liElem)
//       }
//     })
// }

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// let handleDeleteBtnClick = function (event) {
//   if (event.target.matches('button.delete')) {
//     let api = new API()

//     let idToDelete = event.target.parentElement.dataset.id

//     api.deleteExample(idToDelete).then(function () {
//       refreshExamples()
//     })
//   }
// }

// <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-7 p-1">
//     <div class="card p-1 gif-card">
//         <h4 class="card-title text-center p-2 mx-2  bg-primary text-light">petName</h4>
//         <img src="http://s3-ap-south-1.amazonaws.com/ashokasite/wp-content/uploads/2019/01/15100932/puppeios.jpg" class="px-1 m-1" alt="">
//         <div class="card-body text-center">
//             <h2 class="card-title">Loud</h2>
//             <h3 class="card-text">3 years old</h3>
//         </div>
//     </div>
// </div>
// _container.insertAdjacentHTML("beforeend", _question);
