export class CinemaModel {
  id: string;
  name: string;
  phone: string;
  website: string;
  address: string;
  description: string;
  city: string;

  constructor(
    id: string,
    name: string,
    phone: string = "+354 888 1234",
    address: string = "123 Paved Street, FantasyLand",
    website: string = "https://google.com/", 
    description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam eveniet, quisquam neque cum totam provident ea earum quasi aut hic esse officia. Sed qui quia ratione mollitia iusto commodi.", 
    city: string = "",
  ) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.website = website;
    this.address = address;
    this.description = description;
    this.city = city;
  }

  toObject() {
    return {
      id: this.id,
      name: this.name,
      phone: this.phone,
      website: this.website,
      address: this.address,
      description: this.description,
      city: this.city,
    };
  }
}

export default CinemaModel;