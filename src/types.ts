export type VendorData = {
  /**
   * Vendor's name
   */ 
  name: string;

  /**
   * Display Name
   */
  displayName?: string;

  /**
   * Category or categories of the vendor based on the services provided
   * For example: CRM, CSP, IdP, finance, collaboration, etc.
   */
  category?: string | string[];

  /**
   * Link to the vendor's data security or data protection document and details
   */
  dataSecurity?: string

  /**
   * Description of the vendor
   */
  description?: string;

  /**
   * Indicates if the vendor is FedRAMP authorized
   */
  fedrampATO?: boolean;

  /**
   * Vendor's FedRAMP ATO Level (Low, Moderate, High), if the vendor is FedRAMP authorized
   */
  fedrampLevel?: string;

  /**
   * Indicates if the vendor is FedRAMP ready
   */
  fedrampReady?: boolean;

  /**
   * Weblink to the vendor's logo icon image
   */
  iconWebLink?: string;

  /**
   * Link(s) to the vendor's HIPAA Business Associate Agreement
   */
  linkToBAA?: string | string[];

  /**
   * Link(s) to the vendor's information security assessment or attestation
   */
  linkToISA?: string | string[];

  /**
   * Link(s) to the vendor's GDPR / CCPA data protection agreement/addendum
   */
  linkToDPA?: string | string[];

  /**
   * Link(s) to the vendor's master service agreement
   */
  linkToMSA?: string | string[];

  /**
   * Link(s) to the vendor's service level agreement
   */
  linkToSLA?: string | string[];

  /**
   * Link to the vendor's cookie policy
   */
  cookiePolicy?: string;

  /**
   * Link to the vendor's main privacy policy
   */
  privacyPolicy?: string;

  /**
   * Link to the vendor's applications/services status page
   */
  statusPage?: string;

  /**
   * Link to, or a list of, the vendor's subprocessors
   */
  subprocessors?: string | string[];

  /**
   * Link to the vendor's main terms and conditions
   */
  termsConditions?: string;

  /**
   * Weblink to the vendor's main application console
   */
  webLink?: string;

  /**
   * Vendor's website(s)
   */
  website?: string | string[];

  /**
   * Entity _type for the vendor used in JupiterOne data model
   */
  _type?: string;
};