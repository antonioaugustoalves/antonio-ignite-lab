import { Injectable } from "@nestjs/common";
import { Notification } from "src/application/entidades/notfication";
import { NotificationsRepository } from "src/application/repositories/notifications-repository";
import {PrismaService} from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(
        private prismaService: PrismaService
    ){}
    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data:{
                content: notification.content.value,
                category: notification.category,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                createdAt: notification.createdAt,
                id: notification.id
            }
        });
    }

}