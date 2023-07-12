import Header from "../components/home/header";
import LearnMore from "../components/home/learnMore";
import OurGoal from "../components/home/ourGoal";
import SubHeader from "../components/home/subHeader";
import DefaultLayout from "../components/layout/defaultLayout";

export default function Landing() {
  return (
    <DefaultLayout>
      <>
        <Header />
      </>
      <>
        <SubHeader />
      </>
      <section>
        <OurGoal/>
      </section>
      <section>
        <LearnMore/>
      </section>
    </DefaultLayout>
  );
}
