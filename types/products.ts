
export interface Products {
  _id: string;
  title: string;
  _types: "products"; 
 image?: {
    asset: {
      _ref: string;
      _type: "image";
    };
  }; 
  
  price: number;
  description?: string;
  inventory: number;
  slug: {
    _type: "slug"
    current: string; 
  };
  imageUrl?: string; 
}
