import faker from 'faker';
import { Mappable } from './types';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: Number.parseFloat(faker.address.latitude()),
      lng: Number.parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <div>
      <h1>Company Name: ${this.companyName}</h1>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }
}