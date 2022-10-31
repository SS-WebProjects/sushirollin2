import TopBanner from "@components/TopBanner";
import SectionAbout from "@components/home/SectionAbout";
import SectionMenu from "@components/home/SectionMenu";
import SectionLocations from "@components/home/SectionLocations";
import ReviewSection from "@components/franchise/ReviewSection";
import ContactUsBannerMain from "@components/contactus/ContactUsBannerMain";
// import CustomerReview from "@components/CustomerReview";

const Homepage = (props) => {
  const isHome = true;

  return (
    <>
      <TopBanner
        title="Home"
        second="Low Start-up Cost, Big Numbers in Return"
        description="Rollin’ in the Sushi"
        isMobile={props.isMobile}
      />

      <SectionAbout isMobile={props.isMobile} />
      <SectionMenu isMobile={props.isMobile} isHome />
      <SectionLocations isMobile={props.isMobile} />
      <ReviewSection isMobile={props.isMobile} />
      <ContactUsBannerMain isMobile={props.isMobile} />
      {/* <CustomerReview
        isMobile={props.isMobile}
        reviewTitle="Here’s What the Customers Say"
      /> */}
    </>
  );
};

export default Homepage;
