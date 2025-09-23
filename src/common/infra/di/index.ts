import { Container } from "inversify";
import infraContainerModule from "./infraContainerModule";
import domainContainerModule from "./domainContainerModule";

export const initializeInversifyContainer = () : Container => {
  const container = new Container();
  container.load(infraContainerModule, domainContainerModule);
  return container;
}
