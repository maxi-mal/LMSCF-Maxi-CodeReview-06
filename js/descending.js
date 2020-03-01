var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var basicContent = /** @class */ (function () {
    function basicContent(title, img, address, city, zip, cuisine, created, website, phone) {
        this.created = "";
        this.title = "";
        this.img = "";
        this.address = "";
        this.city = "";
        this.zip = "";
        this.cuisine = "";
        this.website = "";
        this.phone = "";
        this.title = title;
        this.img = img;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.cuisine = cuisine;
        this.created = created;
        this.website = website;
        this.phone = phone;
    }
    return basicContent;
}());
;
var Outside = /** @class */ (function (_super) {
    __extends(Outside, _super);
    function Outside(title, img, address, city, zip, cuisine, created, website, phone, yard) {
        var _this = _super.call(this, title, img, address, city, zip, cuisine, created, website, phone) || this;
        _this.yard = yard;
        return _this;
    }
    Outside.prototype.display = function () {
        return "<div class=\"col-lg-4 col-md-6 mb-4\">\n\t                <div class=\"card h-100\">\n\t                    <a href=\"#\"><img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\"></a>\n\t                    <div class=\"card-body\">\n\t                        <h4 class=\"card-title\">\n\t                            <a class=\"colorIcon fontCardTitle\" href=\"" + this.website + "\">" + this.title + "</a>\n\t                        </h4>\n\t                        <h5 class=\"fontCardTitle d-flex justify-content-start\">" + this.cuisine + "</h5>\n\t                        <hr>\n\t                        <p class=\"card-text\"><i class=\"colorIcon fas fa-map-marked-alt\"></i> " + this.address + ", " + this.city + ", " + this.zip + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-phone-square-alt\"></i> " + this.phone + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><span class=\"glyphicon glyphicon-ok-sign\"></span> " + this.yard + "</p>\n\t                    </div>\n\t                    <div class=\"card-footer\">\n\t                        <small class=\"text-muted\">" + this.created + "</small>\n\t                    </div>\n\t                </div>\n\t            </div>";
    };
    return Outside;
}(basicContent));
var Brunch = /** @class */ (function (_super) {
    __extends(Brunch, _super);
    function Brunch(title, img, address, city, zip, cuisine, created, website, phone, day, time) {
        var _this = _super.call(this, title, img, address, city, zip, cuisine, created, website, phone) || this;
        _this.day = day;
        _this.time = time;
        return _this;
    }
    Brunch.prototype.display = function () {
        return "<div class=\"col-lg-4 col-md-6 mb-4\">\n\t                <div class=\"card h-100\">\n\t                    <a href=\"#\"><img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\"></a>\n\t                    <div class=\"card-body\">\n\t                        <h4 class=\"card-title\">\n\t                            <a class=\"colorIcon fontCardTitle\" href=\"" + this.website + "\">" + this.title + "</a>\n\t                        </h4>\n\t                        <h5 class=\"fontCardTitle d-flex justify-content-start\">" + this.cuisine + "</h5>\n\t                        <hr>\n\t                        <p class=\"card-text\"><i class=\"colorIcon fas fa-map-marked-alt\"></i> " + this.address + ", " + this.city + ", " + this.zip + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-phone-square-alt\"></i> " + this.phone + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> " + this.day + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><span class=\"glyphicon glyphicon-time\"></span> " + this.time + "</p>\n\t                    </div>\n\t                    <div class=\"card-footer\">\n\t                        <small class=\"text-muted\">" + this.created + "</small>\n\t                    </div>\n\t                </div>\n\t            </div>";
    };
    ;
    return Brunch;
}(basicContent));
;
var openlate = /** @class */ (function (_super) {
    __extends(openlate, _super);
    function openlate(title, img, address, city, zip, cuisine, created, website, phone, openlate) {
        var _this = _super.call(this, title, img, address, city, zip, cuisine, created, website, phone) || this;
        _this.openlate = openlate;
        return _this;
    }
    openlate.prototype.display = function () {
        return "<div class=\"col-lg-4 col-md-6 mb-4\">\n\t                <div class=\"card h-100\">\n\t                    <a href=\"#\"><img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\"></a>\n\t                    <div class=\"card-body\">\n\t                        <h4 class=\"card-title\">\n\t                            <a class=\"colorIcon fontCardTitle\" href=\"" + this.website + "\">" + this.title + "</a>\n\t                        </h4>\n\t                        <h5 class=\"fontCardTitle d-flex justify-content-start\">" + this.cuisine + "</h5>\n\t                        <hr>\n\t                       <p class=\"card-text\"><i class=\"colorIcon fas fa-map-marked-alt\"></i> " + this.address + ", " + this.city + ", " + this.zip + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-phone-square-alt\"></i> " + this.phone + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><span class=\"glyphicon glyphicon-time\"></span> " + this.openlate + "</p>\n\t                    </div>\n\t                    <div class=\"card-footer\">\n\t                        <small class=\"text-muted\">" + this.created + "</small>\n\t                    </div>\n\t                </div>\n\t            </div>";
    };
    ;
    return openlate;
}(basicContent));
;
var class2_position3 = new Outside("Mill", "../img/mill.png", "Millergasse 32", "Vienna", 1060, "Austrian Modern Cuisine", new Date(2019, 7, 25), "http://www.mill32.at/", "tel 01 966 40 73", "Sunny yard for 50+ people");
var class2_position4 = new Outside("Kleines Cafe", "../img/kleinescafe.png", "Franziskanerplatz 3", "Vienna", 1010, "Traditional and Mediterranean", new Date(2019, 2, 23), "www.falter.at/", "tel 0664 1774563", "Seating in the sunny square for 15 people");
var class2_position5 = new Outside("Eduard", "../img/eduard.png", "Sparkassenplatz 1", "Vienna", 1150, "Austrian Modern Cuisine", new Date(2019, 10, 1), "https://das-eduard.jimdofree.com/", "tel +01 8922978", "sunny and shady yard for 30+ people");
var class3_position6 = new openlate("Restaurant Marks", "../img/marks.png", "Neustiftgasse 82", "Vienna", 1070, "International Cuisine", new Date(2019, 2, 3), "http://www.restaurant-marks.at", "tel 01 7329372", "all day");
var class3_position7 = new openlate("Café Ansari", "../img/ansari.png", "Praterstrasse 15", "Vienna", 1020, "Georgian Cuisine", new Date(2019, 12, 1), "http://www.ansari.at", "tel 01 973982", "breakfast until 3pm");
var class3_position8 = new openlate("Turnhalle", "../img/brick5.png", "Herklotzgasse 21", "Vienna", 1150, "Seasonal and Healthy Cuisine", new Date(2019, 2, 20), "http://www.turnhalle.at", "tel 01 5463728", "breakfast until 2pm");
var class4_position9 = new Brunch("Weltcafe", "../img/weltcafe.png", "Schwarzspanierstrasse 15", "Vienna", 1090, "Food from all over the world", new Date(2019, 6, 23), "http://www.weltcafe.at/", "tel 01 8739028", "Saturday", "11 - 3pm");
var class4_position10 = new Brunch("Propeller", "../img/propeller.png", "Krongasse 22/1/III", "Vienna", 1050, "Mediterranean Cuisine", new Date(3019, 11, 23), "https://propeller.wien", "tel 01 9739029", "Sunday", "10 - 2pm");
var class4_position11 = new Brunch("LaMercerie", "../img/lamercerie.png", "Berggasse 25", "Vienna", 1090, "French Cuisine", new Date(2019, 8, 23), "http://www.lamercerie.at", "tel 01 97209279", "Sunday", "9 - 13pm");
var arrayfordisplay1 = [
    class2_position3, class2_position4, class2_position5
];
arrayfordisplay1.sort(function (a, b) { return b.created - a.created; });
for (var _i = 0, arrayfordisplay1_1 = arrayfordisplay1; _i < arrayfordisplay1_1.length; _i++) {
    var val = arrayfordisplay1_1[_i];
    document.getElementById("result1").innerHTML += val.display();
}
var arrayfordisplay2 = [
    class3_position6, class3_position7, class3_position8
];
arrayfordisplay2.sort(function (a, b) { return b.created - a.created; });
for (var _a = 0, arrayfordisplay2_1 = arrayfordisplay2; _a < arrayfordisplay2_1.length; _a++) {
    var val = arrayfordisplay2_1[_a];
    document.getElementById("result3").innerHTML += val.display();
}
var arrayfordisplay3 = [
    class4_position9, class4_position10, class4_position11
];
arrayfordisplay3.sort(function (a, b) { return b.created - a.created; });
for (var _b = 0, arrayfordisplay3_1 = arrayfordisplay3; _b < arrayfordisplay3_1.length; _b++) {
    var val = arrayfordisplay3_1[_b];
    document.getElementById("result2").innerHTML += val.display();
}
