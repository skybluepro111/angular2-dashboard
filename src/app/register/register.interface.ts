export interface User {
    patient: {
        id: string;
        fname: string;
        mname: string;
        lname: string;
    }
    address: {
        add1: string;
        add2: string;
        add3: string;
        suburb:string;
        district:string;
        province:string;
        postcode:string;        
    }
    contact: {
        mobile:string;
        email:string;
    }

}