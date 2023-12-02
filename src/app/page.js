import Brand from '@/components/Brand'
import FeaturedCard from '@/components/FeaturedCard'
import Hero from '@/components/Hero'
import StatListCard from '@/components/StatListCard'
import SubscribeCard from '@/components/SubscribeCard'
import WorkListCard from '@/components/WorkListCard'

export default function Home() {
  return (
    <>
      <Hero />
      <Brand />
      <WorkListCard />
      <StatListCard />
      <FeaturedCard />
      <SubscribeCard />
    </>
  )
}
