const styles = theme => ({
    movieInfoContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    card: {
        margin: '20px',
        paddingRight: '10px',
		width: '1000px',
        '@media (max-width: 1070px)': {
            width: '600px'
        },
        '@media (max-width: 650px)': {
            width: '300px',
            paddingRight: '0'
        }
    },
    picture: {
        maxWidth: '300px',
        float: 'left',
        marginRight: '20px',
        '@media (max-width: 650px)': {
            width: '100%'
        }
    },
    name: {
        margin: '10px auto',
        fontSize: '28px',
        color: '#696969'
    },
    addInfoContainer: {
        marginBottom: '10px'
    },
    addInfo: {
        fontSize: '18px',
        color: '#696969',
        textAlign: 'left',
        '@media (max-width: 650px)': {
            fontSize: '14px',
            padding: '0 10px'
        }
    },
    description: {
        fontSize: '14px',
        color: '#696969',
        textAlign: 'left',
        '@media (max-width: 650px)': {
            padding: '0 10px'
        }
    },
    photos: {
        display: 'flex',
        flexWrap: 'wrap',
        '@media (max-width: 1070px)': {
            width: '600px'
        },
        '@media (max-width: 650px)': {
            width: '300px',
        }        
    }
});

export default styles; 