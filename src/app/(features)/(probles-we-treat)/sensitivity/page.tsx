import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function SensitivityPage() {
  const sensitivityData: ProblemsWeTreat = {
    heroImage: "/images/sensitivity/hero.webp",
    headingLight: "Sensitivity",
    headingBold: "",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Overcoming ",
        headingBold: "Tooth Sensitivity",
        description: {
          paragraph1:
            "Tooth sensitivity is a prevalent dental issue that causes pain or discomfort when teeth are exposed to certain stimuli, such as hot or cold temperatures, as well as sweet or acidic foods. This sensitivity often arises from the loss of enamel, which exposes the underlying layer of dentin.\n\nSeveral factors can contribute to tooth sensitivity, including:",
          paragraph2:
            "Identifying the root cause of sensitivity and addressing it appropriately is crucial for effective management. At KIA Dental, we provide a range of solutions designed to alleviate your sensitivity and restore your comfort, allowing you to enjoy your favorite foods and beverages once again.",
          bulletPoints: [
            "Brushing too hard",
            "tooth decay",
            "gum recession",
            "dental erosion from acidic foods and drinks",
            "grinding or clenching of teeth.",
          ],
        },
        image: "/images/sensitivity/section1.webp",
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
      <ProblemsWeTreatPage data={sensitivityData} />
    </div>
  );
}
