import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function CrookedTeethPage() {
  const crookedTeethData: ProblemsWeTreat = {
    heroImage: "/images/crooked-teeth/hero.webp",
    headingLight: "crooked",
    headingBold: "teeth",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "The Impact of",
        headingBold: "Crooked Teeth",
        description: {
          paragraph1:
            "Do misaligned teeth concern you? Crooked teeth can result from a variety of factors that may affect both your appearance and oral health.\nSome common causes of crooked teeth include:",
          paragraph2:
            "At KIA Dental, we recognize that malaligned teeth can not only detract from your smile but also create challenges in maintaining proper oral hygiene and achieving a correct bite. Our skilled team of specialists will carefully evaluate your dental radiographs and recommend the most suitable treatment options tailored to your age, health, and specific dental condition. We are committed to helping you achieve a beautiful smile that enhances your confidence.",
          bulletPoints: [
            "Genetics",
            "small jaws",
            "large teeth",
            "premature loss of baby teeth",
            "certain habits.",
          ],
        },
        image: "/images/crooked-teeth/section1.webp",
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
      <ProblemsWeTreatPage data={crookedTeethData} />
    </div>
  );
}
