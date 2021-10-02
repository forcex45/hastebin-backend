import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paste, PasteDocument } from '../paste/schemas/paste.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Paste.name) private readonly model: Model<PasteDocument>,
  ) {}

  async getDeleteds() {
    return await this.model.find({ deleted: true }).then(async (_res) => {
      return {
        succes: true,
        _res,
      };
    });
  }

  async getReports() {
    return await this.model.find({ reported: true }).then(async (_res) => {
      return {
        succes: true,
        _res,
      };
    });
  }
}
