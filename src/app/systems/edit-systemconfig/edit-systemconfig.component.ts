import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Systemconfig } from '../systemconfig.model';
@Component({
  selector: 'app-edit-systemconfig',
  templateUrl: './edit-systemconfig.component.html',
  styleUrls: ['./edit-systemconfig.component.sass'],
})

export class EditSystemconfigComponent{
  tabs = ['First', 'Second'];
  editSystemconfigForm: FormGroup;
  formdata = new Systemconfig()

  selected = new FormControl(0);
  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New');
    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }
  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }


  constructor(private fb: FormBuilder) {
    this.editSystemconfigForm = this.createUserForm();
    this.addTab(true)
  }

  onSubmit() {
    console.log('Form Value', this.editSystemconfigForm.value);
  }

  createUserForm(): FormGroup {
    return this.fb.group({
      // host: [this.formdata.host],
      // bind_tls: [this.formdata.bind_tls],
      // key_file: [
      //   this.formdata.key_file,
      //   [Validators.required, Validators.pattern('[a-zA-Z]+')],
      // ],
      // cert_file: [
      //   this.formdata.cert_file,
      //   [Validators.required, Validators.pattern('[a-zA-Z]+')],
      // ],
      mode: [this.formdata.mode],
      auth_key: [this.formdata.auth_key],
      auth_Realm: [this.formdata.auth_key],
      admin_username: [this.formdata.admin_username],
      admin_password: [this.formdata.admin_password],

      db_type: [this.formdata.db_type],
      db_str_cnn: [this.formdata.db_str_cnn],
      in_memory_db_server: [this.formdata.in_memory_db_server],
      in_memory_db_database: [this.formdata.in_memory_db_database],
      in_memory_db_pwd: [this.formdata.in_memory_db_pwd],
      in_memory_db_expiration: [this.formdata.in_memory_db_expiration],
      in_memory_db_PoolSize: [this.formdata.in_memory_db_PoolSize],
      in_memory_db_Read_WriteTimeout: [this.formdata.in_memory_db_Read_WriteTimeout],
      in_memory_db_MinIdleConns: [this.formdata.in_memory_db_MinIdleConns],
      in_memory_db_MaxConnAge: [this.formdata.in_memory_db_MaxConnAge],
      in_memory_db_PoolTimeout: [this.formdata.in_memory_db_PoolTimeout],

      host: [this.formdata.host],
      bind_tls: [this.formdata.bind_tls],
      key_file: [this.formdata.key_file],
      cert_file: [this.formdata.cert_file],
      udp_bind_addr: [this.formdata.udp_bind_addr],

      proxyrevers_host: [this.formdata.proxyrevers_host],

      webhook_url: [this.formdata.webhook_url],
      webhook_channel_secret: [this.formdata.webhook_channel_secret],
      webhook_channel_token: [this.formdata.webhook_channel_token],
      webhook_session_expire_time: [this.formdata.webhook_session_expire_time],
      webhook_temp_path: [this.formdata.webhook_temp_path],
      webhook_audio_type: [this.formdata.webhook_audio_type],
      webhook_audio_lang: [this.formdata.webhook_audio_type],
      webhook_line_sticker_url: [this.formdata.webhook_line_sticker_url],
      webhook_keyword_mapping_topureconnect: [this.formdata.webhook_keyword_mapping_topureconnect],
      webhook_agent_respone_timeout: [this.formdata.webhook_agent_respone_timeout],
      webhook_agent_respone_default_text: [this.formdata.webhook_agent_respone_timeout],

      dialogflow_projectID: [this.formdata.dialogflow_projectID],
      dialogflow_sessionID: [this.formdata.dialogflow_sessionID],
      dialogflow_AudioEncoding: [this.formdata.dialogflow_sessionID],
      dialogflow_SampleRateHertz: [this.formdata.dialogflow_SampleRateHertz],
      dialogflow_GOOGLE_APPLICATION_CREDENTIALS: [this.formdata.dialogflow_GOOGLE_APPLICATION_CREDENTIALS],

      facebook_messenger_AccessToken: [this.formdata.facebook_messenger_AccessToken],
      facebook_messenger_VerifyToken: [this.formdata.facebook_messenger_VerifyToken],
      facebook_messenger_PageID: [this.formdata.facebook_messenger_PageID],
      facebook_messenger_webhook_url: [this.formdata.facebook_messenger_webhook_url],

      whatsapp_timeout: [this.formdata.whatsapp_timeout],
      whatsapp_mapping_backend: [this.formdata.whatsapp_timeout],

      iwt_application_name: [this.formdata.iwt_application_name],
      iwt_primary_api: [this.formdata.iwt_primary_api],
      iwt_backup_api: [this.formdata.iwt_backup_api],
      iwt_cert_file: [this.formdata.iwt_cert_file],
      iwt_skip_auto_agent_ack: [this.formdata.iwt_skip_auto_agent_ack],
      iwt_username: [this.formdata.iwt_username],
      iwt_password: [this.formdata.iwt_password],
      iwt_chat_queuename: [this.formdata.iwt_chat_queuename],
      iwt_chat_message_poll_interval: [this.formdata.iwt_chat_message_poll_interval],
      iwt_ftp_protocal: [this.formdata.iwt_ftp_protocal],
      iwt_ftp_server: [this.formdata.iwt_ftp_server],
      iwt_ftp_port: [this.formdata.iwt_ftp_port],
      iwt_ftp_user: [this.formdata.iwt_ftp_user],
      iwt_ftp_pwd: [this.formdata.iwt_ftp_pwd],
      iwt_ftp_path: [this.formdata.iwt_ftp_path],

      amqp_url: [this.formdata.amqp_url],
      amqp_qname: [this.formdata.amqp_qname],
      amqp_exchange: [this.formdata.amqp_exchange],
      amqp_routing_key: [this.formdata.amqp_routing_key],
      amqp_content_type: [this.formdata.amqp_content_type],
      amqp_rpc_timeout: [this.formdata.amqp_rpc_timeout],
      background_queue_size: [this.formdata.background_queue_size],
      background_worker_size: [this.formdata.background_worker_size],

    });
  }
}


