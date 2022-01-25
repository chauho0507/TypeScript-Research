"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["SHIPPER"] = 2] = "SHIPPER";
})(Role || (Role = {}));
class Account {
    constructor(id, name, role, wishList = []) {
        this.id = id;
        this.name = name;
        this.role = role;
        this.wishList = wishList;
    }
    login() {
        if (this.role === 1)
            console.log(this.name + ` is a user!(${this.id})`);
        else
            console.log(this.name + ' welcome back');
    }
    showWishList() {
        console.log(this.wishList.length, this.wishList);
    }
    addToWishList(productName) {
        this.wishList = [productName, ...this.wishList];
    }
    removeFromWishList(productName) {
        this.wishList = this.wishList.filter(product => product !== productName);
    }
}
const user = new Account('u1', 'Chau', Role.USER);
user.login();
const admin = new Account('a1', 'Chau Admin', Role.ADMIN);
user.addToWishList('Cake');
user.addToWishList('Cupcake');
user.showWishList();
admin.addToWishList('Pepsi');
admin.addToWishList('Milk Tea');
admin.showWishList();
admin.login();
class Shipper extends Account {
    constructor(id, orderLocations, lastLocation) {
        super(id, 'SHIPPER', Role.SHIPPER);
        this.orderLocations = orderLocations;
        this.lastLocation = lastLocation;
    }
    get lastOrderLocation() {
        if (!this.orderLocations)
            return (this.lastLocation = 'No location found');
        else {
            return (this.lastLocation =
                this.orderLocations[this.orderLocations.length - 1]);
        }
    }
    set lastOrderLocation(value) {
        this.addLocation(value);
    }
    addLocation(location) {
        this.orderLocations.push(location);
    }
    showOrderLocation() {
        console.log(this.orderLocations);
    }
    addToWishList(productName) {
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
//# sourceMappingURL=classes.js.map