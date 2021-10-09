        // Parent class Locations

class Locations{
    city: string;
    zipCode: number;
    address: string;
    image: string;
    date:string;
    time:string;

    constructor(city:string, zipCode:number, address:string, image: string, date:string, time:string){
        this.city= city;
        this.zipCode= zipCode;
        this.address= address;
        this.image= image;
        this.date=date;
        this.time=time;
    }
    displayStart(){
        return `<div class="card col-lg-3 col-md-5 m-0">
        <ul class="cardbody">`
    }    
    displayEnd(){
        return `<li class="card-title "> Card Title
        <ul>
              <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city}</li>
              <li><img src=" ${this.image}" class="card-img-bottom " alt="Image"></li>
              <li class="card-text"> Created: ${this.date},${this.time}</li>
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

    constructor(city:string, zipCode:number, address:string, image: string, date:string, time:string, placeName:string){
        super(city,zipCode,address,image,date,time);
        this.placeName=placeName;
    }
    displayEnd(){
        return `<li class="fw-bold "><span class="listSpan"> ${this.placeName}</span>
        <ul>
              <li class="card-text"> ${this.address}, ${this.zipCode}  ${this.city}</li>
              <li class="ImgContainer">
                 
                     <img src=" ${this.image}" class="img-fluid cardImg" alt="Image">
              </li>
              
              <li class="card-text"> Created: ${this.date},${this.time}</li>
            </ul>
          </li>
        </ul>
      </div>`
    }
}

let place1= new places("Vienna",1010,"Karlsplatz 1","/img/st.charlesChurch.jpg","24.03.2021","12:45","St.Charles Church");
let place2= new places("Wien",1130,"Maxingstraße 13b","/img/Zoo.jpg","25.03.2021","11:00","Zoo");
let place3= new places("Wien",1070,"Museumsplatz 1","/img/museumQaurtier.jpg","27.03.2021","09:30","Museum Quartier");
let place4= new places("Wien",1020,"Praterstern","/img/praterstern.jpg","30.03.2021","14:00","Praterstern Park");

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

        constructor(city:string, zipCode:number, address:string, image: string, date:string, time:string, telephoneNumber: string, cuisine: string, webAddress: string, restaurantName:string  ){
            super(city, zipCode, address, image, date, time);
            this.telephoneNumber= telephoneNumber;
            this.cuisine=cuisine;
            this.webAddress= webAddress;
            this.restaurantName=restaurantName;
        }
        displayEnd(){
            return `<li class="fw-bold CardFont"> ${this.restaurantName}
            <ul>
                  <li class="card-text"> ${this.address}<p class="m-0"> ${this.zipCode}  ${this.city}</p>
                  <P class="mb-0"> ${this.telephoneNumber} </p> </li>
                  <li><a class="link-primary " href="${this.webAddress}">${this.webAddress}</a></li>
                  <li> ${this.cuisine} </li>
                  <li class="ImgContainer">
                  
                        <img src=" ${this.image}" class="img-fluid cardImg" alt="Image">
                  </li>
                  <li class="card-text"> Created: ${this.date},${this.time}</li>
                </ul>
              </li>
            </ul>
          </div>`
        }
    }


    let restaurant1= new Restaurants("Vienna",1050,"Kettenbrückengasse 19","/img/lemonLeaf.png","24.03.2021","12:45","+43(1)5812308","Asian","www.lemonleaf.at","Lemon Leaf Thai Restaurant");
    let restaurant2= new Restaurants("Wien",1050,"Schönbrunner Str. 21","/img/sixta.png","24.03.2021","12:45","+43(1)58 528 56 or +43(1)58 528 56","Austrian","www.sixta-restaurant.at","Sixta");
    let restaurant3= new Restaurants("Wien",1010,"Rotenturmstraße 15","/img/leBurger.png","24.03.2021","12:45","+43(1)9076078","Austrian","www.leburger.at","Le Burger");
    let restaurant4= new Restaurants("Wien",1030,"Rennweg 92","/img/babylon.jpg","24.03.2021","12:45","+43(1)7980110","Oriental","www.restaurant-babylon3.eatbu.com","Babylon");
    


    const Restaurant:Array<Restaurants>=[restaurant1,restaurant2,restaurant3,restaurant4];

    for(let val of Restaurant){
        (document.getElementById("restaurantsRow") as HTMLElement).innerHTML += val.display();
    }







// Extended Class Events from Locations

    class Events extends Locations{
        EventDate: string;
        EventTime: string;
        Price: number;
        eventName:string;
        webAddress:string;

        constructor(city:string, zipCode:number, address:string, image: string, date:string, time:string, EventDate: string, EventTime: string, Price: number, eventName:string, webAddress:string ){
            super(city, zipCode, address, image, date, time);
            this.EventDate= EventDate;
            this.EventTime= EventTime;
            this.Price= Price;
            this.eventName= eventName;
            this.webAddress= webAddress;
        }
        displayEnd(){
            return `<li class=" fw-bold"> ${this.eventName}
            <ul>
                <li><a class="link-primary cardFont" href="${this.webAddress}">${this.webAddress}</a></li>
                <li> ${this.EventDate}. ${this.EventTime} </li>
                <li class="card-text cardFont"> ${this.address}, ${this.zipCode}  ${this.city} </li>
                <li> ${this.Price} EUR </li>
                <li class="ImgContainer">
                    <div>
                         <img src=" ${this.image}" class=" img-fluid cardImg" alt="Image"></div>
                </li>
                <li class="card-text cardFont"> Created: ${this.date},${this.time}</li>
                </ul>
              </li>
            </ul>
          </div>`
        }
    }

    let event1= new Events("Wien",1150,"Wiener Stadthalle, Halle F, Roland Rainer Platz 1","/img/Kris.jpg","24.03.2021","12:45","Fr, 15.11.2021","20:00",58.50,"Kris Kristofferson","http://kriskristofferson.com");
    let event2= new Events("Wien",1150,"Wiener Stadthalle - Halle D, Roland Rainer Platz 1","/img/Lenny.jpg","24.03.2021","12:45","Sat, 09.12.2029 -","19:30",47.80,"Lenny Kravitz","www.lennykravitz.com");
    let event3= new Events("Wien",1020,"Ernst Happel Stadion,Prater Stadion","/img/guns&roses2.jpg","24.03.2021","12:45","Wed, 13.07.2022","20:00",158,"Guns & Roses","https://www.gunsnroses.com/");
    let event4= new Events("St. Pölten",3100,"Kelsengasse 9,VAZ Straße","/img/frequency2.jpg","24.03.2021","12:45","Thu, 18.08.2022","20:00",199.99,"Frequency Festival","https://www.frequency.at/");



    const events:Array<Events>=[event1,event2,event3,event4];
    for(let val of events){
        (document.getElementById("eventsRow") as HTMLElement).innerHTML += val.display();
    }






    