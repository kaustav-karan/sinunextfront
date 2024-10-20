export interface Schedule {
  eventStart: string;
  eventEnd: string;
  registrationStart: string;
  registrationEnd: string;
  submissionStart: string;
  submissionEnd: string;
}

export interface Banner {
  imgUrl: string;
  imgTitle?: string;  // Optional, as not all banners have a title
}

export interface ImageAsset {
  squareBanner?: Banner;  // Optional
  eventBannerComponent?: { imgUrl: string };  // Optional
  additionalAssets?: any[];  // If needed
}

export interface Event {
  eventId: string;
  eventName: string;
  eventTagline: string;
  status?: string;
  overview?: string;   // Optional
  longDesc?: string;   // Optional
  logo?: string;
  schedule: Schedule;
  rules?: string[];   
  prizes?: string[];  
  eventStructure?: string[];  
  eventMode: string;
  eventRedirectUrl: string;
  imageAsset?: ImageAsset;  // Optional, as not all events have images
}
