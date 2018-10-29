import * as React from 'react'

import { Assumptions } from 'utils/types'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

import AssumptionsForm from './AssumptionsForm'
import Schedule from './Schedule'

type Props = {
}

const Homescreen: React.SFC<Props> = (props: Props) => {
  const {} = props

  const assumptions: Assumptions = {
    monthsOld: 4,
    minInDay: 24*60,
    startOfDay: 7*60,
    dailySleep: 15*60 + 30,
    bedTime: 12*60,
    napTime: 60*4 + 30,
    maxNapTime: 60*2 + 30,
    maxWakeSession: 60*2,
    lastTimeForNaps: 17*60,
    awakeTime: null,
    feedDuration: 30,
  }
  assumptions.awakeTime = assumptions.minInDay - assumptions.dailySleep

  return(
    <Row h={'100%'}>
      <AssumptionsForm assumptions={assumptions} />
      <Schedule assumptions={assumptions}/>
    </Row>
  )
}

export default Homescreen