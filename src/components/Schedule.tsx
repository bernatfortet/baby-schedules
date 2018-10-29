import * as React from 'react'

import { MIN_IN_DAY, PIXELS_PER_MINUTE } from 'utils/constants'
import { Assumptions, BlockType } from 'utils/types'

import styled from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

import Block from 'components/Block'

type Props = {
  assumptions: Assumptions,
}

export default class Schedule extends React.Component<Props> {

  render() {

    const { bedTime } = this.props.assumptions

    return(
      <Row flex1 h={'100%'} prel pv={40}>
        {this.renderTimeline()}
        <Box pl={60}>
          {this.getBlocksAlgo()}
          <Block type={BlockType.sleep} duration={bedTime}/>
        </Box>
        <Box pl={20} prel>
          {this.getFeedingsBlocks()}
        </Box>
      </Row>
    )
  }


  getFeedingsBlocks() {
    const { bedTime, feedDuration } = this.props.assumptions
    const lastFeeding = MIN_IN_DAY - bedTime - feedDuration
    const blocks = []
    let previousFeeding = 0
    
    
    const addBlock = ( start ) => {
      blocks.push( <Block type={BlockType.feed} start={previousFeeding + start} duration={30} key={Math.random()} /> )
      previousFeeding += 60*4
    }

    addBlock(0)
    addBlock(0)
    addBlock(0)

    return <>
      <Block type={BlockType.BedTimeRoutine} start={lastFeeding-30} duration={30} />
      <Block type={BlockType.feed} start={lastFeeding} duration={30} />
      {blocks}
    </>
  }

  getBlocksAlgo() {
    const { startOfDay, lastTimeForNaps, bedTime, maxWakeSession } = this.props.assumptions

    let currentAwakeTime = 0

    let remainingTime = MIN_IN_DAY - bedTime
    let usedTime = 0
    const firstBlock = BlockType.awake
    const blocks = []

    const checkAndAddLastBlock = () => {
      if (startOfDay + usedTime >= lastTimeForNaps) addBlock(BlockType.awake, remainingTime)
    }
    const addLastBlock = () => addBlock(BlockType.awake, remainingTime)
    const addBlock = ( type, duration ) => {
      if (remainingTime <= 0) return null
      const key = Math.random()

      if (currentAwakeTime >= maxWakeSession ) {
        const napDuration = 30
        currentAwakeTime = 0
        usedTime += napDuration
        addBlock(BlockType.nap, napDuration)
      }
        
      blocks.push( <Block type={type} duration={duration} key={key}/> )
      if ( type == BlockType.awake ) currentAwakeTime += duration
      usedTime += duration
      remainingTime -= duration

      if (startOfDay + usedTime >= lastTimeForNaps) addLastBlock()
    }

    addBlock(BlockType.awake, 120)

    if (remainingTime > 0) addLastBlock()

    return <>
      {blocks}
    </>
  }

  renderTimeline() {
    const { startOfDay } = this.props.assumptions

    const hours = [...Array(24).fill(undefined)].map( (h, i) => {
      i += startOfDay/60
      if ( i > 23 ) i -= 24
      return <HourBlock key={i}>
        <Line />
        <m.Text w={42} bold right size={12} mt={4} color={c.black30}>{i}:00</m.Text>
      </HourBlock>
    })

    console.log(`hours`, hours)

    return <Timeline w={'100%'}>
      {hours}
    </Timeline>
  }

}

const Timeline = styled(Box)` position:absolute; user-select:none; pointer-events:none; `
  const HourBlock = styled(Box)` height:${PIXELS_PER_MINUTE*60}px; `
    const Line = styled(Box)` height:1px; background:${c.black10}; width:100%; `