import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function StainedTeethPage() {
  const stainedTeethData: ProblemsWeTreat = {
    heroImage: "/images/stained-teeth/hero.webp",
    headingLight: "Stained",
    headingBold: "Teeth",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Revitalize ",
        headingBold: "Your Smile",
        description: {
          paragraph1:
            "Don’t be embarrassed to show your smile! Bright, white teeth are often seen as a sign of beauty, but what if your teeth have developed a yellowish or brownish tint due to stains? There’s no need to worry; we have effective solutions for you!",
          paragraph2:
            "At KIA Dental, we provide professional teeth cleaning services to eliminate stains, along with the latest Zoom whitening treatment to enhance the brightness of your teeth and give you a dazzling smile.\n\nOur dedicated team is here to help you regain your confidence and achieve the radiant smile you deserve. Let us assist you in transforming your teeth into a stunning asset that you’ll be proud to show off!",
          bulletPoints: [],
        },
        image: "/images/stained-teeth/section1.webp",
      },
    ],
    isLinkCards: false,
    isLinkBlocks: false,
    linkCards: [
      {
        title: "",
        link: "",
      },
    ],
    linkBlocks: [
      {
        title: "",
        subTitle: "",
        link: "",
      },
    ],
  };
  return (
    <div>
      <ProblemsWeTreatPage data={stainedTeethData} />
    </div>
  );
}
