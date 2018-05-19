import { Component, Output, Input, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FileDropModule, UploadFile, UploadEvent, FileSystemFileEntry, FileSystemDirectoryEntry} from 'ngx-file-drop';



@Component({
  selector: 'file-upload',
  template: `
    <button mat-raised-button color="warm" (click)="openDialog()">Import</button>

  `,
  styles: [],
})
export class FileUploadComponent {


  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(UploadDialog);

  }



}

@Component({
  selector: 'upload-dialog',
  template: `
    <div fxLayout="column" md-dialog-close>
      <h3 class="m-0">Question</h3>
      
      <div class="form-group" fxFlex>
        <input class="upload-choose" type="file"
               id="file"
               (change)="handleFileInput($event.target.files, true)">
      </div>
      <!--<file-drop fxFlex headertext="Drop File Here" (onFileDrop)="dropped($event, true)">-->
      <!--</file-drop>-->
      <h3 class="m-0">Student</h3>
      <div class="form-group" fxFlex>
        <input class="upload-choose" type="file"
               id="file"
               (change)="handleFileInput($event.target.files, false)">
      </div>
      <!--<file-drop fxFlex headertext="Drop File Here" (onFileDrop)="dropped($event, false)">-->
      <!--</file-drop>-->
    </div>`,
  styles: [` .upload-choose {
    padding-top: 24px;
    padding-bottom: 24px;
    float:right;
  }
  `],
})
export class UploadDialog {

  questionFile: File = null;
  studentFile: File = null;

  public files: UploadFile[] = [];

  constructor(
    public dialogRef: MatDialogRef<UploadDialog>) {}

  onNoClick(): void {
    console.log(this.dialogRef.close());
  }

  dropped(event: UploadEvent, isQuestion) {
    this.files = event.files;
    for (const droppedFile of event.files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Here you can access the real file
          if (isQuestion) {
            this.questionFile = file;
          }else {
            this.studentFile = file;
          }

          console.log(droppedFile.relativePath);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  handleFileInput(files: FileList, isQuestion) {
    if (isQuestion) {
      this.questionFile = files.item(0);
    }else {
      this.studentFile = files.item(0)
    }
  }

}



