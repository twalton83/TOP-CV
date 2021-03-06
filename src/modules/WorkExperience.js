import { v4 as uuidv4 } from "uuid"

export default class WorkExperience {
  constructor(company, title, startDate, endDate, tasks) {
    this.company = company
    this.title = title
    this.startDate = startDate
    this.endDate = endDate
    this.tasks = tasks
    this.id = uuidv4()
  }

  removeTask(id) {
    this.tasks = this.tasks.filter((t) => t.id !== id)
  }

  edit(changes) {
    for (const change in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, change)) {
        this[change] = changes[change]
      }
    }
  }
}
