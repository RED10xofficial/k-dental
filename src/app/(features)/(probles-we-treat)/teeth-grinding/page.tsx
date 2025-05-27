import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function TeethGrindingPage() {
  const teethGrindingData: ProblemsWeTreat = {
    heroImage: "/images/teeth-grinding/hero.webp",
    headingLight: "Teeth",
    headingBold: "Grinding",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Protecting Your Teeth",
        headingBold: "from Grinding",
        description: {
          paragraph1:
            "Bruxism, commonly known as teeth grinding, is a condition in which individuals involuntarily grind or clench their teeth, often while they sleep. This issue can arise from various factors that may affect your dental health.\n\nCommon causes of bruxism include:",
          paragraph2:
            "At KIA Dental, we understand the importance of addressing bruxism to prevent further wear and damage to your teeth. Our team is dedicated to providing effective solutions to help you manage this condition and protect your smile.",
          bulletPoints: [
            "Stress and anxiety",
            "malocclusion (misaligned teeth)",
            "sleep disorders",
            "certain medications that impact the central nervous system.",
          ],
        },
        image: "/images/teeth-grinding/section1.webp",
      },
      {
        headingLight: "Addressing the Consequences of",
        headingBold: "Teeth Grinding",
        description: {
          paragraph1:
            "Teeth grinding can result in a range of dental issues and complications that may affect your overall well-being.\n\nSome potential problems associated with bruxism include",
          paragraph2:
            "Effectively managing bruxism requires addressing its underlying causes, which may include stress management when necessary. At KIA Dental, we offer specialized treatment options designed to improve your dental and jaw health, helping you find relief from the effects of teeth grinding.",
          bulletPoints: [
            "Worn tooth enamel",
            "tooth sensitivity",
            "temporomandibular joint (TMJ) disorders",
            "jaw pain",
            "headaches.",
          ],
        },
        image: "/images/teeth-grinding/section2.webp",
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
      <ProblemsWeTreatPage data={teethGrindingData} />
    </div>
  );
}
