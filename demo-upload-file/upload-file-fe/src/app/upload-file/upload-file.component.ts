import { Component, OnInit } from '@angular/core';
import {UploadFileService} from '../upload-file.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  fileInfos: Observable<any>;
  message = '';

  constructor(private uploadFileService: UploadFileService) { }

  ngOnInit(): void {
  }

  upload() {

    this.currentFile = this.selectedFiles.item(0);
    this.uploadFileService.upload(this.currentFile).subscribe(
      event => {
        this.message = 'OK';
        this.fileInfos = this.uploadFileService.getFiles();
      },
      err => {
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

}
