export type Feeling = {
  id: number;
  name: string;
  iconUrl: string;
};

export const feelings: Feeling[] = [
  {
    id: 1,
    name: "Terrible",
    iconUrl: "https://d3imeoj536zhqj.cloudfront.net/images/uploads/red.png",
  },
  {
    id: 2,
    name: "Bad",
    iconUrl: "https://d3imeoj536zhqj.cloudfront.net/images/uploads/orange.png",
  },
  {
    id: 3,
    name: "Alright",
    iconUrl: "https://d3imeoj536zhqj.cloudfront.net/images/uploads/purple.png",
  },
  {
    id: 4,
    name: "Pretty Good",
    iconUrl: "https://d3imeoj536zhqj.cloudfront.net/images/uploads/blue.png",
  },
  {
    id: 5,
    name: "Fantastic",
    iconUrl: "https://d3imeoj536zhqj.cloudfront.net/images/uploads/green.png",
  },
];