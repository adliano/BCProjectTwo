
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pets_tb').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets_tb').insert([
        { petName: 'abc', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
        { petName: 'ddd', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
        { petName: 'ccc', type: 'abd', attitude: 'abd', age: 11, imgPath: 'dkdkdkd' },
        { petName: 'ggg', type: 'abd', attitude: 'abd', isAdopted: true, age: 11, imgPath: 'dkdkdkd' },
        { petName: 'fff', type: 'abd', attitude: 'abd', age: 11, imgPath: 'dkdkdkd' }
      ])
    })
}
