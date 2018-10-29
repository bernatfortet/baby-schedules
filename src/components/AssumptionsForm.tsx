import { string } from 'prop-types'
import * as React from 'react'

import { Assumptions } from 'utils/types'
import { convertMinsToHrsMins as hourAndMins } from 'utils/utils'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

type Props = {
  assumptions: Assumptions
}


export default class AssumptionsForm extends React.Component<Props> {

  render() {

    const { monthsOld, minInDay, startOfDay, dailySleep, bedTime, napTime, maxNapTime, awakeTime, maxWakeSession } = this.props.assumptions
    
    return(
      <Column flex1 h={'100%'} p={20} pl={80}>
        <Pair label='Months Old' value={monthsOld} />
        <Pair label='Start of the day' value={7} />
        <Pair label='Daily Sleep Requirement' value={hourAndMins(dailySleep)} />
        <Pair label='Naps' value={'3-4'} />
        <Pair label='Total Nap Time' value={hourAndMins(napTime)} />
        <Pair label='Awake Time' value={hourAndMins(awakeTime)} />
        <Pair label='Bed Time' value={hourAndMins(bedTime)} />
        <Pair label='Max Wake Session' value={hourAndMins(maxWakeSession)} />
        <Pair label='Max Nap Time' value={hourAndMins(maxNapTime)} />
      </Column>
    )
  }

}


const Pair = p => <Row pv={4}>
  <m.Text bold mr={4}>{p.label}:</m.Text>
  <m.Text>{p.value}</m.Text>
</Row>