import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() limit: number = 6;
  data = [
    {
      name: 'Pro 14"',
      specs: 'Apple M1 Pro islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '/assets/macbook.png',
      id: 1,
      description:
        'Parmesan ipsum ranch bacon mozzarella burnt onions Aussie. lorem ipsum dummytext of the printing and typesetting industry. Lorem Ipsum bacon mozzarell burnt onions Aussie. lorem ipsum dummy text of the printing',
    },
    {
      name: 'Pro 16"',
      specs: 'Apple M1 Max islemci',
      specs2: '16 GB RAM / 64 GB SSD',
      img: '/assets/macbook2.png',
      id: 2,
      description:
        'Parmesan ipsum ranch bacon mozzarella burnt onions Aussie. lorem ipsum dummytext of the printing and typesetting industry. Lorem Ipsum bacon mozzarell burnt onions Aussie. lorem ipsum dummy text of the printing',
    },
    {
      name: 'Air 13.6" M2',
      specs: 'Apple M2 islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '/assets/macbook3.png',
      id: 3,
      description:
        'Parmesan ipsum ranch bacon mozzarella burnt onions Aussie. lorem ipsum dummytext of the printing and typesetting industry. Lorem Ipsum bacon mozzarell burnt onions Aussie. lorem ipsum dummy text of the printing',
    },
    {
      name: 'Pro14"',
      specs: 'Apple M1 Pro islemci',
      specs2: '16 GB RAM / 256 GB SSD',
      img: '/assets/macbook.png',
      id: 4,
      description:
        'Parmesan ipsum ranch bacon mozzarella burnt onions Aussie. lorem ipsum dummytext of the printing and typesetting industry. Lorem Ipsum bacon mozzarell burnt onions Aussie. lorem ipsum dummy text of the printing',
    },
    {
      name: 'Pro 17"',
      specs: 'Apple M1 Max Pro islemci',
      specs2: '16 GB RAM / 1 T SSD',
      img: '/assets/macbook2.png',
      id: 5,
      description:
        'Parmesan ipsum ranch bacon mozzarella burnt onions Aussie. lorem ipsum dummytext of the printing and typesetting industry. Lorem Ipsum bacon mozzarell burnt onions Aussie. lorem ipsum dummy text of the printing',
    },
    {
      name: 'Air 14.6" M2',
      specs: 'Apple M3 islemci',
      specs2: '16 GB RAM / 512 GB SSD',
      img: '/assets/macbook3.png',
      id: 6,
      description:
        'Parmesan ipsum ranch bacon mozzarella burnt onions Aussie. lorem ipsum dummytext of the printing and typesetting industry. Lorem Ipsum bacon mozzarell burnt onions Aussie. lorem ipsum dummy text of the printing',
    },
  ];
}
