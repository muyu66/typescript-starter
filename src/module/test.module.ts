import { Module } from '@nestjs/common';
import { Test1Service, Test2Service } from '../service/index_symbolic';

@Module({
    providers: [Test1Service, Test2Service],
    exports: [Test1Service, Test2Service],
})

export class TestModule { }
