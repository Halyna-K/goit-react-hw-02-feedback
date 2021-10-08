import PropTypes from 'prop-types'
import s from './Title.module.css'

export const Title = ({ value }) => {
  return (
      <h2 className={s.title}>
        {value}
      </h2>
  )
}


Title.defaultProps = {
  value: 'title',
}

Title.propTypes = {
  value: PropTypes.string,
}
