import { VendorData } from './types';

export const KNOWN_VENDORS: { [key: string]: VendorData } = {
  // A
  adobe: {
    name: 'Adobe',
    iconWebLink: 'https://www.svgrepo.com/download/197935/adobe.svg',
    privacyPolicy: 'https://www.adobe.com/privacy/policy.html',
    website: 'https://www.adobe.com/'
  },
  amazon: {
    name: 'Amazon.com',
    iconWebLink: 'https://www.svgrepo.com/download/22029/amazon.svg',
    privacyPolicy:
      'https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ',
    website: 'https://www.amazon.com/'
  },
  aws: {
    name: 'AWS',
    category: 'CSP',
    description: 'AWS provides cloud computing infrastructure and services.',
    iconWebLink:
      'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
    linkToISA: 'https://aws.amazon.com/compliance/programs/',
    linkToDPA: 'https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf',
    linkToMSA: 'https://aws.amazon.com/agreement/',
    linkToSLA: 'https://aws.amazon.com/legal/service-level-agreements/',
    privacyPolicy: 'https://aws.amazon.com/privacy/',
    statusPage: 'https://status.aws.amazon.com/',
    termsConditions: 'https://aws.amazon.com/service-terms/',
    webLink: 'https://aws.amazon.com/console/',
    website: 'https://aws.amazon.com/',
  },
  apple: {
    name: 'Apple',
    iconWebLink: 'https://www.svgrepo.com/download/69341/apple-logo.svg',
  },
  atlassian: {
    name: 'Atlassian',
    iconWebLink: 'https://worldvectorlogo.com/download/atlassian-1.svg',
  },

  // B
  bamboohr: {
    name: 'BambooHR',
    iconWebLink: '',
  },
  bitrise: {
    name: 'Bitrise',
    iconWebLink: 'https://www.vectorlogo.zone/logos/bitriseio/bitriseio-icon.svg',
    website: 'https://www.bitrise.io/'
  },

  // C
  carbonblack: {
    name: 'Carbon Black',
    iconWebLink: '',
  },
  churnzero: {
    name: 'ChurnZero',
    description: 'Customer Success platform',
    iconWebLink:
      'https://44aqyd1gir1l3zgqxe1m5r43-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/ChurnZero-Logo-Dark-on-Light-LARGE-550x104.png',
    privacyPolicy: 'https://churnzero.net/privacy-policy/',
    termsConditions: 'https://churnzero.net/terms-of-use/',
    webLink: 'https://churnzero.net',
    website: 'https://churnzero.net',
  },
  cisco: {
    name: 'Cisco',
    iconWebLink: 'https://www.svgrepo.com/download/303323/cisco-2-logo.svg',
  },
  coderpad: {
    name: 'CoderPad',
    iconWebLink: '',
  },
  crowdstrike: {
    name: 'CrowdStrike',
    iconWebLink: '',
  },
  cultureamp: {
    name: 'Culture Amp',
    iconWebLink: '',
  },

  // D
  datadog: {
    name: 'Datadog',
    cookiePolicy: 'https://www.datadoghq.com/legal/cookies/',
    description: 'Serverless Log Management, APM, and Security, Network, Synthetic, and Real-User Monitoring Platform',
    iconWebLink:
      'https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_white.png?auto=format',
    linkToBAA: 'https://www.datadoghq.com/legal/hipaa-eligible-services/',
    linkToMSA: 'https://www.datadoghq.com/legal/msa/',
    privacyPolicy: 'https://www.datadoghq.com/legal/privacy/',
    termsConditions: 'https://www.datadoghq.com/legal/terms/',
    webLink: 'https://app.datadoghq.com',
    website: 'https://datadog.com',
  },
  dashlane: {
    name: 'Dashlane',
    iconWebLink: '',
  },
  digicert: {
    name: 'DigiCert',
    iconWebLink: '',
  },
  docusign: {
    name: 'DocuSign',
    iconWebLink: '',
  },
  dome9: {
    name: 'Dome9',
    iconWebLink: '',
  },
  dropbox: {
    name: 'Dropbox',
    iconWebLink: '',
  },

  // E
  easecentral: {
    name: 'EaseCentral',
    iconWebLink: '',
  },

  // F
  floqast: {
    name: 'FloQast',
    iconWebLink: '',
  },
  fireeye: {
    name: 'FireEye',
    iconWebLink: '',
  },

  // G
  gong: {
    name: 'Gong',
    iconWebLink: 'https://www.gong.io/wp-content/themes/gong-2018/assets/img/header-logo.png',
    privacyPolicy: 'https://www.gong.io/privacy-policy/',
    termsConditions: 'https://www.gong.io/terms-and-conditions/',
  },
  google: {
    name: 'Google',
    iconWebLink: 'https://www.svgrepo.com/download/304493/google.svg',
  },
  gcp: {
    name: 'Google Cloud',
    iconWebLink:
      'https://www.svgrepo.com/download/303651/google-cloud-logo.svg',
  },
  android: {
    name: 'Google Android',
    iconWebLink: 'https://www.svgrepo.com/download/184140/android.svg',
  },

  // G - Other
  github: {
    name: 'GitHub',
    iconWebLink:
      'https://www.svgrepo.com/download/303615/github-icon-1-logo.svg',
  },
  golinks: {
    name: 'GoLinks',
    iconWebLink: '',
  },

  // H
  hackerone: {
    name: 'HackerOne',
    iconWebLink: 'https://www.svgrepo.com/download/306172/hackerone.svg',
  },
  hellosign: {
    name: 'HelloSign',
    iconWebLink: '',
  },
  hubspot: {
    name: 'HubSpot',
    iconWebLink: 'https://worldvectorlogo.com/download/hubspot-1.svg',
  },

  // I
  invision: {
    name: 'InVision',
    iconWebLink: 'https://www.svgrepo.com/download/303291/invision-logo.svg',
  },

  // J
  jamf: {
    name: 'Jamf',
    iconWebLink: 'https://www.vectorlogo.zone/logos/jamf/jamf-icon.svg',
  },
  jupiterone: {
    name: 'JupiterOne',
    iconWebLink:
      'https://raw.githubusercontent.com/JupiterOne/docs/master/assets/brand/jupiterone.svg',
    linkToDPA: 'https://psp.jptr.one/gdpr-dpa.html',
    linkToISA: 'https://jupiterone.com/trust-and-transparency/',
    privacyPolicy: 'https://jupiterone.com/privacy-policy/',
    subprocessors: 'https://psp.jptr.one/subprocessors.html',
    termsConditions: 'https://jupiterone.com/terms/',
  },
  justworks: {
    name: 'Justworks'
  },

  // L
  leavelogic: {
    name: 'LeaveLogic',
    iconWebLink: '',
  },
  linkedin: {
    name: 'LinkedIn',
    iconWebLink: 'https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg',
  },
  logmein: {
    name: 'LogMeIn',
    iconWebLink: 'https://www.vectorlogo.zone/logos/logmein/logmein-icon.svg',
  },

  // M
  mcafee: {
    name: 'McAfee',
    iconWebLink: '',
  },
  markmonitor: {
    name: 'Mark Monitor',
    iconWebLink: '',
  },
  microsoft: {
    name: 'Microsoft',
    iconWebLink: '',
  },
  mimecast: {
    name: 'Mimecast',
    iconWebLink: '',
  },
  modeanalytics: {
    name: 'Mode Analytics',
    iconWebLink: '',
  },
  motion: {
    name: 'Motion',
    iconWebLink: 'https://assets.website-files.com/5fcb349058268443b1f5dbdb/60089046cf3d9e5f7bbdc052_Motion%20Logo.svg',
    privacyPolicy: 'https://static.inmotion.app/privacy.pdf',
    termsConditions: 'https://static.inmotion.app/terms.pdf',
  },


  // N
  naviabenefits: {
    name: 'Navia Benefits Solutions',
    iconWebLink: '',
  },

  // O
  oracle: {
    name: 'Oracle',
    iconWebLink: 'https://www.svgrepo.com/download/306523/oracle.svg',
  },

  // P
  pagerduty: {
    name: 'PagerDuty',
    iconWebLink: 'https://www.vectorlogo.zone/logos/pagerduty/pagerduty-icon.svg',
  },
  paloalto: {
    name: 'Palo Alto Networks',
    iconWebLink: '',
  },
  paylocity: {
    name: 'Paylocity',
    iconWebLink: '',
  },
  pendo: {
    name: 'Pendo',
    iconWebLink: '',
  },
  pritunl: {
    name: 'Pritunl',
    iconWebLink: '',
  },

  // R
  ringcentral: {
    name: 'RingCentral',
    iconWebLink: 'https://www.vectorlogo.zone/logos/ringcentral/ringcentral-icon.svg',
  },

  // S
  salesforce: {
    name: 'Salesforce',
    category: 'CRM',
    iconWebLink: 'https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg',
    linkToDPA: 'https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/data-processing-addendum.pdf',
    privacyPolicy: 'https://www.salesforce.com/company/privacy/',
    statusPage: 'https://status.salesforce.com/',
    termsConditions: 'https://www.salesforce.com/company/legal/sfdc-website-terms-of-service/',
    website: 'salesforce.com'
  },
  smallimprovements: {
    name: 'Small Improvements',
    iconWebLink: '',
  },
  snyk: {
    name: 'Snyk',
    iconWebLink: 'https://worldvectorlogo.com/download/snyk.svg',
  },
  solarwinds: {
    name: 'SolarWinds',
    iconWebLink: 'https://www.vectorlogo.zone/logos/solarwinds/solarwinds-icon.svg',
  },
  stripe: {
    name: 'Stripe',
    iconWebLink: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg',
  },
  sumologic: {
    name: 'Sumo Logic',
    iconWebLink: '',
  },

  // T
  tackle: {
    name: 'Tackle.io',
    iconWebLink: '',
  },
  textmagic: {
    name: 'TextMagic',
    iconWebLink: '',
  },
  threatstack: {
    name: 'Threat Stack',
    iconWebLink: '',
  },
  trendmicro: {
    name: 'Trend Micro',
    iconWebLink: '',
  },

  // V
  vmware: {
    name: 'VMware',
    iconWebLink: 'https://www.svgrepo.com/download/306940/vmware.svg',
  },

  // W
  wordpress: {
    name: 'WordPress',
    iconWebLink: 'https://www.svgrepo.com/download/217790/wordpress.svg',
  },
  wpengine: {
    name: 'WP Engine',
    iconWebLink: 'https://worldvectorlogo.com/download/wpengine.svg',
  },

  // Z
  zoom: {
    name: 'Zoom',
    category: 'collaboration',
    iconWebLink: 'https://www.svgrepo.com/download/305632/zoom.svg',
    dataSecurity: 'https://zoom.us/trust/security',
    linkToBAA: 'https://support.zoom.us/hc/en-us/articles/207652183-HIPAA-Business-Associate-Agreement-BAA-',
    linkToDPA: 'https://zoom.us/docs/doc/Zoom_GLOBAL_DPA.pdf',
    linkToISA: 'https://zoom.us/trust/legal-compliance#certifications',
    cookiePolicy: 'https://zoom.us/cookie-policy',
    privacyPolicy: 'https://zoom.us/privacy',
    subprocessors: 'https://zoom.us/subprocessors',
    termsConditions: 'https://zoom.us/terms',
    website: 'zoom.us',
  }
};

export const VENDOR_APPS: { [key: string]: VendorData } = {
  // Apple
  ios: KNOWN_VENDORS.apple,
  ipados: KNOWN_VENDORS.apple,
  macos: KNOWN_VENDORS.apple,
  tvos: KNOWN_VENDORS.apple,

  // Atlassian
  bitbucket: KNOWN_VENDORS.atlassian,
  jira: KNOWN_VENDORS.atlassian,
  statuspage: KNOWN_VENDORS.atlassian,

  // Cisco
  meraki: KNOWN_VENDORS.cisco,

  // LogMeIn
  gotomeeting: KNOWN_VENDORS.logmein,
  lastpass: KNOWN_VENDORS.logmein,

  // Microsoft
  office365: KNOWN_VENDORS.microsoft,
  windows: KNOWN_VENDORS.microsoft,

  // Mimecast
  ataata: KNOWN_VENDORS.mimecast,

  // VMware
  airwatch: KNOWN_VENDORS.vmware,
};
