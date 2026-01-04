import { Hero } from '../components/home/Hero';
import { Countdown } from '../components/home/Countdown';
import { Venue } from '../components/home/Venue';
import { SoulOfJabalpur } from '../components/home/SoulOfJabalpur';
import { PageTransition, FlowerShower } from '../components/ui';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Countdown />
      <Venue />
      <SoulOfJabalpur />
      <FlowerShower />
    </PageTransition>
  );
};
