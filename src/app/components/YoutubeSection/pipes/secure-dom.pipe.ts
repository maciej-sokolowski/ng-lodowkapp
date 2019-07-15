import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// Pipe for youtube videos
// To sanitize the url

@Pipe({
    name: 'secureDom'
})

export class SecureDomPipe implements PipeTransform {

    constructor(private domSanitizer: DomSanitizer) { }

    transform(value: string): any {

        const url = 'https://www.youtube.com/embed/';

        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }
}