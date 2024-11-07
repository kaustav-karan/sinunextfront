import Page from "@/components/idcard/page";
import SEOComponent from "@/components/SEOComponent/SEOComponent";

const Id = () => {
  return (
    <>
      <SEOComponent
        PageDescription="Access your digital ID card for siNUsoid v8. Your personalized pass grants entry to all events, workshops, and activities. Keep it handy for seamless check-ins throughout the tech fest."
        PageKeywords={[
          "siNUsoid v8",
          "digital ID card",
          "event pass",
          "tech fest ID",
          "event access",
        ]}
        PageOGLImage="https://sinusoid.in/socialLogo.jpg"
        PageTitle="Digital ID Card | siNUsoid v8"
      />
      <div className="mt-16">
        <Page />
      </div>
    </>
  );
};

export default Id;
