
var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var split = queries[0].split("=");
var globalCity;
    const Vana = [43.2141,27.9147] 
    const Baku = [40.37767,49.867092] 

    const BakuBeaches = [
    [40.3002,49.7724],[40.3051,49.8038],[40.3028,49.8130],[40.5772,50.0639],[40.3838,49.8758],[40.5189,50.1233],[40.5341,50.1084],[40.5878,50.0640],[40.3050,49.8052],[40.5005,50.2212]
    ];

    const VanaBeaches = [[43.2000,27.9230],[43.2360,28.0158],[43.2191,27.9810],[43.2098,27.9411],[43.1433,27.9401],[43.2837,28.0449],[43.1779,27.9118],[43.3697,28.0859],[43.3037,28.0526],[43.2495,28.0285]]

    const Bakubeachnames = ["Shikh Beach","Mambo Beach Club","1001 Gecə Çimərliyi","Bilgah Beach Hotel","Blue Wave Beach Resort","Buzovna beach","Sunny Beach Zagulba","Amburan Beach Club","Dostluq Cimerlik","Mayak Beach"]

    const Vanabeachnames = ["Varna beach","Sahara beach","Trakata beach","Rappongi Beach","Fichoza Beach Veteran","Beach Golden Sands","Asparuhovo beach","Albena Beach","Nirvana Beach","Noi Beach" ]
    
    const Bakubeachinfo =["Wave Height: 1.2m</br> Temperature: 22C</br> Cleanliness Level: OK","Wave Height: 0.6m</br> Temperature: 24C</br> Cleanliness Level: Good","Wave Height: 1.5m</br> Temperature: 21C</br> Cleanliness Level: Excellent","Wave Height: 4.2m</br> Temperature: 19C</br> Cleanliness Level: OK","Wave Height: 1.3m</br> Temperature: 21C</br> Cleanliness Level: OK","Wave Height: 0.7m</br> Temperature: 26C</br> Cleanliness Level: OK","Wave Height: 1.3m</br> Temperature: 28C</br> Cleanliness Level: OK","Wave Height: 1.3m</br> Temperature: 23C</br> Cleanliness Level: Good","Wave Height: 1.6m</br> Temperature: 23C</br> Cleanliness Level: OK","Wave Height: 1.3m</br> Temperature: 12C</br> Cleanliness Level: OK"]
    const Vanabeachinfo =["Wave Height: 1.1m</br> Temperature: 22C</br> Cleanliness Level: Bad","Wave Height: 1.6m</br> Temperature: 12C</br> Cleanliness Level: OK","Wave Height: 0.9m</br> Temperature: 24C</br> Cleanliness Level: OK","Wave Height: 2.2m</br> Temperature: 23C</br> Cleanliness Level: Good","Wave Height: 1.5m</br> Temperature: 22C</br> Cleanliness Level: OK","Wave Height: 0.6m</br> Temperature: 23C</br> Cleanliness Level: OK","Wave Height: 1.1m</br> Temperature: 16C</br> Cleanliness Level: OK","Wave Height: 1.1m</br> Temperature: 25C</br> Cleanliness Level: OK","Wave Height: 1.4m</br> Temperature: 21C</br> Cleanliness Level: Bad","Wave Height: 0.9m</br> Temperature: 21C</br> Cleanliness Level: OK"]

function SetMap(city){
    globalCity = city
    const myIcon = L.icon({
        iconUrl: 'test2_files/marker-icon.png',
        iconSize: [20, 30],
    });
    
    if(city == "Baku"){
    
        for (let i = 0; i < Bakubeachnames.length; i++) {
            document.getElementById(i).innerHTML= Bakubeachnames[i];
          }

        var map = L.map('map').setView([Baku[0],Baku[1]], 12);

        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 13,
        }).addTo(map);
    
        for(let i=0;i<BakuBeaches.length;i++){
                let marker = L.marker([BakuBeaches[i][0],BakuBeaches[i][1]], {icon: myIcon}).addTo(map);
                marker.bindPopup("<b>"+Bakubeachnames[i]+"</b></br>"+Bakubeachinfo[i]).openPopup();
        }

    }
    else{
    
        for (let i = 0; i < Vanabeachnames.length; i++) {
            document.getElementById(i).innerHTML= Vanabeachnames[i];
          }

        var map = L.map('map').setView([Vana[0],Vana[1]], 12);

        var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 13,
        }).addTo(map);
    
    
        for(let i=0;i<VanaBeaches.length;i++){
                let marker = L.marker([VanaBeaches[i][0],VanaBeaches[i][1]], {icon: myIcon}).addTo(map);
                marker.bindPopup("<b>"+Vanabeachnames[i]+"</b></br>"+Vanabeachinfo[i]).openPopup();
        } 
    }
    
}

function divClicked(id){

    var data = document.getElementById("data");
    if(globalCity == "Baku"){
        data.innerHTML = Bakubeachnames[id] + "<br>" + Bakubeachinfo[id];

    }
    else{
        data.innerHTML = Vanabeachnames[id] + "<br>" +Vanabeachinfo[id];
    }

    }
    
    

  

SetMap(split[1])
