import chalk from 'chalk';
import logSymbols from "log-symbols";
import {
  times
} from './utils'


function formatModuleName(string: string): string {
  string = string.toLowerCase();
  let stringArray: Array<string> = string.split('');

  stringArray[0] = stringArray[0].toUpperCase();

  string = stringArray.join('');

  return string
}

const Exception = new class Exception {
  error (module: string, message: string) {
    let text = `${times.timestamp()} Kenift ${formatModuleName(module)} ${logSymbols.error} ${message}`;

    console.log(chalk.red(text));
  }
  success (module: string, message: string) {
    let text = `${times.timestamp()} Kenift ${formatModuleName(module)} ${logSymbols.success} ${message}`;

    console.log(chalk.green(text));
  }
  info (module: string, message: string) {
    let text = `${times.timestamp()} Kenift ${formatModuleName(module)} ${logSymbols.info} ${message}`;

    console.log(chalk.cyan(text));
  }
  warning (module: string, message: string) {
    let text = `${times.timestamp()} Kenift ${formatModuleName(module)} ${logSymbols.warning} ${message}`;

    console.log(chalk.yellow(text));
  }
};

export {
  Exception
}




