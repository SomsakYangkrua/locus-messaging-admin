import { SystemsconfigService } from './../systemsconfig.service';
import { Systemconfig } from './../systemconfig.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-systemconfig',
  templateUrl: './edit-systemconfig.component.html',
  styleUrls: ['./edit-systemconfig.component.sass']
})
export class EditSystemconfigComponent implements OnInit {
  tabs = [];
  selected = new FormControl(0);
  systemsconfig: Systemconfig = new Systemconfig();
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

  constructor(private fb: FormBuilder,
    public httpClient: HttpClient,
    public systemsconfigService: SystemsconfigService)
  {
    this.editSystemconfigForm = this.createSystemconfigForm();
    this.addTab(true);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    //console.log('Form Value', this.userProfileForm.value);
  }

  createSystemconfigForm(): FormGroup {
    return this.fb.group({
      mode: 'Dev',
      auth_key: [this.systemsconfig.auth_key],
      auth_Realm: [this.systemsconfig.auth_key],
      admin_username: [this.systemsconfig.admin_username],
      admin_password: [this.systemsconfig.admin_password],

      db_type: [this.systemsconfig.db_type],
      db_str_cnn: [this.systemsconfig.db_str_cnn],
      in_memory_db_server: [this.systemsconfig.in_memory_db_server],
      in_memory_db_database: [this.systemsconfig.in_memory_db_database],
      in_memory_db_pwd: [this.systemsconfig.in_memory_db_pwd],
      in_memory_db_expiration: [this.systemsconfig.in_memory_db_expiration],
      in_memory_db_PoolSize: [this.systemsconfig.in_memory_db_PoolSize],
      in_memory_db_Read_WriteTimeout: [this.systemsconfig.in_memory_db_Read_WriteTimeout],
      in_memory_db_MinIdleConns: [this.systemsconfig.in_memory_db_MinIdleConns],
      in_memory_db_MaxConnAge: [this.systemsconfig.in_memory_db_MaxConnAge],
      in_memory_db_PoolTimeout: [this.systemsconfig.in_memory_db_PoolTimeout],

      host: [this.systemsconfig.host],
      bind_tls: [this.systemsconfig.bind_tls],
      key_file: [this.systemsconfig.key_file],
      cert_file: [this.systemsconfig.cert_file],
      udp_bind_addr: [this.systemsconfig.udp_bind_addr],

      proxyrevers_host: [this.systemsconfig.proxyrevers_host],

      webhook_url: [this.systemsconfig.webhook_url],
      webhook_channel_secret: [this.systemsconfig.webhook_channel_secret],
      webhook_channel_token: [this.systemsconfig.webhook_channel_token],
      webhook_session_expire_time: [this.systemsconfig.webhook_session_expire_time],
      webhook_temp_path: [this.systemsconfig.webhook_temp_path],
      webhook_audio_type: [this.systemsconfig.webhook_audio_type],
      webhook_audio_lang: [this.systemsconfig.webhook_audio_type],
      webhook_line_sticker_url: [this.systemsconfig.webhook_line_sticker_url],
      webhook_keyword_mapping_topureconnect: [this.systemsconfig.webhook_keyword_mapping_topureconnect],
      webhook_agent_respone_timeout: [this.systemsconfig.webhook_agent_respone_timeout],
      webhook_agent_respone_default_text: [this.systemsconfig.webhook_agent_respone_timeout],

      dialogflow_projectID: [this.systemsconfig.dialogflow_projectID],
      dialogflow_sessionID: [this.systemsconfig.dialogflow_sessionID],
      dialogflow_AudioEncoding: [this.systemsconfig.dialogflow_sessionID],
      dialogflow_SampleRateHertz: [this.systemsconfig.dialogflow_SampleRateHertz],
      dialogflow_GOOGLE_APPLICATION_CREDENTIALS: [this.systemsconfig.dialogflow_GOOGLE_APPLICATION_CREDENTIALS],

      facebook_messenger_AccessToken: [this.systemsconfig.facebook_messenger_AccessToken],
      facebook_messenger_VerifyToken: [this.systemsconfig.facebook_messenger_VerifyToken],
      facebook_messenger_PageID: [this.systemsconfig.facebook_messenger_PageID],
      facebook_messenger_webhook_url: [this.systemsconfig.facebook_messenger_webhook_url],

      whatsapp_timeout: [this.systemsconfig.whatsapp_timeout],
      whatsapp_mapping_backend: [this.systemsconfig.whatsapp_timeout],

      iwt_application_name: [this.systemsconfig.iwt_application_name],
      iwt_primary_api: [this.systemsconfig.iwt_primary_api],
      iwt_backup_api: [this.systemsconfig.iwt_backup_api],
      iwt_cert_file: [this.systemsconfig.iwt_cert_file],
      iwt_skip_auto_agent_ack: [this.systemsconfig.iwt_skip_auto_agent_ack],
      iwt_username: [this.systemsconfig.iwt_username],
      iwt_password: [this.systemsconfig.iwt_password],
      iwt_chat_queuename: [this.systemsconfig.iwt_chat_queuename],
      iwt_chat_message_poll_interval: [this.systemsconfig.iwt_chat_message_poll_interval],
      iwt_ftp_protocal: [this.systemsconfig.iwt_ftp_protocal],
      iwt_ftp_server: [this.systemsconfig.iwt_ftp_server],
      iwt_ftp_port: [this.systemsconfig.iwt_ftp_port],
      iwt_ftp_user: [this.systemsconfig.iwt_ftp_user],
      iwt_ftp_pwd: [this.systemsconfig.iwt_ftp_pwd],
      iwt_ftp_path: [this.systemsconfig.iwt_ftp_path],

      amqp_url: [this.systemsconfig.amqp_url],
      amqp_qname: [this.systemsconfig.amqp_qname],
      amqp_exchange: [this.systemsconfig.amqp_exchange],
      amqp_routing_key: [this.systemsconfig.amqp_routing_key],
      amqp_content_type: [this.systemsconfig.amqp_content_type],
      amqp_rpc_timeout: [this.systemsconfig.amqp_rpc_timeout],
      background_queue_size: [this.systemsconfig.background_queue_size],
      background_worker_size: [this.systemsconfig.background_worker_size],

    });
  }


}
