export interface ICompany {
    _id?: String;
    name: {
        en: String,
        ru: String,
        ua: String
    };
    description: {
        en: String,
        ru: String,
        ua: String
    };
    address: {
        en: String,
        ru: String,
        ua: String
    };
    logo: String;
    banners: any;
    category: [String];
    link: String;
    email: String;
    phones: {
        main: [String],
        reception: [String],
        fax: [String],
        book: [String],
        restaurant: [String]
    };
    isMarkedCheckInLviv: Boolean;
}