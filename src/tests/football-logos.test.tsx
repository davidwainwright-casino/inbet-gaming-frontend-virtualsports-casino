import * as fs from 'fs';
import * as path from 'path';

const teams = fs
  .readFileSync(path.resolve(__dirname, 'teams-list.txt'))
  .toString()
  .split('\n')
  .filter((f) => [''].indexOf(f) < 0)
  .map((team) =>
    team
      .split('"')
      .join('')
      .split(' ')
      .join('_')
      .trim()
      .toLocaleLowerCase(),
  )
  .sort();

// console.log(teams);

const files = fs
  .readdirSync(path.resolve('./public/football-logos'))
  .filter((f) => ['', '.DS_Store'].indexOf(f) < 0)
  .map((f) => f.slice(0, -4).toLocaleLowerCase())
  .sort();

// console.log(files);

it('renders without crashing', () => {
  expect(teams).toEqual(files);
});
