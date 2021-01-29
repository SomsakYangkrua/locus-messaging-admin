import { Parameter } from './parameter.model';

export class Allsystemconfig {
  Mode:                 string;
	Authorization:        Parameter[];
	Database:             Parameter[];
	LocalHTTPServer:      Parameter[];
	LocalUDPServer:       Parameter[];
	ProxyReversToDev:     Parameter[];
	InterfaceLine:        Parameter[];
	InterfaceDialogFlow:  Parameter[];
	InterfaceMessenger:   Parameter[];
	InterfaceWhatsapp:    Parameter[];
	InterfacePureConnect: Parameter[];
	InterfaceRabbitMQ:    Parameter[];
	AsynchronizeWorker:   Parameter[];
}
