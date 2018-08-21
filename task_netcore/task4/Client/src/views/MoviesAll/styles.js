const styles = theme => ({
    card: {
		margin: 20,
		width: '500px',
        height: '300px',
        position: 'relative',
        '@media (max-width: 550px)': {
            width: '230px',
            height: '400px'
        }
    },
    picture: {
        width: '40%',
        height: '100%',
        float: 'left',
        marginRight: '20px',
        '@media (max-width: 550px)': {
            width: '100%',
            height: '70%'
        }
    },
    name: {
        margin: '10px auto',
        fontSize: '24px',
        color: '#696969',
        '@media (max-width: 550px)': {
            fontSize: '18px'
        }
    },
    button: {
        margin: 'auto',
        position: 'absolute',
        bottom: '20px',
        right: '100px',
        '@media (max-width: 550px)': {
            bottom: '10px',
            right: '10px'
        }
    },
    addInfo: {
        fontSize: '18px',
        color: '#696969',
        textAlign: 'left',
        '@media (max-width: 550px)': {
            fontSize: '14px',
            marginLeft: '10px'
        }
    },
    link: {
        textDecoration: 'none',
        color: '#fff'
    },
});

export default styles; 