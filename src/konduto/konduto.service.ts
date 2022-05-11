import { HttpException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { GetOrderResponse } from './dto/get-order-response';
import { OrderDto } from './dto/order.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { WebhookResponse } from './dto/webhook-response';
import {createHmac} from 'crypto'
import {EventEmitter2} from '@nestjs/event-emitter'

@Injectable()
export class KondutoService {
    
    constructor(private readonly httpService: HttpService, private eventEmitter: EventEmitter2){
        
    }

    private kondutoOrdersUrl = "https://api.konduto.com/v1/orders"

    async getOrder(orderId: string){
    
            const url = `${this.kondutoOrdersUrl}/${orderId}`;
            const request = await firstValueFrom(this.httpService.get(url, this.getHttpConfig()).pipe(
                catchError(e => {
                  throw new HttpException(e.response.data, e.response.status);
                }),
              ));
            const response: GetOrderResponse = request.data;
            return response;
        
   
    }

    async setNewOrder(data: OrderDto){
        try {
            const url = `${this.kondutoOrdersUrl}`;
            console.log(data.toJson())
            const request = await firstValueFrom(this.httpService.post(url, data.toJson(), this.getHttpConfig()))
            const response: any = request.data;
            return response;
        }
        catch(err){
            return err.response.data;
        }
    }

    async updateOrder(orderId: string, data:UpdateStatusDto){
        try {
            const url = `${this.kondutoOrdersUrl}${orderId}`;
            const request = await firstValueFrom(this.httpService.put(url, data, this.getHttpConfig()));
            const response: GetOrderResponse = request.data;
            return response;
        }
        catch(err){
            throw new Error(err)
        }
    }

    webhookReceiver(webhookResponse){
        const isValidSignature = this.signatureValidation(webhookResponse)
        if(isValidSignature)
            this.eventEmitter.emit(
                'webhook.received',
                new WebhookResponse(webhookResponse)
            )
        
        return isValidSignature
    }


    private signatureValidation(webhookResponse: WebhookResponse){

        const signature = webhookResponse.signature;
        const responseToString = `${webhookResponse.order_id}#${webhookResponse.timestamp}#${webhookResponse.status}`;
        const hash = createHmac('SHA256', process.env.kondutoPrivateKey).update(responseToString).digest('hex');

        return hash === signature
    }

    private getHttpConfig(){
        return {
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization" : process.env.kondutoAPIKey
            }
        }
    }
}
