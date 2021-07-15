export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  more20stu(state) {
    return state.students.filter(s => {
      s.age > 20
    })
  }
}
