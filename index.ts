import { promises } from "fs";
import fse from "fs-extra";
import util from "util";
import ChildProcess from "child_process";

// fs promises
export const access = promises.access;
export const appendFile = promises.appendFile;
export const chmod = promises.chmod;
export const chown = promises.chown;
export const copyFile = promises.copyFile;
export const cp = promises.cp;
export const lchown = promises.lchown;
export const link = promises.link;
export const lstat = promises.lstat;
export const lutimes = promises.lutimes;
export const mkdir = promises.mkdir;
export const mkdtemp = promises.mkdtemp;
export const open = promises.open;
export const opendir = promises.opendir;
export const read = promises.readFile;
export const readdir = promises.readdir;
export const readlink = promises.readlink;
export const realpath = promises.realpath;
export const rename = promises.rename;
export const rm = promises.rm;
export const rmdir = promises.rmdir;
export const stat = promises.stat;
export const statfs = promises.statfs;
export const symlink = promises.symlink;
export const truncate = promises.truncate;
export const unlink = promises.unlink;
export const utimes = promises.utimes;
export const watch = promises.watch;
export const write = promises.writeFile;

// other
export const copy = util.promisify(fse.copy);
export const exec = util.promisify(ChildProcess.exec);
export const execFile = util.promisify(ChildProcess.execFile);
export const fork = util.promisify(ChildProcess.fork);
export const spawn = util.promisify(ChildProcess.spawn);