import styled from 'styled-components'
import PropTypes from 'prop-types'

const Ray = styled.div(({
  position,
  top,
  right,
  bottom,
  left
}) => ({
  position,
  top,
  right,
  bottom,
  left
}))
Ray.propTypes = {
  position: PropTypes.string,
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

/** @component */
export default Ray
