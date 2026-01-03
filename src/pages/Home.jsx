import { Hero } from '../components/home/Hero';
import { Countdown } from '../components/home/Countdown';
import { Venue } from '../components/home/Venue';
import { ExploreJabalpur } from '../components/home/ExploreJabalpur';
import { PageTransition, FlowerShower } from '../components/ui';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Countdown />
      <Venue />
      <ExploreJabalpur />
      <FlowerShower />
    </PageTransition>
  );
};
