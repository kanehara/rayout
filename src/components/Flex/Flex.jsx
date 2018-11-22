import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div(({
  inline,

  // Parent properties
  flow,
  justifyContent,
  alignItems,
  alignContent,

  // Children properties
  order,
  flex,
  alignSelf
}) => ({
  display: inline ? 'inline-flex' : 'flex',

  flexFlow: flow,
  justifyContent,
  alignItems,
  alignContent,

  order,
  flex,
  alignSelf
}))

Flex.propTypes = {
  /** renders as inline-flex if true */
  inline: PropTypes.bool,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  flexFlow: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignContent: PropTypes.string,
  order: PropTypes.string,
  flexGrow: PropTypes.string,
  flexShrink: PropTypes.string,
  flexBasis: PropTypes.string,
  flex: PropTypes.string,
  alignSelf: PropTypes.string
}

/** @component */
export default Flex
