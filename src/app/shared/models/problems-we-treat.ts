export interface ProblemsWeTreat {
  heroImage: string;
  headingLight: string;
  headingBold: string;
  callToActions: CallToAction[];
  sections: Section[];
  isLinkCards: boolean;
  isLinkBlocks: boolean;
  linkCards: LinkCards[];
  linkBlocks: LinkBlock[];
}

export interface CallToAction {
  name: string;
  link: string;
}

export interface Section {
  headingLight: string;
  headingBold: string;
  description: SectionDescription;
  image: string;
}

export interface SectionDescription {
  paragraph1: string;
  paragraph2?: string;
  bulletPoints?: string[];
}

export interface LinkCards {
  title: string;
  link: string;
}

export interface LinkBlock {
  title: string;
  subTitle: string;
  link: string;
}
