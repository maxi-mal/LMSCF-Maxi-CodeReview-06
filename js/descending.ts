
class basicContent{
	created="";
	title="";
	img="";
	address="";
	city="";
	zip="";
	cuisine="";	
	website="";
	phone="";	
	constructor(title,img,address,city,zip,cuisine,created,website,phone){
		this.title=title;
		this.img=img;
		this.address=address;
		this.city=city;
		this.zip=zip;
		this.cuisine=cuisine;
		this.created=created;
		this.website=website;
		this.phone=phone;
	}
};
class Outside extends basicContent {
	yard;
	constructor(title,img,address,city,zip,cuisine,created,website,phone,yard){
		super(title,img,address,city,zip,cuisine,created,website,phone);
		this.yard = yard;
	}
	display(){
		return `<div class="col-lg-4 col-md-6 mb-4">
	                <div class="card h-100">
	                    <a href="#"><img class="card-img-top" src="${this.img}" alt=""></a>
	                    <div class="card-body">
	                        <h4 class="card-title">
	                            <a class="colorIcon fontCardTitle" href="${this.website}">${this.title}</a>
	                        </h4>
	                        <h5 class="fontCardTitle d-flex justify-content-start">${this.cuisine}</h5>
	                        <hr>
	                        <p class="card-text"><i class="colorIcon fas fa-map-marked-alt"></i> ${this.address}, ${this.city}, ${this.zip}</p>
							<p class="card-text"><i class="colorIcon fas fa-phone-square-alt"></i> ${this.phone}</p>
							<p class="card-text"><span class="glyphicon glyphicon-ok-sign"></span> ${this.yard}</p>
	                    </div>
	                    <div class="card-footer">
	                        <small class="text-muted">${this.created}</small>
	                    </div>
	                </div>
	            </div>`;
	}
}
class Brunch extends basicContent {
	day;
	time;
	constructor(title,img,address,city,zip,cuisine,created,website,phone,day,time){
		super(title,img,address,city,zip,cuisine,created,website,phone);
		this.day = day;
		this.time = time;
	}
	display(){
		return `<div class="col-lg-4 col-md-6 mb-4">
	                <div class="card h-100">
	                    <a href="#"><img class="card-img-top" src="${this.img}" alt=""></a>
	                    <div class="card-body">
	                        <h4 class="card-title">
	                            <a class="colorIcon fontCardTitle" href="${this.website}">${this.title}</a>
	                        </h4>
	                        <h5 class="fontCardTitle d-flex justify-content-start">${this.cuisine}</h5>
	                        <hr>
	                        <p class="card-text"><i class="colorIcon fas fa-map-marked-alt"></i> ${this.address}, ${this.city}, ${this.zip}</p>
							<p class="card-text"><i class="colorIcon fas fa-phone-square-alt"></i> ${this.phone}</p>
							<p class="card-text"><i class="fa fa-calendar" aria-hidden="true"></i> ${this.day}</p>
							<p class="card-text"><span class="glyphicon glyphicon-time"></span> ${this.time}</p>
	                    </div>
	                    <div class="card-footer">
	                        <small class="text-muted">${this.created}</small>
	                    </div>
	                </div>
	            </div>`;
	};
};
class openlate extends basicContent {
	openlate;
	constructor(title,img,address,city,zip,cuisine,created,website,phone,openlate){
		super(title,img,address,city,zip,cuisine,created,website,phone);
		this.openlate = openlate;
	}
	display(){
		return `<div class="col-lg-4 col-md-6 mb-4">
	                <div class="card h-100">
	                    <a href="#"><img class="card-img-top" src="${this.img}" alt=""></a>
	                    <div class="card-body">
	                        <h4 class="card-title">
	                            <a class="colorIcon fontCardTitle" href="${this.website}">${this.title}</a>
	                        </h4>
	                        <h5 class="fontCardTitle d-flex justify-content-start">${this.cuisine}</h5>
	                        <hr>
	                       <p class="card-text"><i class="colorIcon fas fa-map-marked-alt"></i> ${this.address}, ${this.city}, ${this.zip}</p>
							<p class="card-text"><i class="colorIcon fas fa-phone-square-alt"></i> ${this.phone}</p>
							<p class="card-text"><span class="glyphicon glyphicon-time"></span> ${this.openlate}</p>
	                    </div>
	                    <div class="card-footer">
	                        <small class="text-muted">${this.created}</small>
	                    </div>
	                </div>
	            </div>`;
	};
};

let class2_position3 	= new Outside("Mill", "../img/mill.png","Millergasse 32", "Vienna", 1060, "Austrian Modern Cuisine", new Date(2019, 7, 25 ), "http://www.mill32.at/", "tel 01 966 40 73",  "Sunny yard for 50+ people",);
let class2_position4 	= new Outside("Kleines Cafe", "../img/kleinescafe.png", "Franziskanerplatz 3", "Vienna", 1010, "Traditional and Mediterranean", new Date(2019, 2, 23 ), "www.falter.at/", "tel 0664 1774563", "Seating in the sunny square for 15 people");
let class2_position5 	= new Outside("Eduard","../img/eduard.png","Sparkassenplatz 1", "Vienna", 1150, "Austrian Modern Cuisine", new Date(2019, 10, 1 ), "https://das-eduard.jimdofree.com/", "tel +01 8922978", "sunny and shady yard for 30+ people");

let class3_position6 	= new openlate("Restaurant Marks","../img/marks.png","Neustiftgasse 82", "Vienna", 1070, "International Cuisine", new Date(2019, 2, 3 ), "http://www.restaurant-marks.at", "tel 01 7329372", "all day");
let class3_position7 	= new openlate("Café Ansari","../img/ansari.png","Praterstrasse 15", "Vienna", 1020, "Georgian Cuisine", new Date(2019, 12, 1 ), "http://www.ansari.at", "tel 01 973982", "breakfast until 3pm");
let class3_position8 	= new openlate("Turnhalle","../img/brick5.png","Herklotzgasse 21", "Vienna", 1150, "Seasonal and Healthy Cuisine", new Date(2019, 2, 20 ), "http://www.turnhalle.at", "tel 01 5463728", "breakfast until 2pm");

let class4_position9 	= new Brunch("Weltcafe","../img/weltcafe.png", "Schwarzspanierstrasse 15", "Vienna", 1090, "Food from all over the world", new Date(2019, 6, 23 ), "http://www.weltcafe.at/", "tel 01 8739028", "Saturday", "11 - 3pm");
let class4_position10 	= new Brunch("Propeller","../img/propeller.png", "Krongasse 22/1/III", "Vienna", 1050, "Mediterranean Cuisine", new Date(3019, 11, 23 ), "https://propeller.wien", "tel 01 9739029", "Sunday", "10 - 2pm");
let class4_position11 	= new Brunch("LaMercerie","../img/lamercerie.png", "Berggasse 25", "Vienna", 1090, "French Cuisine", new Date(2019, 8, 23 ),"http://www.lamercerie.at", "tel 01 97209279", "Sunday", "9 - 13pm");

var arrayfordisplay1: any[] = [
class2_position3,class2_position4,class2_position5];
arrayfordisplay1.sort((a,b)=>b.created-a.created);


for( let val of arrayfordisplay1){
	document.getElementById("result1").innerHTML += val.display();
}


var arrayfordisplay2: any[] = [
class3_position6,class3_position7,class3_position8];
arrayfordisplay2.sort((a,b)=>b.created-a.created);


for( let val of arrayfordisplay2){
	document.getElementById("result3").innerHTML += val.display();
}

var arrayfordisplay3: any[] = [
class4_position9,class4_position10,class4_position11
];
arrayfordisplay3.sort((a,b)=>b.created-a.created);


for( let val of arrayfordisplay3){
	document.getElementById("result2").innerHTML += val.display();
}


