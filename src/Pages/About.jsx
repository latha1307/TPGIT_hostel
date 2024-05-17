import { Banner } from "../components/Banner";
import { Aboutpage } from "../components/Aboutpage";
import { Footer } from "../components/Footer";

function About() {
    return (
        <>
            <div>
                <Banner />
                <div className="relative bg-gradient-to-t from-fuchsia-600 to-purple-800 min-h-screen overflow-hidden w-full">
                <Aboutpage />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default About;
