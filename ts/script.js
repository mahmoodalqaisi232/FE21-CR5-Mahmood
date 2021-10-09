// Parent class Locations
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(city, zipCode, address, image, date, time) {
        this.city = city;
        this.zipCode = zipCode;
        this.address = address;
        this.image = image;
        this.date = date;
        this.time = time;
    }
    Locations.prototype.displayStart = function () {
        return "<div class=\"card col-lg-3 col-md-5 m-0\">\n        <ul class=\"cardbody\">";
    };
    Locations.prototype.displayEnd = function () {
        return "<li class=\"card-title \"> Card Title\n        <ul>\n              <li class=\"card-text\"> " + this.address + ", " + this.zipCode + "  " + this.city + "</li>\n              <li><img src=\" " + this.image + "\" class=\"card-img-bottom \" alt=\"Image\"></li>\n              <li class=\"card-text\"> Created: " + this.date + "," + this.time + "</li>\n            </ul>\n          </li>\n        </ul>\n      </div>";
    };
    Locations.prototype.display = function () {
        return this.displayStart() + this.displayEnd();
    };
    return Locations;
}());
var places = /** @class */ (function (_super) {
    __extends(places, _super);
    function places(city, zipCode, address, image, date, time, placeName) {
        var _this = _super.call(this, city, zipCode, address, image, date, time) || this;
        _this.placeName = placeName;
        return _this;
    }
    places.prototype.displayEnd = function () {
        return "<li class=\"fw-bold \"><span class=\"listSpan\"> " + this.placeName + "</span>\n        <ul>\n              <li class=\"card-text\"> " + this.address + ", " + this.zipCode + "  " + this.city + "</li>\n              <li class=\"ImgContainer\">\n                 \n                     <img src=\" " + this.image + "\" class=\"img-fluid cardImg\" alt=\"Image\">\n              </li>\n              \n              <li class=\"card-text\"> Created: " + this.date + "," + this.time + "</li>\n            </ul>\n          </li>\n        </ul>\n      </div>";
    };
    return places;
}(Locations));
var place1 = new places("Vienna", 1010, "Karlsplatz 1", "/img/st.charlesChurch.jpg", "24.03.2021", "12:45", "St.Charles Church");
var place2 = new places("Wien", 1130, "Maxingstraße 13b", "/img/Zoo.jpg", "25.03.2021", "11:00", "Zoo");
var place3 = new places("Wien", 1070, "Museumsplatz 1", "/img/museumQaurtier.jpg", "27.03.2021", "09:30", "Museum Quartier");
var place4 = new places("Wien", 1020, "Praterstern", "/img/praterstern.jpg", "30.03.2021", "14:00", "Praterstern Park");
var Place = [place1, place2, place3, place4];
for (var _i = 0, Place_1 = Place; _i < Place_1.length; _i++) {
    var val = Place_1[_i];
    document.getElementById("placesRow").innerHTML += val.display();
}
// Extended Class Restaurants from Locations
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(city, zipCode, address, image, date, time, telephoneNumber, cuisine, webAddress, restaurantName) {
        var _this = _super.call(this, city, zipCode, address, image, date, time) || this;
        _this.telephoneNumber = telephoneNumber;
        _this.cuisine = cuisine;
        _this.webAddress = webAddress;
        _this.restaurantName = restaurantName;
        return _this;
    }
    Restaurants.prototype.displayEnd = function () {
        return "<li class=\"fw-bold CardFont\"> " + this.restaurantName + "\n            <ul>\n                  <li class=\"card-text\"> " + this.address + "<p class=\"m-0\"> " + this.zipCode + "  " + this.city + "</p>\n                  <P class=\"mb-0\"> " + this.telephoneNumber + " </p> </li>\n                  <li><a class=\"link-primary \" href=\"" + this.webAddress + "\">" + this.webAddress + "</a></li>\n                  <li> " + this.cuisine + " </li>\n                  <li class=\"ImgContainer\">\n                  \n                        <img src=\" " + this.image + "\" class=\"img-fluid cardImg\" alt=\"Image\">\n                  </li>\n                  <li class=\"card-text\"> Created: " + this.date + "," + this.time + "</li>\n                </ul>\n              </li>\n            </ul>\n          </div>";
    };
    return Restaurants;
}(Locations));
var restaurant1 = new Restaurants("Vienna", 1050, "Kettenbrückengasse 19", "/img/lemonLeaf.png", "24.03.2021", "12:45", "+43(1)5812308", "Asian", "www.lemonleaf.at", "Lemon Leaf Thai Restaurant");
var restaurant2 = new Restaurants("Wien", 1050, "Schönbrunner Str. 21", "/img/sixta.png", "24.03.2021", "12:45", "+43(1)58 528 56 or +43(1)58 528 56", "Austrian", "www.sixta-restaurant.at", "Sixta");
var restaurant3 = new Restaurants("Wien", 1010, "Rotenturmstraße 15", "/img/leBurger.png", "24.03.2021", "12:45", "+43(1)9076078", "Austrian", "www.leburger.at", "Le Burger");
var restaurant4 = new Restaurants("Wien", 1030, "Rennweg 92", "/img/babylon.jpg", "24.03.2021", "12:45", "+43(1)7980110", "Oriental", "www.restaurant-babylon3.eatbu.com", "Babylon");
var Restaurant = [restaurant1, restaurant2, restaurant3, restaurant4];
for (var _a = 0, Restaurant_1 = Restaurant; _a < Restaurant_1.length; _a++) {
    var val = Restaurant_1[_a];
    document.getElementById("restaurantsRow").innerHTML += val.display();
}
// Extended Class Events from Locations
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, zipCode, address, image, date, time, EventDate, EventTime, Price, eventName, webAddress) {
        var _this = _super.call(this, city, zipCode, address, image, date, time) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.Price = Price;
        _this.eventName = eventName;
        _this.webAddress = webAddress;
        return _this;
    }
    Events.prototype.displayEnd = function () {
        return "<li class=\" fw-bold\"> " + this.eventName + "\n            <ul>\n                <li><a class=\"link-primary cardFont\" href=\"" + this.webAddress + "\">" + this.webAddress + "</a></li>\n                <li> " + this.EventDate + ". " + this.EventTime + " </li>\n                <li class=\"card-text cardFont\"> " + this.address + ", " + this.zipCode + "  " + this.city + " </li>\n                <li> " + this.Price + " EUR </li>\n                <li class=\"ImgContainer\">\n                    <div>\n                         <img src=\" " + this.image + "\" class=\" img-fluid cardImg\" alt=\"Image\"></div>\n                </li>\n                <li class=\"card-text cardFont\"> Created: " + this.date + "," + this.time + "</li>\n                </ul>\n              </li>\n            </ul>\n          </div>";
    };
    return Events;
}(Locations));
var event1 = new Events("Wien", 1150, "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "/img/Kris.jpg", "24.03.2021", "12:45", "Fr, 15.11.2021", "20:00", 58.50, "Kris Kristofferson", "http://kriskristofferson.com");
var event2 = new Events("Wien", 1150, "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "/img/Lenny.jpg", "24.03.2021", "12:45", "Sat, 09.12.2029 -", "19:30", 47.80, "Lenny Kravitz", "www.lennykravitz.com");
var event3 = new Events("Wien", 1020, "Ernst Happel Stadion,Prater Stadion", "/img/guns&roses2.jpg", "24.03.2021", "12:45", "Wed, 13.07.2022", "20:00", 158, "Guns & Roses", "https://www.gunsnroses.com/");
var event4 = new Events("St. Pölten", 3100, "Kelsengasse 9,VAZ Straße", "/img/frequency2.jpg", "24.03.2021", "12:45", "Thu, 18.08.2022", "20:00", 199.99, "Frequency Festival", "https://www.frequency.at/");
var events = [event1, event2, event3, event4];
for (var _b = 0, events_1 = events; _b < events_1.length; _b++) {
    var val = events_1[_b];
    document.getElementById("eventsRow").innerHTML += val.display();
}
