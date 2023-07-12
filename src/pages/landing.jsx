import Header from "../components/home/header";
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
    </DefaultLayout>
  );
}
