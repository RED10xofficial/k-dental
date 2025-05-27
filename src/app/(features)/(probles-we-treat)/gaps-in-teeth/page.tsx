import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function GapsInTeethPage() {
  const gapsInTeethData: ProblemsWeTreat = {
    heroImage: "/images/gaps-in-teeth/hero.webp",
    headingLight: "Gaps in",
    headingBold: "teeth",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Addressing Gaps in",
        headingBold: "your smile",
        description: {
          paragraph1:
            "Many individuals express concerns about gaps in their teeth, particularly those located in the front. These spaces can arise from various factors that may impact one's self-esteem and willingness to smile openly.\n\nCommon causes of gaps in teeth include:",
          paragraph2:
            "At KIA Dental, we understand how important a confident smile is to you. Our experienced team of dental professionals is dedicated to evaluating your unique dental situation and offering tailored solutions to restore your smile and boost your confidence.",
          bulletPoints: [
            "Small teeth",
            "crooked teeth",
            "missing teeth",
            "certain habits",
            "gum disease.",
          ],
        },
        image: "/images/gaps-in-teeth/section1.webp",
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
      <ProblemsWeTreatPage data={gapsInTeethData} />
    </div>
  );
}
