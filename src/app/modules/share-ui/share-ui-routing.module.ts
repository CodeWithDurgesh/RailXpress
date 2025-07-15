import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareUiComponent } from './share-ui.component';

const routes: Routes = [{ path: '', component: ShareUiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareUiRoutingModule { }
