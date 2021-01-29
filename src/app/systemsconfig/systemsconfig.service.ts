import { Parameter } from './parameter.model';
import { Allsystemconfig } from './allsystemconfig.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Systemconfig } from './systemconfig.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { env } from 'process';
@Injectable()
export class SystemsconfigService {
  private readonly API_URL = 'assets/data/department.json';
  isTblLoading = true;
  dataChange: BehaviorSubject<Systemconfig[]> = new BehaviorSubject<Systemconfig[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {}
  get data(): Systemconfig[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getSystemConfig(): void {
    let mapConfig = new Map();
    this.httpClient.get<any>(this.API_URL).subscribe(
      (data) => {
        var allsystemconfig: Allsystemconfig;
        var systemConfig = new Systemconfig();
        allsystemconfig = data.result;
        systemConfig.mode = data.mode;

        //Authorization
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.Authorization);
        systemConfig.auth_key = mapConfig.get("auth_key");
        systemConfig.auth_Realm = mapConfig.get("auth_Realm");
        systemConfig.admin_username = mapConfig.get("admin_username");
        systemConfig.admin_username = mapConfig.get("admin_password");
        //Database
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.Database);
        systemConfig.db_type = mapConfig.get("db_type");
        systemConfig.db_str_cnn = mapConfig.get("db_str_cnn");
        systemConfig.in_memory_db_server = mapConfig.get("in_memory_db.server");
        systemConfig.in_memory_db_database = mapConfig.get("in_memory_db.database");
        systemConfig.in_memory_db_pwd = mapConfig.get("in_memory_db.pwd");
        systemConfig.in_memory_db_expiration = mapConfig.get("in_memory_db.expiration");
        systemConfig.in_memory_db_PoolSize = mapConfig.get("in_memory_db.PoolSize");
        systemConfig.in_memory_db_Read_WriteTimeout = mapConfig.get("in_memory_db.Read_WriteTimeout");
        systemConfig.in_memory_db_MinIdleConns = mapConfig.get("in_memory_db.MinIdleConns");
        systemConfig.in_memory_db_MaxConnAge = mapConfig.get("in_memory_db.MaxConnAge");
        systemConfig.in_memory_db_PoolTimeout = mapConfig.get("in_memory_db.PoolTimeout");

        //LocalHTTPServer
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.LocalHTTPServer);
        systemConfig.host = mapConfig.get("host");
        systemConfig.bind_tls = mapConfig.get("bind_tls");
        systemConfig.key_file = mapConfig.get("key_file");
        systemConfig.cert_file = mapConfig.get("cert_file");

        //LocalUDPServer
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.LocalUDPServer);
        systemConfig.udp_bind_addr = mapConfig.get("udp.bind_addr");
        //ProxyReversToDev
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.ProxyReversToDev);
        systemConfig.proxyrevers_host = mapConfig.get("proxyrevers.host");
        //InterfaceLine
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.InterfaceLine);
        systemConfig.webhook_url = mapConfig.get("webhook.url");
        systemConfig.webhook_channel_secret = mapConfig.get("webhook.channel_secret");
        systemConfig.webhook_channel_token = mapConfig.get("webhook.channel_token");
        systemConfig.webhook_session_expire_time = mapConfig.get("webhook.session_expire_time");
        systemConfig.webhook_temp_path = mapConfig.get("webhook.temp_path");
        systemConfig.webhook_audio_type = mapConfig.get("webhook.audio_type");
        systemConfig.webhook_audio_lang = mapConfig.get("webhook.audio_lang");
        systemConfig.webhook_line_sticker_url = mapConfig.get("webhook.line_sticker_url");
        systemConfig.webhook_keyword_mapping_topureconnect = mapConfig.get("webhook.keyword_mapping_topureconnect");
        systemConfig.webhook_agent_respone_timeout = mapConfig.get("webhook.agent_respone_timeout");
        systemConfig.webhook_agent_respone_default_text = mapConfig.get("webhook.agent_respone_default_text");
        //InterfaceDialogFlow
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.InterfaceLine);
        systemConfig.dialogflow_projectID = mapConfig.get("dialogflow.projectID");
        systemConfig.dialogflow_sessionID = mapConfig.get("dialogflow.sessionID");
        systemConfig.dialogflow_sessionID = mapConfig.get("dialogflow.AudioEncoding");
        systemConfig.dialogflow_SampleRateHertz = mapConfig.get("dialogflow.SampleRateHertz");
        systemConfig.dialogflow_GOOGLE_APPLICATION_CREDENTIALS = mapConfig.get("dialogflow.GOOGLE_APPLICATION_CREDENTIALS");

        //InterfaceMessenger
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.InterfaceMessenger);
        systemConfig.facebook_messenger_AccessToken = mapConfig.get("facebook.messenger.AccessToken");
        systemConfig.facebook_messenger_VerifyToken = mapConfig.get("facebook.messenger.VerifyToken");
        systemConfig.facebook_messenger_PageID = mapConfig.get("facebook.messenger.PageID");
        systemConfig.facebook_messenger_webhook_url = mapConfig.get("facebook.messenger.webhook_url");
        //InterfaceWhatsapp
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.InterfaceWhatsapp);
        systemConfig.whatsapp_timeout = mapConfig.get("whatsapp.timeout");
        systemConfig.whatsapp_mapping_backend = mapConfig.get("whatsapp.mapping_backend");
        //InterfacePureConnect
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.InterfacePureConnect);
        systemConfig.iwt_application_name = mapConfig.get("iwt.application.name");
        systemConfig.iwt_primary_api = mapConfig.get("iwt.primary_api");
        systemConfig.iwt_backup_api = mapConfig.get("iwt.backup_api");
        systemConfig.iwt_cert_file = mapConfig.get("iwt.cert_file");
        systemConfig.iwt_skip_auto_agent_ack = mapConfig.get("iwt.skip_auto_agent_ack");
        systemConfig.iwt_username = mapConfig.get("iwt.username");
        systemConfig.iwt_password = mapConfig.get("iwt.password");
        systemConfig.iwt_chat_queuename = mapConfig.get("iwt.chat.queuename");
        systemConfig.iwt_chat_queuename = mapConfig.get("iwt.chat.message.poll_interval");
        systemConfig.iwt_ftp_protocal = mapConfig.get("iwt.ftp_protocal");
        systemConfig.iwt_ftp_server = mapConfig.get("iwt.ftp_server");
        systemConfig.iwt_ftp_port = mapConfig.get("iwt.ftp_port");
        systemConfig.iwt_ftp_user = mapConfig.get("iwt.ftp_user");
        systemConfig.iwt_ftp_pwd = mapConfig.get("iwt.ftp_pwd");
        systemConfig.iwt_ftp_path = mapConfig.get("iwt.ftp_path");

        //InterfaceRabbitMQ
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.InterfaceRabbitMQ);
        systemConfig.amqp_url = mapConfig.get("amqp.url");
        systemConfig.amqp_qname = mapConfig.get("amqp.qname");
        systemConfig.amqp_exchange = mapConfig.get("amqp.exchange");
        systemConfig.amqp_routing_key = mapConfig.get("amqp.routing_key");
        systemConfig.amqp_content_type = mapConfig.get("amqp.content_type");
        systemConfig.amqp_rpc_timeout = mapConfig.get("amqp.rpc_timeout");
        //AsynchronizeWorker
        mapConfig = this.loadMapConfig(mapConfig, allsystemconfig.AsynchronizeWorker);
        systemConfig.background_queue_size = mapConfig.get("background.queue.size");
        systemConfig.background_worker_size = mapConfig.get("background.worker.size");

        this.isTblLoading = false;
        this.dataChange.next(Array(systemConfig));
      },
      (error: HttpErrorResponse) => {
        this.isTblLoading = false;
        console.log(error.name + ' ' + error.message);
      }
    );
  }

  updateSystemConfig(systemConfig: Systemconfig): void {
    this.dialogData = systemConfig;
  }

  loadMapConfig( mapConfig: Map<string,string>, params: Parameter[]): any {
    for (var param of params){
      mapConfig.set(param.name, param.value);
    }
     return mapConfig;
  }
}


