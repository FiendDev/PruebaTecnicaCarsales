import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet,
    CommonModule,
    FormsModule,
  ],
})
export class AppComponent {
  
name = '';
data: any[] = [];
dataCaracter: any[] = [];
dataEpisode: any[] = [];
dataLocation: any[] = [];
caracterUrlAll: any[] = [];

msg: string | undefined;
msg1: string | undefined;
caracterUrl :string = "0"
caracterUrl1 :string = "0"


  constructor(  private http: HttpClient  ){}
 
      ngOnInit(){
        this.http.get('https://rickandmortyapi.com/api')
        .subscribe((data: any) => {
            this.data = data;
            console.log(data)
        })
      }


      getCaracter(){

        this.caracterUrl1 = this.caracterUrl
        console.log(this.caracterUrl1)
        this.http.get("https://rickandmortyapi.com/api/character")
        .subscribe((dataCaracter: any) => {
            this.dataCaracter = dataCaracter.results;
            console.log(dataCaracter)
        })
      }

      getCaracterAll(){

    
        console.log(this.caracterUrlAll)
        this.http.get("https://rickandmortyapi.com/api/character")
        .subscribe((caracterUrlAll: any) => {
            this.caracterUrlAll = caracterUrlAll.results;
            console.log(caracterUrlAll)
        })
      }


      getEpisodes(){

        
        console.log(this.dataEpisode)
        this.http.get("https://rickandmortyapi.com/api/episode")
        .subscribe((dataEpisode: any) => {
            this.dataEpisode = dataEpisode.results;
            console.log(dataEpisode)
        })
      }

      getLocation(){

        
        console.log(this.dataLocation)
        this.http.get("https://rickandmortyapi.com/api/location")
        .subscribe((dataLocation: any) => {
            this.dataLocation = dataLocation.results;
            console.log(dataLocation)
        })
      }
  
  
}


