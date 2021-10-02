import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminGuard } from './guards/admin.guard';
import { AdminUser } from './interfaces/admin.interface';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('deleted')
  @UseGuards(AdminGuard)
  getDeleteds(
 
  ) {
    return this.adminService.getDeleteds();
  }

  @Post('reported')
  @UseGuards(AdminGuard)
  getReports(
   

  ) {
    return this.adminService.getReports();
  }
}
