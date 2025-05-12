// import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
// import {FormsModule} from '@angular/forms';
// import {MatButtonModule} from '@angular/material/button';

// import {
//   MAT_DIALOG_DATA,
//   MatDialog,
//   MatDialogActions,
//   MatDialogClose,
//   MatDialogContent,
//   MatDialogRef,
//   MatDialogTitle,
// } from '@angular/material/dialog';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
// import { CustomButtonComponent } from '../user/user.component';

// // export interface DialogData {
// //   animal: string;
// //   name: string;
// // }

// // /**
// //  * @title Dialog Overview
// //  */
// // @Component({
// //   selector: 'dialog-overview-example',
// //   templateUrl: './dialog.component.html',
// //   standalone: true,
// //   imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
// //   changeDetection: ChangeDetectionStrategy.OnPush,
// // })
// // export class DialogOverviewExample {
// //   readonly animal = signal('');
// //   readonly name = model('');
// //   readonly dialog = inject(MatDialog);

// //   openDialog(): void {
// //     const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
// //       data: {name: this.name(), animal: this.animal()},
// //     });

// //     dialogRef.afterClosed().subscribe(result => {
// //       console.log('The dialog was closed');
// //       if (result !== undefined) {
// //         this.animal.set(result);
// //       }
// //     });
// //   }
// // }

// @Component({
//   selector: 'dialog-app',
//   templateUrl: './dialog.component.html',
//   standalone: true,
//   imports: [
//     MatFormFieldModule,
//     MatInputModule,
//     FormsModule,
//     MatButtonModule,
//     MatDialogTitle,
//     MatDialogContent,
//     MatDialogActions,
//     MatDialogClose,
//   ],
// })
// export class DialogComponent {
//   readonly dialogRef = inject(MatDialogRef<DialogComponent>);
//   readonly data = inject(MAT_DIALOG_DATA);

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }