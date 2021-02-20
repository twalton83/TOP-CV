export default class Project {
  constructor(name, startDate, endDate, tasks) {
    this.name = name
    this.startDate = startDate
    this.endDate = endDate
    this.tasks = tasks
  }

  edit(changes) {
    // push changes into array
    // iterate through changes and update this.changedField
  }
}
