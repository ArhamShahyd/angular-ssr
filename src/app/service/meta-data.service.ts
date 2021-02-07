import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) { }

  url = 'https://swiftlire.com/assets/images/about-us.png';

  updateTags(tag, partUrl) {
    console.log('part', partUrl, tag);
    if (tag == null && partUrl == null) {
      const title = 'Swiftlire1 - Commited to help real estate agents44444';
      this.updateTitle(this.url);
    } else {
      const endTitle = ' | Commited2 to help real estate agents';
      const pageTitle = tag + endTitle;
      this.updateTitle(pageTitle);
      this.updateUrl(partUrl);
    }
  }


  private updateTitle(title) {
    this.titleService.setTitle(title);
    this.metaService.updateTag({ name: 'og:url', content: title });
    this.metaService.updateTag({ name: 'og:image', content: title });
    this.metaService.updateTag({ name: 'og:image:width', content: '110' });
    this.metaService.updateTag({ name: 'og:image:height', content: '110' });
    this.metaService.updateTag({ property: 'og:title', content: 'yes swiftlire' });
    // this.metaService.updateTag({ property: 'og:description', content: 'yes swiftlire1' });
  }

  private updateUrl(url) {
    this.metaService.updateTag({ name: 'og:url', content: url });
    this.metaService.updateTag({ name: 'og:image', content: url });
    this.metaService.updateTag({ name: 'og:image:width', content: '110' });
    this.metaService.updateTag({ name: 'og:image:height', content: '110' });
    this.metaService.updateTag({ property: 'og:title', content: 'hello swiftlire' });
    // this.metaService.updateTag({ property: 'og:description', content: 'yes swiftlire2' });
  }


}
