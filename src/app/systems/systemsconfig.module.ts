import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SystemsconfigRoutingModule } from './systemsconfig-routing.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// import { MatBadgeModule } from '@angular/material/badge';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatListModule } from '@angular/material/list';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatCardModule } from '@angular/material/card';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatTabsModule } from '@angular/material/tabs';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { SystemsconfigService } from './systemsconfig.service';
import { EditSystemconfigComponent } from './edit-systemconfig/edit-systemconfig.component';

@NgModule({
  declarations: [
  EditSystemconfigComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    SystemsconfigRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SystemsconfigService],
})
export class SystemsconfigModule {}
