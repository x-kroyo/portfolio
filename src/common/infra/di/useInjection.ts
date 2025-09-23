import { ServiceIdentifier } from 'inversify';
import { InversifyContainerContext } from './InversifyContainerProvider';
import { useContext } from 'react';

export function useInjection<T>(serviceId: ServiceIdentifier<T>): T {
  const container = useContext(InversifyContainerContext);

  if (!container) {
    throw new Error(
      'Cannot find Inversify container in React Context. ' +
      '`InversifyContainerProvider` component is missing in the component tree.'
    );
  }

  return container.get<T>(serviceId);
}