export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Photo {
  url: string;
  title: string;
  category: string;
}

export interface Hobby {
  name: string;
  icon: string;
  description: string;
  photos?: string[];
  music?: {
    title: string;
    artist: string;
    url: string;
  }[];
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  avatar?: string;
  education: Education[];
  hobbies: Hobby[];
  photos: Photo[];
}
