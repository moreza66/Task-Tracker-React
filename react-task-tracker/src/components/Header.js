const PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

header.defaultProps = {
    title: 'task Tracker',
}

header.PropTypes = {
    title:PropTypes.string.isRequired,
}
export default Header;
