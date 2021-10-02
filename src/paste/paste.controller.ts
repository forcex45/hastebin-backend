import { Controller, Get, Body, Post, Param, Delete } from '@nestjs/common';
import { PasteService } from './paste.service';

@Controller('paste')
export class PasteController {
  constructor(private readonly pasteService: PasteService) {}

  @Post('create')
  create(
    @Body()
    data: {
      content: string;
      description: string;
      title: string;
    },
  ) {
    return this.pasteService.createPaste(data);
  }

  @Get('get/:id')
  findOne(@Param('id') id) {
    return this.pasteService.getPaste(id);
  }

  @Get('report/:id')
  report(@Param('id') id) {
    return this.pasteService.reportPaste(id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.pasteService.deletePaste(id);
  }

  @Post('admin/reports')
  reports(
    @Body()
    data: {
      username: string;
      password: string;
    },
  ) {
    return this.pasteService.getReports(data);
  }

  @Post('admin/deleteds')
  deleteds(
    @Body()
    data: {
      username: string;
      password: string;
    },
  ) {
    return this.pasteService.getDeletes(data);
  }
}
