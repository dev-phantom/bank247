import OurTrust from "../components/financialInstitution/ourTrust";
import DefaultLayout from "../components/layout/defaultLayout";
import Header from "../components/layout/header";

export default function FinancialInstitution() {
  return (
    <DefaultLayout>
      <header>
        <Header
          pageName="Financial Institution"
          firstText="Originate more"
          imgUrl="https://res.cloudinary.com/phantom1245/image/upload/v1694218764/bank247/20230909_011609_eqtbvw.jpg"
          firstTextSpan=" "
          secondText="loans faster and easier."
          secondTextSpan=" "
          firstBtnText="get onboarded"
          secondBtnText="connect with us"
        />
      </header>
      <main>
        <section>
          <OurTrust />
        </section>
      </main>
    </DefaultLayout>
  );
}
