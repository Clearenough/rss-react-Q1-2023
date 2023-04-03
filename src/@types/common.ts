export interface IFormCard {
  text: string;
  date: string;
  select: string;
  leaveHim: boolean;
  isRadioTurned: string;
  imageUrl: string;
}

export interface IFormData {
  text: string;
  date: string;
  select: string;
  leaveHim: boolean;
  radio: string;
  imageUrl: FileList;
}

export interface ICharacterCard {
  gender: string;
  id: number;
  location: {
    name: string;
  };
  name: string;
  species: string;
  status: string;
}

export interface APIResult {
  results: ICharacterCard[];
}
