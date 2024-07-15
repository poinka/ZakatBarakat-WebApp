export default interface Course {
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  id: number;
  cardIDs: number[];
  level: string;
}

export default interface Card {
  id: number;
  title: string;
  body: string;
}

export default interface Article {
  title: string;
  description: string;
  imageUrl: string;
  id: number;
  body: string;
}

export default interface News {
  title: string;
  text: string;
  link: string;
  id: number;
}