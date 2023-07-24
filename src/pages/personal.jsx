import DefaultLayout from "../components/layout/defaultLayout";
import AboutBank from "../components/personal/aboutBank247";
import Header from "../components/layout/header";
import OurPassion from "../components/personal/ourPassion";
import OurTrust from "../components/personal/ourTrust";

export default function Personal() {
  return (
    <DefaultLayout>
      <header>
        <Header />
      </header>
      <main>
      <section>
        <OurTrust />
      </section>

      <section>
        <OurPassion />
      </section>
      <section>
        <AboutBank />
      </section>
        
      </main>
    </DefaultLayout>
  );
}
