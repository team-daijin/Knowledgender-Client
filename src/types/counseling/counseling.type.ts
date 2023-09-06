export interface CounselingType {
  name: string;
  introduce: string;
  contact: string;
  code: string;
  location: {
    address: string;
    latitude: number;
    longitude: number;
  };
}
