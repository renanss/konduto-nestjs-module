import { CustomerDTO } from "./customer.dto";

const idMaxLenght = 100;
const visitorMaxLenght = 4;
const total_amountMaxLenght = 10;
const shipping_amountMaxLenght = 10;
const tax_amountMaxLenght = 10;
const currencyMaxLenght = 3;
const installmentsMaxLength = 3;
const ipMaxLength = 15;
const first_messageMaxLenght = 20;
const purchased_atLength = 20;
const sales_channelMaxLength = 100;

export class OrderDto {

    private _id: string;
    private _visitor?: string;
    private _total_amount: number;
    private _shipping_amount?: number;
    private _tax_amount?: number;
    private _currency?: string;
    private _installments?: number;
    private _ip?: string;
    private _first_message?: string;
    private _messages_exchanged?: number;
    private _purchased_at?: string;
    private _analyze?: boolean = true;
    private _sales_channel?: string;
    customer: CustomerDTO   

    //FIX at the given moment, ts doens't support optional get and set.
    toJson(): string {
      let json = JSON.stringify(this);
      Object.keys(this).filter(key => key[0] === "_").forEach(key => {
          json = json.replace(key, key.substring(1));
      });

      return json;
    }

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        if (id && id.length > idMaxLenght) {
          throw new Error("id has a max length of " + idMaxLenght);
        }
      this._id = id;
    }

    get visitor(): string {
      return this._visitor;
    }

    set visitor(visitor: string) {
        if (visitor && visitor.length > visitorMaxLenght) {
          throw new Error("visitor has a max length of " + visitorMaxLenght);
        }
      this._visitor = visitor;
    }
   
    get total_amount(): number {
        return this._total_amount;
    }

    set total_amount(total_amount: number) {
        if (total_amount && Math.ceil(Math.log10(total_amount + 1)) > total_amountMaxLenght) {
          throw new Error("total_amount has a max length of " + total_amountMaxLenght);
        }
        this._total_amount = total_amount;
    }

    get shipping_amount(): number {
        return this._shipping_amount;
    }

    set shipping_amount(shipping_amount: number) {
        if (shipping_amount && Math.ceil(Math.log10(shipping_amount + 1)) > shipping_amountMaxLenght) {
          throw new Error("shipping_amount has a max length of " + shipping_amountMaxLenght);
        }
        this._shipping_amount = shipping_amount;
    }

    get tax_amount(): number {
        return this._tax_amount;
    }

    set tax_amount(tax_amount: number) {
        if (tax_amount && Math.ceil(Math.log10(tax_amount + 1)) > tax_amountMaxLenght) {
          throw new Error("tax_amount has a max length of " + tax_amountMaxLenght);
        }
        this._tax_amount = tax_amount;
    }

    get currency(): string {
        return this._currency;
    }

    set currency(currency: string) {
        if (currency && currency.length > currencyMaxLenght) {
          throw new Error("currency has a max length of " + currencyMaxLenght);
        }
        this._currency = currency;
    }

    get installments(): number {
        return this._installments;
    }

    set installments(installments: number) {
        if (installments && Math.ceil(Math.log10(installments + 1)) > installmentsMaxLength) {
          throw new Error("installments has a max length of " + installmentsMaxLength);
        }
        this._installments = installments;
    }

    get ip(): string {
        return this._ip;
    }

    set ip(ip: string) {
        if (ip && ip.length > ipMaxLength) {
          throw new Error("ip has a max length of " + ipMaxLength);
        }
        this._ip = ip;
    }

    get first_message(): string {
        return this._first_message;
    }

    set first_message(first_message: string) {
        if (first_message && first_message.length > first_messageMaxLenght) {
          throw new Error("first_message has a max length of " + first_messageMaxLenght);
        }
        this._first_message = first_message;
    }

    get purchased_at(): string {
        return this._purchased_at;
    }

    set purchased_at(purchased_at: string) {
        if (!purchased_at || purchased_at.length !== purchased_atLength || !isIsoDate(purchased_at)) {
          throw new Error("purchased_at must have a length of " + purchased_atLength + "and format: AAAA-MM-DDTHH:mm:ssZ (ISO 8601)");
        }

        function isIsoDate(str) {
          return !/^(\\d{4}-(10|11|12|0\\d)-(30|31|[0-2]\\d)T(20|21|22|23|24|[0-1]?\\d):[0-5]?\\d(:[0-5]?\\d)?Z)?$/.test(str) 
            // if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
            // var d = new Date(str); 
            // return d.toISOString()===str;
          }

        this._purchased_at = purchased_at;
    }

    get sales_channel(): string {
        return this._sales_channel;
    }

    set sales_channel(sales_channel: string) {
        if (sales_channel && sales_channel.length > sales_channelMaxLength) {
          throw new Error("sales_channel has a max length of " + sales_channelMaxLength);
        }
        this._sales_channel = sales_channel;
    }
  }