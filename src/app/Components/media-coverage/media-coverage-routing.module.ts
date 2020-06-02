import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MediaCoverageComponent } from './media/media-coverage.component';

const routes: Routes = [{ path: '', component: MediaCoverageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaCoverageRoutingModule {}
