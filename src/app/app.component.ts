import { Component, OnInit } from '@angular/core';
import { RecipeManagerService } from './recipe-manager.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [RecipeManagerService, LoggingService]
})
export class AppComponent {

}
