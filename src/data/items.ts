import { Item } from '../types/Item';


// estou typando o Item.ts de uma pasta chamada type
// o Item.ts possui a typagem pré definida.
// estou usando referenciando a variavel "items" com a typagem de "Items[]" que popssui um array com os objetos pré definidos;  
export const items: Item[] = [

  // como agora está referenciado ao array, então é necessário ter exatamente a mesma quantidade de posições que o objeto dentro do array possui, nesse caso são quatro.
  { date: new Date(2021, 9, 15), category: 'food', title: 'Burguer King', value: 32.12 },
  { date: new Date(2021, 9, 24), category: 'rent', title: 'Rent Apartment',  value: 1999 },
  { date: new Date(2021, 9, 5),  category: 'salary',  title: 'Salary NuBank',  value: 6000.00 },

  ];

