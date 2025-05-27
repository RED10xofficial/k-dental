import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function MissingTeethPage() {
  const missingTeethData: ProblemsWeTreat = {
    heroImage: "/images/missing-teeth/hero.webp",
    headingLight: "Missing",
    headingBold: "Teeth",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "The Impact of Missing Teeth on",
        headingBold: "your life",
        description: {
          paragraph1:
            "Experiencing tooth loss is a common issue that many individuals face. Missing teeth can lead to various challenges that extend beyond just aesthetics. At KIA Dental, we understand the profound effects that losing teeth can have on your overall well-being.",
          paragraph2:
            "Addressing tooth loss is essential for maintaining both your physical health and emotional confidence. At KIA Dental, we offer a range of solutions to help restore your smile and improve your quality of life.",
          bulletPoints: [
            "Self-esteem issues",
            "difficulties with speech",
            "challenges in chewing food",
            "problems with digestion",
            "misalignment of the bite",
            "increased risk of losing remaining teeth",
            "and a weakened jaw structure.",
          ],
        },
        image: "/images/missing-teeth/section1.webp",
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
      <ProblemsWeTreatPage data={missingTeethData} />
    </div>
  );
}
