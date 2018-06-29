import React from 'react'
import TestSub from './TestSub'
export default class TestCom extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        This is test
        <TestSub />
      </div>
    )
  }
}
