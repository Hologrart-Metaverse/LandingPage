import Hero from "./components/Hero"
import Header from "./components/Header"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./styles/styles.css"
// import Section from "./components/Section"
// import Testimonial from "./components/Testimonial"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
// import AboutUs from "./components/AboutUs"

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
      
    ].join(','),
  },
});

function App() {
  return (
    <div className="mybody">
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <Header />
        <Hero />
        {/* <Section />
        <AboutUs />
        <Testimonial /> */}
        <ContactUs />
        <Footer />
      </ThemeProvider>
    </div>

  );
}

export default App;
