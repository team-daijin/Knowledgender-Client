export interface CounselingType {
  name: string;
  image: File | null;
  introduce: string;
  contact: string;
  code: string;
  address: string;
  latitude: number;
  longitude: number;
  [key: string]: string | File | null | number;
}
