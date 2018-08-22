const styles = theme => ({
    galeryContainer: {
        margin: '0 auto',
        width: '1000px',
        maxHeight: '200px',
        '@media (max-width: 1070px)': {
            width: '600px'
        },
        '@media (max-width: 650px)': {
            width: '350px'
        }
    }
});

export default styles;