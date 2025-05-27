import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function DentalAnxietyPage() {
  const dentalAnxietyData: ProblemsWeTreat = {
    heroImage: "/images/dental-anxiety/hero.webp",
    headingLight: "Dental ",
    headingBold: "Anxiety",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Overcoming",
        headingBold: "Dental Anxiety",
        description: {
          paragraph1:
            "Dental anxiety is a common concern that many individuals experience when it comes to visiting the dentist. This anxiety can range from mild nervousness to intense phobia, influenced by various factors.\n\nCommon causes of dental anxiety include:",
          paragraph2:
            "At KIA Dental, our experienced team of dentists is dedicated to making you feel at ease during your visit. We also offer the option of conscious sedation with nitrous oxide, often referred to as laughing gas, to ensure a relaxed and tension-free treatment experience for you. Your comfort and well-being are our top priorities!",
          bulletPoints: [
            "Fear of pain",
            "past traumatic dental experiences",
            "embarrassment about the condition of one's teeth",
            "feelings of loss of control or privacy.",
          ],
        },
        image: "/images/dental-anxiety/section1.webp",
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
      <ProblemsWeTreatPage data={dentalAnxietyData} />
    </div>
  );
}
