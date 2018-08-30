const styles = theme => ({
    commentFormContainer: {
        maxWidth: '1000px',
        margin: '20px auto',
        '@media (max-width: 1070px)': {
            width: '600px'
        },
        '@media (max-width: 650px)': {
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
    commentForm: {
        margin: '0 auto'
    },
    title: {
        fontSize: '28px',
        color: '#696969',
        marginBottom: '10px',
        '@media (max-width: 650px)': {
            fontSize: '18px'
        }
    }
});

export default styles;