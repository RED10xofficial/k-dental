import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function HabitsInChildrenPage() {
  const habitsInChildrenData: ProblemsWeTreat = {
    heroImage: "/images/habits-in-children/hero.webp",
    headingLight: "Habits",
    headingBold: " in Children",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Addressing Habits in",
        headingBold: "Children Early",
        description: {
          paragraph1:
            "Children often develop habits that can lead to misalignment of their teeth.\n\nCommon habits that may affect dental alignment include:",
          paragraph2:
            "It is essential to address these habits as early as possible, as they can result in significant dental and facial changes later in life. By providing timely treatment, parents can help establish a strong foundation for their children's long-term health and well-being. At KIA Dental, we are committed to assisting families in correcting these habits to promote healthy smiles for the future.",
          bulletPoints: [
            "Thumb sucking",
            "tongue thrusting",
            "nail biting",
            "mouth breathing.",
          ],
        },
        image: "/images/habits-in-children/section1.webp",
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
      <ProblemsWeTreatPage data={habitsInChildrenData} />
    </div>
  );
}
