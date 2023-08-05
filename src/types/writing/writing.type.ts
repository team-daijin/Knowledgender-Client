export interface WritingCardType {
  title: string;
  category:
    | "GENDERISSUES"
    | "SEXUALASSAULTCOPE"
    | "BODY"
    | "RELATIONSHIP"
    | "MY";
  content: string;
  image: File | null;
}
