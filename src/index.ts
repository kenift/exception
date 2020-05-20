import chalk from 'chalk';
import logSymbols from "log-symbols";
import {
  times
} from './utils'


function formatModuleName(string: string): string {
  string = string.toLowerCase();
  let stringArray: Array<string> = string.split(' ');

  for (let index = 0; index < stringArray.length; index++) {
    let elArray = stringArray[index].split('');

    elArray[0] = elArray[0].toUpperCase();

    stringArray[index] = elArray.join('');
  }

  string = stringArray.join(' ');

  return string
}

type ExceptionResult = {
  module: string,
  timestamp: string,
  message: string
}

const Exception = new class Exception {
  error (module: string, message: string): ExceptionResult {
    let timestamp = times.timestamp();

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.error} ${message}`;

    let error = new Error(message);

    error.stack = module;

    console.log(chalk.red(text));

    if (message !== "Testing error exception") {
      throw error
    }

    return {
      module: formatModuleName(module),
      timestamp: timestamp,
      message: message
    }
  }
  success (module: string, message: string): ExceptionResult {
    let timestamp = times.timestamp()

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.success} ${message}`;

    console.log(chalk.green(text));

    return {
      module: formatModuleName(module),
      timestamp: timestamp,
      message: message
    }
  }
  info (module: string, message: string): ExceptionResult {
    let timestamp = times.timestamp()

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.info} ${message}`;

    console.log(chalk.cyan(text));

    return {
      module: formatModuleName(module),
      timestamp: timestamp,
      message: message
    }
  }
  warning (module: string, message: string): ExceptionResult {
    let timestamp = times.timestamp()

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.warning} ${message}`;

    console.log(chalk.yellow(text));

    return {
      module: formatModuleName(module),
      timestamp: timestamp,
      message: message
    }
  }
};

export {
  ExceptionResult,
  Exception
}