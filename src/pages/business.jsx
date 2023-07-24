import DefaultLayout from "../components/layout/defaultLayout";
import Header from "../components/layout/header";

export default function Business() {
  return (
    <DefaultLayout>
      <header>
        <Header
          pageName="Business"
          firstText="Accelerate"
          imgUrl="https://res.cloudinary.com/phantom1245/image/upload/v1690198581/bank247/LoanBroker-Hero_xgcmv4.jpg"
          firstTextSpan="growth"
          secondText="for you and your"
          secondTextSpan="Businesses"
          firstBtnText="let's connect"
          secondBtnTextClass="hidden"
        />
      </header>
    </DefaultLayout>
  );
}
