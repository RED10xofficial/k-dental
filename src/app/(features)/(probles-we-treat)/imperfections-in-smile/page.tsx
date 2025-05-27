import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function ImperfectionsInSmilePage() {
  const imperfectionsInSmileData: ProblemsWeTreat = {
    heroImage: "/images/imperfections-in-smile/hero.webp",
    headingLight: "Imperfections",
    headingBold: "in smile",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Achieve Your Perfect Smile at",
        headingBold: "KIA Dental",
        description: {
          paragraph1:
            "A beautiful smile is something many people aspire to achieve. Common concerns that can hinder one's smile include issues such as missing teeth, crooked teeth, gaps between teeth, broken or chipped teeth, discoloration, and decay.",
          paragraph2:
            "At KIA Dental, we offer comprehensive solutions to address all these challenges that may impact your self-esteem. Our experienced team of dental professionals will evaluate your smile and recommend tailored treatments to restore your confidence and help you smile with pride.",
          bulletPoints: [
            "Beautiful smile",
            "Missing teeth",
            "Crooked teeth",
            "Gaps between teeth",
            "Broken or chipped teeth",
            "Discoloration",
            "Decay",
          ],
        },
        image: "/images/imperfections-in-smile/section1.webp",
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
      <ProblemsWeTreatPage data={imperfectionsInSmileData} />
    </div>
  );
}
