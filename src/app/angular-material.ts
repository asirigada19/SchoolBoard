import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatCardModule, MatExpansionModule, MatBadgeModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatCardModule, MatExpansionModule, MatBadgeModule
  ]
})

export class MaterialModule {

}