import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule,
    MatTreeModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatTabsModule, MatSidenavModule,
    MatTreeModule
  ]
})

export class MaterialModule {

}