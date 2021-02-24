import Education from "./Education"
import Work from "./WorkExperience"
import Project from "./Project"

const generateWork = () => {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(
      new Work(`Company ${i}`, "Title", new Date("01-1-2018"), new Date(), [
        "test",
        "test",
        "test",
      ])
    )
  }

  return arr
}
const generateEducation = () => {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(
      new Education(`School ${i}`, new Date("01-1-2018"), new Date(), "BA")
    )
  }
  return arr
}

const generateProject = () => {
  const arr = []
  for (let i = 0; i < 3; i++) {
    arr.push(
      new Project(`Project ${i}`, new Date("01-1-2018"), new Date(), [
        "test",
        "test",
        "test",
      ])
    )
  }
  return arr
}

export { generateEducation, generateWork, generateProject }
