const styles = theme => ({
    movieSearchFormContainer: {
        maxWidth: '1000px',
        margin: '20px auto',
        '@media (max-width: 1100px)': {
            width: '600px'
        },
        '@media (max-width: 620px)': {
            width: '300px'            
        }
    },
    button: {
        width: '35px',
        height: '25px',
        marginLeft: '5px'
    },
    sendIcon: {
        fontSize: '18px'
    },
    movieSearchForm: {
        margin: '0 auto'
    },
    title: {
        fontSize: '28px',
        color: '#696969',
        marginBottom: '10px',
        '@media (max-width: 620px)': {
            fontSize: '18px'
        }
    }
});

export default styles;