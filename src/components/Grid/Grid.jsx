import styled from 'styled-components'
import PropTypes from 'prop-types'
import Ray from '../Ray'

const Grid = styled(Ray)(({
  inline,

  template,
  templateAreas,
  gap,
  templateColumns,
  templateRows,
  autoColumns,
  autoRows
}) => ({
  display: inline ? 'inline-grid' : 'grid',

  gridTemplate: template,
  gridTemplateAreas: templateAreas,
  gridGap: gap,
  gridTemplateColumns: templateColumns,
  gridTemplateRows: templateRows,
  gridAutoColumns: autoColumns,
  gridAutoRows: autoRows
}))

Grid.propTypes = {
  /** renders as inline-grid if true */
  inline: PropTypes.bool,
  template: PropTypes.string,
  templateAreas: PropTypes.string,
  gap: PropTypes.string,
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  autoColumns: PropTypes.string,
  autoRows: PropTypes.string
}

const Item = styled(Ray)(({
  area,
  column,
  row,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd
}) => ({
  gridArea: area,
  gridColumn: column,
  gridRow: row,
  gridColumnStart: columnStart,
  gridColumnEnd: columnEnd,
  gridRowStart: rowStart,
  gridRowEnd: rowEnd
}))

Grid.Item = Item

/** @component */
export default Grid
