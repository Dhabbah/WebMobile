import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  recipe: any;
  place: any;

  placeList = [];
  recipeList = [];

  geolocationPosition: any;
  currentLat: any;
  currentLng: any;

  constructor(private GetHttp: HttpClient) { }

  ngOnInit() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLng = position.coords.longitude;
      });
  }

  getNutrition() {
    if (this.recipe !== null) {
      this.GetHttp.get('https://api.edamam.com/search?q=' +
        this.recipe +
        '&app_id=cb5f3436&app_key=2cc8c65f0461bed6ea60cc1cb3074422&from=0&to=3')
        .subscribe((data: any) => {
          for (let i = 0; i < data.hits.length; i++) {
            this.recipeList[i] = {
              name: data.hits[i].recipe.label,
              shareAs: data.hits[i].recipe.shareAs,
              calories: data.hits[i].recipe.calories,
              icon: data.hits[i].recipe.image,
              Protein: data.hits[i].recipe.totalNutrients.PROCNT.quantity,
              fat: data.hits[i].recipe.totalNutrients.FAT.quantity,
              carbs: data.hits[i].recipe.totalNutrients.CHOCDF.quantity
            };
          }
        });
    }

    // https://developer.foursquare.com/docs/api/venues/search

    if (this.place !== null && this.place !== '' && this.recipe != null && this.recipe !== '') {
      this.GetHttp.get('https://api.foursquare.com/v2/venues/search' +
        '?client_id=RCIBJGLANJMKWZOVWGBOTNE3BNT4EUWTLFZVEY4LDJ104G32' +
        '&client_secret=ZVZ4QMBA03S4A1R3BVDFU14A5C0JIEBB3BKUMD3NTLWMXMWO' +
        '&v=20160215&limit=10' +
        '&near=' + this.place +
        '&query=' + this.recipe)
        .subscribe((data: any) => {
          for (let i = 0; i < data.response.venues.length; i++) {
            this.placeList[i] = {
              name: data.response.venues[i].name,
              // id: data.response.venues[i].id,
              location: data.response.venues[i].location
            };
          }

        });
    }
  }
}
