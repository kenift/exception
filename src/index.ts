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

type KExceptionError = {
  module: string,
  timestamp: string,
  message: string
}

type KExceptionInfo = {
  module: string,
  timestamp: string,
  message: string
}

type KExceptionWarning = {
  module: string,
  timestamp: string,
  message: string
}

type KExceptionSuccess = {
  module: string,
  timestamp: string,
  message: string
}

const Exception = new class Exception {
  error (module: string, message: string): KExceptionError {
    let timestamp = times.timestamp();

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.error} ${message}`;

    let error = new Error(message);

    error.name = formatModuleName(module);

    error.stack = timestamp;

    console.log(chalk.red(text));

    throw error
  }
  success (module: string, message: string): KExceptionSuccess {
    let timestamp = times.timestamp()

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.success} ${message}`;

    console.log(chalk.green(text));

    return {
      module: formatModuleName(module),
      timestamp: timestamp,
      message: message
    }
  }
  info (module: string, message: string): KExceptionInfo {
    let timestamp = times.timestamp()

    let text = `${timestamp} Kenift ${formatModuleName(module)} ${logSymbols.info} ${message}`;

    console.log(chalk.cyan(text));

    return {
      module: formatModuleName(module),
      timestamp: timestamp,
      message: message
    }
  }
  warning (module: string, message: string): KExceptionWarning {
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
  KExceptionError,
  KExceptionInfo,
  KExceptionSuccess,
  KExceptionWarning,
  Exception
}
