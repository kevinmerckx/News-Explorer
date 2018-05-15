export interface News {
  id: number;
  news: string;
  date: string;
  popularity: number;
}

// first smart mock
export const mockedNews: News[] = [
  {id: 1, news: 'angular cli updated', date: '10.05.2018', popularity: 20 },
  {id: 2, news: 'Michael Mannseicher hat am Freitag Geburtstag und wird 28.', date: '18.05.2018', popularity: 100 },

];
