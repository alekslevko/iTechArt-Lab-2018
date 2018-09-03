const styles = theme => ({
    commentContentContainer: {
        maxWidth: '980px',
        margin: '10px auto',
        padding: '10px',
        textAlign: 'left',
        '@media (max-width: 1070px)': {
            width: '580px'
        },
        '@media (max-width: 650px)': {
            width: '280px'            
        }
    },
    userName: {
        color: '#3f51b5'
    },
    message: {
        color: '#696969',
        fontSize: '18px'
    },
    date: {
        color: '#696969'
    },
    avatar: {
        float: 'left',
        padding: '5px',
        marginRight: '10px',
        backgroundColor: '#3f51b5'
    },
    icon: {
        fontSize: '35px'
    }
});

export default styles;