export default class Student {
  constructor() {
    this.name = ''
    this.gender = true
    this.point = 0
    this.age = 0
  }
  setName(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
  setGender(gender) {
    this.gender = gender
  }
  getGender() {
    return this.gender
  }
  setPoint(point) {
    this.point = point
  }
  getPoint() {
    return this.point
  }
  setAge(age) {
    this.age = age
  }
  getAge() {
    return this.age
  }
}
