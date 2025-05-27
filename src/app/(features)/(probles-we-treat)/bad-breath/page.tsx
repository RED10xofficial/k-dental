import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function BadBreathPage() {
  const badBreathData: ProblemsWeTreat = {
    heroImage: "/images/bad-breath/hero.webp",
    headingLight: "Bad Breath/ ",
    headingBold: "Halitosis",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Combatting",
        headingBold: "Bad Breath",
        description: {
          paragraph1:
            "Halitosis, commonly known as bad breath, is a condition that many individuals may be unaware they have. Discovering that you have bad breath can be quite embarrassing, yet addressing it is essential for fostering social connections, as people naturally prefer to be around those without unpleasant odors.\n\nSeveral factors can contribute to bad breath, including:",
          paragraph2:
            "To effectively combat halitosis, it is important to maintain proper oral hygiene and schedule regular dental checkups. At KIA Dental, we are dedicated to helping you regain your confidence and improve your relationships by providing solutions to eliminate bad breath.",
          bulletPoints: [
            "Poor dental hygiene",
            "certain foods",
            "smoking",
            "dry mouth",
            "gum disease",
            "underlying health issues such as respiratory infections or digestive problems.",
          ],
        },
        image: "/images/bad-breath-halitosis/section1.webp",
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
      <ProblemsWeTreatPage data={badBreathData} />
    </div>
  );
}
