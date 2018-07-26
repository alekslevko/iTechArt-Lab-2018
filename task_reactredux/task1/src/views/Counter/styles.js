const styles = theme => ({
    
    button: {
      margin: theme.spacing.unit,
    },

    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
      }
      
});

export default styles; 