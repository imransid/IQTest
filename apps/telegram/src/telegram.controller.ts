import { Controller, Post, Body, Get } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
  getHello(): string {
    return 'Hello telegram..';
  }

  @Post('createInvoiceLink')
  async createInvoiceLink(
    @Body()
    body: {
      payload: string;
      currency: string;
      prices: { label: string; amount: number }[];
    },
  ) {
    const { payload, currency, prices } = body;
    try {
      const invoiceLink = await this.telegramService.createInvoiceLink(
        payload,
        currency,
        prices,
      );
      return { success: true, invoiceLink };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  @Post('webhook')
  async handleWebhook(@Body() body: any) {
    console.log('Webhook received:', body);
    // Handle webhook logic, like handling payment status or user commands
  }
}
