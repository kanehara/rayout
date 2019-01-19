import styled from 'styled-components'
import PropTypes from 'prop-types'
import Ray from '../Ray'

const Flex = styled(Ray)(({
  inline,
  ...rest
}) => ({
  display: inline ? 'inline-flex' : 'flex',
  ...rest
}))

Flex.propTypes = {
  /** renders as inline-flex if true */
  inline: PropTypes.bool
}

/** @component */
export default Flex
