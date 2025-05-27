import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function DentalProblemsInKidsPage() {
  const dentalProblemsInKidsData: ProblemsWeTreat = {
    heroImage: "/images/dental-problems-in-kids/hero.webp",
    headingLight: "Dental problems",
    headingBold: "in Kids",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Dental Issues",
        headingBold: "in Children",
        description: {
          paragraph1:
            "Children often face dental challenges due to their eating habits and oral hygiene practices. Some common dental problems in kids include:",
          paragraph2:
            "Many parents tend to overlook issues like tooth decay, assuming that milk teeth will eventually fall out and do not require treatment. However, it is crucial to address dental problems in children promptly, as the health and alignment of their permanent teeth depend on the condition of their milk teeth.\n\nAt KIA Dental, we create a kid-friendly environment that ensures a positive experience for your little ones. Bring your children to us, and we promise to provide them with the best dental care possible!",
          bulletPoints: [
            "Dental decay",
            "broken teeth from falls",
            "crowded teeth",
            "jaw size deformities",
            "misalignment of teeth",
            "misalignment caused by habits such as thumb sucking.",
          ],
        },
        image: "/images/dental-problems-in-kids/section1.webp",
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
      <ProblemsWeTreatPage data={dentalProblemsInKidsData} />
    </div>
  );
}
