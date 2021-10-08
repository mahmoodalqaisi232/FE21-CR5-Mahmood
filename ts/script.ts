        // Parent class Locations

class Locations{
    city: string;
    zipCode: number;
    address: string;
    image: string;

    constructor(city:string, zipCode:number, address:string, image: string){
        this.city= city;
        this.zipCode= zipCode;
        this.address= address;
        this.image= image;
    }
    displayStart(){
        return `<div class="card col-lg-3">
        <ul class="cardbody">`
    }    
    displayEnd(){
        return `<li class="card-title"> Card Title
        <ul>
              <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city}</li>
              <li><img src=" ${this.image}" class="card-img-bottom" alt="Image"></li>
            </ul>
          </li>
        </ul>
      </div>`
    }
    display(){
        return this.displayStart() + this.displayEnd();
    }
}


class places extends Locations{
    placeName:string;

    constructor(city:string, zipCode:number, address:string, image: string, placeName:string){
        super(city,zipCode,address,image);
        this.placeName=placeName;
    }
    displayEnd(){
        return `<li class="card-title"> ${this.placeName}
        <ul>
              <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city}</li>
              <li><img src=" ${this.image}" class="card-img-bottom" alt="Image"></li>
            </ul>
          </li>
        </ul>
      </div>`
    }
}

let place1= new places("Vienna",1010,"Karlsplatz 1","/img/st.charlesChurch.jpg","St.Charles Church");
let place2= new places("Wien",1130,"Maxingstraße 13b","/img/Zoo.jpg","St.Charles Church");
let place3= new places("Wien",1070,"Museumsplatz 1","/img/museumQaurtier.jpg","Museum Quartier");
let place4= new places("Wien",1020,"Praterstern","/img/praterstern.jpg","Praterstern Park");

const Place:Array<places>=[place1,place2,place3,place4];

for(let val of Place){

(document.getElementById("placesRow") as HTMLElement).innerHTML += val.display();
}













    // Extended Class Restaurants from Locations

    class Restaurants extends Locations{
        telephoneNumber: string;
        cuisine: string;
        webAddress: string;
        restaurantName:string;

        constructor(city:string, zipCode:number, address:string, image: string, telephoneNumber: string, cuisine: string, webAddress: string, restaurantName:string  ){
            super(city, zipCode, address, image);
            this.telephoneNumber= telephoneNumber;
            this.cuisine=cuisine;
            this.webAddress= webAddress;
            this.restaurantName=restaurantName;
        }
        displayEnd(){
            return `<li class="card-title"> ${this.restaurantName}
            <ul>
                  <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city},  ${this.telephoneNumber}     </li>
                  <li><a class="link-primary" href="${this.webAddress}">${this.webAddress}</a></li>
                  <li> ${this.cuisine} </li>
                  <li><img src=" ${this.image}" class="card-img-bottom" alt="Image"></li>
                </ul>
              </li>
            </ul>
          </div>`
        }
    }


    let restaurant1= new Restaurants("Vienna",1050,"Kettenbrückengasse 19","/img/lemonLeaf.png","+43(1)5812308","Asian","www.lemonleaf.at","Lemon Leaf Thai Restaurant");


    const Restaurant1:Array<Restaurants>=[restaurant1];

    for(let val of Restaurant1){
        (document.getElementById("restaurantsRow") as HTMLElement).innerHTML += val.display();
    }


class RestaurantsExtended extends Restaurants{
    constructor(city:string, zipCode:number, address:string, image: string, telephoneNumber: string, cuisine: string, webAddress: string, restaurantName:string  ){
        super(city, zipCode, address, image,telephoneNumber, cuisine, webAddress, restaurantName );
        this.telephoneNumber= telephoneNumber;
        this.cuisine=cuisine;
        this.webAddress= webAddress;
        this.restaurantName=restaurantName;
    }
    displayEnd(){
        return `<li class="card-title"> ${this.restaurantName}
        <ul>
            <li><a class="link-primary" href="${this.webAddress}">${this.webAddress}</a></li>
            <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city},  ${this.telephoneNumber} </li>
            <li> ${this.cuisine} </li>
            <li><img src=" ${this.image}" class="card-img-bottom" alt="Image"></li>
            </ul>
          </li>
        </ul>
      </div>`
    }
}
let restaurant2= new RestaurantsExtended("Wien",1050,"Schönbrunner Str. 21","/img/sixta.png","+43(1)58 528 56 or +43(1)58 528 56","Austrian","www.sixta-restaurant.at/","Sixta");
let restaurant3= new RestaurantsExtended("Wien",1210,"Prager Str. 78","/img/babylon.jpg","+43(1)2700418","oriental","www.facebook.com/profile.php?id=100063469543650","Babylon");
let restaurant4= new RestaurantsExtended("Wien",1010,"Rotenturmstraße 15","/img/leBurger.png","+43(1)9076078","austrian","www.leburger.at","Le Burger");

const Restaurants2:Array<RestaurantsExtended>=[restaurant2,restaurant3,restaurant4];
for(let val of Restaurants2){
    (document.getElementById("restaurantsRow") as HTMLElement).innerHTML += val.display();

}




// Extended Class Events from Locations

    class Events extends Locations{
        EventDate: string;
        EventTime: string;
        Price: number;
        eventName:string;
        webAddress:string;

        constructor(city:string, zipCode:number, address:string, image: string, EventDate: string, EventTime: string, Price: number, eventName:string, webAddress:string ){
            super(city, zipCode, address, image);
            this.EventDate= EventDate;
            this.EventTime= EventTime;
            this.Price= Price;
            this.eventName= eventName;
            this.webAddress= webAddress;
        }
        displayEnd(){
            return `<li class="card-title"> ${this.eventName}
            <ul>
                <li><a class="link-primary" href="${this.webAddress}">${this.webAddress}</a></li>
                <li> ${this.EventDate}. ${this.EventTime} </li>
                <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city} </li>
                <li> ${this.Price} EUR </li>
                <li><img src=" ${this.image}" class="card-img-bottom" alt="Image"></li>
                </ul>
              </li>
            </ul>
          </div>`
        }
    }

    let event1= new Events("Wien",1150,"Wiener Stadthalle, Halle F, Roland Rainer Platz 1","/img/Kris.jpg","Fr, 15.11.2021","20:00",58.50,"Kris Kristofferson","http://kriskristofferson.com");
    let event2= new Events("Wien",1150,"Wiener Stadthalle - Halle D, Roland Rainer Platz 1","/img/Lenny.jpg","Sat, 09.12.2029 -","19:30",47.80,"Lenny Kravitz","www.lennykravitz.com");
    let event3= new Events("Wien",1020,"Ernst Happel Stadion","/img/guns&roses2.jpg","Wed, 13.07.2022","20:00",158,"Guns & Roses","https://www.gunsnroses.com/");
    let event4= new Events("St. Pölten",3100,"Kelsengasse 9","/img/frequency2.jpg","Thu, 18.08.2022","20:00",199.99,"Frequency Festival","https://www.frequency.at/");



    const events:Array<Events>=[event1,event2,event3,event4];
    for(let val of events){
        (document.getElementById("eventsRow") as HTMLElement).innerHTML += val.display();
    }

