import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function CrookedPainfulWisdomToothPage() {
  const crookedPainfulWisdomToothData: ProblemsWeTreat = {
    heroImage: "/images/crooked-painful-wisdom-tooth/hero.webp",
    headingLight: "Crooked/painful",
    headingBold: "Wisdom Tooth",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Dealing with Crooked or Painful",
        headingBold: "Wisdom Teeth",
        description: {
          paragraph1:
            "Wisdom teeth typically emerge between the ages of 17 and 21. When these third molars do not fully break through the gums, they are referred to as impacted wisdom teeth.\n\nCommon causes of impacted wisdom teeth include:",
          paragraph2:
            "At KIA Dental, we understand the discomfort and complications that can arise from impacted wisdom teeth. Our skilled team is here to evaluate your situation and provide the necessary treatment options to alleviate pain and ensure your oral health. Don't let problematic wisdom teeth cause you harm—let us help you find relief!",
          bulletPoints: [
            "Lack of space in the jaws to accommodate third molars",
            "misalignment of other teeth.",
          ],
        },
        image: "/images/crooked-painful-wisdom-tooth/section1.webp",
      },
      {
        headingLight: "The Importance of Timely",
        headingBold: "Wisdom Tooth Removal",
        description: {
          paragraph1:
            "If impacted wisdom teeth are not addressed, they can lead to a variety of complications.\n\nPotential issues from leaving them untreated include:",
          paragraph2:
            "Therefore, the timely removal of impacted wisdom teeth is essential. At KIA Dental, we routinely perform this procedure with great care. Even in cases of complicated tooth removal, our experienced surgeon, combined with advanced in-house 3D imaging, allows us to complete the process efficiently. If your third molar has not fully erupted, visit us for a safe and swift extraction experience.",
          bulletPoints: [
            "Pain or discomfort",
            "decay of the tooth due to difficulty in cleaning",
            "damage or decay of adjacent teeth",
            "infection of the tissue flap over the tooth (known as pericoronitis)",
            "cysts or tumors",
            "crowding of remaining teeth",
            "jaw joint/TMJ pain.",
          ],
        },
        image: "/images/crooked-painful-wisdom-tooth/section2.webp",
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
      <ProblemsWeTreatPage data={crookedPainfulWisdomToothData} />
    </div>
  );
}
