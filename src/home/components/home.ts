import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from 'angular2/common';
import {FileSelect, FileDrop, FileUploader} from '../../../node_modules/ng2-file-upload/ng2-file-upload';

@Component({
    selector: 'home',
    templateUrl: './home/components/home.html',
    styleUrls: ['./home/components/home.css'],
    directives: [FileSelect, FileDrop, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HomeCmp {
    URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
    private uploader: FileUploader = new FileUploader({ url: URL });
    private hasBaseDropZoneOver: boolean = false;
    private hasAnotherDropZoneOver: boolean = false;

    private fileOverBase(e: any) {
        this.hasBaseDropZoneOver = true;
        console.log(e);
    }

}
