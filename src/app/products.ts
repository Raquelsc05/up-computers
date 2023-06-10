export interface IProduto { 
  id: number;
  description: string;
  price: number;
  stockQuantity: number;
  image: string;
}

export interface IProductCart extends IProduto { 
quantity: number;

}

export const produtos: IProduto[] = [ 
  { id: 1, description: "Mouse gamer", price: 8,  image: "./assets/mouse-3.jpg", stockQuantity: 15 },
  { id: 2, description: "Very good Monitor", price: 999.99,  image: "./assets/monitor-1.jpg", stockQuantity: 12 },
  { id: 3, description: "Excelent Keyboard", price: 99.99, image: "./assets/keyboard-1.jpg", stockQuantity: 10 },
  { id: 4, description: "Phone for those who play FPS", price: 348,  image: "./assets/headphone-2.jpg", stockQuantity: 10 },
  { id: 5, description: "Headphone", price: 99.99,  image: "./assets/headphone-1.jpg", stockQuantity: 10 },
  { id: 6, description: "Good headphone", price: 22.48,  image: "./assets/headphone-3.jpg", stockQuantity: 10 },
  { id: 7, description: "HD 1TB", price: 30, image: "/assets/hd.jpg", stockQuantity: 10 },
  { id: 8, description: "Combo Video Card ", price: 500, image: "./assets/video-card.jpg", stockQuantity: 10 },
  { id: 9, description: "Processor Ryzen", price: 899,  image: "./assets/processor.jpg", stockQuantity: 10 },
  { id: 10, description: "Good Notebook", price: 199.99,  image: "./assets/laptop-1.jpg", stockQuantity: 10 },
  { id: 11, description: "Excelent Notebook", price: 1490.89,  image: "./assets/laptop-2.jpg", stockQuantity: 10 },
  { id: 12, description: "Cheap Mouse", price: 4.99 ,  image: "./assets/mouse-1.png", stockQuantity: 10 },
  { id: 13, description: "Great Mouse", price: 36 ,  image: "./assets/mouse-2.jpg", stockQuantity: 10 },
  { id: 14, description: "Small Mouse", price: 6.50 ,  image: "./assets/mouse-4.jpg", stockQuantity: 10 },
  { id: 15, description: "Good Keyboard ", price: 27,  image: "./assets/keyboard-2.jpg", stockQuantity: 10 },
];