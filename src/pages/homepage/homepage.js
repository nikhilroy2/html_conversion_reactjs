import SliderBar from "./partial/Sliderbar";
import MakesBuing from "./partial/MakesBuying";
import GreatTimeAll from "./partial/GreatTimeAll";
import FaqSection from "./partial/FaqSection";

export default function HomepageView(){
    return (
        <div id="homepage">
            <SliderBar></SliderBar>
            <img src={require('./img/slider-bottom.png').default} width="100%" alt=""></img>
            <MakesBuing></MakesBuing>
            <GreatTimeAll></GreatTimeAll>
            <FaqSection></FaqSection>
        </div>
    )
}