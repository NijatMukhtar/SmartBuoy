


var queryString = decodeURIComponent(window.location.search);
queryString = queryString.substring(1);
var queries = queryString.split("&");
var split = queries[0].split("=")

function SetMap(city){

    const Vana = [43.2141,27.9147] 
    const Baku = [40.37767,49.867092] 

    const BakuBeaches = [
    [40.3002,49.7724],[40.3051,49.8038],[40.3028,49.8130],[40.5772,50.0639],[40.3838,49.8758],[40.5189,50.1233],[40.5341,50.1084],[40.5878,50.0640],[40.3050,49.8052],[40.5005,50.2212]
    ];

    const VanaBeaches = [[43.2000,27.9230],[43.2360,28.0158],[43.2191,27.9810],[43.2098,27.9411],[43.1433,27.9401],[43.2837,28.0449],[43.1779,27.9118],[43.3697,28.0859],[43.3037,28.0526],[43.2495,28.0285]]

    const Bakubeachnames = ["Shikh Beach","Mambo Beach Club","1001 Gecə Çimərliyi","Bilgah Beach Hotel","Blue Wave Beach Resort","Buzovna beach","Sunny Beach Zagulba","Amburan Beach Club","Dostluq Cimerlik","Mayak Beach"]

    const Vanabeachnames = ["Varna beach","Sahara beach","Trakata beach","Rappongi Beach","Fichoza Beach Veteran","Beach Golden Sands","Asparuhovo beach","Albena Beach","Nirvana Beach","Noi Beach"
    ]
    
    const Bakubeachinfo =["Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK"]

    const Vanabeachinfo =["Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK","Dalga yuksekliyi: 1.2m</br> Temperatur: 22C</br> Temizlik: OK"]

    const myIcon = L.icon({
        iconUrl: 'test2_files/marker-icon.png',
        iconSize: [20, 20],
        
    });

    if(city == "Baku"){
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
SetMap(split[1])
