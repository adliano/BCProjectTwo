/* eslint-disable no-undef */
/* ************ 🌍 Globals 🌏 *************** */
let availablePetsContainer = document.querySelector('#petsContainer')

/**
 *
 * Api class hold all methods used to fetch data to server
 * The API object contains methods for each kind of request we'll make
 *
 */
class API {
  /**
   * @constructor
   */
  constructor (someDefault = 'defaultVal') {
    this.someDefault = someDefault
  }
  /**
   * @method savePet (data)
   * @param {json} data
   * This method will fetch the API to create a new pet on database
   */
  savePet (data) {
    return fetch('/api/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
  }
  /**
   * @method getAllPets ()
   * This method will fetch all pets available on database and display on availablePets.html
   */
  getAllPets () {
    // GET method is Default on fetch
    return fetch('api/findAll')
      .then(result => result.json())
      .then(data => {
        for (let pet of data) {
          // Create a card with Pet
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
      <h4 class="card-title text-center p-2 mx-2 bg-primary text-light">${petJSON.petName}</h4>
      <img src="${petJSON.imgPath}" class="px-1 mx-auto mt-2" alt="" height="150" width="150">
        <div class="card-body text-center">
          <h2 class="card-title">${petJSON.attitude}</h2>
          <h3 class="card-text">Type: ${petJSON.type}</h3>
          <h3 class="card-text">${petJSON.age} years old</h3>
        </div>
      </div>
  </div>`

  // console.log(petJSON.imgPath)

  // Check if availablePetsContainer its available and Insert beforeend
  if (availablePetsContainer) {
    availablePetsContainer.insertAdjacentHTML('beforeend', _colCard)
  }
}

let _api = new API()
_api.getAllPets()

/* eslint-enable no-undef */
