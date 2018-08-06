import { connect } from 'react-redux';
import Success from '../views/Success';

const mapStateToProps = (state) => {
    return {
        mail: state.fieldChange.mail,
        password: state.fieldChange.password
    }
};

export default connect(mapStateToProps)(Success);