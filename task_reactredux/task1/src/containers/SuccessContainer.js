import { connect } from 'react-redux';
import Success from '../views/Success';

const mapStateToProps = (state) => {
    return {
        mail: state.mail.mail,
        password: state.password.password
    }
};

export default connect(mapStateToProps)(Success);