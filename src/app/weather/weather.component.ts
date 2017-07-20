import { Component, OnInit } from '@angular/core';
import { Http,Response } from "@angular/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private http:Http) { }
  ngOnInit() {
  }
  cityName = "";
  stateName = ""
  name ="";
  weather;
  weatherImg;
  icon;//cloudy
  iconUrl;//cloudyimg
  searchCity(){
    console.log(this.cityName);
    const apiKey = 'd97f9d1c1b745a02';
    const _urlW = `http://api.wunderground.com/api/${apiKey}/conditions/q/${this.stateName}/${this.cityName}.json`;
    this.http.get(_urlW)
    .subscribe(
      (res:Response)=>{
        const weatherCity = res.json();
        this.name = weatherCity.current_observation.display_location.full;
        this.weather = weatherCity.current_observation.temperature_string;
        this.icon = weatherCity.current_observation.icon;
        this.iconUrl = weatherCity.current_observation.icon_url;
      }
    )
  }

}
