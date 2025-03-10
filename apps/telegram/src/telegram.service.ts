import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const TelegramBot = require('node-telegram-bot-api');

@Injectable()
export class TelegramService {
  private botToken = process.env.TELEGRAM_TOKEN;
  private apiUrl = `https://api.telegram.org/bot${this.botToken}`;
  private bot = new TelegramBot(this.botToken, { polling: true });
  private paidUsers = new Map();
  constructor() {
    this.handlePreCheckoutQuery();
    this.handleSuccessfulPayment();
  }
  private handlePreCheckoutQuery() {
    this.bot.on('pre_checkout_query', (query) => {
      this.bot.answerPreCheckoutQuery(query.id, true).catch(() => {
        console.error('answerPreCheckoutQuery failed');
      });
    });
  }
  private handleSuccessfulPayment() {
    this.bot.on('message', (msg) => {
      if (msg.successful_payment) {
        const userId = msg.from.id;
        this.paidUsers.set(
          userId,
          msg.successful_payment.telegram_payment_charge_id,
        );
      }
    });
  }
  async createInvoiceLink(
    payload: string,
    currency: string,
    prices: { label: string; amount: number }[],
  ) {
    try {
      const { label, amount } = prices[0];
      const title = `item for ${amount}`;
      const description = `Buying an item for ${amount} stars.`;
      const invoiceLink = await this.bot.createInvoiceLink(
        title,
        description,
        payload,
        this.botToken,
        currency,
        prices,
      );
      return invoiceLink;
    } catch (error) {
      console.error('Error creating invoice link:', error);
      throw error;
    }
  }
  async setWebhook() {
    const webhookUrl = process.env.TELEGRAM_WEBHOOK_URL;
    try {
      await axios.post(`${this.apiUrl}/setWebhook`, {
        url: webhookUrl,
      });
      console.log('Webhook set successfully');
    } catch (error) {
      console.error('Error setting webhook:', error);
    }
  }
}
