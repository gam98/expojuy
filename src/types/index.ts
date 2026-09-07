export interface Exhibitor { id:string; name:string; sector:string; description:string; stand:string; image:{src:string;alt:string} }
export interface Activity { id:string; day:string; time:string; duration:string; category:string; format:string; title:string; description:string; speakers:string[]; location:string }
export interface NewsItem { id:string; category:string; date:string; title:string; excerpt:string; featured?:boolean }
export interface Sponsor { id:string; name:string; level:'Presenting'|'Oro'|'Plata'|'Aliados institucionales' }
export interface Faq { id:string; category:string; question:string; answer:string }
