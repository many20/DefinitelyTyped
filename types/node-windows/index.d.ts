// Type definitions for node-windows 0.1
// Project: https://github.com/coreybutler/node-windows
// Definitions by: My Self <https://github.com/many20>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace NodeWindows {
    import * as childprocess from 'child_process';

    var elevate: childprocess.exec;    
    // function elevate(cmd: string, options?: any, callback?: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void: void;
    var sudo: childprocess.exec;
    // function sudo(cmd: string, options?: any, callback?: Function): void;
    
    function isAdminUser(callback: (isAdmin: boolean) => void): void;
    function list(callback: (svc: Processe[]) => void, verboseOutput: boolean): void;
    function kill(PID: number | string, callback?: Function): void;

    interface Processe {
        ImageName: string;
        PID: string;
        SessionName: string;
        'Session#': string;
        MemUsage: string;
        Status?: string;
        UserName?: string;
        CPUTime: string;
        WindowTitle?: string;
    }

    class Service {
        name: string;       
        exists: boolean;

        constructor(options: ServiceOptions);

        on(event: onEvents, fn: Function): void;

        start(): void;
        install(): void;
        uninstall(): void;

        user: User;
        sudo: Sudo;
    }

    type onEvents = 'install' | 'alreadyinstalled' | 'invalidinstallation' | 'uninstall' | 'start' | 'stop' | 'error';

    interface ServiceOptions {
        name: string;
        description?: string;
        script: string;
        env?: NameValuePair | NameValuePair[];

        wait?: number;
        grow?: number;

        nodeOptions?: string[];
    }

    interface NameValuePair {
        name: string;
        value: any;
    }

    interface User {
        domain: string;
        account: string;
        password: string;
    }

    interface Sudo {
        password: string;
    }

    class EventLogger {
        constructor(sourceOrOptions: string | EventLoggerOptions);

        info(msg: string, code?: number, callback?: Function): void;
        warn(msg: string, code?: number, callback?: Function): void;
        error(msg: string, code?: number, callback?: Function): void;

        auditSuccess(msg: string): void;
        auditFailure(msg: string): void;
    }

    interface EventLoggerOptions {
        source: string;
        eventLog: 'APPLICATION' | 'SYSTEM';
    }
}

export = NodeWindows;
