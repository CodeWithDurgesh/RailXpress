import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { ShareUiModule } from '../../modules/share-ui/share-ui.module';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [AdminComponent, SidemenuComponent],
  imports: [CommonModule, AdminRoutingModule, ShareUiModule, PanelMenuModule],
})
export class AdminModule {}
