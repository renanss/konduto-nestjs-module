const idMaxLenght = 100;
const nameMaxLenght = 100;
const dobMaxLenght = 10;
const emailMaxLenght = 100;
const tax_idMaxLenght = 100;
const phone1MaxLenght = 100;
const phone2MaxLength = 100;
const created_atLength = 10;



export class CustomerDTO {
    id: string;
    name: string;
    email?: string;
    _dob?: string;
    _tax_id?: string;
    _phone1?: string;
    _phone2?: string;
    _created_at?: string;
    _new?: boolean;


    toJson(): string {
      let json = JSON.stringify(this);
      Object.keys(this).filter(key => key[0] === "_").forEach(key => {
          json = json.replace(key, key.substring(1));
      });

      return JSON.parse(json);
    }


    get dob(): string {
        return this._dob;
    }

    set dob(dob: string) {
        if (dob && dob.length > dobMaxLenght) {
          throw new Error("dob has a max length of " + dobMaxLenght);
        }
        this._dob = dob;
    }

    get tax_id(): string {
        return this._tax_id;
    }

    set tax_id(tax_id: string) {
        if (tax_id && tax_id.length > tax_idMaxLenght) {
          throw new Error("tax_id has a max length of " + tax_idMaxLenght);
        }
        this._tax_id = tax_id;
    }

    get phone1(): string {
        return this._phone1;
    }

    set phone1(phone1: string) {
        if (phone1 && phone1.length > phone1MaxLenght) {
          throw new Error("phone1 has a max length of " + phone1MaxLenght);
        }
        this._phone1 = phone1;
    }

    get phone2(): string {
        return this._phone2;
    }

    set phone2(phone2: string) {
        if (phone2 && phone2.length > phone2MaxLength) {
          throw new Error("phone2 has a max length of " + phone2MaxLength);
        }
        this._phone2 = phone2;
    }

    get created_at(): string {
        return this._created_at;
    }

    set created_at(created_at: string) {
        if (created_at && created_at.length > created_atLength) {
          throw new Error("created_at has a length of " + created_at);
        }
        this._created_at = created_at;
    }

   
  }