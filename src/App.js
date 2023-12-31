import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";
import AlertSection from "../src/Components/AlertSection/AlertSection";
import SectionOne from "../src/Components/SectionOne/SectionOne";
import SectionTwo from "../src/Components/SectionTwo/SectionTwo";
import SectionThree from "../src/Components/SectionThree/SectionThree";
import SectionFour from "../src/Components/SectionFour/SectionFour";
import SectionFive from "../src/Components/SectionFive/SectionFive"; 
import SectionSix from "../src/Components/SectionSix/SectionSix";  

function App() {
  return (
    <div>
      <Header />
      <AlertSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default App;
