import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function JawLengthDiscrepancies() {
  const imperfectionsInSmileData: ProblemsWeTreat = {
    heroImage: "/images/jaw-length-discrepancies/hero.webp",
    headingLight: "Jaw length",
    headingBold: "discrepancies",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Understanding Jaw and Teeth Alignment at",
        headingBold: "KIA Dental",
        description: {
          paragraph1:
            "Achieving the ideal jaw length is crucial not only for aesthetic appeal but also for ensuring functional harmony within the mouth and proper tooth alignment. Early detection of jaw shape issues in children allows for effective intervention by guiding the growth of the jawbone. For adults, corrective jaw surgeries can reposition the jaws to their optimal alignment. These procedures can involve adjustments to the upper jaw (maxilla), lower jaw (mandible), chin, or a combination of these areas. Typically, such surgeries are most effective once the facial skeleton has fully developed, which generally occurs in the late teenage years.",
          paragraph2:
            "At KIA Dental, our team of experts is dedicated to designing and executing comprehensive treatment plans tailored to each patient's needs. We collaborate with a skilled group of maxillofacial surgeons, orthodontists, associate dental surgeons, anesthesiologists, speech therapists, and clinical psychologists to ensure the best possible outcomes for our patients.",
          bulletPoints: [
            "Importance of ideal jaw length",
            "Functional harmony in the mouth",
            "Early detection in children",
            "Growth pattern control",
            "Corrective surgeries for adults",
            "Involvement of maxillofacial surgeons",
            "Role of orthodontists and dental surgeons",
            "Anesthesia considerations",
            "Support from speech therapists and psychologists.",
          ],
        },
        image: "/images/jaw-length-discrepancies/section1.webp",
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
      <ProblemsWeTreatPage data={imperfectionsInSmileData} />
    </div>
  );
}
