enum Role {
  ADMIN,
  USER,
  SHIPPER,
}

class Account {
  // name: string;
  // private readonly id: string;
  // protected role: number;
  // protected wishList: string[] = [];

  constructor(
    private readonly id: string, // private: in this scope can accept, outside can't, include instances. If need to access from instances and not from outside, use protected instead of private.
    public name: string,
    protected role: number,
    protected wishList: string[] = []
  ) {
    // this.name = n;
    // this.role = r;
    // this.login = this.login.bind(this);
  }

  login(this: Account) {
    // (this: Account) refer the this keyword to the Account class
    if (this.role === 1) console.log(this.name + ` is a user!(${this.id})`);
    else console.log(this.name + ' welcome back');
  }

  showWishList() {
    console.log(this.wishList.length, this.wishList);
  }

  addToWishList(productName: string) {
    this.wishList = [productName, ...this.wishList];
  }

  removeFromWishList(productName: string) {
    this.wishList = this.wishList.filter(product => product !== productName);
  }
}

const user = new Account('u1', 'Chau', Role.USER);
user.login();
// const admin = { name: 'ADMIN', role: Role.ADMIN, login: user.login }; // this is not a instance of Account, just a dummy obj
// admin.login();

const admin = new Account('a1', 'Chau Admin', Role.ADMIN);

user.addToWishList('Cake');
user.addToWishList('Cupcake');
user.showWishList();

admin.addToWishList('Pepsi');
admin.addToWishList('Milk Tea');
admin.showWishList();
admin.login();

class Shipper extends Account {
  constructor(
    id: string,
    protected orderLocations: string[],
    protected lastLocation: string
  ) {
    super(id, 'SHIPPER', Role.SHIPPER);
    // this.orderLocations = orderLocations;
  }

  get lastOrderLocation() {
    if (!this.orderLocations) return (this.lastLocation = 'No location found');
    else {
      return (this.lastLocation =
        this.orderLocations[this.orderLocations.length - 1]);
    }
  }

  set lastOrderLocation(value: string) {
    this.addLocation(value);
  }

  addLocation(location: string) {
    this.orderLocations.push(location);
  }

  showOrderLocation() {
    console.log(this.orderLocations);
  }

  addToWishList(productName: string): void {
    if (this.role === 2)
      console.log(`Shipper don't have wishList (${productName})`);
  }
}

const chauShipper = new Shipper('s1', [], '');

chauShipper.addToWishList('Ahihi');
chauShipper.addToWishList('Ahoho');
chauShipper.showWishList();

chauShipper.addLocation('338 Hoang Dieu');
chauShipper.addLocation('145 Tran Nhan Tong');
chauShipper.showOrderLocation();
chauShipper.lastOrderLocation = '29 Nguyen Chi Dieu';
chauShipper.showOrderLocation();
console.log(chauShipper.lastOrderLocation);
