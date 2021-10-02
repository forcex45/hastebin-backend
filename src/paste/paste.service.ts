import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Paste, PasteDocument } from './schemas/paste.schema';
import * as crs from 'create-random-string';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class PasteService {
  constructor(
    @InjectModel(Paste.name) private readonly model: Model<PasteDocument>,
  ) {}

  async createPaste(data) {
    if (data) {
      const description = data.description > 0 ? data.description : null;
      const id = crs(12);
      const title = data.title;
      const content = data.content;

      return await new this.model({
        content: content,
        id: id,
        description: description,
        owner: 'Forcex',
        title: title,
        reported: false,
        deleted: false,
      })
        .save()
        .then((_res) => {
          return {
            content: _res.content,
            description: _res.description,
            title: _res.title,
            id: _res.id,
            reported: _res.reported,
            owner: _res.owner,
          };
        });
    }
  }

  async getPaste(id) {
    if (id) {
      return await this.model
        .findOne({
          id: id,
        })
        .then((_res) => {
          if (_res && _res.deleted == false) {
            return {
              content: _res.content,
              description: _res.description,
              title: _res.content,
              owner: _res.owner,
              succes: true,
            };
          } else {
            return {
              succes: false,
            };
          }
        });
    }
  }

  async deletePaste(id) {
    if (id) {
      return await this.model.findOne({ id: id }).then(async (_res) => {
        if (_res) {
          _res.deleted = true;
          _res.save();
          return {
            succes: true,
          };
        } else {
          return {
            succes: false,
          };
        }
      });
    }
  }

  async reportPaste(id) {
    if (id) {
      return await this.model.findOne({ id: id }).then(async (_res) => {
        if (_res && _res.deleted == false) {
          _res.reported = true;
          _res.save();
          return {
            succes: true,
          };
        } else {
          return {
            succes: false,
          };
        }
      });
    }
  }
}
