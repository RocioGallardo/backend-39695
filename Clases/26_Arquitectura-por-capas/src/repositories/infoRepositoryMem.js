class InfoRepositoryMem {
  constructor() { }
  create(data) { }
  readOne(id) { }
  readMany(criteria) {
    return [{ info: 'info' }]
  }
  updateOne(id) { }
  updateMany(criteria) { }
  deleteOne(id) { }
  deleteMany(criteria) { }
}

export const infoRepositoryMem = new InfoRepositoryMem()