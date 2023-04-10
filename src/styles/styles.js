import { makeStyles } from '@mui/styles';

const styles = (theme) => {
  return {

    toolBar: {
      height: '10vh',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
      backgroundColor: '#250D31',
    },
    logo: {

      cursor: 'pointer',

    },
    link: {
      color: "white"
    },
    menuIcon: {

      // background: ' #250d31',
      // color: '#fff',
    },
    formContainer: {
      flexGrow: 1,
      padding: '10px',
      maxWidth: '700px',
      margin: '30px auto',
      [theme.breakpoints.between('xs', 'sm')]: {
        width: '100%',
      },
    },
    form: {
      marginTop: '30px',
      
    },
    formHeading: {
      textAlign: 'center',
      color: 'antiquewhite',
    },
    heroBox: {
      width: '100%',
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gridContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1300px',
      padding: '50px',
    },
    aboutUsContainer: {
      width: '100%',
      display: 'flex',
      minHeight: '400px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '30px 0px 50px 0px',
    },
    aboutUsSubtitle: {
      opacity: '0.7',
      paddingBottom: '30px',
      fontSize: '18px',
    },
    title: {
      paddingBottom: '15px',
      color: 'white',
    },
    subtitle: {
      opacity: '0.4',
      paddingBottom: '30px',
      color: 'white',
    },
    largeImage: {
      width: '100%',
    },
    sectionGridContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: '500px',
    },
    sectionGridItem: {
      backgroundColor: '#f2f0f1',
      textAlign: 'center',
      padding: '30px',
      width: '200px',
      borderRadius: '10px',
      margin: '10px !important',
    },
    inputField: {
      marginBottom: '20px !important',
     
    },
    textArea: {
      width: '100%',
      marginBottom: '20px',
      fontSize: '16px',
      padding: '10px',
      color: 'antiquewhite',
    },
  
    footerContainer: {
      display: 'flex',
      alignItems: 'center',
      miHeight: '10vh',
      padding: '20px',
      justifyContent: 'center',
      backgroundColor: '#15021f',
      flexDirection: 'column',
      color:'antiquewhite',
    },
    footerText: {
      paddingBottom: '10px',
      color:'antiquewhite',
    },
    footerDate: {
      opacity: '0.4',

    },
    fillcurrent:{
      color: 'white',
      
    },
    testimonialCard: {
      backgroundColor: '#fff',
      padding: '10px',
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
    },
    testimonialStatement: {
      paddingBottom: '25px',
    },
    avatar: {
      marginRight: '10px',
    },
    testimonialPosition: {
      fontSize: '14px',
      opacity: '0.6',
    },
  };
};

const useStyles = makeStyles(styles);
export default useStyles;