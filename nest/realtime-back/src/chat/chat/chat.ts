import { Injectable, Logger } from '@nestjs/common';
import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface MessageDto {
    room: string;
    nickname: string;
    message: string;
}

@WebSocketGateway(4020, { transports: ['websocket', 'polling'], cors: { origin: '*' } })
export class Chat {

    @WebSocketServer()
    server: Server;
    logger = new Logger();

    @SubscribeMessage('join')
    handleJoin(
        @MessageBody() room: string,
        @ConnectedSocket() Socket: Socket
    ): void {
        this.logger.warn(`Join Room : ${room}`);
        Socket.join(room);
    }

    @SubscribeMessage('send')
    handleSend(
        @MessageBody() messageDto: MessageDto
    ): void {
        const { room, message, nickname } = messageDto;
        this.logger.verbose(message);
        this.server.to(room).emit('receive', { nickname, message });
    }


}
