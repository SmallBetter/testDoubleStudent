/* eslint-disable prefer-arrow-callback */

import { describe, it, beforeEach, afterEach } from 'mocha'
import { expect } from 'chai'
import sinon from 'sinon'
import StudentInfo from '../../src/Controllers/StudentInfo'
import Student from '../../src/Models/Student'

describe('StudentUnfo', function () {
  let sandbox

  beforeEach(function () {
    sandbox = sinon.sandbox.create()
    this.sinon = sandbox
  })

  afterEach(function () {
    sandbox.restore()
  })

  describe('getFullName()', function () {
    it('should name Smallbetter title Mr.', function () {
      this.sinon.stub(Student.prototype, 'getName').returns('Smallbetter')
      this.sinon.stub(Student.prototype, 'getGender').returns(true)

      return expect(StudentInfo.getFullName(new Student()))
          .to.be.equal('Mr. Smallbetter')
    })
    it('should name Nid title Ms.', function () {
      this.sinon.stub(Student.prototype, 'getName').returns('Nid')
      this.sinon.stub(Student.prototype, 'getGender').returns(false)

      return expect(StudentInfo.getFullName(new Student()))
        .to.be.equal('Ms. Nid')
    })
  })
  describe('getGrade()', function () {
    it('should Point 49 to be Grade F', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(49)

      return expect(StudentInfo.getGrade(new Student()))
        .to.be.equal('F')
    })
    it('should Point 51 to be Grade D', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(51)

      return expect(StudentInfo.getGrade(new Student()))
        .to.be.equal('D')
    })
    it('should Point 60 to be Grade C', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(60)

      return expect(StudentInfo.getGrade(new Student()))
        .to.be.equal('C')
    })
    it('should Point 74 to be Grade B', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(74)

      return expect(StudentInfo.getGrade(new Student()))
        .to.be.equal('B')
    })
    it('should Point 100 to be Grade A', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(100)

      return expect(StudentInfo.getGrade(new Student()))
        .to.be.equal('A')
    })
    it('should Point over 101 to be throw Error', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(101)

      return expect(function () {
        StudentInfo.getGrade(new Student())
      })
        .to.be.throw(/Invalid point/)
    })
    it('should Point over -1 to be throw Error', function () {
      this.sinon.stub(Student.prototype, 'getPoint').returns(-1)

      return expect(function () {
        StudentInfo.getGrade(new Student())
      })
        .to.be.throw(/Invalid point/)
    })
  })
  describe('getBirthYear()', function () {
    it('should Age 26 to be 1991', function () {
      this.sinon.stub(Student.prototype, 'getAge').returns(26)

      return expect(StudentInfo.getBirthYear(new Student()))
        .to.be.equal(1991)
    })
    it('should Age -1 should throw Error over year', function () {
      this.sinon.stub(Student.prototype, 'getAge').returns(-1)

      return expect(function () {
        StudentInfo.getBirthYear(new Student())
      })
        .to.be.throw(/year should/)
    })
    it('should Age 3000 should throw Error over year', function () {
      this.sinon.stub(Student.prototype, 'getAge').returns(3000)

      return expect(function () {
        StudentInfo.getBirthYear(new Student())
      })
        .to.be.throw(/year should/)
    })
  })
})
