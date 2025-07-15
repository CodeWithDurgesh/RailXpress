import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareUiRoutingModule } from './share-ui-routing.module';
import { ShareUiComponent } from './share-ui.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonModule, PanelMenuModule, DrawerModule],
  exports: [ButtonModule, PanelMenuModule, DrawerModule],
})
export class ShareUiModule {}
