import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Put, Res } from '@nestjs/common';
import { WebhookResponse } from './dto/webhook-response';
import { KondutoService } from './konduto.service';

@Controller('konduto')
export class KondutoController {

    constructor(private kondutoService: KondutoService){

    }

    @Post('order-status')
    @HttpCode(200)
    orderStatus (@Body() body:WebhookResponse){
        if(this.kondutoService.webhookReceiver(body)){
            return {"status": "ok"}
        }
        else 
            throw new HttpException({
                status: HttpStatus.NOT_ACCEPTABLE,
                error: 'Invalid signature',
            }, HttpStatus.NOT_ACCEPTABLE);
   }

}
