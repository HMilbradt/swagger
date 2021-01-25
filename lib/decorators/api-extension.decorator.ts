import { DECORATORS } from '../constants';
import { createMixedDecorator } from './helpers';

export function ApiExtension(extensionKey: string, extensionProperties: any) {
  if (!extensionKey.startsWith('x-')) {
    throw new Error(
      'Extension key is not prefixed. Please ensure you prefix it with `x-`.'
    );
  }

  let extensionValue: any;
  if (Array.isArray(extensionProperties)) {
    extensionValue = [...extensionProperties];
  } else if (
    typeof extensionProperties !== 'object' ||
    extensionProperties == null
  ) {
    extensionValue = extensionProperties;
  } else {
    extensionValue = { ...extensionProperties };
  }

  const extensionObject = {
    [extensionKey]: extensionValue
  };

  return createMixedDecorator(DECORATORS.API_EXTENSION, extensionObject);
}
