import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function DentalPainPage() {
  const dentalPainData: ProblemsWeTreat = {
    heroImage: "/images/dental-pain/hero.webp",
    headingLight: "Dental",
    headingBold: "Pain",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Finding Relief from",
        headingBold: "Dental Pain",
        description: {
          paragraph1:
            "Experiencing dental pain is a common reason many individuals seek dental care. This discomfort can arise from various issues affecting your oral health.\n\nCommon causes of dental pain include:",
          paragraph2:
            "If you're struggling to sleep due to intense pain, KIA Dental is here to help alleviate your discomfort. We offer effective solutions for damaged teeth and gums, including dental fillings and root canal treatments to salvage decayed or broken teeth. Our skilled team can also perform complex extractions under local anesthesia or conscious sedation. Should tooth removal be necessary, we provide excellent options for replacement to restore your smile. Additionally, gum infections can be treated with advanced techniques, including laser therapy, to ensure a swift recovery.",
          bulletPoints: [
            "Decayed or broken teeth",
            "unerupted teeth",
            "gum infections.",
          ],
        },
        image: "/images/dental-pain/section1.webp",
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
      <ProblemsWeTreatPage data={dentalPainData} />
    </div>
  );
}
