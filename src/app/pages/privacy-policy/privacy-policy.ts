import { Component, ViewEncapsulation } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-policy',
  imports: [TranslocoPipe],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  encapsulation: ViewEncapsulation.None,
})
export class PrivacyPolicy {
  protected readonly sections = [
    'privacyPolicy.introduction',
    'privacyPolicy.index',
    'privacyPolicy.controller',
    'privacyPolicy.overview',
    'privacyPolicy.legalBases',
    'privacyPolicy.security',
    'privacyPolicy.dataDisclosure',
    'privacyPolicy.internationalTransfers',
    'privacyPolicy.storageAndDeletion',
    'privacyPolicy.dataSubjectRights',
    'privacyPolicy.webHosting',
    'privacyPolicy.cookies',
    'privacyPolicy.contactManagement',
    'privacyPolicy.updates',
    'privacyPolicy.definitions',
  ];
}
