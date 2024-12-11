export class CinemaModel {
  id: string;
  name: string;
  phoneNumber: string;
  website: string;
  address: string;
  description: string;

  constructor(
    id: string,
    name: string,
    phoneNumber: string = "+354 888 1234",
    address: string = "123 Paved Street, FantasyLand",
    website: string = "https://google.com/", 
    description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam eveniet, quisquam neque cum totam provident ea earum quasi aut hic esse officia. Sed qui quia ratione mollitia iusto commodi.", 
  ) {
    this.id = id;
    this.name = name;
    this.phoneNumber = phoneNumber;
    this.website = website;
    this.address = address;
    this.description = description
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      phoneNumber: this.phoneNumber,
      website: this.website,
      address: this.address,
      description: this.description,
    };
  }
}

export default CinemaModel;