import { Module } from '@nestjs/common'
import { MongooseModule } from 'modules/notifications/domain/entities/node_modules/@nestjs/mongoose'

import {
  NotificationSchema,
  Notification
} from './domain/entities/notification'
import { NotificationsRepository } from './notifications.repository'
import { NotificationsService } from './notifications.service'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Notification.name,
        schema: NotificationSchema
      }
    ])
  ],
  providers: [NotificationsService, NotificationsRepository],
  exports: [NotificationsService]
})
export class NotificationsModule {}
