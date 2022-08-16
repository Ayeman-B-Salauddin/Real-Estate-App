export interface PropertiesForSale {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: State;
  _geoloc: Geo;
  geography: Geo;
  purpose: Purpose;
  price: number;
  product: PropertiesForSaleProduct;
  productLabel: ProductLabel;
  productScore: number;
  rentFrequency: null;
  referenceNumber: string;
  permitNumber: string;
  projectNumber: null;
  title: string;
  title_l1: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  location: Category[];
  category: Category[];
  createdAt: number;
  updatedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  coverPhoto: CoverPhoto;
  coverVideo?: CoverVideo;
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: PropertiesForSaleAgency;
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: Verification;
  verifiedScore: number;
  completionStatus: CompletionStatus;
  randBoostScore: number;
  randBoostScore_l1: number;
  floorPlanID: number | null;
  furnishingStatus: FurnishingStatus | null;
  extraFields: ExtraFields;
  type: PropertiesForSaleType;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  referenceNumber: ExternalID;
  title: ExternalID;
  externalID: ExternalID;
  agency: HighlightResultAgency;
  keywords: ExternalID[];
}

export interface HighlightResultAgency {
  name: ExternalID;
}

export interface ExternalID {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: any[];
}

export enum MatchLevel {
  None = "none",
}

export interface PropertiesForSaleAgency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  externalID: string;
  product: AgencyProduct;
  productScore: number;
  licenses: License[];
  logo: Logo;
  slug: string;
  slug_l1: string;
  tier: number;
  roles: any[];
  active: boolean;
  createdAt: Date;
  commercialNumber: null;
}

export interface License {
  number: string;
  authority: Authority;
}

export enum Authority {
  Ded = "DED",
  Rera = "RERA",
}

export interface Logo {
  id: number;
  url: string;
}

export enum AgencyProduct {
  Featured = "featured",
  Premium = "premium",
}

export interface Category {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
  nameSingular?: NameSingular;
  nameSingular_l1?: NameSingularL1;
  type?: CategoryType;
}

export enum NameSingular {
  Apartment = "Apartment",
  Commercial = "Commercial",
  Office = "Office",
  Residential = "Residential",
  Townhouse = "Townhouse",
  Villa = "Villa",
}

export enum NameSingularL1 {
  تاونهاوس = "تاون هاوس",
  تجاري = "تجاري",
  سكني = "سكني",
  شقة = "شقة",
  فیلا = "فیلا",
  مکتب = "مکتب",
}

export enum CategoryType {
  CondoBuilding = "condo-building",
  Neighbourhood = "neighbourhood",
}

export enum CompletionStatus {
  Completed = "completed",
}

export interface CoverPhoto {
  id: number;
  externalID: string;
  title: null;
  orderIndex: number;
  nimaScore: number;
  url: string;
  main: boolean;
}

export interface CoverVideo {
  externalID: number;
  title: null | string;
  host: Host;
  url: string;
  orderIndex: number;
}

export enum Host {
  Youtube = "youtube",
}

export interface ExtraFields {
  dldBuildingNK?: string;
  dldPropertySK?: string;
}

export enum FurnishingStatus {
  Furnished = "furnished",
  Unfurnished = "unfurnished",
}

export interface PhoneNumber {
  mobile: string;
  phone?: string;
  whatsapp?: string;
  proxyMobile?: string;
  phoneNumbers?: string[];
  mobileNumbers: string[];
  proxyPhone?: string;
}

export enum PropertiesForSaleProduct {
  Superhot = "superhot",
}

export enum ProductLabel {
  Default = "default",
}

export enum Purpose {
  ForSale = "for-sale",
}

export enum State {
  Active = "active",
}

export enum PropertiesForSaleType {
  Property = "property",
}

export interface Verification {
  updatedAt: number;
  eligible: boolean;
  status: Status;
  verifiedAt: number;
}

export enum Status {
  Verified = "verified",
}
