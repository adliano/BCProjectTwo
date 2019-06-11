console.log('index.js loaded at addPet.html')

// Get references to page elements
/* eslint-disable no-undef */
// let exampleText = document.querySelector('#example-text')
// let exampleDescription = document.querySelector('#example-description')
// let submitBtn = document.querySelector('#submit')
// let exampleList = document.querySelector('#example-list')
/* ************ 🌍 Globals 🌏 *************** */
// TODO: implement this button
// let getPetBtn = document.querySelector('.getPet')
let setPetBtn = document.querySelector('.setPet')
let getAnimalName = document.querySelector('.getAnimalName')
let getAnimalAge = document.querySelector('.getAnimalAge')
let getAnimalType = document.querySelector('.getAnimalType')
let getanimalAttitude = document.querySelector('.getanimalAttitude')
let getPictName = document.querySelector('.getPictName')

// The API object contains methods for each kind of request we'll make
class API {
  // Constructor
  constructor (someDefault = 'defaultVal') {
    this.someDefault = someDefault
  }
  // This will fetch the API to create a new pet
  savePet (example) {
    return fetch('/api/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(example)
    })
  }

  getExamples () {
    // TODO: need to do on routes
    return fetch('api/examples')
  }
  // Thsi will be used to remove a pet from database
  deletePet (id) {
    return fetch('/api/delete/' + id, {
      method: 'DELETE'
    })
  }
}
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
/*
******************* Event Listner ***********************
 */
// Event Listner for setPet
// handleFormSubmit is called whenever we submit a new Pet
// Save the new example to the db and refresh the list
let handleFormSubmit = function (event) {
  event.preventDefault()
  let api = new API()

  // FIXME: Suppose Multer are saiving imgs at public/uploads
  let imagPath = `/uploads/${getPictName.value.split('\\')[2]}`
  // TODO: Get the pet infoS
  let petToAdd = {
    petName: getAnimalName.value.trim(),
    type: getAnimalType.value.trim(),
    attitude: getanimalAttitude.value.trim(),
    isAdopted: false, // FIXME: ?????
    age: getAnimalAge.value.trim(),
    // TODO: Karina its working on it
    imgPath: imagPath
  }

  console.log(petToAdd)

  // if (!(example.text && example.description)) {
  //   alert('You must enter an example text and description!')
  //   return
  // }

  api.savePet(petToAdd).then(function () {
    refreshExamples()
  })

  // exampleText.value = ''
  // exampleDescription.value = ''
}

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

// Add event listeners to the submit and delete buttons
setPetBtn.addEventListener('click', handleFormSubmit)
// exampleList.addEventListener('click', handleDeleteBtnClick)

/* eslint-enable no-undef */
