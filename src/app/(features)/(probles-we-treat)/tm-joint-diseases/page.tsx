import ProblemsWeTreatPage from "@/app/shared/components/problems-we-treat";
import { ProblemsWeTreat } from "@/app/shared/models/problems-we-treat";

export default function TMJointDiseasesPage() {
  const tmJointDiseasesData: ProblemsWeTreat = {
    heroImage: "/images/tm-joint-diseases/hero.webp",
    headingLight: "TM Joint",
    headingBold: "Diseases",
    callToActions: [
      {
        name: "",
        link: "",
      },
    ],
    sections: [
      {
        headingLight: "Understanding",
        headingBold: "TM Joint Disorders",
        description: {
          paragraph1:
            "The temporomandibular joint (TMJ) serves as the connection between the skull and the lower jaw. When this joint experiences dysfunction, it can lead to significant pain and discomfort. One of the primary contributors to TMJ issues is an improper bite.\n\nFactors that may lead to TMJ dysfunction include:",
          paragraph2:
            "Improper positioning of wisdom teeth or other teeth, crooked teeth, discrepancies in jaw proportions, oversized dental fillings, trauma or injury, bruxism (teeth grinding or clenching), arthritis, stress, genetics, poor posture, hormonal changes (such as those during puberty, pregnancy, or menopause), excessive chewing of gum or hard foods.",
          bulletPoints: [
            "Identifying and addressing the underlying causes of TMJ discomfort is crucial",
            "as neglecting these issues can result in more severe joint problems. At KIA Dental",
            "we utilize advanced radiographic imaging to provide a detailed view of the TMJ",
            "allowing our team to recommend the most effective treatment options for your jaw joint health.",
          ],
        },
        image: "/images/tm-joint-diseases/section1.webp",
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
      <ProblemsWeTreatPage data={tmJointDiseasesData} />
    </div>
  );
}
