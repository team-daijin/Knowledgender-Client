export interface WritingCardType {
  title: string;
  category: "HEART" | "CRIM" | "BODY" | "RELATIONSHIP" | "EQUALITY";

  content: string;
  image: null | File;
}
