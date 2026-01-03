import { Hero } from '../components/home/Hero';
import { Countdown } from '../components/home/Countdown';
import { ArrangedJourneyTimeline } from '../components/home/ArrangedJourneyTimeline';
import { GuestGuidance } from '../components/home/GuestGuidance';
import { PageTransition } from '../components/ui';

export const Home = () => {
  return (
    <PageTransition>
      <Hero />
      <Countdown />
      <ArrangedJourneyTimeline />
      <GuestGuidance />
    </PageTransition>
  );
};

