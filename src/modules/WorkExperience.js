export default class WorkExperience {
  constructor(company, startDate, endDate, tasks){
    this.company = company;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tasks = tasks
  }


  removeTask(id){
    this.tasks = this.tasks.filter(t => t.id !== id)
  }
  
}