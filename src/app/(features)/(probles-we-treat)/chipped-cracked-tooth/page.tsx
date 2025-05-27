import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function ChippedCrackedToothPage() {
  const chippedCrackedToothData: ProblemsWeTreat = {
    heroImage: "/images/chipped-cracked-tooth/hero.webp",
    headingLight: "Chipped /",
    headingBold: "Cracked tooth",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Repairing Chipped and",
        headingBold: "Cracked Teeth",
        description: {
          paragraph1:
            "Chipped or cracked teeth can occur for a variety of reasons.\n\nCommon causes of tooth damage include:",
          paragraph2:
            "Contact sports, road traffic accidents, biting into hard objects, facial injuries.",
          bulletPoints: [
            "Having broken teeth not only affects the aesthetics of your smile but can also pose risks to your soft tissues",
            "such as your lips and cheeks",
            "due to their sharp edges. Additionally",
            "exposed inner tooth layers can lead to increased sensitivity or pain. If left untreated",
            "these issues may result in pulpal infections and potential tooth and bone loss over time.\n\nAt KIA Dental",
            "we are committed to providing effective solutions for repairing chipped and cracked teeth. Our experienced team will assess your condition and recommend the best treatment options to restore your dental health and enhance your smile.",
          ],
        },
        image: "/images/chipped-cracked-tooth/section1.webp",
      },
      {
        headingLight: "Importance of Repairing",
        headingBold: "Broken Teeth",
        description: {
          paragraph1:
            "Fixing broken teeth is essential for maintaining both your oral health and your smile. At KIA Dental, we offer a variety of treatment options tailored to the specific condition of your teeth.\n\nOur available treatments include:",
          paragraph2:
            "Tooth-colored fillings, crowns, veneers, root canal treatments.",
          bulletPoints: [
            "Our dedicated team at KIA Dental is here to help you choose the best solution for your dental needs. We aim to restore the functionality and appearance of your teeth",
            "ensuring you leave our clinic with a confident and healthy smile.",
          ],
        },
        image: "/images/chipped-cracked-tooth/section2.webp",
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
      <ProblemsWeTreatPage data={chippedCrackedToothData} />
    </div>
  );
}
