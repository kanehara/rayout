import styled from 'styled-components'

const Flex = styled.div(({
  flexDirection,
  flexWrap,
  flexFlow,
  justifyContent,
  alignItems,
  alignContent,

  order,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,
  alignSelf
}) => ({
  display: 'flex',

  flexDirection,
  flexWrap,
  flexFlow,
  justifyContent,
  alignItems,
  alignContent,

  order,
  flexGrow,
  flexShrink,
  flexBasis,
  flex,
  alignSelf
}))

/** @component */
export default Flex
