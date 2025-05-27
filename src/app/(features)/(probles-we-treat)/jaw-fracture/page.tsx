import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function JawFracturePage() {
  const jawFractureData: ProblemsWeTreat = {
    heroImage: "/images/jaw-fracture/hero.webp",
    headingLight: "Jaw ",
    headingBold: "Fracture",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Addressing ",
        headingBold: " Jaw Fractures",
        description: {
          paragraph1:
            "Jaw fractures can vary in severity, ranging from minor cracks to complete breaks in the bone. These injuries can occur due to a variety of circumstances.\n\nCommon causes of jaw fractures include:",
          paragraph2:
            "At KIA Dental, we are equipped to provide comprehensive care for jaw fractures. Our experienced team will assess the injury and recommend the most effective treatment options to ensure proper healing and restore function. Your health and well-being are our top priorities!",
          bulletPoints: [
            "Contact sports",
            "road traffic accidents",
            "assaults",
            "blows to the face",
            "diseases that weaken bones",
            "such as osteoporosis.",
          ],
        },
        image: "/images/jaw-fracture/section1.webp",
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
      <ProblemsWeTreatPage data={jawFractureData} />
    </div>
  );
}
