import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function OralCancerPage() {
  const oralCancerData: ProblemsWeTreat = {
    heroImage: "/images/oral-cancer/hero.webp",
    headingLight: "Oral",
    headingBold: "Cancer",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Understanding ",
        headingBold: "Oral Cancer",
        description: {
          paragraph1:
            "Oral cancer can affect various parts of the mouth, including the lips, tongue, gums, the inner sides of the cheeks, the roof of the mouth (palate), and the floor of the mouth (beneath the tongue). It often presents with several concerning symptoms.\n\nCommon signs of oral cancer include:",
          paragraph2:
            "Early detection of oral cancer is crucial, as it allows for quicker treatment and a higher chance of complete recovery. At KIA Dental, our skilled team of doctors is trained to identify signs of oral cancer and confirm diagnoses by sending tissue samples to the lab. Timely intervention can significantly improve outcomes for patients facing this disease.",
          bulletPoints: [
            "Ulcers that do not heal",
            "persistent throat sores",
            "white or red patches in the mouth",
            "lumps or thickening in the mouth",
            "changes in voice.",
          ],
        },
        image: "/images/oral-cancer/section1.webp",
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
      <ProblemsWeTreatPage data={oralCancerData} />
    </div>
  );
}
