export default interface Course {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  id: number;
  cardIDs: number[];
}

export default interface Card {
  id: number;
  body: string;
}

export default interface Article {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
  body: string;
}

export default interface Card {
  title: string;
  body: string;
}