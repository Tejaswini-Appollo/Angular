import { EventEmitter, Injectable } from '@angular/core';
import { LoggingServices } from './logging.services';

@Injectable()

export class AccountService {
    accounts = [
        {
        name: 'Master Account',
        status: 'active'
        },
        {
        name: 'Testaccount',
        status: 'inactive'
        },
        {
        name: 'Hidden Account',
        status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LoggingServices) {}

    onAddAccount(accountName: string, accountStatus: string) {
        this.accounts.push({name: accountName, status: accountStatus});
        this.loggingService.logStatusChange(accountStatus);
    }

    changeStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}