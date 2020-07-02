import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ForoPage } from './foro.page';

import {AssistantComponent} from '../../Adicionales/Bot-Ininity/assistant/assistant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ForoPage
      }
    ])
  ],
  entryComponents: [AssistantComponent],
  declarations: [ForoPage, AssistantComponent]
})
export class ForoPageModule {}
