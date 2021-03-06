import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatCardModule, MatExpansionModule, MatBadgeModule, MatTableModule, MatGridListModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatInputModule, MatSidenavModule,
    MatListModule, MatMenuModule, MatCardModule, MatExpansionModule, MatBadgeModule, MatTableModule, MatGridListModule
  ]
})

export class MaterialModule {

}