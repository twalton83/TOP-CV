export default class Project {
  constructor(name, startDate, endDate, tasks) {
    this.name = name
    this.startDate = startDate
    this.endDate = endDate
    this.tasks = tasks
  }

  edit(changes) {
    for (const change in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, change)) {
        this[change] = changes[change]
      }
    }
  }
}
