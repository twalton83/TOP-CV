import { v4 as uuidv4 } from "uuid"

export default class Project {
  constructor(name, startDate, endDate, tasks) {
    this.name = name
    this.startDate = startDate
    this.endDate = endDate
    this.tasks = tasks
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
