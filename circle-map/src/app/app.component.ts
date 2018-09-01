import { Component , ViewChild , ElementRef , NgZone , OnInit} from '@angular/core';
import { MouseEvent ,  MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('search') public searchElement:ElementRef;
  markers=[];
  zoom: number = 1;
  lat: number = 23.361525;
  lng: number = 85.3471233333333;
  icon:Object;
  origin:any;
  destination:any;
  type:String;
  color:String;
    constructor(private mapsApiLoader:MapsAPILoader ,private ngZone:NgZone){
        this.icon = {
          url: '../assets/car.jpg',
          scaledSize: {
            width: 50,
            height: 50,
          }
        }
        this.origin={lat:23.361525 , lng:85.3471233333333};
        this.destination={lat:23.3775816666667 , lng:85.3293216666667}
        this.type="roadmap";
    }
    ngOnInit(){
      //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓color change of circle↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      var colorBtns=document.getElementsByClassName("color");
      for(let i = 0 ; i<colorBtns.length; i++){
        colorBtns[i].addEventListener("click",(event)=>{
          this.color=event.target.value;
        });
      }
      //↑↑↑↑↑↑↑↑↑↑↑↑color change of circle↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

      //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓auto address complete↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
      this.mapsApiLoader.load().then(
        ()=>{
          let autocomplete=new google.maps.places.Autocomplete(this.searchElement.nativeElement, {types:["address"]});
          autocomplete.addListener("place_changed",()=>{
            this.ngZone.run(()=>{
              let place:google.maps.places.PlaceResult=autocomplete.getPlace();
              if(place.geometry===undefined || place.geometry ===null){
                return;
              }
            });
          })
        });
        //↑↑↑↑↑↑↑↑↑↑↑↑auto address complete↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

        var mapChangeBtns=document.getElementsByClassName("mapChange");
        for(let i=0; i<mapChangeBtns.length; i++){
          mapChangeBtns[i].addEventListener("click" , (event)=>{
            console.log("button is " , event.target.value);
            this.type=event.target.value;
          })
        }
    }
    
    // roadmapType(){
    //   this.type="roadmap";
    // }
    // hybridType(){
    //   this.type="hybrid";
    // }
    // satelliteType(){
    //   this.type="satellite";
    // }
    // terrainType(){
    //   this.type="terrain";
    // }
    mapClicked(event: MouseEvent){
        this.markers.push({
          lat:event.coords.lat,
          lng:event.coords.lng
        });
        length=this.markers.length;
        this.destination={lat:this.markers[length-1].lat , lng:this.markers[length-1].lng};
    }
    direction(start,  end){
      this.origin=start.value;
      this.destination=end.value;
    }
    clickedMarker(){
      alert("click on marker");
    }
}
