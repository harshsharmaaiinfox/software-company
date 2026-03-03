import AboutSection from './AboutSection';
import ChooseHomeTwo from '../homes/home-2/ChooseHomeTwo';
import PhilosophySection from './PhilosophySection';
import AboutCta from './AboutCta';
import CounterHomeOne from '../homes/home-1/CounterHomeOne';
import TeamHomeOne from '../homes/home-1/TeamHomeOne';
import TestimonialHomeTwo from '../homes/home-2/TestimonialHomeTwo';
import Wrapper from '../../layouts/Wrapper';
import HeaderOne from '../../layouts/headers/HeaderOne';
import FooterOne from '../../layouts/footers/FooterOne';

export default function About() {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <AboutSection />
        <ChooseHomeTwo />
        <PhilosophySection />
        <TestimonialHomeTwo />
        <AboutCta />
        {/* <CounterHomeOne /> */}
        {/* <TeamHomeOne /> */}

      </main>
      <FooterOne />
    </Wrapper>
  );
}
