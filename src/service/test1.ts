import { Injectable } from '@nestjs/common';

// XXX: When it's assigned to a specific file address, Server is normal
// import { Test2Service } from './test2';
// XXX: When it's in index.ts, Server throw Error
import { Test2Service } from './';

@Injectable()
export class Test1Service {

    constructor(
        private readonly Test2Service: Test2Service,
    ) {
    }

}