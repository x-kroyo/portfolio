import { Container } from "inversify";
import infraContainerModule from "./infraContainerModule";
import domainContainerModule from "./domainContainerModule";

const container  = new Container();
container.load(infraContainerModule, domainContainerModule);

export default container;