import { Banner } from "../components/Banner";
import { Aboutpage } from "../components/Aboutpage";
import { Footer } from "../components/Footer";

function About() {
    return (
        <>
            <div>
                <Banner />
                <div className="relative bg-[#3a1341] min-h-screen overflow-hidden w-full">
                <Aboutpage />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default About;
