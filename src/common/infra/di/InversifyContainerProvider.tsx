import { Container } from "inversify";
import { createContext, useMemo } from "react";
import { initializeInversifyContainer } from ".";

const inversifyContainer = initializeInversifyContainer();

export const InversifyContainerContext = createContext<Container | null>(null);
export const InversifyContainerProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <InversifyContainerContext.Provider value={inversifyContainer}>
      {children}
    </InversifyContainerContext.Provider>
  );
};

