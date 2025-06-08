import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function GumDiseasePage() {
  const gumDiseaseData: ProblemsWeTreat = {
    heroImage: "/images/gum-disease/hero.webp",
    headingLight: "Gum",
    headingBold: "Diseases",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Protecting Your Gums",
        headingBold: "from Disease",
        description: {
          paragraph1:
            "The gums, or gingiva, play a crucial role in supporting your teeth. Any disease that affects the gums can lead to a loss of support, resulting in loose teeth. Gum disease primarily presents itself in two forms: gingivitis and periodontitis.\n\nGingivitis is the initial stage of gum disease, marked by red, swollen, and bleeding gums. This condition can be effectively managed through proper oral hygiene and regular professional teeth cleanings every six months.\n\nIf gingivitis is not addressed promptly, it can progress to periodontitis, which causes damage to the supporting tissues and bone around the teeth. Symptoms of periodontitis may include:",
          paragraph2:
            "At KIA Dental, we provide advanced gum treatments, including painless and bloodless laser procedures using Waterlase technology from Biolase, USA. Our goal is to help you maintain healthy gums and prevent the progression of gum disease.",
          bulletPoints: [
            "Persistent bad breath",
            "receding gums",
            "tooth sensitivity",
            "loose teeth",
            "changes in bite pattern",
            "pain and discomfort",
            "pus between teeth and gums in severe cases.",
          ],
        },
        image: "/images/gum-disease/section1.webp",
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
      <ProblemsWeTreatPage data={gumDiseaseData} />
    </div>
  );
}
