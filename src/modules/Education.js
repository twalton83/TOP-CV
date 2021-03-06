import { v4 as uuidv4 } from "uuid"

export default class Education {
  constructor(name, startDate, endDate, degree) {
    this.name = name
    this.startDate = startDate
    this.endDate = endDate
    this.degree = degree
    this.id = uuidv4()
  }

  edit(changes) {
    for (const change in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, change)) {
        this[change] = changes[change]
      }
    }
  }
}
