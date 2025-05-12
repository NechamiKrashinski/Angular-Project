import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ICellRendererAngularComp } from "ag-grid-angular";
import type { ColDef, ICellRendererParams } from "ag-grid-community";
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { UsersDataService } from '../data/users-data.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<button (click)="buttonClicked()">Push Me!</button>`,
})
export class CustomButtonComponent implements ICellRendererAngularComp {
  constructor(private dialog: MatDialog) {}

  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }

  buttonClicked() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { name: "aaa", animal: "bbbb" },
    });
  }
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'], // תיקון: 'styleUrls' ולא 'styleUrl'
})
export class UserComponent {
  rowData: any[] = [];

  constructor(userData: UsersDataService) {
    this.rowData = userData.getAllUsers();
  }

  colDefs: ColDef[] = [
    { field: "fullName", filter: 'agTextColumnFilter' },
    { field: "phone", filter: 'agTextColumnFilter' },
    { field: "password", filter: 'agTextColumnFilter' },
    { field: "lessonId", filter: 'agNumberColumnFilter' },
    { field: "price", filter: 'agNumberColumnFilter' },
    { field: "isPaid", filter: 'agBooleanColumnFilter' },
    { field: "role", filter: 'agTextColumnFilter' },
    { field: "button", cellRenderer: CustomButtonComponent },
  ];
}

@Component({
  selector: 'dialog-app',
  templateUrl: '../dialog/dialog.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
