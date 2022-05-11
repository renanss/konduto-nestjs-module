import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { KondutoController } from './konduto.controller';
import { KondutoService } from './konduto.service';
import {EventEmitterModule} from '@nestjs/event-emitter'

@Module({
    controllers: [KondutoController],
    providers: [KondutoService],
    imports: [HttpModule, EventEmitterModule.forRoot({delimiter:'.'})],
    exports: [KondutoService]
})

export class KondutoModule {}
