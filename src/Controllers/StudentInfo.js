export default class StudentInfo {

  static getFullName(student) {
    const title = student.getGender() ? 'Mr.' : 'Ms.'
    return `${title} ${student.getName()}`
  }
  static getGrade(student) {
    const point = student.getPoint()
    const gradeCondition = [
        { grade: 'F', min: 0, max: 49 },
        { grade: 'D', min: 50, max: 59 },
        { grade: 'C', min: 60, max: 69 },
        { grade: 'B', min: 70, max: 79 },
        { grade: 'A', min: 80, max: 100 },
    ]
    for (const { grade, min, max } of gradeCondition) {
      if (point >= min && point <= max) {
        return grade
      }
    }
    throw new Error('Invalid point - point should be number 0 to 100')
  }
  static getBirthYear(studen) {
    const age = studen.getAge()
    const fullYear = new Date().getFullYear()
    if (age < 0 || age > fullYear) {
      throw new Error(`over year - year should ${fullYear}`)
    }
    return (fullYear - age)
  }
}
