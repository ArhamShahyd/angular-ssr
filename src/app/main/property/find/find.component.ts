import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/service/property.service';
import { Utils } from 'utils';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CommunicationService } from 'src/app/service/communication.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  title: string = 'Search Property';
  public searcRes: any;
  public searchFound: boolean = false;
  public searchBounds: boolean = false;
  public searchResults: any;
  public searchResultsOriginal: any;
  public p: any;
  public latitude: any;
  public longitude: any;
  public searchMarkerProperty: any;
  public currentCenter:any;
  public newBound : any;
  public searchParams:any;
  // public selectedMarker: any;
  public features = [
    {name: 'Air Conditioner', value: 'Air_conditioner', checked: false},
    {name: 'Balcony Deck', value: 'Balcony_deck', checked: false},
    {name: 'Furnished', value: 'Furnished', checked: false},
    {name: 'Hardwood Floor', value: 'Hardwood_floor', checked: false},
    {name: 'Wheelchair Access', value: 'Wheelchair_access', checked: false},
    {name: 'Garage Parking', value: 'Garage_parking', checked: false},
    {name: 'Off Street Parking', value: 'Off_street_parking', checked: false},
    {name: 'Central Heating', value: 'Central_heating', checked: false},
    {name: 'Laundry Room', value: 'Laundry_room', checked: false},
    {name: 'Swimming Pool', value: 'Swimming_pool', checked: false},
    {name: 'Window Covering', value: 'Window_covering', checked: false},
    {name: 'Places to Seat', value: 'Places_to_seat', checked: false},
  ];
  public bathroom = [
    {value: '0', id: 'baths-options-0'},
    {value: '1', id: 'baths-options-1'},
    {value: '2', id: 'baths-options-2'},
    {value: '3', id: 'baths-options-3'},
    {value: '4', id: 'baths-options-4'},
    {value: '5', id: 'baths-options-5'},
  ];
  public bedroom = [
    {value: '0', id: 'bed-options-0'},
    {value: '1', id: 'beds-options-1'},
    {value: '2', id: 'beds-options-2'},
    {value: '3', id: 'beds-options-3'},
    {value: '4', id: 'beds-options-4'},
    {value: '5', id: 'beds-options-5'},
  ];




  constructor(
    private propertyService: PropertyService,
    private communicate: CommunicationService,
    private router: Router,
    private titleService: Title,
    private meta: Meta
  ) {
    this.titleService.setTitle( this.title );
   }

  ngOnInit() {
    this.communicate.currentMessage.subscribe(data => {
      this.searchParams = data;
      // console.log('find search', data);
      // this.searchProperty(data);
    });
  }



  placeMarker(bounds) {
    this.newBound = bounds;
    // const NorthWest: any = [bounds.getNorthEast().lng(), bounds.getSouthWest().lat()];
    // const SouthEst: any = [bounds.getSouthWest().lng(), bounds.getNorthEast().lat()];

    /*if (this.searchResultsOriginal) {
      console.log("here......");
      this.searchBounds = false;
      this.searchResults = this.searchResultsOriginal.filter(property => {
        if (property.latitude && property.longitude) {
          const propertyMarker: any = {};
          propertyMarker.lat = bounds.getSouthWest().lat();
          propertyMarker.lng = bounds.getNorthEast().lng();
          this.newBound = bounds;
          // this.propertyService.searchMarkers(propertyMarker).subscribe(data => {
          //   console.log('data', data);
          //   this.searchMarkerProperty = data;
          //   this.searchResults = this.searchMarkerProperty.property;
          // });
          const boundMarker = {lat: property.latitude, lng: property.longitude};
          return bounds.contains(boundMarker);
        } else {
          return false;
        }
      });
    }*/
  }

  centerChanged(center){
    // console.log("center changed.....");
    this.currentCenter = center;
  }

  mapIsReady() {
    // console.log("Map is ready.....");
  }

  idleHandler(){
    // console.log("idle handler...",this.newBound);
    this.searchProperty(this.searchParams);
  }



  searchProperty(param) {
    const searchForm: any = {};
    searchForm.location = param.location;
    searchForm.type = param.type;
    searchForm.country = param.country;
    searchForm.features = param.features;
    searchForm.minPrice = param.minPrice;
    searchForm.maxPrice = param.maxPrice;
    searchForm.minArea = param.minArea;
    searchForm.maxArea = param.maxArea;
    searchForm.title = param.propertyTitle;
    searchForm.bathrooms = param.bath;
    searchForm.bedrooms = param.bed;
    searchForm.homeType = param.homeType;
    searchForm.yearBuildMin = param.yearBuildMin;
    searchForm.yearBuildMax = param.yearBuildMax;
    searchForm.latitude = param.latitude;
    searchForm.longitude = param.longitude;
    searchForm.bound = this.newBound;
    searchForm.features = this.features.filter(opt => opt.checked).map(opt => opt.name);

    Utils.blockPage();
    this.propertyService.searchProperty(searchForm).subscribe( data => {
      // console.log('data', data);
      Utils.unblockPage();
      this.searcRes = data;
      // this.searchBounds = true;
      this.searchFound = true;
      this.searchResults = this.searcRes.property;
      this.searchResultsOriginal = this.searcRes.property;
      this.latitude = this.searchResults.latitude;
      this.longitude = this.searchResults.longitude;
      // this.searchResults.forEach(response => {
      // this.latitude = response.latitude;
      // this.longitude = response.longitude;
      // });
    });
  }

}
