import { Banner } from "../components/Banner/Banner"
import { Histories } from "../components/Histories/Histories"
import { Information } from "../components/Information/Information"
import { Notices } from "../components/Notices/Notices"
import { Votations } from "../components/Votations/Votations"
import { Publications } from "../components/publications/Publications"

export const Home = () => {
  return (
    <>
        <Banner/>
        <Information/>
        <Publications/>
        <Notices/>
        <Histories/>
        <Votations/>
    </>
  )
}
