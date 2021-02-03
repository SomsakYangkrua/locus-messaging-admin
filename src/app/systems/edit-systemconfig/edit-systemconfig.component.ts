import { SystemsconfigService } from './../systemsconfig.service';
import { Systemconfig } from './../systemconfig.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-systemconfig',
  templateUrl: './edit-systemconfig.component.html',
  styleUrls: ['./edit-systemconfig.component.sass']
})
export class EditSystemconfigComponent implements OnInit {
  systemsconfig = {
      id: '0',
      mode: 'development',
      auth_key: '1234567890',
      auth_Realm: 'test_dev',
      admin_username: 'admin',
      admin_password: '123',
      db_type: 'mysql',
      db_str_cnn: 'root:qazwsx@tcp(localhost:3306)/auth?charset=utf8',
      in_memory_db_server: '192.168.10.188:6379',
      in_memory_db_database: '8',
      in_memory_db_pwd: '',
      in_memory_db_expiration: '0',
      in_memory_db_PoolSize: '100',
      in_memory_db_Read_WriteTimeout: '15',
      in_memory_db_MinIdleConns: '5',
      in_memory_db_MaxConnAge: '10',
      in_memory_db_PoolTimeout: '500',
      host: '192.168.101.28:15000',
      bind_tls: 'false',
      key_file: '/etc/letsencrypt/live/infra-dev.locus.co.th/privkey.pem',
      cert_file: '/etc/letsencrypt/live/infra-dev.locus.co.th/fullchain.pem',
      udp_bind_addr: '127.0.0.1:1234',
      proxyrevers_host: 'http://192.168.22.129:15000/api/v1/messenger-to-dialogflow',
      webhook_url: 'https://infra-dev.locus.co.th:15000/api/v1/reverse-proxy',
      webhook_channel_secret: 'c85b03b69e02cdd5b58c712b23fbe0df',
      webhook_channel_token: 'xQy+RPXJ9yQqT6BAOSe7YFjhyZvuyHJtDInGcmm8OFO8LQwDytJr5elpHsyckPEiUm/HkI58/C9IWG7Afw+IgqZVW7ueVfIOSOf8EvM2x306Nvy1jcBJZmifBWFf8tEw/X97E5Ij5cOZclfL0wpeYgdB04t89/1O/w1cDnyilFU=',
      webhook_session_expire_time: '600',
      webhook_temp_path: './temp',
      webhook_audio_type: 'wav',
      webhook_audio_lang: 'th',
      webhook_line_sticker_url: 'https://stickershop.line-scdn.net/stickershop/v1/sticker/@sticker-id/android/sticker.png',
      webhook_keyword_mapping_topureconnect: '0:contact agent',
      webhook_agent_respone_timeout: '27',
      webhook_agent_respone_default_text: 'Right now agent is busy if you would like to continue please say again?',
      dialogflow_projectID: 'checkorderstatus-vkvj',
      dialogflow_sessionID: '',
      dialogflow_AudioEncoding: '1',
      dialogflow_SampleRateHertz: '16000',
      dialogflow_GOOGLE_APPLICATION_CREDENTIALS: 'D:\\WorkSpace\\GoWorkspace\\src\\line-integration\\application_default_credentials.json',
      facebook_messenger_AccessToken: 'EAAGQEDPdYzwBABRZAqS31MMPiAYW4SaZBD5RRwdBx2KKCG7qBQCPbjlU2Pb3K3uUTGTImaL4oZC6xwGal94GjdljYZB9ufwm9YsAQokyw2ZCH4znG6hZA3LKFwK2vN774DJr5ALLgJ4YD4lvlZCFagJoWzpUaj3jZBwNCgmoCDbFUwjSR4ubTSBz',
      facebook_messenger_VerifyToken: '1748176972',
      facebook_messenger_PageID: '150657113154587',
      facebook_messenger_webhook_url: 'http://192.168.22.129:15000/api/v1/messenger-to-dialogflow',
      whatsapp_timeout: '60',
      whatsapp_mapping_backend: 'dialogflow',
      iwt_application_name: 'Line-Integration',
      iwt_primary_api: 'http://192.168.20.190/I3Root/Server1/websvcs/',
      iwt_backup_api: 'http://192.168.20.190/I3Root/Server1/websvcs/',
      iwt_cert_file: '',
      iwt_skip_auto_agent_ack: '1',
      iwt_username: 'cicadmin',
      iwt_password: '1234',
      iwt_chat_queuename: 'Marketing',
      iwt_chat_message_poll_interval: '2',
      iwt_ftp_protocal: 'ftp',
      iwt_ftp_server: '192.168.10.101',
      iwt_ftp_port: '21',
      iwt_ftp_user: 'botadmin',
      iwt_ftp_pwd: 'Locus@123',
      iwt_ftp_path: '/',
      background_queue_size: '1024',
      background_worker_size: '25',
      amqp_url: 'amqp://locus:Locus@123@192.168.10.188:5672/',
      amqp_qname: 'test-queue',
      amqp_exchange: 'events',
      amqp_routing_key: 'test-queue',
      amqp_content_type: 'application/json',
      amqp_rpc_timeout: '5'
  };

  //===========
  tabs = [];
  selected = new FormControl(0);
  editSystemconfigForm: FormGroup;

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  constructor(
    private fb: FormBuilder,
    public httpClient: HttpClient,
    //public systemsconfigService: SystemsconfigService
    )
  {
    this.editSystemconfigForm = this.createSystemconfigForm();
    this.addTab(true);
  }

  ngOnInit(): void {
    // this.systemsconfigService.getSystemConfig()
    // .subscribe((data) => {
    //   this.systemsconfigService = data.result[0];
    // });

    this.httpClient.get<any>(`${environment.apiUrl}/api/v1/systems/config/list`)
    .subscribe((data)=>{
      this.systemsconfig = data.result[0];
    });

  }

  onSubmit() {
    //console.log('Form Value', this.userProfileForm.value);
  }

  createSystemconfigForm(): FormGroup {
    return this.fb.group({
      mode: 'Dev',
      auth_key: [this.systemsconfig.auth_key || ''],
      auth_Realm: [this.systemsconfig.auth_key || ''],
      admin_username: [this.systemsconfig.admin_username || ''],
      admin_password: [this.systemsconfig.admin_password || ''],

      db_type: [this.systemsconfig.db_type || ''],
      db_str_cnn: [this.systemsconfig.db_str_cnn || ''],
      in_memory_db_server: [this.systemsconfig.in_memory_db_server || ''],
      in_memory_db_database: [this.systemsconfig.in_memory_db_database || ''],
      in_memory_db_pwd: [this.systemsconfig.in_memory_db_pwd || ''],
      in_memory_db_expiration: [this.systemsconfig.in_memory_db_expiration || ''],
      in_memory_db_PoolSize: [this.systemsconfig.in_memory_db_PoolSize || ''],
      in_memory_db_Read_WriteTimeout: [this.systemsconfig.in_memory_db_Read_WriteTimeout || ''],
      in_memory_db_MinIdleConns: [this.systemsconfig.in_memory_db_MinIdleConns || ''],
      in_memory_db_MaxConnAge: [this.systemsconfig.in_memory_db_MaxConnAge || ''],
      in_memory_db_PoolTimeout: [this.systemsconfig.in_memory_db_PoolTimeout || ''],

      host: [this.systemsconfig.host || ''],
      bind_tls: [this.systemsconfig.bind_tls || ''],
      key_file: [this.systemsconfig.key_file || ''],
      cert_file: [this.systemsconfig.cert_file || ''],
      udp_bind_addr: [this.systemsconfig.udp_bind_addr || ''],

      proxyrevers_host: [this.systemsconfig.proxyrevers_host || ''],

      webhook_url: [this.systemsconfig.webhook_url || ''],
      webhook_channel_secret: [this.systemsconfig.webhook_channel_secret || ''],
      webhook_channel_token: [this.systemsconfig.webhook_channel_token || ''],
      webhook_session_expire_time: [this.systemsconfig.webhook_session_expire_time || ''],
      webhook_temp_path: [this.systemsconfig.webhook_temp_path || ''],
      webhook_audio_type: [this.systemsconfig.webhook_audio_type],
      webhook_audio_lang: [this.systemsconfig.webhook_audio_type || ''],
      webhook_line_sticker_url: [this.systemsconfig.webhook_line_sticker_url || ''],
      webhook_keyword_mapping_topureconnect: [this.systemsconfig.webhook_keyword_mapping_topureconnect || ''],
      webhook_agent_respone_timeout: [this.systemsconfig.webhook_agent_respone_timeout || ''],
      webhook_agent_respone_default_text: [this.systemsconfig.webhook_agent_respone_timeout || ''],

      dialogflow_projectID: [this.systemsconfig.dialogflow_projectID || ''],
      dialogflow_sessionID: [this.systemsconfig.dialogflow_sessionID || ''],
      dialogflow_AudioEncoding: [this.systemsconfig.dialogflow_sessionID || ''],
      dialogflow_SampleRateHertz: [this.systemsconfig.dialogflow_SampleRateHertz || ''],
      dialogflow_GOOGLE_APPLICATION_CREDENTIALS: [this.systemsconfig.dialogflow_GOOGLE_APPLICATION_CREDENTIALS || ''],

      facebook_messenger_AccessToken: [this.systemsconfig.facebook_messenger_AccessToken || ''],
      facebook_messenger_VerifyToken: [this.systemsconfig.facebook_messenger_VerifyToken || ''],
      facebook_messenger_PageID: [this.systemsconfig.facebook_messenger_PageID || ''],
      facebook_messenger_webhook_url: [this.systemsconfig.facebook_messenger_webhook_url || ''],

      whatsapp_timeout: [this.systemsconfig.whatsapp_timeout],
      whatsapp_mapping_backend: [this.systemsconfig.whatsapp_timeout || ''],

      iwt_application_name: [this.systemsconfig.iwt_application_name || ''],
      iwt_primary_api: [this.systemsconfig.iwt_primary_api || ''],
      iwt_backup_api: [this.systemsconfig.iwt_backup_api || ''],
      iwt_cert_file: [this.systemsconfig.iwt_cert_file || ''],
      iwt_skip_auto_agent_ack: [this.systemsconfig.iwt_skip_auto_agent_ack || ''],
      iwt_username: [this.systemsconfig.iwt_username || ''],
      iwt_password: [this.systemsconfig.iwt_password || ''],
      iwt_chat_queuename: [this.systemsconfig.iwt_chat_queuename || ''],
      iwt_chat_message_poll_interval: [this.systemsconfig.iwt_chat_message_poll_interval || ''],
      iwt_ftp_protocal: [this.systemsconfig.iwt_ftp_protocal || ''],
      iwt_ftp_server: [this.systemsconfig.iwt_ftp_server || ''],
      iwt_ftp_port: [this.systemsconfig.iwt_ftp_port || ''],
      iwt_ftp_user: [this.systemsconfig.iwt_ftp_user || ''],
      iwt_ftp_pwd: [this.systemsconfig.iwt_ftp_pwd || ''],
      iwt_ftp_path: [this.systemsconfig.iwt_ftp_path || ''],

      amqp_url: [this.systemsconfig.amqp_url  || ''],
      amqp_qname: [this.systemsconfig.amqp_qname || ''],
      amqp_exchange: [this.systemsconfig.amqp_exchange || ''],
      amqp_routing_key: [this.systemsconfig.amqp_routing_key || ''],
      amqp_content_type: [this.systemsconfig.amqp_content_type || ''],
      amqp_rpc_timeout: [this.systemsconfig.amqp_rpc_timeout || ''],
      background_queue_size: [this.systemsconfig.background_queue_size || ''],
      background_worker_size: [this.systemsconfig.background_worker_size || ''],

    });
  }


}
