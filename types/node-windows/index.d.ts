// Type definitions for node-windows 0.1
// Project: https://github.com/coreybutler/node-windows
// Definitions by: My Self <https://github.com/many20>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="node" />

import * as childprocess from 'child_process';

// function elevate(cmd: string, options?: any, callback?: (error: Error | null, stdout: string | Buffer, stderr: string | Buffer) => void: void;

// no `options` definitely means stdout/stderr are `string`.
export function elevate(
    command: string,
    callback?: (error: childprocess.ExecException | null, stdout: string, stderr: string) => void,
): childprocess.ChildProcess;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function elevate(
    command: string,
    options: { encoding: 'buffer' | null } & childprocess.ExecOptions,
    callback?: (error: childprocess.ExecException | null, stdout: Buffer, stderr: Buffer) => void,
): childprocess.ChildProcess;
// `options` with well known `encoding` means stdout/stderr are definitely `string`.
export function elevate(
    command: string,
    options: { encoding: BufferEncoding } & childprocess.ExecOptions,
    callback?: (error: childprocess.ExecException | null, stdout: string, stderr: string) => void,
): childprocess.ChildProcess;
// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function elevate(
    command: string,
    options: { encoding: string } & childprocess.ExecOptions,
    callback?: (error: childprocess.ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): childprocess.ChildProcess;
// `options` without an `encoding` means stdout/stderr are definitely `string`.
export function elevate(
    command: string,
    options: childprocess.ExecException,
    callback?: (error: childprocess.ExecException | null, stdout: string, stderr: string) => void,
): childprocess.ChildProcess;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function elevate(
    command: string,
    options: ({ encoding?: string | null } & childprocess.ExecOptions) | undefined | null,
    callback?: (error: childprocess.ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): childprocess.ChildProcess;

// function sudo(cmd: string, options?: any, callback?: Function): void;

// no `options` definitely means stdout/stderr are `string`.
export function sudo(
    command: string,
    callback?: (error: childprocess.ExecException | null, stdout: string, stderr: string) => void,
): childprocess.ChildProcess;
// `options` with `"buffer"` or `null` for `encoding` means stdout/stderr are definitely `Buffer`.
export function sudo(
    command: string,
    options: { encoding: 'buffer' | null } & childprocess.ExecOptions,
    callback?: (error: childprocess.ExecException | null, stdout: Buffer, stderr: Buffer) => void,
): childprocess.ChildProcess;
// `options` with well known `encoding` means stdout/stderr are definitely `string`.
export function sudo(
    command: string,
    options: { encoding: BufferEncoding } & childprocess.ExecOptions,
    callback?: (error: childprocess.ExecException | null, stdout: string, stderr: string) => void,
): childprocess.ChildProcess;
// `options` with an `encoding` whose type is `string` means stdout/stderr could either be `Buffer` or `string`.
// There is no guarantee the `encoding` is unknown as `string` is a superset of `BufferEncoding`.
export function sudo(
    command: string,
    options: { encoding: string } & childprocess.ExecOptions,
    callback?: (error: childprocess.ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): childprocess.ChildProcess;
// `options` without an `encoding` means stdout/stderr are definitely `string`.
export function sudo(
    command: string,
    options: childprocess.ExecException,
    callback?: (error: childprocess.ExecException | null, stdout: string, stderr: string) => void,
): childprocess.ChildProcess;
// fallback if nothing else matches. Worst case is always `string | Buffer`.
export function sudo(
    command: string,
    options: ({ encoding?: string | null } & childprocess.ExecOptions) | undefined | null,
    callback?: (error: childprocess.ExecException | null, stdout: string | Buffer, stderr: string | Buffer) => void,
): childprocess.ChildProcess;

export function isAdminUser(callback: (isAdmin: boolean) => void): void;
export function list(callback: (svc: Processe[]) => void, verboseOutput: boolean): void;
export function kill(PID: number | string, callback?: Function): void;

export interface Processe {
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

export class Service {
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

export type onEvents = 'install' | 'alreadyinstalled' | 'invalidinstallation' | 'uninstall' | 'start' | 'stop' | 'error';

export interface ServiceOptions {
    name: string;
    description?: string;
    script: string;
    env?: NameValuePair | NameValuePair[];

    wait?: number;
    grow?: number;

    nodeOptions?: string[];
}

export interface NameValuePair {
    name: string;
    value: any;
}

export interface User {
    domain: string;
    account: string;
    password: string;
}

export interface Sudo {
    password: string;
}

export class EventLogger {
    constructor(sourceOrOptions: string | EventLoggerOptions);

    info(msg: string, code?: number, callback?: Function): void;
    warn(msg: string, code?: number, callback?: Function): void;
    error(msg: string, code?: number, callback?: Function): void;

    auditSuccess(msg: string): void;
    auditFailure(msg: string): void;
}

export interface EventLoggerOptions {
    source: string;
    eventLog: 'APPLICATION' | 'SYSTEM';
}
